import { IScriptLoaderOptions } from './IScriptLoaderOptions';
import { ScriptLoader } from './dynamicScriptLoader';
import { DotNet } from  "@microsoft/dotnet-js-interop";

declare const grecaptcha: ReCaptchaV2.ReCaptcha;

/**
 * The parameters that can be used to render a captcha.
 */
export interface ICaptchaRenderParameters {
    /**
     * The container to render the captcha in. (Default: "recaptcha_container")
     */
     container?: string | HTMLElement;
     /**
      * The theme to use for the captcha. (Default: "dark")
      */
     theme?: "dark" | "light";
     /**
      * The size of the captcha to render. (Default: "compact")
      */
     size?: "compact" | "normal" | "invisible";
     /**
      * The tabindex of the captcha to render. (Default: 0)
      */
     tabindex?: number;
     /**
      * The badge location of the captcha to render. (Default: "bottomright")
      */
     badge?: "bottomright" | "bottomleft" | "inline";
};

/**
 * A simple utility that can be used to load a ReCaptcha script tag into your application.
 * This class also provides methods to execute and render a captcha.
 */
export class captchaLoader {
    private readonly _defaultScriptLoadingOptions: IScriptLoaderOptions = {
        isAsync: true,
        isDeferred: true,
        appendedTo: "head",
        maxRetries: 3,
        retryInterval: 100,
        id: "captchaLoader"
    };

    /**
     * Loads the captcha script with the provided site key, and an optional override for the default loading parameters.
     * @param siteKey - The provided site key
     * @param dotNetObjRef - A reference to the dotnet object that will be used to invoke the callback methods
     * @param loadingOptions - Optional parameters to override the default loading parameters
     */
    async loadAsync(siteKey: string, dotNetObjRef: DotNet.DotNetObject, loadingOptions?: IScriptLoaderOptions): Promise<void> {
        try{
        const scriptLoader = new ScriptLoader();

        const url = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;

        loadingOptions = { ...this._defaultScriptLoadingOptions, ...loadingOptions };

        await scriptLoader.loadScript(url, loadingOptions);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message: "try again later";
            console.error(`An error occurred while loading captcha.`);
            await dotNetObjRef.invokeMethodAsync("OnCaptchaError", errorMessage);    
        }
    }

    /**
     * Allows the caller to execute a captcha, with an optional action parameter.
     * The default action is "homepage"
     * @param dotNetObjRef - A reference to the dotnet object that will be used to invoke the callback methods
     * @param siteKey - The provided site key
     * @param action - Optional action parameter
     */
    async executeAsync(dotNetObjRef: DotNet.DotNetObject, siteKey: string, action?: string ): Promise<void> {
        try {          
            const response = await grecaptcha.execute(siteKey, {action: action || "homepage"});         
            await dotNetObjRef.invokeMethodAsync("OnCaptchaExecuted", response);
        
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message: "try again later";
            console.error(`An error occurred while executing captcha.`);
            await dotNetObjRef.invokeMethodAsync("OnCaptchaError", errorMessage);
        }
    }

    /**
     * Allows the caller to render a captcha in a specific container, with the option to override the default parameters.
     * A default container is used if none is specified - "recaptcha_container"
     * @param siteKey - The provided site key
     * @param dotNetObjRef - A reference to the dotnet object that will be used to invoke the callback methods
     * @param renderParameters - Optional parameters to override the default rendering parameters
     */
    async renderAsync(siteKey: string, dotNetObjRef: DotNet.DotNetObject, renderParameters?: ICaptchaRenderParameters): Promise<void> {
        
        const transformedParameters: ReCaptchaV2.Parameters = {
            sitekey: siteKey,
            theme: renderParameters?.theme || "dark",
            size: renderParameters?.size || "compact",
            tabindex: renderParameters?.tabindex || 0,
            badge: renderParameters?.badge || "bottomright",
            callback: async (response) => {
               await dotNetObjRef.invokeMethodAsync("OnCaptchaResolved", response);
            },
            "expired-callback": async () => {
                await dotNetObjRef.invokeMethodAsync("OnCaptchaExpired");
            },
            "error-callback": async () => {
                await dotNetObjRef.invokeMethodAsync("OnCaptchaError");
            }
        };

        let widgetId = 0;

        grecaptcha.ready(() => {
            const actualizedContainer = renderParameters?.container || "recaptcha_container";
           
        widgetId = grecaptcha.render(actualizedContainer, transformedParameters);
    });
    
    await dotNetObjRef.invokeMethodAsync("OnCaptchaRendered", widgetId);  
    }
}