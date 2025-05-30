/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.21.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { JsonPatchInner } from '../models';
// @ts-ignore
import { ReverseProxy } from '../models';
// @ts-ignore
import { ReverseProxyList } from '../models';
/**
 * ReverseProxyV1alpha1Api - axios parameter creator
 * @export
 */
export const ReverseProxyV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create ReverseProxy
         * @param {ReverseProxy} [reverseProxy] Fresh reverseproxy
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReverseProxy: async (reverseProxy?: ReverseProxy, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/reverseproxies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reverseProxy, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete ReverseProxy
         * @param {string} name Name of reverseproxy
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteReverseProxy: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteReverseProxy', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get ReverseProxy
         * @param {string} name Name of reverseproxy
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReverseProxy: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getReverseProxy', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List ReverseProxy
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listReverseProxy: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/reverseproxies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch ReverseProxy
         * @param {string} name Name of reverseproxy
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchReverseProxy: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchReverseProxy', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update ReverseProxy
         * @param {string} name Name of reverseproxy
         * @param {ReverseProxy} [reverseProxy] Updated reverseproxy
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateReverseProxy: async (name: string, reverseProxy?: ReverseProxy, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateReverseProxy', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reverseProxy, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReverseProxyV1alpha1Api - functional programming interface
 * @export
 */
export const ReverseProxyV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReverseProxyV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create ReverseProxy
         * @param {ReverseProxy} [reverseProxy] Fresh reverseproxy
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createReverseProxy(reverseProxy?: ReverseProxy, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReverseProxy>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createReverseProxy(reverseProxy, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReverseProxyV1alpha1Api.createReverseProxy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete ReverseProxy
         * @param {string} name Name of reverseproxy
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteReverseProxy(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteReverseProxy(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReverseProxyV1alpha1Api.deleteReverseProxy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get ReverseProxy
         * @param {string} name Name of reverseproxy
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReverseProxy(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReverseProxy>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReverseProxy(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReverseProxyV1alpha1Api.getReverseProxy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List ReverseProxy
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listReverseProxy(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReverseProxyList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listReverseProxy(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReverseProxyV1alpha1Api.listReverseProxy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch ReverseProxy
         * @param {string} name Name of reverseproxy
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchReverseProxy(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReverseProxy>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchReverseProxy(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReverseProxyV1alpha1Api.patchReverseProxy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update ReverseProxy
         * @param {string} name Name of reverseproxy
         * @param {ReverseProxy} [reverseProxy] Updated reverseproxy
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateReverseProxy(name: string, reverseProxy?: ReverseProxy, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReverseProxy>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateReverseProxy(name, reverseProxy, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReverseProxyV1alpha1Api.updateReverseProxy']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ReverseProxyV1alpha1Api - factory interface
 * @export
 */
export const ReverseProxyV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReverseProxyV1alpha1ApiFp(configuration)
    return {
        /**
         * Create ReverseProxy
         * @param {ReverseProxyV1alpha1ApiCreateReverseProxyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReverseProxy(requestParameters: ReverseProxyV1alpha1ApiCreateReverseProxyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ReverseProxy> {
            return localVarFp.createReverseProxy(requestParameters.reverseProxy, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete ReverseProxy
         * @param {ReverseProxyV1alpha1ApiDeleteReverseProxyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteReverseProxy(requestParameters: ReverseProxyV1alpha1ApiDeleteReverseProxyRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteReverseProxy(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get ReverseProxy
         * @param {ReverseProxyV1alpha1ApiGetReverseProxyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReverseProxy(requestParameters: ReverseProxyV1alpha1ApiGetReverseProxyRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReverseProxy> {
            return localVarFp.getReverseProxy(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List ReverseProxy
         * @param {ReverseProxyV1alpha1ApiListReverseProxyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listReverseProxy(requestParameters: ReverseProxyV1alpha1ApiListReverseProxyRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ReverseProxyList> {
            return localVarFp.listReverseProxy(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch ReverseProxy
         * @param {ReverseProxyV1alpha1ApiPatchReverseProxyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchReverseProxy(requestParameters: ReverseProxyV1alpha1ApiPatchReverseProxyRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReverseProxy> {
            return localVarFp.patchReverseProxy(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update ReverseProxy
         * @param {ReverseProxyV1alpha1ApiUpdateReverseProxyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateReverseProxy(requestParameters: ReverseProxyV1alpha1ApiUpdateReverseProxyRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReverseProxy> {
            return localVarFp.updateReverseProxy(requestParameters.name, requestParameters.reverseProxy, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createReverseProxy operation in ReverseProxyV1alpha1Api.
 * @export
 * @interface ReverseProxyV1alpha1ApiCreateReverseProxyRequest
 */
export interface ReverseProxyV1alpha1ApiCreateReverseProxyRequest {
    /**
     * Fresh reverseproxy
     * @type {ReverseProxy}
     * @memberof ReverseProxyV1alpha1ApiCreateReverseProxy
     */
    readonly reverseProxy?: ReverseProxy
}

/**
 * Request parameters for deleteReverseProxy operation in ReverseProxyV1alpha1Api.
 * @export
 * @interface ReverseProxyV1alpha1ApiDeleteReverseProxyRequest
 */
export interface ReverseProxyV1alpha1ApiDeleteReverseProxyRequest {
    /**
     * Name of reverseproxy
     * @type {string}
     * @memberof ReverseProxyV1alpha1ApiDeleteReverseProxy
     */
    readonly name: string
}

/**
 * Request parameters for getReverseProxy operation in ReverseProxyV1alpha1Api.
 * @export
 * @interface ReverseProxyV1alpha1ApiGetReverseProxyRequest
 */
export interface ReverseProxyV1alpha1ApiGetReverseProxyRequest {
    /**
     * Name of reverseproxy
     * @type {string}
     * @memberof ReverseProxyV1alpha1ApiGetReverseProxy
     */
    readonly name: string
}

/**
 * Request parameters for listReverseProxy operation in ReverseProxyV1alpha1Api.
 * @export
 * @interface ReverseProxyV1alpha1ApiListReverseProxyRequest
 */
export interface ReverseProxyV1alpha1ApiListReverseProxyRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ReverseProxyV1alpha1ApiListReverseProxy
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ReverseProxyV1alpha1ApiListReverseProxy
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ReverseProxyV1alpha1ApiListReverseProxy
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ReverseProxyV1alpha1ApiListReverseProxy
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ReverseProxyV1alpha1ApiListReverseProxy
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchReverseProxy operation in ReverseProxyV1alpha1Api.
 * @export
 * @interface ReverseProxyV1alpha1ApiPatchReverseProxyRequest
 */
export interface ReverseProxyV1alpha1ApiPatchReverseProxyRequest {
    /**
     * Name of reverseproxy
     * @type {string}
     * @memberof ReverseProxyV1alpha1ApiPatchReverseProxy
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof ReverseProxyV1alpha1ApiPatchReverseProxy
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateReverseProxy operation in ReverseProxyV1alpha1Api.
 * @export
 * @interface ReverseProxyV1alpha1ApiUpdateReverseProxyRequest
 */
export interface ReverseProxyV1alpha1ApiUpdateReverseProxyRequest {
    /**
     * Name of reverseproxy
     * @type {string}
     * @memberof ReverseProxyV1alpha1ApiUpdateReverseProxy
     */
    readonly name: string

    /**
     * Updated reverseproxy
     * @type {ReverseProxy}
     * @memberof ReverseProxyV1alpha1ApiUpdateReverseProxy
     */
    readonly reverseProxy?: ReverseProxy
}

/**
 * ReverseProxyV1alpha1Api - object-oriented interface
 * @export
 * @class ReverseProxyV1alpha1Api
 * @extends {BaseAPI}
 */
export class ReverseProxyV1alpha1Api extends BaseAPI {
    /**
     * Create ReverseProxy
     * @param {ReverseProxyV1alpha1ApiCreateReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReverseProxyV1alpha1Api
     */
    public createReverseProxy(requestParameters: ReverseProxyV1alpha1ApiCreateReverseProxyRequest = {}, options?: RawAxiosRequestConfig) {
        return ReverseProxyV1alpha1ApiFp(this.configuration).createReverseProxy(requestParameters.reverseProxy, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete ReverseProxy
     * @param {ReverseProxyV1alpha1ApiDeleteReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReverseProxyV1alpha1Api
     */
    public deleteReverseProxy(requestParameters: ReverseProxyV1alpha1ApiDeleteReverseProxyRequest, options?: RawAxiosRequestConfig) {
        return ReverseProxyV1alpha1ApiFp(this.configuration).deleteReverseProxy(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get ReverseProxy
     * @param {ReverseProxyV1alpha1ApiGetReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReverseProxyV1alpha1Api
     */
    public getReverseProxy(requestParameters: ReverseProxyV1alpha1ApiGetReverseProxyRequest, options?: RawAxiosRequestConfig) {
        return ReverseProxyV1alpha1ApiFp(this.configuration).getReverseProxy(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List ReverseProxy
     * @param {ReverseProxyV1alpha1ApiListReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReverseProxyV1alpha1Api
     */
    public listReverseProxy(requestParameters: ReverseProxyV1alpha1ApiListReverseProxyRequest = {}, options?: RawAxiosRequestConfig) {
        return ReverseProxyV1alpha1ApiFp(this.configuration).listReverseProxy(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch ReverseProxy
     * @param {ReverseProxyV1alpha1ApiPatchReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReverseProxyV1alpha1Api
     */
    public patchReverseProxy(requestParameters: ReverseProxyV1alpha1ApiPatchReverseProxyRequest, options?: RawAxiosRequestConfig) {
        return ReverseProxyV1alpha1ApiFp(this.configuration).patchReverseProxy(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update ReverseProxy
     * @param {ReverseProxyV1alpha1ApiUpdateReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReverseProxyV1alpha1Api
     */
    public updateReverseProxy(requestParameters: ReverseProxyV1alpha1ApiUpdateReverseProxyRequest, options?: RawAxiosRequestConfig) {
        return ReverseProxyV1alpha1ApiFp(this.configuration).updateReverseProxy(requestParameters.name, requestParameters.reverseProxy, options).then((request) => request(this.axios, this.basePath));
    }
}

