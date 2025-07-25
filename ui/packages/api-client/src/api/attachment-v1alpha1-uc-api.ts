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
import { Attachment } from '../models';
// @ts-ignore
import { AttachmentList } from '../models';
// @ts-ignore
import { UcUploadFromUrlRequest } from '../models';
// @ts-ignore
import { UcUploadRequestFormData } from '../models';
/**
 * AttachmentV1alpha1UcApi - axios parameter creator
 * @export
 */
export const AttachmentV1alpha1UcApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create attachment for the given post.
         * @param {File} file 
         * @param {boolean} [waitForPermalink] Wait for permalink.
         * @param {string} [postName] Post name.
         * @param {string} [singlePageName] Single page name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAttachmentForPost: async (file: File, waitForPermalink?: boolean, postName?: string, singlePageName?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            assertParamExists('createAttachmentForPost', 'file', file)
            const localVarPath = `/apis/uc.api.storage.halo.run/v1alpha1/attachments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (waitForPermalink !== undefined) {
                localVarQueryParameter['waitForPermalink'] = waitForPermalink;
            }


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
            if (postName !== undefined) { 
                localVarFormParams.append('postName', postName as any);
            }
    
            if (singlePageName !== undefined) { 
                localVarFormParams.append('singlePageName', singlePageName as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Upload attachment from the given URL.
         * @param {UcUploadFromUrlRequest} ucUploadFromUrlRequest 
         * @param {boolean} [waitForPermalink] Wait for permalink.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        externalTransferAttachment1: async (ucUploadFromUrlRequest: UcUploadFromUrlRequest, waitForPermalink?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ucUploadFromUrlRequest' is not null or undefined
            assertParamExists('externalTransferAttachment1', 'ucUploadFromUrlRequest', ucUploadFromUrlRequest)
            const localVarPath = `/apis/uc.api.storage.halo.run/v1alpha1/attachments/-/upload-from-url`;
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

            if (waitForPermalink !== undefined) {
                localVarQueryParameter['waitForPermalink'] = waitForPermalink;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(ucUploadFromUrlRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List attachments of the current user uploaded.
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
         * @param {string} [keyword] Keyword for searching.
         * @param {Array<string>} [accepts] Acceptable media types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMyAttachments: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, ungrouped?: boolean, keyword?: string, accepts?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/uc.api.storage.halo.run/v1alpha1/attachments`;
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

            if (ungrouped !== undefined) {
                localVarQueryParameter['ungrouped'] = ungrouped;
            }

            if (keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            if (accepts) {
                localVarQueryParameter['accepts'] = accepts;
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
         * Upload attachment to user center storage.
         * @param {File} file 
         * @param {UcUploadRequestFormData} [formData] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadUcAttachment: async (file: File, formData?: UcUploadRequestFormData, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            assertParamExists('uploadUcAttachment', 'file', file)
            const localVarPath = `/apis/uc.api.storage.halo.run/v1alpha1/attachments/-/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
            if (formData !== undefined) { 
                localVarFormParams.append('formData', new Blob([JSON.stringify(formData)], { type: "application/json", }));
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AttachmentV1alpha1UcApi - functional programming interface
 * @export
 */
export const AttachmentV1alpha1UcApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AttachmentV1alpha1UcApiAxiosParamCreator(configuration)
    return {
        /**
         * Create attachment for the given post.
         * @param {File} file 
         * @param {boolean} [waitForPermalink] Wait for permalink.
         * @param {string} [postName] Post name.
         * @param {string} [singlePageName] Single page name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAttachmentForPost(file: File, waitForPermalink?: boolean, postName?: string, singlePageName?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAttachmentForPost(file, waitForPermalink, postName, singlePageName, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentV1alpha1UcApi.createAttachmentForPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Upload attachment from the given URL.
         * @param {UcUploadFromUrlRequest} ucUploadFromUrlRequest 
         * @param {boolean} [waitForPermalink] Wait for permalink.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async externalTransferAttachment1(ucUploadFromUrlRequest: UcUploadFromUrlRequest, waitForPermalink?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.externalTransferAttachment1(ucUploadFromUrlRequest, waitForPermalink, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentV1alpha1UcApi.externalTransferAttachment1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List attachments of the current user uploaded.
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
         * @param {string} [keyword] Keyword for searching.
         * @param {Array<string>} [accepts] Acceptable media types.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMyAttachments(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, ungrouped?: boolean, keyword?: string, accepts?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttachmentList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMyAttachments(page, size, labelSelector, fieldSelector, sort, ungrouped, keyword, accepts, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentV1alpha1UcApi.listMyAttachments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Upload attachment to user center storage.
         * @param {File} file 
         * @param {UcUploadRequestFormData} [formData] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadUcAttachment(file: File, formData?: UcUploadRequestFormData, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadUcAttachment(file, formData, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AttachmentV1alpha1UcApi.uploadUcAttachment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AttachmentV1alpha1UcApi - factory interface
 * @export
 */
export const AttachmentV1alpha1UcApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AttachmentV1alpha1UcApiFp(configuration)
    return {
        /**
         * Create attachment for the given post.
         * @param {AttachmentV1alpha1UcApiCreateAttachmentForPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAttachmentForPost(requestParameters: AttachmentV1alpha1UcApiCreateAttachmentForPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<Attachment> {
            return localVarFp.createAttachmentForPost(requestParameters.file, requestParameters.waitForPermalink, requestParameters.postName, requestParameters.singlePageName, options).then((request) => request(axios, basePath));
        },
        /**
         * Upload attachment from the given URL.
         * @param {AttachmentV1alpha1UcApiExternalTransferAttachment1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        externalTransferAttachment1(requestParameters: AttachmentV1alpha1UcApiExternalTransferAttachment1Request, options?: RawAxiosRequestConfig): AxiosPromise<Attachment> {
            return localVarFp.externalTransferAttachment1(requestParameters.ucUploadFromUrlRequest, requestParameters.waitForPermalink, options).then((request) => request(axios, basePath));
        },
        /**
         * List attachments of the current user uploaded.
         * @param {AttachmentV1alpha1UcApiListMyAttachmentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMyAttachments(requestParameters: AttachmentV1alpha1UcApiListMyAttachmentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AttachmentList> {
            return localVarFp.listMyAttachments(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, requestParameters.ungrouped, requestParameters.keyword, requestParameters.accepts, options).then((request) => request(axios, basePath));
        },
        /**
         * Upload attachment to user center storage.
         * @param {AttachmentV1alpha1UcApiUploadUcAttachmentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadUcAttachment(requestParameters: AttachmentV1alpha1UcApiUploadUcAttachmentRequest, options?: RawAxiosRequestConfig): AxiosPromise<Attachment> {
            return localVarFp.uploadUcAttachment(requestParameters.file, requestParameters.formData, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAttachmentForPost operation in AttachmentV1alpha1UcApi.
 * @export
 * @interface AttachmentV1alpha1UcApiCreateAttachmentForPostRequest
 */
export interface AttachmentV1alpha1UcApiCreateAttachmentForPostRequest {
    /**
     * 
     * @type {File}
     * @memberof AttachmentV1alpha1UcApiCreateAttachmentForPost
     */
    readonly file: File

    /**
     * Wait for permalink.
     * @type {boolean}
     * @memberof AttachmentV1alpha1UcApiCreateAttachmentForPost
     */
    readonly waitForPermalink?: boolean

    /**
     * Post name.
     * @type {string}
     * @memberof AttachmentV1alpha1UcApiCreateAttachmentForPost
     */
    readonly postName?: string

    /**
     * Single page name.
     * @type {string}
     * @memberof AttachmentV1alpha1UcApiCreateAttachmentForPost
     */
    readonly singlePageName?: string
}

/**
 * Request parameters for externalTransferAttachment1 operation in AttachmentV1alpha1UcApi.
 * @export
 * @interface AttachmentV1alpha1UcApiExternalTransferAttachment1Request
 */
export interface AttachmentV1alpha1UcApiExternalTransferAttachment1Request {
    /**
     * 
     * @type {UcUploadFromUrlRequest}
     * @memberof AttachmentV1alpha1UcApiExternalTransferAttachment1
     */
    readonly ucUploadFromUrlRequest: UcUploadFromUrlRequest

    /**
     * Wait for permalink.
     * @type {boolean}
     * @memberof AttachmentV1alpha1UcApiExternalTransferAttachment1
     */
    readonly waitForPermalink?: boolean
}

/**
 * Request parameters for listMyAttachments operation in AttachmentV1alpha1UcApi.
 * @export
 * @interface AttachmentV1alpha1UcApiListMyAttachmentsRequest
 */
export interface AttachmentV1alpha1UcApiListMyAttachmentsRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof AttachmentV1alpha1UcApiListMyAttachments
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof AttachmentV1alpha1UcApiListMyAttachments
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof AttachmentV1alpha1UcApiListMyAttachments
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof AttachmentV1alpha1UcApiListMyAttachments
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof AttachmentV1alpha1UcApiListMyAttachments
     */
    readonly sort?: Array<string>

    /**
     * Filter attachments without group. This parameter will ignore group parameter.
     * @type {boolean}
     * @memberof AttachmentV1alpha1UcApiListMyAttachments
     */
    readonly ungrouped?: boolean

    /**
     * Keyword for searching.
     * @type {string}
     * @memberof AttachmentV1alpha1UcApiListMyAttachments
     */
    readonly keyword?: string

    /**
     * Acceptable media types.
     * @type {Array<string>}
     * @memberof AttachmentV1alpha1UcApiListMyAttachments
     */
    readonly accepts?: Array<string>
}

/**
 * Request parameters for uploadUcAttachment operation in AttachmentV1alpha1UcApi.
 * @export
 * @interface AttachmentV1alpha1UcApiUploadUcAttachmentRequest
 */
export interface AttachmentV1alpha1UcApiUploadUcAttachmentRequest {
    /**
     * 
     * @type {File}
     * @memberof AttachmentV1alpha1UcApiUploadUcAttachment
     */
    readonly file: File

    /**
     * 
     * @type {UcUploadRequestFormData}
     * @memberof AttachmentV1alpha1UcApiUploadUcAttachment
     */
    readonly formData?: UcUploadRequestFormData
}

/**
 * AttachmentV1alpha1UcApi - object-oriented interface
 * @export
 * @class AttachmentV1alpha1UcApi
 * @extends {BaseAPI}
 */
export class AttachmentV1alpha1UcApi extends BaseAPI {
    /**
     * Create attachment for the given post.
     * @param {AttachmentV1alpha1UcApiCreateAttachmentForPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentV1alpha1UcApi
     */
    public createAttachmentForPost(requestParameters: AttachmentV1alpha1UcApiCreateAttachmentForPostRequest, options?: RawAxiosRequestConfig) {
        return AttachmentV1alpha1UcApiFp(this.configuration).createAttachmentForPost(requestParameters.file, requestParameters.waitForPermalink, requestParameters.postName, requestParameters.singlePageName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Upload attachment from the given URL.
     * @param {AttachmentV1alpha1UcApiExternalTransferAttachment1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentV1alpha1UcApi
     */
    public externalTransferAttachment1(requestParameters: AttachmentV1alpha1UcApiExternalTransferAttachment1Request, options?: RawAxiosRequestConfig) {
        return AttachmentV1alpha1UcApiFp(this.configuration).externalTransferAttachment1(requestParameters.ucUploadFromUrlRequest, requestParameters.waitForPermalink, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List attachments of the current user uploaded.
     * @param {AttachmentV1alpha1UcApiListMyAttachmentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentV1alpha1UcApi
     */
    public listMyAttachments(requestParameters: AttachmentV1alpha1UcApiListMyAttachmentsRequest = {}, options?: RawAxiosRequestConfig) {
        return AttachmentV1alpha1UcApiFp(this.configuration).listMyAttachments(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, requestParameters.ungrouped, requestParameters.keyword, requestParameters.accepts, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Upload attachment to user center storage.
     * @param {AttachmentV1alpha1UcApiUploadUcAttachmentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentV1alpha1UcApi
     */
    public uploadUcAttachment(requestParameters: AttachmentV1alpha1UcApiUploadUcAttachmentRequest, options?: RawAxiosRequestConfig) {
        return AttachmentV1alpha1UcApiFp(this.configuration).uploadUcAttachment(requestParameters.file, requestParameters.formData, options).then((request) => request(this.axios, this.basePath));
    }
}

