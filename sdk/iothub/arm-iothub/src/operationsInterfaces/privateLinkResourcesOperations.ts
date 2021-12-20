/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PrivateLinkResourcesListOptionalParams,
  PrivateLinkResourcesListResponse,
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse
} from "../models";

/** Interface representing a PrivateLinkResourcesOperations. */
export interface PrivateLinkResourcesOperations {
  /**
   * List private link resources for the given IotHub
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: PrivateLinkResourcesListOptionalParams
  ): Promise<PrivateLinkResourcesListResponse>;
  /**
   * Get the specified private link resource for the given IotHub
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param groupId The name of the private link resource
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    groupId: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse>;
}