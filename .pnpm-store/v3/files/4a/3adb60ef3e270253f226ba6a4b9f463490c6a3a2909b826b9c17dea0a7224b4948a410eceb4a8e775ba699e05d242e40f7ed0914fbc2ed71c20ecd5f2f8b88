import * as z from "zod/v3";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type GetProjectEnvRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The unique ID for the environment variable to get the decrypted value.
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
};
export declare const GetProjectEnvTargetProjectsResponse2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type GetProjectEnvTargetProjectsResponse2 = ClosedEnum<typeof GetProjectEnvTargetProjectsResponse2>;
export type GetProjectEnvResponseBodyProjectsResponseTarget = Array<string> | GetProjectEnvTargetProjectsResponse2;
export declare const GetProjectEnvResponseBodyProjectsResponseType: {
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
    readonly Secret: "secret";
};
export type GetProjectEnvResponseBodyProjectsResponseType = ClosedEnum<typeof GetProjectEnvResponseBodyProjectsResponseType>;
export type GetProjectEnvContentHintProjectsResponse15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type GetProjectEnvContentHintProjectsResponse14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type GetProjectEnvContentHintProjectsResponse13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse12 = {
    type: "postgres-database";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse11 = {
    type: "postgres-password";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse10 = {
    type: "postgres-host";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse9 = {
    type: "postgres-user";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse6 = {
    type: "postgres-url";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type GetProjectEnvContentHintProjectsResponse1 = {
    type: "redis-url";
    storeId: string;
};
export type GetProjectEnvResponseBodyProjectsResponseContentHint = GetProjectEnvContentHintProjectsResponse1 | GetProjectEnvContentHintProjectsResponse2 | GetProjectEnvContentHintProjectsResponse3 | GetProjectEnvContentHintProjectsResponse4 | GetProjectEnvContentHintProjectsResponse5 | GetProjectEnvContentHintProjectsResponse6 | GetProjectEnvContentHintProjectsResponse7 | GetProjectEnvContentHintProjectsResponse8 | GetProjectEnvContentHintProjectsResponse9 | GetProjectEnvContentHintProjectsResponse10 | GetProjectEnvContentHintProjectsResponse11 | GetProjectEnvContentHintProjectsResponse12 | GetProjectEnvContentHintProjectsResponse13 | GetProjectEnvContentHintProjectsResponse14 | GetProjectEnvContentHintProjectsResponse15;
export declare const GetProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type: {
    readonly FlagsSecret: "flags-secret";
};
export type GetProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type = ClosedEnum<typeof GetProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type GetProjectEnvResponseBodyProjectsResponseInternalContentHint = {
    type: GetProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type GetProjectEnvResponseBody3 = {
    target?: Array<string> | GetProjectEnvTargetProjectsResponse2 | undefined;
    type: GetProjectEnvResponseBodyProjectsResponseType;
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
    contentHint?: GetProjectEnvContentHintProjectsResponse1 | GetProjectEnvContentHintProjectsResponse2 | GetProjectEnvContentHintProjectsResponse3 | GetProjectEnvContentHintProjectsResponse4 | GetProjectEnvContentHintProjectsResponse5 | GetProjectEnvContentHintProjectsResponse6 | GetProjectEnvContentHintProjectsResponse7 | GetProjectEnvContentHintProjectsResponse8 | GetProjectEnvContentHintProjectsResponse9 | GetProjectEnvContentHintProjectsResponse10 | GetProjectEnvContentHintProjectsResponse11 | GetProjectEnvContentHintProjectsResponse12 | GetProjectEnvContentHintProjectsResponse13 | GetProjectEnvContentHintProjectsResponse14 | GetProjectEnvContentHintProjectsResponse15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: GetProjectEnvResponseBodyProjectsResponseInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
export declare const GetProjectEnvTargetProjects2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type GetProjectEnvTargetProjects2 = ClosedEnum<typeof GetProjectEnvTargetProjects2>;
export declare const GetProjectEnvTargetProjects1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type GetProjectEnvTargetProjects1 = ClosedEnum<typeof GetProjectEnvTargetProjects1>;
export type GetProjectEnvResponseBodyProjectsTarget = Array<GetProjectEnvTargetProjects1> | GetProjectEnvTargetProjects2;
export declare const GetProjectEnvResponseBodyProjectsType: {
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
    readonly Secret: "secret";
};
export type GetProjectEnvResponseBodyProjectsType = ClosedEnum<typeof GetProjectEnvResponseBodyProjectsType>;
export type GetProjectEnvContentHintProjects15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type GetProjectEnvContentHintProjects14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type GetProjectEnvContentHintProjects13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type GetProjectEnvContentHintProjects12 = {
    type: "postgres-database";
    storeId: string;
};
export type GetProjectEnvContentHintProjects11 = {
    type: "postgres-password";
    storeId: string;
};
export type GetProjectEnvContentHintProjects10 = {
    type: "postgres-host";
    storeId: string;
};
export type GetProjectEnvContentHintProjects9 = {
    type: "postgres-user";
    storeId: string;
};
export type GetProjectEnvContentHintProjects8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type GetProjectEnvContentHintProjects7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type GetProjectEnvContentHintProjects6 = {
    type: "postgres-url";
    storeId: string;
};
export type GetProjectEnvContentHintProjects5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type GetProjectEnvContentHintProjects4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type GetProjectEnvContentHintProjects3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type GetProjectEnvContentHintProjects2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type GetProjectEnvContentHintProjects1 = {
    type: "redis-url";
    storeId: string;
};
export type GetProjectEnvResponseBodyProjectsContentHint = GetProjectEnvContentHintProjects1 | GetProjectEnvContentHintProjects2 | GetProjectEnvContentHintProjects3 | GetProjectEnvContentHintProjects4 | GetProjectEnvContentHintProjects5 | GetProjectEnvContentHintProjects6 | GetProjectEnvContentHintProjects7 | GetProjectEnvContentHintProjects8 | GetProjectEnvContentHintProjects9 | GetProjectEnvContentHintProjects10 | GetProjectEnvContentHintProjects11 | GetProjectEnvContentHintProjects12 | GetProjectEnvContentHintProjects13 | GetProjectEnvContentHintProjects14 | GetProjectEnvContentHintProjects15;
export declare const GetProjectEnvResponseBodyProjectsResponse200Type: {
    readonly FlagsSecret: "flags-secret";
};
export type GetProjectEnvResponseBodyProjectsResponse200Type = ClosedEnum<typeof GetProjectEnvResponseBodyProjectsResponse200Type>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type GetProjectEnvResponseBodyProjectsInternalContentHint = {
    type: GetProjectEnvResponseBodyProjectsResponse200Type;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type GetProjectEnvResponseBody2 = {
    target?: Array<GetProjectEnvTargetProjects1> | GetProjectEnvTargetProjects2 | undefined;
    type: GetProjectEnvResponseBodyProjectsType;
    /**
     * This is used to identiy variables that have been migrated from type secret to sensitive.
     */
    sunsetSecretId?: string | undefined;
    decrypted?: boolean | undefined;
    value: string;
    vsmValue?: string | undefined;
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
    contentHint?: GetProjectEnvContentHintProjects1 | GetProjectEnvContentHintProjects2 | GetProjectEnvContentHintProjects3 | GetProjectEnvContentHintProjects4 | GetProjectEnvContentHintProjects5 | GetProjectEnvContentHintProjects6 | GetProjectEnvContentHintProjects7 | GetProjectEnvContentHintProjects8 | GetProjectEnvContentHintProjects9 | GetProjectEnvContentHintProjects10 | GetProjectEnvContentHintProjects11 | GetProjectEnvContentHintProjects12 | GetProjectEnvContentHintProjects13 | GetProjectEnvContentHintProjects14 | GetProjectEnvContentHintProjects15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: GetProjectEnvResponseBodyProjectsInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
export declare const GetProjectEnvTarget2: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type GetProjectEnvTarget2 = ClosedEnum<typeof GetProjectEnvTarget2>;
export declare const GetProjectEnvTarget1: {
    readonly Production: "production";
    readonly Preview: "preview";
    readonly Development: "development";
};
export type GetProjectEnvTarget1 = ClosedEnum<typeof GetProjectEnvTarget1>;
export type GetProjectEnvResponseBodyTarget = Array<GetProjectEnvTarget1> | GetProjectEnvTarget2;
export declare const GetProjectEnvResponseBodyType: {
    readonly System: "system";
    readonly Encrypted: "encrypted";
    readonly Plain: "plain";
    readonly Sensitive: "sensitive";
    readonly Secret: "secret";
};
export type GetProjectEnvResponseBodyType = ClosedEnum<typeof GetProjectEnvResponseBodyType>;
export type GetProjectEnvContentHint15 = {
    type: "flags-connection-string";
    projectId: string;
};
export type GetProjectEnvContentHint14 = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
export type GetProjectEnvContentHint13 = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
export type GetProjectEnvContentHint12 = {
    type: "postgres-database";
    storeId: string;
};
export type GetProjectEnvContentHint11 = {
    type: "postgres-password";
    storeId: string;
};
export type GetProjectEnvContentHint10 = {
    type: "postgres-host";
    storeId: string;
};
export type GetProjectEnvContentHint9 = {
    type: "postgres-user";
    storeId: string;
};
export type GetProjectEnvContentHint8 = {
    type: "postgres-prisma-url";
    storeId: string;
};
export type GetProjectEnvContentHint7 = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
export type GetProjectEnvContentHint6 = {
    type: "postgres-url";
    storeId: string;
};
export type GetProjectEnvContentHint5 = {
    type: "blob-read-write-token";
    storeId: string;
};
export type GetProjectEnvContentHint4 = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
export type GetProjectEnvContentHint3 = {
    type: "redis-rest-api-token";
    storeId: string;
};
export type GetProjectEnvContentHint2 = {
    type: "redis-rest-api-url";
    storeId: string;
};
export type GetProjectEnvContentHint1 = {
    type: "redis-url";
    storeId: string;
};
export type GetProjectEnvResponseBodyContentHint = GetProjectEnvContentHint1 | GetProjectEnvContentHint2 | GetProjectEnvContentHint3 | GetProjectEnvContentHint4 | GetProjectEnvContentHint5 | GetProjectEnvContentHint6 | GetProjectEnvContentHint7 | GetProjectEnvContentHint8 | GetProjectEnvContentHint9 | GetProjectEnvContentHint10 | GetProjectEnvContentHint11 | GetProjectEnvContentHint12 | GetProjectEnvContentHint13 | GetProjectEnvContentHint14 | GetProjectEnvContentHint15;
export declare const GetProjectEnvResponseBodyProjectsResponse200ApplicationJSONType: {
    readonly FlagsSecret: "flags-secret";
};
export type GetProjectEnvResponseBodyProjectsResponse200ApplicationJSONType = ClosedEnum<typeof GetProjectEnvResponseBodyProjectsResponse200ApplicationJSONType>;
/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type GetProjectEnvResponseBodyInternalContentHint = {
    type: GetProjectEnvResponseBodyProjectsResponse200ApplicationJSONType;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};
export type GetProjectEnvResponseBody1 = {
    decrypted: boolean;
    target?: Array<GetProjectEnvTarget1> | GetProjectEnvTarget2 | undefined;
    type: GetProjectEnvResponseBodyType;
    /**
     * This is used to identiy variables that have been migrated from type secret to sensitive.
     */
    sunsetSecretId?: string | undefined;
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
    contentHint?: GetProjectEnvContentHint1 | GetProjectEnvContentHint2 | GetProjectEnvContentHint3 | GetProjectEnvContentHint4 | GetProjectEnvContentHint5 | GetProjectEnvContentHint6 | GetProjectEnvContentHint7 | GetProjectEnvContentHint8 | GetProjectEnvContentHint9 | GetProjectEnvContentHint10 | GetProjectEnvContentHint11 | GetProjectEnvContentHint12 | GetProjectEnvContentHint13 | GetProjectEnvContentHint14 | GetProjectEnvContentHint15 | null | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: GetProjectEnvResponseBodyInternalContentHint | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
export type GetProjectEnvResponseBody = GetProjectEnvResponseBody1 | GetProjectEnvResponseBody2 | GetProjectEnvResponseBody3;
/** @internal */
export declare const GetProjectEnvRequest$inboundSchema: z.ZodType<GetProjectEnvRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvRequest$Outbound = {
    idOrName: string;
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};
/** @internal */
export declare const GetProjectEnvRequest$outboundSchema: z.ZodType<GetProjectEnvRequest$Outbound, z.ZodTypeDef, GetProjectEnvRequest>;
export declare function getProjectEnvRequestToJSON(getProjectEnvRequest: GetProjectEnvRequest): string;
export declare function getProjectEnvRequestFromJSON(jsonString: string): SafeParseResult<GetProjectEnvRequest, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvTargetProjectsResponse2$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvTargetProjectsResponse2>;
/** @internal */
export declare const GetProjectEnvTargetProjectsResponse2$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvTargetProjectsResponse2>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponseTarget$inboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsResponseTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBodyProjectsResponseTarget$Outbound = Array<string> | string;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponseTarget$outboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsResponseTarget$Outbound, z.ZodTypeDef, GetProjectEnvResponseBodyProjectsResponseTarget>;
export declare function getProjectEnvResponseBodyProjectsResponseTargetToJSON(getProjectEnvResponseBodyProjectsResponseTarget: GetProjectEnvResponseBodyProjectsResponseTarget): string;
export declare function getProjectEnvResponseBodyProjectsResponseTargetFromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBodyProjectsResponseTarget, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponseType$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyProjectsResponseType>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponseType$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyProjectsResponseType>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse15$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse15, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse15$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse15$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse15>;
export declare function getProjectEnvContentHintProjectsResponse15ToJSON(getProjectEnvContentHintProjectsResponse15: GetProjectEnvContentHintProjectsResponse15): string;
export declare function getProjectEnvContentHintProjectsResponse15FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse15, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse14$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse14, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse14$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse14$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse14>;
export declare function getProjectEnvContentHintProjectsResponse14ToJSON(getProjectEnvContentHintProjectsResponse14: GetProjectEnvContentHintProjectsResponse14): string;
export declare function getProjectEnvContentHintProjectsResponse14FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse14, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse13$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse13, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse13$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse13$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse13>;
export declare function getProjectEnvContentHintProjectsResponse13ToJSON(getProjectEnvContentHintProjectsResponse13: GetProjectEnvContentHintProjectsResponse13): string;
export declare function getProjectEnvContentHintProjectsResponse13FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse13, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse12$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse12, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse12$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse12$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse12>;
export declare function getProjectEnvContentHintProjectsResponse12ToJSON(getProjectEnvContentHintProjectsResponse12: GetProjectEnvContentHintProjectsResponse12): string;
export declare function getProjectEnvContentHintProjectsResponse12FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse12, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse11$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse11, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse11$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse11$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse11>;
export declare function getProjectEnvContentHintProjectsResponse11ToJSON(getProjectEnvContentHintProjectsResponse11: GetProjectEnvContentHintProjectsResponse11): string;
export declare function getProjectEnvContentHintProjectsResponse11FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse11, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse10$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse10, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse10$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse10$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse10>;
export declare function getProjectEnvContentHintProjectsResponse10ToJSON(getProjectEnvContentHintProjectsResponse10: GetProjectEnvContentHintProjectsResponse10): string;
export declare function getProjectEnvContentHintProjectsResponse10FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse10, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse9$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse9, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse9$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse9$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse9>;
export declare function getProjectEnvContentHintProjectsResponse9ToJSON(getProjectEnvContentHintProjectsResponse9: GetProjectEnvContentHintProjectsResponse9): string;
export declare function getProjectEnvContentHintProjectsResponse9FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse9, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse8$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse8, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse8$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse8$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse8>;
export declare function getProjectEnvContentHintProjectsResponse8ToJSON(getProjectEnvContentHintProjectsResponse8: GetProjectEnvContentHintProjectsResponse8): string;
export declare function getProjectEnvContentHintProjectsResponse8FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse8, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse7$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse7, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse7$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse7$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse7>;
export declare function getProjectEnvContentHintProjectsResponse7ToJSON(getProjectEnvContentHintProjectsResponse7: GetProjectEnvContentHintProjectsResponse7): string;
export declare function getProjectEnvContentHintProjectsResponse7FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse7, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse6$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse6, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse6$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse6$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse6>;
export declare function getProjectEnvContentHintProjectsResponse6ToJSON(getProjectEnvContentHintProjectsResponse6: GetProjectEnvContentHintProjectsResponse6): string;
export declare function getProjectEnvContentHintProjectsResponse6FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse6, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse5$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse5, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse5$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse5$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse5>;
export declare function getProjectEnvContentHintProjectsResponse5ToJSON(getProjectEnvContentHintProjectsResponse5: GetProjectEnvContentHintProjectsResponse5): string;
export declare function getProjectEnvContentHintProjectsResponse5FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse5, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse4$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse4, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse4$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse4$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse4>;
export declare function getProjectEnvContentHintProjectsResponse4ToJSON(getProjectEnvContentHintProjectsResponse4: GetProjectEnvContentHintProjectsResponse4): string;
export declare function getProjectEnvContentHintProjectsResponse4FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse4, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse3$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse3$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse3$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse3>;
export declare function getProjectEnvContentHintProjectsResponse3ToJSON(getProjectEnvContentHintProjectsResponse3: GetProjectEnvContentHintProjectsResponse3): string;
export declare function getProjectEnvContentHintProjectsResponse3FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse3, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse2$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse2$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse2$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse2>;
export declare function getProjectEnvContentHintProjectsResponse2ToJSON(getProjectEnvContentHintProjectsResponse2: GetProjectEnvContentHintProjectsResponse2): string;
export declare function getProjectEnvContentHintProjectsResponse2FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse2, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse1$inboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjectsResponse1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjectsResponse1$outboundSchema: z.ZodType<GetProjectEnvContentHintProjectsResponse1$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjectsResponse1>;
export declare function getProjectEnvContentHintProjectsResponse1ToJSON(getProjectEnvContentHintProjectsResponse1: GetProjectEnvContentHintProjectsResponse1): string;
export declare function getProjectEnvContentHintProjectsResponse1FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjectsResponse1, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponseContentHint$inboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsResponseContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBodyProjectsResponseContentHint$Outbound = GetProjectEnvContentHintProjectsResponse1$Outbound | GetProjectEnvContentHintProjectsResponse2$Outbound | GetProjectEnvContentHintProjectsResponse3$Outbound | GetProjectEnvContentHintProjectsResponse4$Outbound | GetProjectEnvContentHintProjectsResponse5$Outbound | GetProjectEnvContentHintProjectsResponse6$Outbound | GetProjectEnvContentHintProjectsResponse7$Outbound | GetProjectEnvContentHintProjectsResponse8$Outbound | GetProjectEnvContentHintProjectsResponse9$Outbound | GetProjectEnvContentHintProjectsResponse10$Outbound | GetProjectEnvContentHintProjectsResponse11$Outbound | GetProjectEnvContentHintProjectsResponse12$Outbound | GetProjectEnvContentHintProjectsResponse13$Outbound | GetProjectEnvContentHintProjectsResponse14$Outbound | GetProjectEnvContentHintProjectsResponse15$Outbound;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponseContentHint$outboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsResponseContentHint$Outbound, z.ZodTypeDef, GetProjectEnvResponseBodyProjectsResponseContentHint>;
export declare function getProjectEnvResponseBodyProjectsResponseContentHintToJSON(getProjectEnvResponseBodyProjectsResponseContentHint: GetProjectEnvResponseBodyProjectsResponseContentHint): string;
export declare function getProjectEnvResponseBodyProjectsResponseContentHintFromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBodyProjectsResponseContentHint, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyProjectsResponse200ApplicationJson3Type>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponseInternalContentHint$inboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsResponseInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBodyProjectsResponseInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponseInternalContentHint$outboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsResponseInternalContentHint$Outbound, z.ZodTypeDef, GetProjectEnvResponseBodyProjectsResponseInternalContentHint>;
export declare function getProjectEnvResponseBodyProjectsResponseInternalContentHintToJSON(getProjectEnvResponseBodyProjectsResponseInternalContentHint: GetProjectEnvResponseBodyProjectsResponseInternalContentHint): string;
export declare function getProjectEnvResponseBodyProjectsResponseInternalContentHintFromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBodyProjectsResponseInternalContentHint, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBody3$inboundSchema: z.ZodType<GetProjectEnvResponseBody3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBody3$Outbound = {
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
    contentHint?: GetProjectEnvContentHintProjectsResponse1$Outbound | GetProjectEnvContentHintProjectsResponse2$Outbound | GetProjectEnvContentHintProjectsResponse3$Outbound | GetProjectEnvContentHintProjectsResponse4$Outbound | GetProjectEnvContentHintProjectsResponse5$Outbound | GetProjectEnvContentHintProjectsResponse6$Outbound | GetProjectEnvContentHintProjectsResponse7$Outbound | GetProjectEnvContentHintProjectsResponse8$Outbound | GetProjectEnvContentHintProjectsResponse9$Outbound | GetProjectEnvContentHintProjectsResponse10$Outbound | GetProjectEnvContentHintProjectsResponse11$Outbound | GetProjectEnvContentHintProjectsResponse12$Outbound | GetProjectEnvContentHintProjectsResponse13$Outbound | GetProjectEnvContentHintProjectsResponse14$Outbound | GetProjectEnvContentHintProjectsResponse15$Outbound | null | undefined;
    internalContentHint?: GetProjectEnvResponseBodyProjectsResponseInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const GetProjectEnvResponseBody3$outboundSchema: z.ZodType<GetProjectEnvResponseBody3$Outbound, z.ZodTypeDef, GetProjectEnvResponseBody3>;
export declare function getProjectEnvResponseBody3ToJSON(getProjectEnvResponseBody3: GetProjectEnvResponseBody3): string;
export declare function getProjectEnvResponseBody3FromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBody3, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvTargetProjects2$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvTargetProjects2>;
/** @internal */
export declare const GetProjectEnvTargetProjects2$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvTargetProjects2>;
/** @internal */
export declare const GetProjectEnvTargetProjects1$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvTargetProjects1>;
/** @internal */
export declare const GetProjectEnvTargetProjects1$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvTargetProjects1>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsTarget$inboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBodyProjectsTarget$Outbound = Array<string> | string;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsTarget$outboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsTarget$Outbound, z.ZodTypeDef, GetProjectEnvResponseBodyProjectsTarget>;
export declare function getProjectEnvResponseBodyProjectsTargetToJSON(getProjectEnvResponseBodyProjectsTarget: GetProjectEnvResponseBodyProjectsTarget): string;
export declare function getProjectEnvResponseBodyProjectsTargetFromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBodyProjectsTarget, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsType$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyProjectsType>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsType$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyProjectsType>;
/** @internal */
export declare const GetProjectEnvContentHintProjects15$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects15, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects15$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects15$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects15>;
export declare function getProjectEnvContentHintProjects15ToJSON(getProjectEnvContentHintProjects15: GetProjectEnvContentHintProjects15): string;
export declare function getProjectEnvContentHintProjects15FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects15, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects14$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects14, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects14$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects14$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects14>;
export declare function getProjectEnvContentHintProjects14ToJSON(getProjectEnvContentHintProjects14: GetProjectEnvContentHintProjects14): string;
export declare function getProjectEnvContentHintProjects14FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects14, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects13$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects13, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects13$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects13$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects13>;
export declare function getProjectEnvContentHintProjects13ToJSON(getProjectEnvContentHintProjects13: GetProjectEnvContentHintProjects13): string;
export declare function getProjectEnvContentHintProjects13FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects13, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects12$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects12, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects12$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects12$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects12>;
export declare function getProjectEnvContentHintProjects12ToJSON(getProjectEnvContentHintProjects12: GetProjectEnvContentHintProjects12): string;
export declare function getProjectEnvContentHintProjects12FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects12, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects11$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects11, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects11$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects11$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects11>;
export declare function getProjectEnvContentHintProjects11ToJSON(getProjectEnvContentHintProjects11: GetProjectEnvContentHintProjects11): string;
export declare function getProjectEnvContentHintProjects11FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects11, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects10$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects10, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects10$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects10$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects10>;
export declare function getProjectEnvContentHintProjects10ToJSON(getProjectEnvContentHintProjects10: GetProjectEnvContentHintProjects10): string;
export declare function getProjectEnvContentHintProjects10FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects10, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects9$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects9, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects9$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects9$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects9>;
export declare function getProjectEnvContentHintProjects9ToJSON(getProjectEnvContentHintProjects9: GetProjectEnvContentHintProjects9): string;
export declare function getProjectEnvContentHintProjects9FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects9, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects8$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects8, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects8$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects8$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects8>;
export declare function getProjectEnvContentHintProjects8ToJSON(getProjectEnvContentHintProjects8: GetProjectEnvContentHintProjects8): string;
export declare function getProjectEnvContentHintProjects8FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects8, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects7$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects7, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects7$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects7$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects7>;
export declare function getProjectEnvContentHintProjects7ToJSON(getProjectEnvContentHintProjects7: GetProjectEnvContentHintProjects7): string;
export declare function getProjectEnvContentHintProjects7FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects7, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects6$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects6, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects6$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects6$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects6>;
export declare function getProjectEnvContentHintProjects6ToJSON(getProjectEnvContentHintProjects6: GetProjectEnvContentHintProjects6): string;
export declare function getProjectEnvContentHintProjects6FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects6, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects5$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects5, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects5$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects5$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects5>;
export declare function getProjectEnvContentHintProjects5ToJSON(getProjectEnvContentHintProjects5: GetProjectEnvContentHintProjects5): string;
export declare function getProjectEnvContentHintProjects5FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects5, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects4$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects4, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects4$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects4$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects4>;
export declare function getProjectEnvContentHintProjects4ToJSON(getProjectEnvContentHintProjects4: GetProjectEnvContentHintProjects4): string;
export declare function getProjectEnvContentHintProjects4FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects4, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects3$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects3$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects3$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects3>;
export declare function getProjectEnvContentHintProjects3ToJSON(getProjectEnvContentHintProjects3: GetProjectEnvContentHintProjects3): string;
export declare function getProjectEnvContentHintProjects3FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects3, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects2$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects2$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects2$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects2>;
export declare function getProjectEnvContentHintProjects2ToJSON(getProjectEnvContentHintProjects2: GetProjectEnvContentHintProjects2): string;
export declare function getProjectEnvContentHintProjects2FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects2, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHintProjects1$inboundSchema: z.ZodType<GetProjectEnvContentHintProjects1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHintProjects1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHintProjects1$outboundSchema: z.ZodType<GetProjectEnvContentHintProjects1$Outbound, z.ZodTypeDef, GetProjectEnvContentHintProjects1>;
export declare function getProjectEnvContentHintProjects1ToJSON(getProjectEnvContentHintProjects1: GetProjectEnvContentHintProjects1): string;
export declare function getProjectEnvContentHintProjects1FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHintProjects1, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsContentHint$inboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBodyProjectsContentHint$Outbound = GetProjectEnvContentHintProjects1$Outbound | GetProjectEnvContentHintProjects2$Outbound | GetProjectEnvContentHintProjects3$Outbound | GetProjectEnvContentHintProjects4$Outbound | GetProjectEnvContentHintProjects5$Outbound | GetProjectEnvContentHintProjects6$Outbound | GetProjectEnvContentHintProjects7$Outbound | GetProjectEnvContentHintProjects8$Outbound | GetProjectEnvContentHintProjects9$Outbound | GetProjectEnvContentHintProjects10$Outbound | GetProjectEnvContentHintProjects11$Outbound | GetProjectEnvContentHintProjects12$Outbound | GetProjectEnvContentHintProjects13$Outbound | GetProjectEnvContentHintProjects14$Outbound | GetProjectEnvContentHintProjects15$Outbound;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsContentHint$outboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsContentHint$Outbound, z.ZodTypeDef, GetProjectEnvResponseBodyProjectsContentHint>;
export declare function getProjectEnvResponseBodyProjectsContentHintToJSON(getProjectEnvResponseBodyProjectsContentHint: GetProjectEnvResponseBodyProjectsContentHint): string;
export declare function getProjectEnvResponseBodyProjectsContentHintFromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBodyProjectsContentHint, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponse200Type$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyProjectsResponse200Type>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponse200Type$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyProjectsResponse200Type>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsInternalContentHint$inboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBodyProjectsInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsInternalContentHint$outboundSchema: z.ZodType<GetProjectEnvResponseBodyProjectsInternalContentHint$Outbound, z.ZodTypeDef, GetProjectEnvResponseBodyProjectsInternalContentHint>;
export declare function getProjectEnvResponseBodyProjectsInternalContentHintToJSON(getProjectEnvResponseBodyProjectsInternalContentHint: GetProjectEnvResponseBodyProjectsInternalContentHint): string;
export declare function getProjectEnvResponseBodyProjectsInternalContentHintFromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBodyProjectsInternalContentHint, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBody2$inboundSchema: z.ZodType<GetProjectEnvResponseBody2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBody2$Outbound = {
    target?: Array<string> | string | undefined;
    type: string;
    sunsetSecretId?: string | undefined;
    decrypted?: boolean | undefined;
    value: string;
    vsmValue?: string | undefined;
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
    contentHint?: GetProjectEnvContentHintProjects1$Outbound | GetProjectEnvContentHintProjects2$Outbound | GetProjectEnvContentHintProjects3$Outbound | GetProjectEnvContentHintProjects4$Outbound | GetProjectEnvContentHintProjects5$Outbound | GetProjectEnvContentHintProjects6$Outbound | GetProjectEnvContentHintProjects7$Outbound | GetProjectEnvContentHintProjects8$Outbound | GetProjectEnvContentHintProjects9$Outbound | GetProjectEnvContentHintProjects10$Outbound | GetProjectEnvContentHintProjects11$Outbound | GetProjectEnvContentHintProjects12$Outbound | GetProjectEnvContentHintProjects13$Outbound | GetProjectEnvContentHintProjects14$Outbound | GetProjectEnvContentHintProjects15$Outbound | null | undefined;
    internalContentHint?: GetProjectEnvResponseBodyProjectsInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const GetProjectEnvResponseBody2$outboundSchema: z.ZodType<GetProjectEnvResponseBody2$Outbound, z.ZodTypeDef, GetProjectEnvResponseBody2>;
export declare function getProjectEnvResponseBody2ToJSON(getProjectEnvResponseBody2: GetProjectEnvResponseBody2): string;
export declare function getProjectEnvResponseBody2FromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBody2, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvTarget2$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvTarget2>;
/** @internal */
export declare const GetProjectEnvTarget2$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvTarget2>;
/** @internal */
export declare const GetProjectEnvTarget1$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvTarget1>;
/** @internal */
export declare const GetProjectEnvTarget1$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvTarget1>;
/** @internal */
export declare const GetProjectEnvResponseBodyTarget$inboundSchema: z.ZodType<GetProjectEnvResponseBodyTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBodyTarget$Outbound = Array<string> | string;
/** @internal */
export declare const GetProjectEnvResponseBodyTarget$outboundSchema: z.ZodType<GetProjectEnvResponseBodyTarget$Outbound, z.ZodTypeDef, GetProjectEnvResponseBodyTarget>;
export declare function getProjectEnvResponseBodyTargetToJSON(getProjectEnvResponseBodyTarget: GetProjectEnvResponseBodyTarget): string;
export declare function getProjectEnvResponseBodyTargetFromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBodyTarget, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBodyType$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyType>;
/** @internal */
export declare const GetProjectEnvResponseBodyType$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyType>;
/** @internal */
export declare const GetProjectEnvContentHint15$inboundSchema: z.ZodType<GetProjectEnvContentHint15, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint15$Outbound = {
    type: "flags-connection-string";
    projectId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint15$outboundSchema: z.ZodType<GetProjectEnvContentHint15$Outbound, z.ZodTypeDef, GetProjectEnvContentHint15>;
export declare function getProjectEnvContentHint15ToJSON(getProjectEnvContentHint15: GetProjectEnvContentHint15): string;
export declare function getProjectEnvContentHint15FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint15, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint14$inboundSchema: z.ZodType<GetProjectEnvContentHint14, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint14$Outbound = {
    type: "integration-store-secret";
    storeId: string;
    integrationId: string;
    integrationProductId: string;
    integrationConfigurationId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint14$outboundSchema: z.ZodType<GetProjectEnvContentHint14$Outbound, z.ZodTypeDef, GetProjectEnvContentHint14>;
export declare function getProjectEnvContentHint14ToJSON(getProjectEnvContentHint14: GetProjectEnvContentHint14): string;
export declare function getProjectEnvContentHint14FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint14, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint13$inboundSchema: z.ZodType<GetProjectEnvContentHint13, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint13$Outbound = {
    type: "postgres-url-no-ssl";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint13$outboundSchema: z.ZodType<GetProjectEnvContentHint13$Outbound, z.ZodTypeDef, GetProjectEnvContentHint13>;
export declare function getProjectEnvContentHint13ToJSON(getProjectEnvContentHint13: GetProjectEnvContentHint13): string;
export declare function getProjectEnvContentHint13FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint13, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint12$inboundSchema: z.ZodType<GetProjectEnvContentHint12, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint12$Outbound = {
    type: "postgres-database";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint12$outboundSchema: z.ZodType<GetProjectEnvContentHint12$Outbound, z.ZodTypeDef, GetProjectEnvContentHint12>;
export declare function getProjectEnvContentHint12ToJSON(getProjectEnvContentHint12: GetProjectEnvContentHint12): string;
export declare function getProjectEnvContentHint12FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint12, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint11$inboundSchema: z.ZodType<GetProjectEnvContentHint11, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint11$Outbound = {
    type: "postgres-password";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint11$outboundSchema: z.ZodType<GetProjectEnvContentHint11$Outbound, z.ZodTypeDef, GetProjectEnvContentHint11>;
export declare function getProjectEnvContentHint11ToJSON(getProjectEnvContentHint11: GetProjectEnvContentHint11): string;
export declare function getProjectEnvContentHint11FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint11, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint10$inboundSchema: z.ZodType<GetProjectEnvContentHint10, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint10$Outbound = {
    type: "postgres-host";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint10$outboundSchema: z.ZodType<GetProjectEnvContentHint10$Outbound, z.ZodTypeDef, GetProjectEnvContentHint10>;
export declare function getProjectEnvContentHint10ToJSON(getProjectEnvContentHint10: GetProjectEnvContentHint10): string;
export declare function getProjectEnvContentHint10FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint10, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint9$inboundSchema: z.ZodType<GetProjectEnvContentHint9, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint9$Outbound = {
    type: "postgres-user";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint9$outboundSchema: z.ZodType<GetProjectEnvContentHint9$Outbound, z.ZodTypeDef, GetProjectEnvContentHint9>;
export declare function getProjectEnvContentHint9ToJSON(getProjectEnvContentHint9: GetProjectEnvContentHint9): string;
export declare function getProjectEnvContentHint9FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint9, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint8$inboundSchema: z.ZodType<GetProjectEnvContentHint8, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint8$Outbound = {
    type: "postgres-prisma-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint8$outboundSchema: z.ZodType<GetProjectEnvContentHint8$Outbound, z.ZodTypeDef, GetProjectEnvContentHint8>;
export declare function getProjectEnvContentHint8ToJSON(getProjectEnvContentHint8: GetProjectEnvContentHint8): string;
export declare function getProjectEnvContentHint8FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint8, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint7$inboundSchema: z.ZodType<GetProjectEnvContentHint7, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint7$Outbound = {
    type: "postgres-url-non-pooling";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint7$outboundSchema: z.ZodType<GetProjectEnvContentHint7$Outbound, z.ZodTypeDef, GetProjectEnvContentHint7>;
export declare function getProjectEnvContentHint7ToJSON(getProjectEnvContentHint7: GetProjectEnvContentHint7): string;
export declare function getProjectEnvContentHint7FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint7, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint6$inboundSchema: z.ZodType<GetProjectEnvContentHint6, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint6$Outbound = {
    type: "postgres-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint6$outboundSchema: z.ZodType<GetProjectEnvContentHint6$Outbound, z.ZodTypeDef, GetProjectEnvContentHint6>;
export declare function getProjectEnvContentHint6ToJSON(getProjectEnvContentHint6: GetProjectEnvContentHint6): string;
export declare function getProjectEnvContentHint6FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint6, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint5$inboundSchema: z.ZodType<GetProjectEnvContentHint5, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint5$Outbound = {
    type: "blob-read-write-token";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint5$outboundSchema: z.ZodType<GetProjectEnvContentHint5$Outbound, z.ZodTypeDef, GetProjectEnvContentHint5>;
export declare function getProjectEnvContentHint5ToJSON(getProjectEnvContentHint5: GetProjectEnvContentHint5): string;
export declare function getProjectEnvContentHint5FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint5, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint4$inboundSchema: z.ZodType<GetProjectEnvContentHint4, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint4$Outbound = {
    type: "redis-rest-api-read-only-token";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint4$outboundSchema: z.ZodType<GetProjectEnvContentHint4$Outbound, z.ZodTypeDef, GetProjectEnvContentHint4>;
export declare function getProjectEnvContentHint4ToJSON(getProjectEnvContentHint4: GetProjectEnvContentHint4): string;
export declare function getProjectEnvContentHint4FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint4, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint3$inboundSchema: z.ZodType<GetProjectEnvContentHint3, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint3$Outbound = {
    type: "redis-rest-api-token";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint3$outboundSchema: z.ZodType<GetProjectEnvContentHint3$Outbound, z.ZodTypeDef, GetProjectEnvContentHint3>;
export declare function getProjectEnvContentHint3ToJSON(getProjectEnvContentHint3: GetProjectEnvContentHint3): string;
export declare function getProjectEnvContentHint3FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint3, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint2$inboundSchema: z.ZodType<GetProjectEnvContentHint2, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint2$Outbound = {
    type: "redis-rest-api-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint2$outboundSchema: z.ZodType<GetProjectEnvContentHint2$Outbound, z.ZodTypeDef, GetProjectEnvContentHint2>;
export declare function getProjectEnvContentHint2ToJSON(getProjectEnvContentHint2: GetProjectEnvContentHint2): string;
export declare function getProjectEnvContentHint2FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint2, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvContentHint1$inboundSchema: z.ZodType<GetProjectEnvContentHint1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvContentHint1$Outbound = {
    type: "redis-url";
    storeId: string;
};
/** @internal */
export declare const GetProjectEnvContentHint1$outboundSchema: z.ZodType<GetProjectEnvContentHint1$Outbound, z.ZodTypeDef, GetProjectEnvContentHint1>;
export declare function getProjectEnvContentHint1ToJSON(getProjectEnvContentHint1: GetProjectEnvContentHint1): string;
export declare function getProjectEnvContentHint1FromJSON(jsonString: string): SafeParseResult<GetProjectEnvContentHint1, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBodyContentHint$inboundSchema: z.ZodType<GetProjectEnvResponseBodyContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBodyContentHint$Outbound = GetProjectEnvContentHint1$Outbound | GetProjectEnvContentHint2$Outbound | GetProjectEnvContentHint3$Outbound | GetProjectEnvContentHint4$Outbound | GetProjectEnvContentHint5$Outbound | GetProjectEnvContentHint6$Outbound | GetProjectEnvContentHint7$Outbound | GetProjectEnvContentHint8$Outbound | GetProjectEnvContentHint9$Outbound | GetProjectEnvContentHint10$Outbound | GetProjectEnvContentHint11$Outbound | GetProjectEnvContentHint12$Outbound | GetProjectEnvContentHint13$Outbound | GetProjectEnvContentHint14$Outbound | GetProjectEnvContentHint15$Outbound;
/** @internal */
export declare const GetProjectEnvResponseBodyContentHint$outboundSchema: z.ZodType<GetProjectEnvResponseBodyContentHint$Outbound, z.ZodTypeDef, GetProjectEnvResponseBodyContentHint>;
export declare function getProjectEnvResponseBodyContentHintToJSON(getProjectEnvResponseBodyContentHint: GetProjectEnvResponseBodyContentHint): string;
export declare function getProjectEnvResponseBodyContentHintFromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBodyContentHint, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponse200ApplicationJSONType$inboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyProjectsResponse200ApplicationJSONType>;
/** @internal */
export declare const GetProjectEnvResponseBodyProjectsResponse200ApplicationJSONType$outboundSchema: z.ZodNativeEnum<typeof GetProjectEnvResponseBodyProjectsResponse200ApplicationJSONType>;
/** @internal */
export declare const GetProjectEnvResponseBodyInternalContentHint$inboundSchema: z.ZodType<GetProjectEnvResponseBodyInternalContentHint, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBodyInternalContentHint$Outbound = {
    type: string;
    encryptedValue: string;
};
/** @internal */
export declare const GetProjectEnvResponseBodyInternalContentHint$outboundSchema: z.ZodType<GetProjectEnvResponseBodyInternalContentHint$Outbound, z.ZodTypeDef, GetProjectEnvResponseBodyInternalContentHint>;
export declare function getProjectEnvResponseBodyInternalContentHintToJSON(getProjectEnvResponseBodyInternalContentHint: GetProjectEnvResponseBodyInternalContentHint): string;
export declare function getProjectEnvResponseBodyInternalContentHintFromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBodyInternalContentHint, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBody1$inboundSchema: z.ZodType<GetProjectEnvResponseBody1, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBody1$Outbound = {
    decrypted: boolean;
    target?: Array<string> | string | undefined;
    type: string;
    sunsetSecretId?: string | undefined;
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
    contentHint?: GetProjectEnvContentHint1$Outbound | GetProjectEnvContentHint2$Outbound | GetProjectEnvContentHint3$Outbound | GetProjectEnvContentHint4$Outbound | GetProjectEnvContentHint5$Outbound | GetProjectEnvContentHint6$Outbound | GetProjectEnvContentHint7$Outbound | GetProjectEnvContentHint8$Outbound | GetProjectEnvContentHint9$Outbound | GetProjectEnvContentHint10$Outbound | GetProjectEnvContentHint11$Outbound | GetProjectEnvContentHint12$Outbound | GetProjectEnvContentHint13$Outbound | GetProjectEnvContentHint14$Outbound | GetProjectEnvContentHint15$Outbound | null | undefined;
    internalContentHint?: GetProjectEnvResponseBodyInternalContentHint$Outbound | null | undefined;
    comment?: string | undefined;
    customEnvironmentIds?: Array<string> | undefined;
};
/** @internal */
export declare const GetProjectEnvResponseBody1$outboundSchema: z.ZodType<GetProjectEnvResponseBody1$Outbound, z.ZodTypeDef, GetProjectEnvResponseBody1>;
export declare function getProjectEnvResponseBody1ToJSON(getProjectEnvResponseBody1: GetProjectEnvResponseBody1): string;
export declare function getProjectEnvResponseBody1FromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBody1, SDKValidationError>;
/** @internal */
export declare const GetProjectEnvResponseBody$inboundSchema: z.ZodType<GetProjectEnvResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetProjectEnvResponseBody$Outbound = GetProjectEnvResponseBody1$Outbound | GetProjectEnvResponseBody2$Outbound | GetProjectEnvResponseBody3$Outbound;
/** @internal */
export declare const GetProjectEnvResponseBody$outboundSchema: z.ZodType<GetProjectEnvResponseBody$Outbound, z.ZodTypeDef, GetProjectEnvResponseBody>;
export declare function getProjectEnvResponseBodyToJSON(getProjectEnvResponseBody: GetProjectEnvResponseBody): string;
export declare function getProjectEnvResponseBodyFromJSON(jsonString: string): SafeParseResult<GetProjectEnvResponseBody, SDKValidationError>;
//# sourceMappingURL=getprojectenvop.d.ts.map