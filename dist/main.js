(()=>{"use strict";var e={572:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.captchaLoader=void 0;const a=r(577);t.captchaLoader=class{_defaultScriptLoadingOptions={isAsync:!0,isDeferred:!0,appendedTo:"head",maxRetries:3,retryInterval:100,id:"captchaLoader"};async loadAsync(e,t,r){try{const t=new a.ScriptLoader,o=`https://www.google.com/recaptcha/api.js?render=${e}`;r={...this._defaultScriptLoadingOptions,...r},await t.loadScript(o,r)}catch(e){const r=e instanceof Error?e.message:"try again later";console.error("An error occurred while loading captcha."),await t.invokeMethodAsync("OnCaptchaError",r)}}async executeAsync(e,t,r){try{const a=await grecaptcha.execute(t,{action:r||"homepage"});await e.invokeMethodAsync("OnCaptchaExecuted",a)}catch(t){const r=t instanceof Error?t.message:"try again later";console.error("An error occurred while executing captcha."),await e.invokeMethodAsync("OnCaptchaError",r)}}async renderAsync(e,t,r){const a={sitekey:e,theme:r?.theme||"dark",size:r?.size||"compact",tabindex:r?.tabindex||0,badge:r?.badge||"bottomright",callback:async e=>{await t.invokeMethodAsync("OnCaptchaResolved",e)},"expired-callback":async()=>{await t.invokeMethodAsync("OnCaptchaExpired")},"error-callback":async()=>{await t.invokeMethodAsync("OnCaptchaError")}};let o=0;grecaptcha.ready((()=>{const e=r?.container||"recaptcha_container";o=grecaptcha.render(e,a)})),await t.invokeMethodAsync("OnCaptchaRendered",o)}}},577:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScriptLoader=void 0,t.ScriptLoader=class{_loadedScripts=new Set;_targetElement;constructor(){this._targetElement=document.head}async loadScript(e,t={}){const r=t.maxRetries||3,a=t.retryInterval||25;if(this.isScriptLoaded(e,t.id))return void this.logOutResult("Script Already Loaded");let o=0;for(;o<=r;)try{return void await this.loadScriptAttempt(e,t)}catch(e){if(o>=r)throw this.logOutError("Script Failed To Load after retries"),e;o++,this.logOutError(`Script Failed To Load. Retrying... (${o}/${r})`),await new Promise((e=>setTimeout(e,a)))}}async loadScriptAttempt(e,t){return new Promise(((r,a)=>{const o=document.createElement("script");o.src=e,o.onload=()=>{this._loadedScripts.add(e+(t.id||"")),this.logOutResult("Script Loaded successfully"),r()},o.onerror=()=>{a(new Error("Script failed to load"))},this.setScriptAttributes(o,t),this.getTargetElement(t.appendedTo).appendChild(o)}))}setScriptAttributes(e,t){e.type="text/javascript",e.defer=t.isDeferred||!1,e.async=t.isAsync||!1,e.id=t.id||""}getTargetElement(e){return"head"===e?this._targetElement:document.body}isScriptLoaded(e,t){const r=e+(t||"");return this._loadedScripts.has(r)}logOutResult(e){console.info(`[ScriptLoader]: ${e}`)}logOutError(e){console.error(`[ScriptLoader]: ${e}`)}}}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,r),c.exports}(()=>{const e=r(572),t=r(577);window.scriptLoader=new t.ScriptLoader,window.captchaLoader=new e.captchaLoader})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmxCLEVBQVExQyxZQUN0QzZELFlBQVlSLEVBQU8sR0FFekMsQ0FHUU0sb0JBQW9CTixFQUEyQlgsR0FDbkRXLEVBQU9TLEtBQU8sa0JBQ2RULEVBQU9VLE1BQVFyQixFQUFRM0MsYUFBYyxFQUNyQ3NELEVBQU9qRCxNQUFRc0MsRUFBUTVDLFVBQVcsRUFDbEN1RCxFQUFPbEQsR0FBS3VDLEVBQVF2QyxJQUFNLEVBQzlCLENBRVF5RCxpQkFBaUJJLEdBQ3JCLE1BQW9CLFNBQWJBLEVBQXNCckQsS0FBSzJCLGVBQWlCRSxTQUFTeUIsSUFDaEUsQ0FFUXJCLGVBQWVsQyxFQUFhUCxHQUNoQyxNQUFNK0QsRUFBWXhELEdBQU9QLEdBQU0sSUFDL0IsT0FBT1EsS0FBS3lCLGVBQWUrQixJQUFJRCxFQUNuQyxDQUVRckIsYUFBYTdCLEdBQ2pCQyxRQUFRbUQsS0FBSyxtQkFBbUJwRCxJQUNwQyxDQUVRZ0MsWUFBWW5DLEdBQ2hCSSxRQUFRSixNQUFNLG1CQUFtQkEsSUFDckMsRSxHQy9HQXdELEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYUUsUUFHckIsSUFBSUMsRUFBU04sRUFBeUJFLEdBQVksQ0FHakRHLFFBQVMsQ0FBQyxHQU9YLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsT0FDZixDLE1DdEJBLGVBQ0EsU0FTQUcsT0FBT3JFLGFBQWUsSUFBSSxFQUFBQyxhQUMxQm9FLE9BQU9DLGNBQWdCLElBQUksRUFBQUEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9tZW5kZW4uc2hhcmVkLmJsYXpvcmNhcHRjaGEvLi9zcmMvY2FwdGNoYUxvYWRlci50cyIsIndlYnBhY2s6Ly90aGVvbWVuZGVuLnNoYXJlZC5ibGF6b3JjYXB0Y2hhLy4vc3JjL2R5bmFtaWNTY3JpcHRMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vdGhlb21lbmRlbi5zaGFyZWQuYmxhem9yY2FwdGNoYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvbWVuZGVuLnNoYXJlZC5ibGF6b3JjYXB0Y2hhLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTY3JpcHRMb2FkZXJPcHRpb25zIH0gZnJvbSAnLi9JU2NyaXB0TG9hZGVyT3B0aW9ucyc7XHJcbmltcG9ydCB7IFNjcmlwdExvYWRlciB9IGZyb20gJy4vZHluYW1pY1NjcmlwdExvYWRlcic7XHJcbmltcG9ydCB7IERvdE5ldCB9IGZyb20gIFwiQG1pY3Jvc29mdC9kb3RuZXQtanMtaW50ZXJvcFwiO1xyXG5cclxuZGVjbGFyZSBjb25zdCBncmVjYXB0Y2hhOiBSZUNhcHRjaGFWMi5SZUNhcHRjaGE7XHJcblxyXG4vKipcclxuICogVGhlIHBhcmFtZXRlcnMgdGhhdCBjYW4gYmUgdXNlZCB0byByZW5kZXIgYSBjYXB0Y2hhLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2FwdGNoYVJlbmRlclBhcmFtZXRlcnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29udGFpbmVyIHRvIHJlbmRlciB0aGUgY2FwdGNoYSBpbi4gKERlZmF1bHQ6IFwicmVjYXB0Y2hhX2NvbnRhaW5lclwiKVxyXG4gICAgICovXHJcbiAgICAgY29udGFpbmVyPzogc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XHJcbiAgICAgLyoqXHJcbiAgICAgICogVGhlIHRoZW1lIHRvIHVzZSBmb3IgdGhlIGNhcHRjaGEuIChEZWZhdWx0OiBcImRhcmtcIilcclxuICAgICAgKi9cclxuICAgICB0aGVtZT86IFwiZGFya1wiIHwgXCJsaWdodFwiO1xyXG4gICAgIC8qKlxyXG4gICAgICAqIFRoZSBzaXplIG9mIHRoZSBjYXB0Y2hhIHRvIHJlbmRlci4gKERlZmF1bHQ6IFwiY29tcGFjdFwiKVxyXG4gICAgICAqL1xyXG4gICAgIHNpemU/OiBcImNvbXBhY3RcIiB8IFwibm9ybWFsXCIgfCBcImludmlzaWJsZVwiO1xyXG4gICAgIC8qKlxyXG4gICAgICAqIFRoZSB0YWJpbmRleCBvZiB0aGUgY2FwdGNoYSB0byByZW5kZXIuIChEZWZhdWx0OiAwKVxyXG4gICAgICAqL1xyXG4gICAgIHRhYmluZGV4PzogbnVtYmVyO1xyXG4gICAgIC8qKlxyXG4gICAgICAqIFRoZSBiYWRnZSBsb2NhdGlvbiBvZiB0aGUgY2FwdGNoYSB0byByZW5kZXIuIChEZWZhdWx0OiBcImJvdHRvbXJpZ2h0XCIpXHJcbiAgICAgICovXHJcbiAgICAgYmFkZ2U/OiBcImJvdHRvbXJpZ2h0XCIgfCBcImJvdHRvbWxlZnRcIiB8IFwiaW5saW5lXCI7XHJcbn07XHJcblxyXG4vKipcclxuICogQSBzaW1wbGUgdXRpbGl0eSB0aGF0IGNhbiBiZSB1c2VkIHRvIGxvYWQgYSBSZUNhcHRjaGEgc2NyaXB0IHRhZyBpbnRvIHlvdXIgYXBwbGljYXRpb24uXHJcbiAqIFRoaXMgY2xhc3MgYWxzbyBwcm92aWRlcyBtZXRob2RzIHRvIGV4ZWN1dGUgYW5kIHJlbmRlciBhIGNhcHRjaGEuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgY2FwdGNoYUxvYWRlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZWZhdWx0U2NyaXB0TG9hZGluZ09wdGlvbnM6IElTY3JpcHRMb2FkZXJPcHRpb25zID0ge1xyXG4gICAgICAgIGlzQXN5bmM6IHRydWUsXHJcbiAgICAgICAgaXNEZWZlcnJlZDogdHJ1ZSxcclxuICAgICAgICBhcHBlbmRlZFRvOiBcImhlYWRcIixcclxuICAgICAgICBtYXhSZXRyaWVzOiAzLFxyXG4gICAgICAgIHJldHJ5SW50ZXJ2YWw6IDEwMCxcclxuICAgICAgICBpZDogXCJjYXB0Y2hhTG9hZGVyXCJcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyB0aGUgY2FwdGNoYSBzY3JpcHQgd2l0aCB0aGUgcHJvdmlkZWQgc2l0ZSBrZXksIGFuZCBhbiBvcHRpb25hbCBvdmVycmlkZSBmb3IgdGhlIGRlZmF1bHQgbG9hZGluZyBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIHNpdGVLZXkgLSBUaGUgcHJvdmlkZWQgc2l0ZSBrZXlcclxuICAgICAqIEBwYXJhbSBkb3ROZXRPYmpSZWYgLSBBIHJlZmVyZW5jZSB0byB0aGUgZG90bmV0IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBpbnZva2UgdGhlIGNhbGxiYWNrIG1ldGhvZHNcclxuICAgICAqIEBwYXJhbSBsb2FkaW5nT3B0aW9ucyAtIE9wdGlvbmFsIHBhcmFtZXRlcnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgbG9hZGluZyBwYXJhbWV0ZXJzXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGxvYWRBc3luYyhzaXRlS2V5OiBzdHJpbmcsIGRvdE5ldE9ialJlZjogRG90TmV0LkRvdE5ldE9iamVjdCwgbG9hZGluZ09wdGlvbnM/OiBJU2NyaXB0TG9hZGVyT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBzY3JpcHRMb2FkZXIgPSBuZXcgU2NyaXB0TG9hZGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanM/cmVuZGVyPSR7c2l0ZUtleX1gO1xyXG5cclxuICAgICAgICBsb2FkaW5nT3B0aW9ucyA9IHsgLi4udGhpcy5fZGVmYXVsdFNjcmlwdExvYWRpbmdPcHRpb25zLCAuLi5sb2FkaW5nT3B0aW9ucyB9O1xyXG5cclxuICAgICAgICBhd2FpdCBzY3JpcHRMb2FkZXIubG9hZFNjcmlwdCh1cmwsIGxvYWRpbmdPcHRpb25zKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZTogXCJ0cnkgYWdhaW4gbGF0ZXJcIjtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyBjYXB0Y2hhLmApO1xyXG4gICAgICAgICAgICBhd2FpdCBkb3ROZXRPYmpSZWYuaW52b2tlTWV0aG9kQXN5bmMoXCJPbkNhcHRjaGFFcnJvclwiLCBlcnJvck1lc3NhZ2UpOyAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgdGhlIGNhbGxlciB0byBleGVjdXRlIGEgY2FwdGNoYSwgd2l0aCBhbiBvcHRpb25hbCBhY3Rpb24gcGFyYW1ldGVyLlxyXG4gICAgICogVGhlIGRlZmF1bHQgYWN0aW9uIGlzIFwiaG9tZXBhZ2VcIlxyXG4gICAgICogQHBhcmFtIGRvdE5ldE9ialJlZiAtIEEgcmVmZXJlbmNlIHRvIHRoZSBkb3RuZXQgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIGludm9rZSB0aGUgY2FsbGJhY2sgbWV0aG9kc1xyXG4gICAgICogQHBhcmFtIHNpdGVLZXkgLSBUaGUgcHJvdmlkZWQgc2l0ZSBrZXlcclxuICAgICAqIEBwYXJhbSBhY3Rpb24gLSBPcHRpb25hbCBhY3Rpb24gcGFyYW1ldGVyXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGV4ZWN1dGVBc3luYyhkb3ROZXRPYmpSZWY6IERvdE5ldC5Eb3ROZXRPYmplY3QsIHNpdGVLZXk6IHN0cmluZywgYWN0aW9uPzogc3RyaW5nICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRyeSB7ICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdyZWNhcHRjaGEuZXhlY3V0ZShzaXRlS2V5LCB7YWN0aW9uOiBhY3Rpb24gfHwgXCJob21lcGFnZVwifSk7ICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IGRvdE5ldE9ialJlZi5pbnZva2VNZXRob2RBc3luYyhcIk9uQ2FwdGNoYUV4ZWN1dGVkXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZTogXCJ0cnkgYWdhaW4gbGF0ZXJcIjtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZXhlY3V0aW5nIGNhcHRjaGEuYCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGRvdE5ldE9ialJlZi5pbnZva2VNZXRob2RBc3luYyhcIk9uQ2FwdGNoYUVycm9yXCIsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHRoZSBjYWxsZXIgdG8gcmVuZGVyIGEgY2FwdGNoYSBpbiBhIHNwZWNpZmljIGNvbnRhaW5lciwgd2l0aCB0aGUgb3B0aW9uIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHBhcmFtZXRlcnMuXHJcbiAgICAgKiBBIGRlZmF1bHQgY29udGFpbmVyIGlzIHVzZWQgaWYgbm9uZSBpcyBzcGVjaWZpZWQgLSBcInJlY2FwdGNoYV9jb250YWluZXJcIlxyXG4gICAgICogQHBhcmFtIHNpdGVLZXkgLSBUaGUgcHJvdmlkZWQgc2l0ZSBrZXlcclxuICAgICAqIEBwYXJhbSBkb3ROZXRPYmpSZWYgLSBBIHJlZmVyZW5jZSB0byB0aGUgZG90bmV0IG9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBpbnZva2UgdGhlIGNhbGxiYWNrIG1ldGhvZHNcclxuICAgICAqIEBwYXJhbSByZW5kZXJQYXJhbWV0ZXJzIC0gT3B0aW9uYWwgcGFyYW1ldGVycyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCByZW5kZXJpbmcgcGFyYW1ldGVyc1xyXG4gICAgICovXHJcbiAgICBhc3luYyByZW5kZXJBc3luYyhzaXRlS2V5OiBzdHJpbmcsIGRvdE5ldE9ialJlZjogRG90TmV0LkRvdE5ldE9iamVjdCwgcmVuZGVyUGFyYW1ldGVycz86IElDYXB0Y2hhUmVuZGVyUGFyYW1ldGVycyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkUGFyYW1ldGVyczogUmVDYXB0Y2hhVjIuUGFyYW1ldGVycyA9IHtcclxuICAgICAgICAgICAgc2l0ZWtleTogc2l0ZUtleSxcclxuICAgICAgICAgICAgdGhlbWU6IHJlbmRlclBhcmFtZXRlcnM/LnRoZW1lIHx8IFwiZGFya1wiLFxyXG4gICAgICAgICAgICBzaXplOiByZW5kZXJQYXJhbWV0ZXJzPy5zaXplIHx8IFwiY29tcGFjdFwiLFxyXG4gICAgICAgICAgICB0YWJpbmRleDogcmVuZGVyUGFyYW1ldGVycz8udGFiaW5kZXggfHwgMCxcclxuICAgICAgICAgICAgYmFkZ2U6IHJlbmRlclBhcmFtZXRlcnM/LmJhZGdlIHx8IFwiYm90dG9tcmlnaHRcIixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICBhd2FpdCBkb3ROZXRPYmpSZWYuaW52b2tlTWV0aG9kQXN5bmMoXCJPbkNhcHRjaGFSZXNvbHZlZFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZXhwaXJlZC1jYWxsYmFja1wiOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkb3ROZXRPYmpSZWYuaW52b2tlTWV0aG9kQXN5bmMoXCJPbkNhcHRjaGFFeHBpcmVkXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImVycm9yLWNhbGxiYWNrXCI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRvdE5ldE9ialJlZi5pbnZva2VNZXRob2RBc3luYyhcIk9uQ2FwdGNoYUVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHdpZGdldElkID0gMDtcclxuXHJcbiAgICAgICAgZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdHVhbGl6ZWRDb250YWluZXIgPSByZW5kZXJQYXJhbWV0ZXJzPy5jb250YWluZXIgfHwgXCJyZWNhcHRjaGFfY29udGFpbmVyXCI7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgd2lkZ2V0SWQgPSBncmVjYXB0Y2hhLnJlbmRlcihhY3R1YWxpemVkQ29udGFpbmVyLCB0cmFuc2Zvcm1lZFBhcmFtZXRlcnMpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGF3YWl0IGRvdE5ldE9ialJlZi5pbnZva2VNZXRob2RBc3luYyhcIk9uQ2FwdGNoYVJlbmRlcmVkXCIsIHdpZGdldElkKTsgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSVNjcmlwdExvYWRlck9wdGlvbnMgfSBmcm9tIFwiLi9JU2NyaXB0TG9hZGVyT3B0aW9uc1wiO1xyXG5cclxuaW50ZXJmYWNlIElTY3JpcHRMb2FkZXJDb250cmFjdCB7XHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIGEgc2NyaXB0IGZyb20gYSBnaXZlbiB1cmxcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIHVybCBvZiB0aGUgc2NyaXB0IHRvIGxvYWRcclxuICAgICAqIEBwYXJhbSB7SVNjcmlwdExvYWRlck9wdGlvbnN9IG9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgc2NyaXB0IGxvYWRlclxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgKlxyXG4gICAgICogQHRocm93cyB7RXJyb3J9XHJcbiAgICAgKiBUaHJvd24gd2hlbiB0aGUgc2NyaXB0IGZhaWxzIHRvIGxvYWQgYWZ0ZXIgdGhlIG1heCByZXRyaWVzXHJcbiAgICAgKlxyXG4gICAgICogQHB1YmxpYyBcclxuICAgICAqL1xyXG4gICAgbG9hZFNjcmlwdDogKHVybDogc3RyaW5nLCBvcHRpb25zOiBJU2NyaXB0TG9hZGVyT3B0aW9ucykgPT4gUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuLyoqXHJcbiBBIHNpbXBsZSB1dGlsaXR5IHRoYXQgY2FuIGJlIHVzZWQgdG8gbG9hZCBhIHNjcmlwdCB0YWcgaW50byB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjcmlwdExvYWRlciBpbXBsZW1lbnRzIElTY3JpcHRMb2FkZXJDb250cmFjdCB7XHJcbiAgICBwcml2YXRlIF9sb2FkZWRTY3JpcHRzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmhlYWQ7IC8vIERlZmF1bHQgdG8gaGVhZFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZHMgYSBzY3JpcHQgZnJvbSBhIGdpdmVuIHVybFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgdXJsIG9mIHRoZSBzY3JpcHQgdG8gbG9hZFxyXG4gICAgICogQHBhcmFtIHtJU2NyaXB0TG9hZGVyT3B0aW9uc30gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIHRoZSBzY3JpcHQgbG9hZGVyXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAqXHJcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn1cclxuICAgICAqIFRocm93biB3aGVuIHRoZSBzY3JpcHQgZmFpbHMgdG8gbG9hZCBhZnRlciB0aGUgbWF4IHJldHJpZXNcclxuICAgICAqXHJcbiAgICAgKiBAcHVibGljIFxyXG4gICAgICovXHJcbiAgICBhc3luYyBsb2FkU2NyaXB0KHVybDogc3RyaW5nLCBvcHRpb25zOiBJU2NyaXB0TG9hZGVyT3B0aW9ucyA9IHt9KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgbWF4UmV0cmllcyA9IG9wdGlvbnMubWF4UmV0cmllcyB8fCAzO1xyXG4gICAgICAgIGNvbnN0IHJldHJ5RGVsYXkgPSBvcHRpb25zLnJldHJ5SW50ZXJ2YWwgfHwgMjU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU2NyaXB0TG9hZGVkKHVybCwgb3B0aW9ucy5pZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dPdXRSZXN1bHQoXCJTY3JpcHQgQWxyZWFkeSBMb2FkZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXRyaWVzID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHJldHJpZXMgPD0gbWF4UmV0cmllcykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkU2NyaXB0QXR0ZW1wdCh1cmwsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJldHJpZXMgPj0gbWF4UmV0cmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nT3V0RXJyb3IoXCJTY3JpcHQgRmFpbGVkIFRvIExvYWQgYWZ0ZXIgcmV0cmllc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXRyaWVzKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ091dEVycm9yKGBTY3JpcHQgRmFpbGVkIFRvIExvYWQuIFJldHJ5aW5nLi4uICgke3JldHJpZXN9LyR7bWF4UmV0cmllc30pYCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCByZXRyeURlbGF5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkU2NyaXB0QXR0ZW1wdCh1cmw6IHN0cmluZywgb3B0aW9uczogSVNjcmlwdExvYWRlck9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xyXG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gdXJsO1xyXG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGVkU2NyaXB0cy5hZGQodXJsICsgKG9wdGlvbnMuaWQgfHwgXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dPdXRSZXN1bHQoXCJTY3JpcHQgTG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiU2NyaXB0IGZhaWxlZCB0byBsb2FkXCIpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2NyaXB0QXR0cmlidXRlcyhzY3JpcHQsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudChvcHRpb25zLmFwcGVuZGVkVG8pO1xyXG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0U2NyaXB0QXR0cmlidXRlcyhzY3JpcHQ6IEhUTUxTY3JpcHRFbGVtZW50LCBvcHRpb25zOiBJU2NyaXB0TG9hZGVyT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuICAgICAgICBzY3JpcHQuZGVmZXIgPSBvcHRpb25zLmlzRGVmZXJyZWQgfHwgZmFsc2U7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gb3B0aW9ucy5pc0FzeW5jIHx8IGZhbHNlO1xyXG4gICAgICAgIHNjcmlwdC5pZCA9IG9wdGlvbnMuaWQgfHwgXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhcmdldEVsZW1lbnQoYXBwZW5kVG8/OiBcImhlYWRcIiB8IFwiYm9keVwiKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiBhcHBlbmRUbyA9PT0gXCJoZWFkXCIgPyB0aGlzLl90YXJnZXRFbGVtZW50IDogZG9jdW1lbnQuYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzU2NyaXB0TG9hZGVkKHVybDogc3RyaW5nLCBpZD86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdEtleSA9IHVybCArIChpZCB8fCBcIlwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVkU2NyaXB0cy5oYXMoc2NyaXB0S2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ091dFJlc3VsdChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oYFtTY3JpcHRMb2FkZXJdOiAke21lc3NhZ2V9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dPdXRFcnJvcihlcnJvcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgW1NjcmlwdExvYWRlcl06ICR7ZXJyb3J9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBjYXB0Y2hhTG9hZGVyIH0gZnJvbSBcIi4vY2FwdGNoYUxvYWRlclwiO1xyXG5pbXBvcnQgeyBTY3JpcHRMb2FkZXIgfSBmcm9tIFwiLi9keW5hbWljU2NyaXB0TG9hZGVyXCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBzY3JpcHRMb2FkZXI6IFNjcmlwdExvYWRlcjtcclxuICAgICAgICBjYXB0Y2hhTG9hZGVyOiBjYXB0Y2hhTG9hZGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuc2NyaXB0TG9hZGVyID0gbmV3IFNjcmlwdExvYWRlcigpO1xyXG53aW5kb3cuY2FwdGNoYUxvYWRlciA9IG5ldyBjYXB0Y2hhTG9hZGVyKCk7Il0sIm5hbWVzIjpbIl9kZWZhdWx0U2NyaXB0TG9hZGluZ09wdGlvbnMiLCJpc0FzeW5jIiwiaXNEZWZlcnJlZCIsImFwcGVuZGVkVG8iLCJtYXhSZXRyaWVzIiwicmV0cnlJbnRlcnZhbCIsImlkIiwiYXN5bmMiLCJzaXRlS2V5IiwiZG90TmV0T2JqUmVmIiwibG9hZGluZ09wdGlvbnMiLCJzY3JpcHRMb2FkZXIiLCJTY3JpcHRMb2FkZXIiLCJ1cmwiLCJ0aGlzIiwibG9hZFNjcmlwdCIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImludm9rZU1ldGhvZEFzeW5jIiwiYWN0aW9uIiwicmVzcG9uc2UiLCJncmVjYXB0Y2hhIiwiZXhlY3V0ZSIsInJlbmRlclBhcmFtZXRlcnMiLCJ0cmFuc2Zvcm1lZFBhcmFtZXRlcnMiLCJzaXRla2V5IiwidGhlbWUiLCJzaXplIiwidGFiaW5kZXgiLCJiYWRnZSIsImNhbGxiYWNrIiwid2lkZ2V0SWQiLCJyZWFkeSIsImFjdHVhbGl6ZWRDb250YWluZXIiLCJjb250YWluZXIiLCJyZW5kZXIiLCJfbG9hZGVkU2NyaXB0cyIsIlNldCIsIl90YXJnZXRFbGVtZW50IiwiY29uc3RydWN0b3IiLCJkb2N1bWVudCIsImhlYWQiLCJvcHRpb25zIiwicmV0cnlEZWxheSIsImlzU2NyaXB0TG9hZGVkIiwibG9nT3V0UmVzdWx0IiwicmV0cmllcyIsImxvYWRTY3JpcHRBdHRlbXB0IiwibG9nT3V0RXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJyZWplY3QiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwib25sb2FkIiwiYWRkIiwib25lcnJvciIsInNldFNjcmlwdEF0dHJpYnV0ZXMiLCJnZXRUYXJnZXRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0eXBlIiwiZGVmZXIiLCJhcHBlbmRUbyIsImJvZHkiLCJzY3JpcHRLZXkiLCJoYXMiLCJpbmZvIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJ3aW5kb3ciLCJjYXB0Y2hhTG9hZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==