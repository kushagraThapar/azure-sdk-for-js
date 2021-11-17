/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ApplicationGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DesktopVirtualizationAPIClientContext } from "../desktopVirtualizationAPIClientContext";
import {
  ApplicationGroup,
  ApplicationGroupsListByResourceGroupNextOptionalParams,
  ApplicationGroupsListByResourceGroupOptionalParams,
  ApplicationGroupsListBySubscriptionNextOptionalParams,
  ApplicationGroupsListBySubscriptionOptionalParams,
  ApplicationGroupsGetOptionalParams,
  ApplicationGroupsGetResponse,
  ApplicationGroupsCreateOrUpdateOptionalParams,
  ApplicationGroupsCreateOrUpdateResponse,
  ApplicationGroupsDeleteOptionalParams,
  ApplicationGroupsUpdateOptionalParams,
  ApplicationGroupsUpdateResponse,
  ApplicationGroupsListByResourceGroupResponse,
  ApplicationGroupsListBySubscriptionResponse,
  ApplicationGroupsListByResourceGroupNextResponse,
  ApplicationGroupsListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApplicationGroups operations. */
export class ApplicationGroupsImpl implements ApplicationGroups {
  private readonly client: DesktopVirtualizationAPIClientContext;

  /**
   * Initialize a new instance of the class ApplicationGroups class.
   * @param client Reference to the service client
   */
  constructor(client: DesktopVirtualizationAPIClientContext) {
    this.client = client;
  }

  /**
   * List applicationGroups.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationGroupsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ApplicationGroup> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ApplicationGroupsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ApplicationGroup[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ApplicationGroupsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ApplicationGroup> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List applicationGroups in subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ApplicationGroupsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ApplicationGroup> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: ApplicationGroupsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ApplicationGroup[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: ApplicationGroupsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ApplicationGroup> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get an application group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationGroupName: string,
    options?: ApplicationGroupsGetOptionalParams
  ): Promise<ApplicationGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update an applicationGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param applicationGroup Object containing ApplicationGroup definitions.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    applicationGroupName: string,
    applicationGroup: ApplicationGroup,
    options?: ApplicationGroupsCreateOrUpdateOptionalParams
  ): Promise<ApplicationGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGroupName, applicationGroup, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Remove an applicationGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    applicationGroupName: string,
    options?: ApplicationGroupsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGroupName, options },
      deleteOperationSpec
    );
  }

  /**
   * Update an applicationGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    applicationGroupName: string,
    options?: ApplicationGroupsUpdateOptionalParams
  ): Promise<ApplicationGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGroupName, options },
      updateOperationSpec
    );
  }

  /**
   * List applicationGroups.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationGroupsListByResourceGroupOptionalParams
  ): Promise<ApplicationGroupsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * List applicationGroups in subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ApplicationGroupsListBySubscriptionOptionalParams
  ): Promise<ApplicationGroupsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ApplicationGroupsListByResourceGroupNextOptionalParams
  ): Promise<ApplicationGroupsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ApplicationGroupsListBySubscriptionNextOptionalParams
  ): Promise<ApplicationGroupsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.applicationGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroup
    },
    201: {
      bodyMapper: Mappers.ApplicationGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.applicationGroup,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.applicationGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.applicationGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.applicationGroup1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.applicationGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroupList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DesktopVirtualization/applicationGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroupList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroupList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGroupList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};