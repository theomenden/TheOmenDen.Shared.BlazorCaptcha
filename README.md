 # The Omen Den's Captcha Loader
 ## A simple Typescript Implementation for ReCaptcha Version 3 meant for use in a Blazor Application

## How to use this:
### The Script Loader
You should be able to load any script in your blazor application using the `window.scriptLoader.loadScript` method in a method that occurs in/after the OnAfterRender lifecycle method. This is due to the way that Blazor works for having access to the javascript interop. 

#### LoadScript
```javascript
     * Loads a script from a given url
     *
     * @param {string} url - The url of the script to load
     * @param {IScriptLoaderOptions} options - Options for the script loader
     * @returns {Promise<void>}
     *
     * @throws {Error}
     * Thrown when the script fails to load after the max retries
     *
     * @public 
```
### The Captcha Loader
You should be able to render and execute your CAPTCHA via a provided sitekey - however the evaulation and verification of the CAPTCHA are left to the application. We recommend using the verify endpoint to do this. 

#### ICatpchaRenderParameters
These should allow you to specify the way your captcha is rendered in the DOM. 
```javascript
interface ICaptchaRenderParameters {
      /*The container to render the captcha in
      (Default: "recaptcha_container") */
          container?: string;
     /* The theme to use for the captcha. (Default: "dark")*/
     theme?: "dark" | "light";
     /* The size of the captcha to render. (Default: "compact")*/
     size?: "compact" | "normal" | "invisible";
     /* The tabindex of the captcha to render. (Default: 0)*/
     tabindex?: number;
     /* The badge location of the captcha to render. (Default: "bottomright")*/
     badge?: "bottomright" | "bottomleft" | "inline";
}
```

As far as methods go - there are a few attached to the captchaLoader class itself - 

#### loadAsync
This method will load the captcha script based on the provided sitekey and loading options. This also requires a callback method to be created on the C# side called `OnCaptchaError` that accepts a string as a parameter. 
``` javascript
    /**
     * Loads the captcha script with the provided site key, and an optional override for the default loading parameters.
     * @param siteKey - The provided site key
     * @param dotNetObjRef - A reference to the dotnet object that will be used to invoke the callback methods
     * @param loadingOptions - Optional parameters to override the default loading parameters
     */
    async loadAsync(siteKey: string, dotNetObjRef: DotNet.DotNetObject, loadingOptions?: IScriptLoaderOptions): Promise<void> {...}
```
#### executeAsync
``` javascript
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
```
#### renderAsync

``` javascript
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
```
<details>
<summary>
Credits to the following:
</summary>
    <ul> 
    <li><a href="https://github.com/abinnovision/recaptcha-v3/tree/master" target="blank">Recaptcha V3</a></li>
    <li>Google for developing Recaptcha</li>
    <li>Microsoft for the DotNet Interop</li>
   </ul>
</details>