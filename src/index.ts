import { captchaLoader } from "./captchaLoader";
import { ScriptLoader } from "./dynamicScriptLoader";

declare global {
    interface Window {
        scriptLoader: ScriptLoader;
        captchaLoader: captchaLoader;
    }
}

window.scriptLoader = new ScriptLoader();
window.captchaLoader = new captchaLoader();