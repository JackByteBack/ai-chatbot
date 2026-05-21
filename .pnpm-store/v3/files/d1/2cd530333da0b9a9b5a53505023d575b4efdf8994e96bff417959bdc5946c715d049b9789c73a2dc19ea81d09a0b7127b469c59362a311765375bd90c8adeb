import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export declare const EditProjectEnvTarget: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type EditProjectEnvTarget = ClosedEnum<typeof EditProjectEnvTarget>;
/**
 * The type of environment variable
 */
export declare const EditProjectEnvType: {
    readonly System: "system";
    readonly Secret: "secret";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
};
/**
 * The type of environment variable
 */
export type EditProjectEnvType = ClosedEnum<typeof EditProjectEnvType>;
export type EditProjectEnvRequestBody = {
    /**
     * The name of the environment variable
     */
    key?: string | undefined;
    /**
     * The target environment of the environment variable
     */
    target?: Array<EditProjectEnvTarget> | undefined;
    /**
     * If defined, the git branch of the environment variable (must have target=preview)
     */
    gitBranch?: string | null | undefined;
    /**
     * The type of environment variable
     */
    type?: EditProjectEnvType | undefined;
    /**
     * The value of the environment variable
     */
    value?: string | undefined;
    /**
     * The custom environments that the environment variable should be synced to
     */
    customEnvironmentIds?: Array<string> | undefined;
    /**
     * A comment to add context on what this env var is for
     */
    comment?: string | undefined;
};
export type EditProjectEnvRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The unique environment variable identifier
     */
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody: EditProjectEnvRequestBody;
};
export type EditProjectEnvResponseBody2 = {};
export declare const EditProjectEnvTarget2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type EditProjectEnvTarget2 = ClosedEnum<typeof EditProjectEnvTarget2>;
export type EditProjectEnvResponseBodyTarget = Array<string> | EditProjectEnvTarget2;
export declare const EditProjectEnvResponseBodyType: {
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
    readonly Secret: "secret";
};
export type EditProjectEnvResponseBodyType = ClosedEnum<typeof EditProjectEnvResponseBodyType>;
export type EditProjectEnvContentHint15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type EditProjectEnvContentHint14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type EditProjectEnvContentHint13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type EditProjectEnvContentHint12 = {
    type: "postgres-database";
    storeId: string;
};
export type EditProjectEnvContentHint11 = {
    type: "postgres-password";
    storeId: string;
};
export type EditProjectEnvContentHint10 = {
    type: "postgres-host";
    storeId: string;
};
export type EditProjectEnvContentHint9 = {
    type: "postgres-user";
    storeId: string;
};
export type EditProjectEnvContentHint8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type EditProjectEnvContentHint7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type EditProjectEnvContentHint6 = {
    type: "postgres-url";
    storeId: string;
};
export type EditProjectEnvContentHint5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type EditProjectEnvContentHint4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type EditProjectEnvContentHint3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type EditProjectEnvContentHint2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type EditProjectEnvContentHint1 = {
    type: "redis-url";
    storeId: string;
};
export type EditProjectEnvResponseBodyContentHint = EditProjectEnvContentHint1 | EditProjectEnvContentHint2 | EditProjectEnvContentHint3 | EditProjectEnvContentHint4 | EditProjectEnvContentHint5 | EditProjectEnvContentHint6 | EditProjectEnvContentHint7 | EditProjectEnvContentHint8 | EditProjectEnvContentHint9 | EditProjectEnvContentHint10 | EditProjectEnvContentHint11 | EditProjectEnvContentHint12 | EditProjectEnvContentHint13 | EditProjectEnvContentHint14 | EditProjectEnvContentHint15;
export declare const EditProjectEnvResponseBodyProjectsType: {
    readonly FlagsSecret: "flags-secret";
};
export type EditProjectEnvResponseBodyProjectsType = ClosedEnum<typeof EditProjectEnvResponseBodyProjectsType>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type EditProjectEnvResponseBodyInternalContentHint = {
    type: EditProjectEnvResponseBodyProjectsType;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type EditProjectEnvResponseBody1 = {
    target?: Array<string> | EditProjectEnvTarget2 | undefined;
    type: EditProjectEnvResponseBodyType;
    /**
     * This is used to identiy variables that have been migrated from type secret to sensitive.
     */
    sunsetSecretId?: string | undefined;
    decrypted?: boolean | undefined;
    value: string;
    id?: string | undefined;
    key: string;
    configurationId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    createdBy?: string | null | undefined;
    updatedBy?: string | null | undefined;
    gitBranch?: string | undefined;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    contentHint?: EditProjectEnvContentHint1 | EditProjectEnvContentHint2 | EditProjectEnvContentHint3 | EditProjectEnvContentHint4 | EditProjectEnvContentHint5 | EditProjectEnvContentHint6 | EditProjectEnvContentHint7 | EditProjectEnvContentHint8 | EditProjectEnvContentHint9 | EditProjectEnvContentHint10 | EditProjectEnvContentHint11 | EditProjectEnvContentHint12 | EditProjectEnvContentHint13 | EditProjectEnvContentHint14 | EditProjectEnvContentHint15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: EditProjectEnvResponseBodyInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/**
 * The environment variable was successfully edited
 */
export type EditProjectEnvResponseBody = EditProjectEnvResponseBody1 | EditProjectEnvResponseBody2;
/** @internal */
export declare const EditProjectEnvTarget$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget>;
/** @internal */
export declare const EditProjectEnvTarget$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget>;
/** @internal */
export declare const EditProjectEnvType$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvType>;
/** @internal */
export declare const EditProjectEnvType$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvType>;
/** @internal */
export declare const EditProjectEnvRequestBody$inboundSchema: z.ZodType<EditProjectEnvRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvRequestBody$Outbound = {
    key?: string | undefined;
    target?: Array<string> | undefined;
    gitBranch?: string | null | undefined;
    type?: string | undefined;
    value?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
    comment?: string | undefined;
};
/** @internal */
export declare const EditProjectEnvRequestBody$outboundSchema: z.ZodType<EditProjectEnvRequestBody$Outbound, z.ZodTypeDef, EditProjectEnvRequestBody>;
export declare function editProjectEnvRequestBodyToJSON(editProjectEnvRequestBody: EditProjectEnvRequestBody): string;
export declare function editProjectEnvRequestBodyFromJSON(jsonString: string): SafeParseResult<EditProjectEnvRequestBody, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvRequest$inboundSchema: z.ZodType<EditProjectEnvRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvRequest$Outbound = {
    idOrName: string;
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody: EditProjectEnvRequestBody$Outbound;
};
/** @internal */
export declare const EditProjectEnvRequest$outboundSchema: z.ZodType<EditProjectEnvRequest$Outbound, z.ZodTypeDef, EditProjectEnvRequest>;
export declare function editProjectEnvRequestToJSON(editProjectEnvRequest: EditProjectEnvRequest): string;
export declare function editProjectEnvRequestFromJSON(jsonString: string): SafeParseResult<EditProjectEnvRequest, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvResponseBody2$inboundSchema: z.ZodType<EditProjectEnvResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvResponseBody2$Outbound = {};
/** @internal */
export declare const EditProjectEnvResponseBody2$outboundSchema: z.ZodType<EditProjectEnvResponseBody2$Outbound, z.ZodTypeDef, EditProjectEnvResponseBody2>;
export declare function editProjectEnvResponseBody2ToJSON(editProjectEnvResponseBody2: EditProjectEnvResponseBody2): string;
export declare function editProjectEnvResponseBody2FromJSON(jsonString: string): SafeParseResult<EditProjectEnvResponseBody2, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvTarget2$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget2>;
/** @internal */
export declare const EditProjectEnvTarget2$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget2>;
/** @internal */
export declare const EditProjectEnvResponseBodyTarget$inboundSchema: z.ZodType<EditProjectEnvResponseBodyTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvResponseBodyTarget$Outbound = Array<string> | string;
/** @internal */
export declare const EditProjectEnvResponseBodyTarget$outboundSchema: z.ZodType<EditProjectEnvResponseBodyTarget$Outbound, z.ZodTypeDef, EditProjectEnvResponseBodyTarget>;
export declare function editProjectEnvResponseBodyTargetToJSON(editProjectEnvResponseBodyTarget: EditProjectEnvResponseBodyTarget): string;
export declare function editProjectEnvResponseBodyTargetFromJSON(jsonString: string): SafeParseResult<EditProjectEnvResponseBodyTarget, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvResponseBodyType>;
/** @internal */
export declare const EditProjectEnvResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvResponseBodyType>;
/** @internal */
export declare const EditProjectEnvContentHint15$inboundSchema: z.ZodType<EditProjectEnvContentHint15, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint15$outboundSchema: z.ZodType<EditProjectEnvContentHint15$Outbound, z.ZodTypeDef, EditProjectEnvContentHint15>;
export declare function editProjectEnvContentHint15ToJSON(editProjectEnvContentHint15: EditProjectEnvContentHint15): string;
export declare function editProjectEnvContentHint15FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint15, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint14$inboundSchema: z.ZodType<EditProjectEnvContentHint14, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint14$outboundSchema: z.ZodType<EditProjectEnvContentHint14$Outbound, z.ZodTypeDef, EditProjectEnvContentHint14>;
export declare function editProjectEnvContentHint14ToJSON(editProjectEnvContentHint14: EditProjectEnvContentHint14): string;
export declare function editProjectEnvContentHint14FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint14, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint13$inboundSchema: z.ZodType<EditProjectEnvContentHint13, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint13$outboundSchema: z.ZodType<EditProjectEnvContentHint13$Outbound, z.ZodTypeDef, EditProjectEnvContentHint13>;
export declare function editProjectEnvContentHint13ToJSON(editProjectEnvContentHint13: EditProjectEnvContentHint13): string;
export declare function editProjectEnvContentHint13FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint13, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint12$inboundSchema: z.ZodType<EditProjectEnvContentHint12, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint12$outboundSchema: z.ZodType<EditProjectEnvContentHint12$Outbound, z.ZodTypeDef, EditProjectEnvContentHint12>;
export declare function editProjectEnvContentHint12ToJSON(editProjectEnvContentHint12: EditProjectEnvContentHint12): string;
export declare function editProjectEnvContentHint12FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint12, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint11$inboundSchema: z.ZodType<EditProjectEnvContentHint11, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint11$outboundSchema: z.ZodType<EditProjectEnvContentHint11$Outbound, z.ZodTypeDef, EditProjectEnvContentHint11>;
export declare function editProjectEnvContentHint11ToJSON(editProjectEnvContentHint11: EditProjectEnvContentHint11): string;
export declare function editProjectEnvContentHint11FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint11, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint10$inboundSchema: z.ZodType<EditProjectEnvContentHint10, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint10$outboundSchema: z.ZodType<EditProjectEnvContentHint10$Outbound, z.ZodTypeDef, EditProjectEnvContentHint10>;
export declare function editProjectEnvContentHint10ToJSON(editProjectEnvContentHint10: EditProjectEnvContentHint10): string;
export declare function editProjectEnvContentHint10FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint10, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint9$inboundSchema: z.ZodType<EditProjectEnvContentHint9, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint9$outboundSchema: z.ZodType<EditProjectEnvContentHint9$Outbound, z.ZodTypeDef, EditProjectEnvContentHint9>;
export declare function editProjectEnvContentHint9ToJSON(editProjectEnvContentHint9: EditProjectEnvContentHint9): string;
export declare function editProjectEnvContentHint9FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint9, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint8$inboundSchema: z.ZodType<EditProjectEnvContentHint8, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint8$outboundSchema: z.ZodType<EditProjectEnvContentHint8$Outbound, z.ZodTypeDef, EditProjectEnvContentHint8>;
export declare function editProjectEnvContentHint8ToJSON(editProjectEnvContentHint8: EditProjectEnvContentHint8): string;
export declare function editProjectEnvContentHint8FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint8, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint7$inboundSchema: z.ZodType<EditProjectEnvContentHint7, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint7$outboundSchema: z.ZodType<EditProjectEnvContentHint7$Outbound, z.ZodTypeDef, EditProjectEnvContentHint7>;
export declare function editProjectEnvContentHint7ToJSON(editProjectEnvContentHint7: EditProjectEnvContentHint7): string;
export declare function editProjectEnvContentHint7FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint7, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint6$inboundSchema: z.ZodType<EditProjectEnvContentHint6, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint6$outboundSchema: z.ZodType<EditProjectEnvContentHint6$Outbound, z.ZodTypeDef, EditProjectEnvContentHint6>;
export declare function editProjectEnvContentHint6ToJSON(editProjectEnvContentHint6: EditProjectEnvContentHint6): string;
export declare function editProjectEnvContentHint6FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint6, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint5$inboundSchema: z.ZodType<EditProjectEnvContentHint5, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint5$outboundSchema: z.ZodType<EditProjectEnvContentHint5$Outbound, z.ZodTypeDef, EditProjectEnvContentHint5>;
export declare function editProjectEnvContentHint5ToJSON(editProjectEnvContentHint5: EditProjectEnvContentHint5): string;
export declare function editProjectEnvContentHint5FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint5, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint4$inboundSchema: z.ZodType<EditProjectEnvContentHint4, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint4$outboundSchema: z.ZodType<EditProjectEnvContentHint4$Outbound, z.ZodTypeDef, EditProjectEnvContentHint4>;
export declare function editProjectEnvContentHint4ToJSON(editProjectEnvContentHint4: EditProjectEnvContentHint4): string;
export declare function editProjectEnvContentHint4FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint4, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint3$inboundSchema: z.ZodType<EditProjectEnvContentHint3, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint3$outboundSchema: z.ZodType<EditProjectEnvContentHint3$Outbound, z.ZodTypeDef, EditProjectEnvContentHint3>;
export declare function editProjectEnvContentHint3ToJSON(editProjectEnvContentHint3: EditProjectEnvContentHint3): string;
export declare function editProjectEnvContentHint3FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint3, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint2$inboundSchema: z.ZodType<EditProjectEnvContentHint2, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint2$outboundSchema: z.ZodType<EditProjectEnvContentHint2$Outbound, z.ZodTypeDef, EditProjectEnvContentHint2>;
export declare function editProjectEnvContentHint2ToJSON(editProjectEnvContentHint2: EditProjectEnvContentHint2): string;
export declare function editProjectEnvContentHint2FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint2, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvContentHint1$inboundSchema: z.ZodType<EditProjectEnvContentHint1, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvContentHint1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const EditProjectEnvContentHint1$outboundSchema: z.ZodType<EditProjectEnvContentHint1$Outbound, z.ZodTypeDef, EditProjectEnvContentHint1>;
export declare function editProjectEnvContentHint1ToJSON(editProjectEnvContentHint1: EditProjectEnvContentHint1): string;
export declare function editProjectEnvContentHint1FromJSON(jsonString: string): SafeParseResult<EditProjectEnvContentHint1, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvResponseBodyContentHint$inboundSchema: z.ZodType<EditProjectEnvResponseBodyContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvResponseBodyContentHint$Outbound = EditProjectEnvContentHint1$Outbound | EditProjectEnvContentHint2$Outbound | EditProjectEnvContentHint3$Outbound | EditProjectEnvContentHint4$Outbound | EditProjectEnvContentHint5$Outbound | EditProjectEnvContentHint6$Outbound | EditProjectEnvContentHint7$Outbound | EditProjectEnvContentHint8$Outbound | EditProjectEnvContentHint9$Outbound | EditProjectEnvContentHint10$Outbound | EditProjectEnvContentHint11$Outbound | EditProjectEnvContentHint12$Outbound | EditProjectEnvContentHint13$Outbound | EditProjectEnvContentHint14$Outbound | EditProjectEnvContentHint15$Outbound;
/** @internal */
export declare const EditProjectEnvResponseBodyContentHint$outboundSchema: z.ZodType<EditProjectEnvResponseBodyContentHint$Outbound, z.ZodTypeDef, EditProjectEnvResponseBodyContentHint>;
export declare function editProjectEnvResponseBodyContentHintToJSON(editProjectEnvResponseBodyContentHint: EditProjectEnvResponseBodyContentHint): string;
export declare function editProjectEnvResponseBodyContentHintFromJSON(jsonString: string): SafeParseResult<EditProjectEnvResponseBodyContentHint, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvResponseBodyProjectsType$inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvResponseBodyProjectsType>;
/** @internal */
export declare const EditProjectEnvResponseBodyProjectsType$outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvResponseBodyProjectsType>;
/** @internal */
export declare const EditProjectEnvResponseBodyInternalContentHint$inboundSchema: z.ZodType<EditProjectEnvResponseBodyInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvResponseBodyInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const EditProjectEnvResponseBodyInternalContentHint$outboundSchema: z.ZodType<EditProjectEnvResponseBodyInternalContentHint$Outbound, z.ZodTypeDef, EditProjectEnvResponseBodyInternalContentHint>;
export declare function editProjectEnvResponseBodyInternalContentHintToJSON(editProjectEnvResponseBodyInternalContentHint: EditProjectEnvResponseBodyInternalContentHint): string;
export declare function editProjectEnvResponseBodyInternalContentHintFromJSON(jsonString: string): SafeParseResult<EditProjectEnvResponseBodyInternalContentHint, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvResponseBody1$inboundSchema: z.ZodType<EditProjectEnvResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvResponseBody1$Outbound = {
    target?: Array<string> | string | undefined;
    type: string;
    sunsetSecretId?: string | undefined;
    decrypted?: boolean | undefined;
    value: string;
    id?: string | undefined;
    key: string;
    configurationId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    createdBy?: string | null | undefined;
    updatedBy?: string | null | undefined;
    gitBranch?: string | undefined;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    contentHint?: EditProjectEnvContentHint1$Outbound | EditProjectEnvContentHint2$Outbound | EditProjectEnvContentHint3$Outbound | EditProjectEnvContentHint4$Outbound | EditProjectEnvContentHint5$Outbound | EditProjectEnvContentHint6$Outbound | EditProjectEnvContentHint7$Outbound | EditProjectEnvContentHint8$Outbound | EditProjectEnvContentHint9$Outbound | EditProjectEnvContentHint10$Outbound | EditProjectEnvContentHint11$Outbound | EditProjectEnvContentHint12$Outbound | EditProjectEnvContentHint13$Outbound | EditProjectEnvContentHint14$Outbound | EditProjectEnvContentHint15$Outbound | null | undefined;
    internalContentHint?: EditProjectEnvResponseBodyInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const EditProjectEnvResponseBody1$outboundSchema: z.ZodType<EditProjectEnvResponseBody1$Outbound, z.ZodTypeDef, EditProjectEnvResponseBody1>;
export declare function editProjectEnvResponseBody1ToJSON(editProjectEnvResponseBody1: EditProjectEnvResponseBody1): string;
export declare function editProjectEnvResponseBody1FromJSON(jsonString: string): SafeParseResult<EditProjectEnvResponseBody1, SDKValidationError>;
/** @internal */
export declare const EditProjectEnvResponseBody$inboundSchema: z.ZodType<EditProjectEnvResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type EditProjectEnvResponseBody$Outbound = EditProjectEnvResponseBody1$Outbound | EditProjectEnvResponseBody2$Outbound;
/** @internal */
export declare const EditProjectEnvResponseBody$outboundSchema: z.ZodType<EditProjectEnvResponseBody$Outbound, z.ZodTypeDef, EditProjectEnvResponseBody>;
export declare function editProjectEnvResponseBodyToJSON(editProjectEnvResponseBody: EditProjectEnvResponseBody): string;
export declare function editProjectEnvResponseBodyFromJSON(jsonString: string): SafeParseResult<EditProjectEnvResponseBody, SDKValidationError>;
//# sourceMappingURL=editprojectenvop.d.ts.map