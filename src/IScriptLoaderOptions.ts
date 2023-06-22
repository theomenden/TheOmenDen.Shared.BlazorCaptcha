export interface IScriptLoaderOptions {
    id?: string;
    isAsync?: boolean;
    isDeferred?: boolean;
    appendedTo?: "head" | "body";
    maxRetries?: number;
    retryInterval?: number;
}
