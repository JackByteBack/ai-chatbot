import * as z from "zod/v3";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type DeleteRedirectsRequestBody = {
    name?: string | undefined;
    /**
     * The redirects to delete. The source of the redirect is used to match the redirect to delete.
     */
    redirects: Array<string>;
};
export type DeleteRedirectsRequest = {
    projectId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: DeleteRedirectsRequestBody | undefined;
};
export type DeleteRedirectsVersion = {
    /**
     * The unique identifier for the version.
     */
    id: string;
    /**
     * The key of the version. The key may be duplicated across versions if the contents are the same as a different version.
     */
    key: string;
    lastModified: number;
    createdBy: string;
    /**
     * Optional name for the version. If not provided, defaults to an ISO timestamp string.
     */
    name?: string | undefined;
    /**
     * Whether this version has not been promoted to production yet and is not serving end users.
     */
    isStaging?: boolean | undefined;
    /**
     * Whether this version is currently live in production.
     */
    isLive?: boolean | undefined;
    /**
     * The number of redirects in this version.
     */
    redirectCount?: number | undefined;
    /**
     * The staging link for previewing redirects in this version.
     */
    alias?: string | undefined;
};
export type DeleteRedirectsResponseBody = {
    alias: string | null;
    version: DeleteRedirectsVersion;
};
/** @internal */
export declare const DeleteRedirectsRequestBody$inboundSchema: z.ZodType<DeleteRedirectsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsRequestBody$Outbound = {
    name?: string | undefined;
    redirects: Array<string>;
};
/** @internal */
export declare const DeleteRedirectsRequestBody$outboundSchema: z.ZodType<DeleteRedirectsRequestBody$Outbound, z.ZodTypeDef, DeleteRedirectsRequestBody>;
export declare function deleteRedirectsRequestBodyToJSON(deleteRedirectsRequestBody: DeleteRedirectsRequestBody): string;
export declare function deleteRedirectsRequestBodyFromJSON(jsonString: string): SafeParseResult<DeleteRedirectsRequestBody, SDKValidationError>;
/** @internal */
export declare const DeleteRedirectsRequest$inboundSchema: z.ZodType<DeleteRedirectsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsRequest$Outbound = {
    projectId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: DeleteRedirectsRequestBody$Outbound | undefined;
};
/** @internal */
export declare const DeleteRedirectsRequest$outboundSchema: z.ZodType<DeleteRedirectsRequest$Outbound, z.ZodTypeDef, DeleteRedirectsRequest>;
export declare function deleteRedirectsRequestToJSON(deleteRedirectsRequest: DeleteRedirectsRequest): string;
export declare function deleteRedirectsRequestFromJSON(jsonString: string): SafeParseResult<DeleteRedirectsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteRedirectsVersion$inboundSchema: z.ZodType<DeleteRedirectsVersion, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsVersion$Outbound = {
    id: string;
    key: string;
    lastModified: number;
    createdBy: string;
    name?: string | undefined;
    isStaging?: boolean | undefined;
    isLive?: boolean | undefined;
    redirectCount?: number | undefined;
    alias?: string | undefined;
};
/** @internal */
export declare const DeleteRedirectsVersion$outboundSchema: z.ZodType<DeleteRedirectsVersion$Outbound, z.ZodTypeDef, DeleteRedirectsVersion>;
export declare function deleteRedirectsVersionToJSON(deleteRedirectsVersion: DeleteRedirectsVersion): string;
export declare function deleteRedirectsVersionFromJSON(jsonString: string): SafeParseResult<DeleteRedirectsVersion, SDKValidationError>;
/** @internal */
export declare const DeleteRedirectsResponseBody$inboundSchema: z.ZodType<DeleteRedirectsResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteRedirectsResponseBody$Outbound = {
    alias: string | null;
    version: DeleteRedirectsVersion$Outbound;
};
/** @internal */
export declare const DeleteRedirectsResponseBody$outboundSchema: z.ZodType<DeleteRedirectsResponseBody$Outbound, z.ZodTypeDef, DeleteRedirectsResponseBody>;
export declare function deleteRedirectsResponseBodyToJSON(deleteRedirectsResponseBody: DeleteRedirectsResponseBody): string;
export declare function deleteRedirectsResponseBodyFromJSON(jsonString: string): SafeParseResult<DeleteRedirectsResponseBody, SDKValidationError>;
//# sourceMappingURL=deleteredirectsop.d.ts.map