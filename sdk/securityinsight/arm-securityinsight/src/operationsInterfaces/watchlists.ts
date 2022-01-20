/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Watchlist,
  WatchlistsListOptionalParams,
  WatchlistsGetOptionalParams,
  WatchlistsGetResponse,
  WatchlistsDeleteOptionalParams,
  WatchlistsCreateOrUpdateOptionalParams,
  WatchlistsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Watchlists. */
export interface Watchlists {
  /**
   * Gets all watchlists, without watchlist items.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WatchlistsListOptionalParams
  ): PagedAsyncIterableIterator<Watchlist>;
  /**
   * Gets a watchlist, without its watchlist items.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    options?: WatchlistsGetOptionalParams
  ): Promise<WatchlistsGetResponse>;
  /**
   * Delete a watchlist.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    options?: WatchlistsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Creates or updates a watchlist and its watchlist items (bulk creation, e.g. through text/csv content
   * type). To create a Watchlist and its items, we should call this endpoint with rawContent and
   * contentType properties.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlist The watchlist
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    watchlist: Watchlist,
    options?: WatchlistsCreateOrUpdateOptionalParams
  ): Promise<WatchlistsCreateOrUpdateResponse>;
}