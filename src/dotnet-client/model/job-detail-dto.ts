/**
 * WebApplication1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface JobDetailDto { 
    name?: string | null;
    group?: string | null;
    jobType?: string | null;
    description?: string | null;
    durable?: boolean;
    requestsRecovery?: boolean;
    concurrentExecutionDisallowed?: boolean;
    persistJobDataAfterExecution?: boolean;
    jobDataMap?: { [key: string]: any; } | null;
}
