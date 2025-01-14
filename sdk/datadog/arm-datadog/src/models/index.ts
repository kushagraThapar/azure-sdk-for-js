/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Response of a list operation. */
export interface DatadogAgreementResourceListResponse {
  /** Results of a list operation. */
  value?: DatadogAgreementResource[];
  /** Link to the next set of results, if any. */
  nextLink?: string;
}

export interface DatadogAgreementResource {
  /**
   * ARM id of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of the agreement.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Represents the properties of the resource. */
  properties?: DatadogAgreementProperties;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Terms properties. */
export interface DatadogAgreementProperties {
  /** Publisher identifier string. */
  publisher?: string;
  /** Product identifier string. */
  product?: string;
  /** Plan identifier string. */
  plan?: string;
  /** Link to HTML with Microsoft and Publisher terms. */
  licenseTextLink?: string;
  /** Link to the privacy policy of the publisher. */
  privacyPolicyLink?: string;
  /** Date and time in UTC of when the terms were accepted. This is empty if Accepted is false. */
  retrieveDatetime?: Date;
  /** Terms signature. */
  signature?: string;
  /** If any version of the terms have been accepted, otherwise false. */
  accepted?: boolean;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Response of a list operation. */
export interface DatadogApiKeyListResponse {
  /** Results of a list operation. */
  value?: DatadogApiKey[];
  /** Link to the next set of results, if any. */
  nextLink?: string;
}

export interface DatadogApiKey {
  /** The user that created the API key. */
  createdBy?: string;
  /** The name of the API key. */
  name?: string;
  /** The value of the API key. */
  key: string;
  /** The time of creation of the API key. */
  created?: string;
}

/** Response of a list operation. */
export interface DatadogHostListResponse {
  /** Results of a list operation. */
  value?: DatadogHost[];
  /** Link to the next set of results, if any. */
  nextLink?: string;
}

export interface DatadogHost {
  /** The name of the host. */
  name?: string;
  /** The aliases for the host. */
  aliases?: string[];
  /** The Datadog integrations reporting metrics for the host. */
  apps?: string[];
  meta?: DatadogHostMetadata;
}

export interface DatadogHostMetadata {
  /** The agent version. */
  agentVersion?: string;
  installMethod?: DatadogInstallMethod;
  logsAgent?: DatadogLogsAgent;
}

export interface DatadogInstallMethod {
  /** The tool. */
  tool?: string;
  /** The tool version. */
  toolVersion?: string;
  /** The installer version. */
  installerVersion?: string;
}

export interface DatadogLogsAgent {
  /** The transport. */
  transport?: string;
}

/** Response of a list operation. */
export interface LinkedResourceListResponse {
  /** Results of a list operation. */
  value?: LinkedResource[];
  /** Link to the next set of results, if any. */
  nextLink?: string;
}

/** The definition of a linked resource. */
export interface LinkedResource {
  /** The ARM id of the linked resource. */
  id?: string;
}

/** Response of a list operation. */
export interface MonitoredResourceListResponse {
  /** Results of a list operation. */
  value?: MonitoredResource[];
  /** Link to the next set of results, if any. */
  nextLink?: string;
}

/** The properties of a resource currently being monitored by the Datadog monitor resource. */
export interface MonitoredResource {
  /** The ARM id of the resource. */
  id?: string;
  /** Flag indicating if resource is sending metrics to Datadog. */
  sendingMetrics?: boolean;
  /** Reason for why the resource is sending metrics (or why it is not sending). */
  reasonForMetricsStatus?: string;
  /** Flag indicating if resource is sending logs to Datadog. */
  sendingLogs?: boolean;
  /** Reason for why the resource is sending logs (or why it is not sending). */
  reasonForLogsStatus?: string;
}

/** Result of GET request to list the Microsoft.Datadog operations. */
export interface OperationListResult {
  /** List of operations supported by the Microsoft.Datadog provider. */
  value?: OperationResult[];
  /** URL to get the next set of operation list results if there are any. */
  nextLink?: string;
}

/** A Microsoft.Datadog REST API operation. */
export interface OperationResult {
  /** Operation name, i.e., {provider}/{resource}/{operation}. */
  name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
  /** Indicates whether the operation is a data action */
  isDataAction?: boolean;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /** Service provider, i.e., Microsoft.Datadog. */
  provider?: string;
  /** Type on which the operation is performed, e.g., 'monitors'. */
  resource?: string;
  /** Operation type, e.g., read, write, delete, etc. */
  operation?: string;
  /** Description of the operation, e.g., 'Write monitors'. */
  description?: string;
}

/** Response of a list operation. */
export interface DatadogMonitorResourceListResponse {
  /** Results of a list operation. */
  value?: DatadogMonitorResource[];
  /** Link to the next set of results, if any. */
  nextLink?: string;
}

export interface DatadogMonitorResource {
  /**
   * ARM id of the monitor resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of the monitor resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the monitor resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  sku?: ResourceSku;
  /** Properties specific to the monitor resource. */
  properties?: MonitorProperties;
  identity?: IdentityProperties;
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  location: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

export interface ResourceSku {
  /** Name of the SKU. */
  name: string;
}

/** Properties specific to the monitor resource. */
export interface MonitorProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /** Flag specifying if the resource monitoring is enabled or disabled. */
  monitoringStatus?: MonitoringStatus;
  /**
   * Flag specifying the Marketplace Subscription Status of the resource. If payment is not made in time, the resource will go in Suspended state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly marketplaceSubscriptionStatus?: MarketplaceSubscriptionStatus;
  /** Datadog organization properties */
  datadogOrganizationProperties?: DatadogOrganizationProperties;
  /** User info */
  userInfo?: UserInfo;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly liftrResourceCategory?: LiftrResourceCategories;
  /**
   * The priority of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly liftrResourcePreference?: number;
}

/** Datadog organization properties */
export interface DatadogOrganizationProperties {
  /**
   * Name of the Datadog organization.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Id of the Datadog organization.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /** The auth code used to linking to an existing datadog organization. */
  linkingAuthCode?: string;
  /** The client_id from an existing in exchange for an auth token to link organization. */
  linkingClientId?: string;
  /** The redirect uri for linking. */
  redirectUri?: string;
  /** Api key associated to the Datadog organization. */
  apiKey?: string;
  /** Application key associated to the Datadog organization. */
  applicationKey?: string;
  /** The Id of the Enterprise App used for Single sign on. */
  enterpriseAppId?: string;
}

/** User info */
export interface UserInfo {
  /** Name of the user */
  name?: string;
  /** Email of the user used by Datadog for contacting them if needed */
  emailAddress?: string;
  /** Phone number of the user used by Datadog for contacting them if needed */
  phoneNumber?: string;
}

export interface IdentityProperties {
  /**
   * The identity ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** Identity type */
  type?: ManagedIdentityTypes;
}

/** The parameters for a PATCH request to a monitor resource. */
export interface DatadogMonitorResourceUpdateParameters {
  /** The set of properties that can be update in a PATCH request to a monitor resource. */
  properties?: MonitorUpdateProperties;
  /** The new tags of the monitor resource. */
  tags?: { [propertyName: string]: string };
  sku?: ResourceSku;
}

/** The set of properties that can be update in a PATCH request to a monitor resource. */
export interface MonitorUpdateProperties {
  /** Flag specifying if the resource monitoring is enabled or disabled. */
  monitoringStatus?: MonitoringStatus;
}

export interface DatadogSetPasswordLink {
  setPasswordLink?: string;
}

/** Response of a list operation. */
export interface MonitoringTagRulesListResponse {
  /** Results of a list operation. */
  value?: MonitoringTagRules[];
  /** Link to the next set of results, if any. */
  nextLink?: string;
}

/** Capture logs and metrics of Azure resources based on ARM tags. */
export interface MonitoringTagRules {
  /**
   * Name of the rule set.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The id of the rule set.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The type of the rule set.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Definition of the properties for a TagRules resource. */
  properties?: MonitoringTagRulesProperties;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Definition of the properties for a TagRules resource. */
export interface MonitoringTagRulesProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /** Set of rules for sending logs for the Monitor resource. */
  logRules?: LogRules;
  /** Set of rules for sending metrics for the Monitor resource. */
  metricRules?: MetricRules;
}

/** Set of rules for sending logs for the Monitor resource. */
export interface LogRules {
  /** Flag specifying if AAD logs should be sent for the Monitor resource. */
  sendAadLogs?: boolean;
  /** Flag specifying if Azure subscription logs should be sent for the Monitor resource. */
  sendSubscriptionLogs?: boolean;
  /** Flag specifying if Azure resource logs should be sent for the Monitor resource. */
  sendResourceLogs?: boolean;
  /** List of filtering tags to be used for capturing logs. This only takes effect if SendResourceLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags. */
  filteringTags?: FilteringTag[];
}

/** The definition of a filtering tag. Filtering tags are used for capturing resources and include/exclude them from being monitored. */
export interface FilteringTag {
  /** The name (also known as the key) of the tag. */
  name?: string;
  /** The value of the tag. */
  value?: string;
  /** Valid actions for a filtering tag. Exclusion takes priority over inclusion. */
  action?: TagAction;
}

/** Set of rules for sending metrics for the Monitor resource. */
export interface MetricRules {
  /** List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags. */
  filteringTags?: FilteringTag[];
}

/** Response of a list operation. */
export interface DatadogSingleSignOnResourceListResponse {
  /** Results of a list operation. */
  value?: DatadogSingleSignOnResource[];
  /** Link to the next set of results, if any. */
  nextLink?: string;
}

export interface DatadogSingleSignOnResource {
  /**
   * ARM id of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of the configuration.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  properties?: DatadogSingleSignOnProperties;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

export interface DatadogSingleSignOnProperties {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: ProvisioningState;
  /** Various states of the SSO resource */
  singleSignOnState?: SingleSignOnStates;
  /** The Id of the Enterprise App used for Single sign-on. */
  enterpriseAppId?: string;
  /**
   * The login URL specific to this Datadog Organization.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly singleSignOnUrl?: string;
}

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  Accepted = "Accepted",
  Creating = "Creating",
  Updating = "Updating",
  Deleting = "Deleting",
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "Canceled",
  Deleted = "Deleted",
  NotSpecified = "NotSpecified"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Deleted** \
 * **NotSpecified**
 */
export type ProvisioningState = string;

/** Known values of {@link MonitoringStatus} that the service accepts. */
export enum KnownMonitoringStatus {
  Enabled = "Enabled",
  Disabled = "Disabled"
}

/**
 * Defines values for MonitoringStatus. \
 * {@link KnownMonitoringStatus} can be used interchangeably with MonitoringStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type MonitoringStatus = string;

/** Known values of {@link MarketplaceSubscriptionStatus} that the service accepts. */
export enum KnownMarketplaceSubscriptionStatus {
  Provisioning = "Provisioning",
  Active = "Active",
  Suspended = "Suspended",
  Unsubscribed = "Unsubscribed"
}

/**
 * Defines values for MarketplaceSubscriptionStatus. \
 * {@link KnownMarketplaceSubscriptionStatus} can be used interchangeably with MarketplaceSubscriptionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Provisioning** \
 * **Active** \
 * **Suspended** \
 * **Unsubscribed**
 */
export type MarketplaceSubscriptionStatus = string;

/** Known values of {@link LiftrResourceCategories} that the service accepts. */
export enum KnownLiftrResourceCategories {
  Unknown = "Unknown",
  MonitorLogs = "MonitorLogs"
}

/**
 * Defines values for LiftrResourceCategories. \
 * {@link KnownLiftrResourceCategories} can be used interchangeably with LiftrResourceCategories,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **MonitorLogs**
 */
export type LiftrResourceCategories = string;

/** Known values of {@link ManagedIdentityTypes} that the service accepts. */
export enum KnownManagedIdentityTypes {
  SystemAssigned = "SystemAssigned",
  UserAssigned = "UserAssigned"
}

/**
 * Defines values for ManagedIdentityTypes. \
 * {@link KnownManagedIdentityTypes} can be used interchangeably with ManagedIdentityTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned** \
 * **UserAssigned**
 */
export type ManagedIdentityTypes = string;

/** Known values of {@link TagAction} that the service accepts. */
export enum KnownTagAction {
  Include = "Include",
  Exclude = "Exclude"
}

/**
 * Defines values for TagAction. \
 * {@link KnownTagAction} can be used interchangeably with TagAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Include** \
 * **Exclude**
 */
export type TagAction = string;

/** Known values of {@link SingleSignOnStates} that the service accepts. */
export enum KnownSingleSignOnStates {
  Initial = "Initial",
  Enable = "Enable",
  Disable = "Disable",
  Existing = "Existing"
}

/**
 * Defines values for SingleSignOnStates. \
 * {@link KnownSingleSignOnStates} can be used interchangeably with SingleSignOnStates,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Initial** \
 * **Enable** \
 * **Disable** \
 * **Existing**
 */
export type SingleSignOnStates = string;

/** Optional parameters. */
export interface MarketplaceAgreementsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type MarketplaceAgreementsListResponse = DatadogAgreementResourceListResponse;

/** Optional parameters. */
export interface MarketplaceAgreementsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  body?: DatadogAgreementResource;
}

/** Contains response data for the createOrUpdate operation. */
export type MarketplaceAgreementsCreateOrUpdateResponse = DatadogAgreementResource;

/** Optional parameters. */
export interface MarketplaceAgreementsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type MarketplaceAgreementsListNextResponse = DatadogAgreementResourceListResponse;

/** Optional parameters. */
export interface MonitorsListApiKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listApiKeys operation. */
export type MonitorsListApiKeysResponse = DatadogApiKeyListResponse;

/** Optional parameters. */
export interface MonitorsGetDefaultKeyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDefaultKey operation. */
export type MonitorsGetDefaultKeyResponse = DatadogApiKey;

/** Optional parameters. */
export interface MonitorsSetDefaultKeyOptionalParams
  extends coreClient.OperationOptions {
  body?: DatadogApiKey;
}

/** Optional parameters. */
export interface MonitorsListHostsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listHosts operation. */
export type MonitorsListHostsResponse = DatadogHostListResponse;

/** Optional parameters. */
export interface MonitorsListLinkedResourcesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listLinkedResources operation. */
export type MonitorsListLinkedResourcesResponse = LinkedResourceListResponse;

/** Optional parameters. */
export interface MonitorsListMonitoredResourcesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listMonitoredResources operation. */
export type MonitorsListMonitoredResourcesResponse = MonitoredResourceListResponse;

/** Optional parameters. */
export interface MonitorsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type MonitorsListResponse = DatadogMonitorResourceListResponse;

/** Optional parameters. */
export interface MonitorsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type MonitorsListByResourceGroupResponse = DatadogMonitorResourceListResponse;

/** Optional parameters. */
export interface MonitorsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type MonitorsGetResponse = DatadogMonitorResource;

/** Optional parameters. */
export interface MonitorsCreateOptionalParams
  extends coreClient.OperationOptions {
  body?: DatadogMonitorResource;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type MonitorsCreateResponse = DatadogMonitorResource;

/** Optional parameters. */
export interface MonitorsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The parameters for a PATCH request to a monitor resource. */
  body?: DatadogMonitorResourceUpdateParameters;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type MonitorsUpdateResponse = DatadogMonitorResource;

/** Optional parameters. */
export interface MonitorsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface MonitorsRefreshSetPasswordLinkOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the refreshSetPasswordLink operation. */
export type MonitorsRefreshSetPasswordLinkResponse = DatadogSetPasswordLink;

/** Optional parameters. */
export interface MonitorsListApiKeysNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listApiKeysNext operation. */
export type MonitorsListApiKeysNextResponse = DatadogApiKeyListResponse;

/** Optional parameters. */
export interface MonitorsListHostsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listHostsNext operation. */
export type MonitorsListHostsNextResponse = DatadogHostListResponse;

/** Optional parameters. */
export interface MonitorsListLinkedResourcesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listLinkedResourcesNext operation. */
export type MonitorsListLinkedResourcesNextResponse = LinkedResourceListResponse;

/** Optional parameters. */
export interface MonitorsListMonitoredResourcesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listMonitoredResourcesNext operation. */
export type MonitorsListMonitoredResourcesNextResponse = MonitoredResourceListResponse;

/** Optional parameters. */
export interface MonitorsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type MonitorsListNextResponse = DatadogMonitorResourceListResponse;

/** Optional parameters. */
export interface MonitorsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type MonitorsListByResourceGroupNextResponse = DatadogMonitorResourceListResponse;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface TagRulesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type TagRulesListResponse = MonitoringTagRulesListResponse;

/** Optional parameters. */
export interface TagRulesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Capture logs and metrics of Azure resources based on ARM tags. */
  body?: MonitoringTagRules;
}

/** Contains response data for the createOrUpdate operation. */
export type TagRulesCreateOrUpdateResponse = MonitoringTagRules;

/** Optional parameters. */
export interface TagRulesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type TagRulesGetResponse = MonitoringTagRules;

/** Optional parameters. */
export interface TagRulesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type TagRulesListNextResponse = MonitoringTagRulesListResponse;

/** Optional parameters. */
export interface SingleSignOnConfigurationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type SingleSignOnConfigurationsListResponse = DatadogSingleSignOnResourceListResponse;

/** Optional parameters. */
export interface SingleSignOnConfigurationsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  body?: DatadogSingleSignOnResource;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type SingleSignOnConfigurationsCreateOrUpdateResponse = DatadogSingleSignOnResource;

/** Optional parameters. */
export interface SingleSignOnConfigurationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SingleSignOnConfigurationsGetResponse = DatadogSingleSignOnResource;

/** Optional parameters. */
export interface SingleSignOnConfigurationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type SingleSignOnConfigurationsListNextResponse = DatadogSingleSignOnResourceListResponse;

/** Optional parameters. */
export interface MicrosoftDatadogClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
