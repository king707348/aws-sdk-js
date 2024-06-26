import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SSMIncidents extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SSMIncidents.Types.ClientConfiguration)
  config: Config & SSMIncidents.Types.ClientConfiguration;
  /**
   * Retrieves details about all specified findings for an incident, including descriptive details about each finding. A finding represents a recent application environment change made by an CodeDeploy deployment or an CloudFormation stack creation or update that can be investigated as a potential cause of the incident.
   */
  batchGetIncidentFindings(params: SSMIncidents.Types.BatchGetIncidentFindingsInput, callback?: (err: AWSError, data: SSMIncidents.Types.BatchGetIncidentFindingsOutput) => void): Request<SSMIncidents.Types.BatchGetIncidentFindingsOutput, AWSError>;
  /**
   * Retrieves details about all specified findings for an incident, including descriptive details about each finding. A finding represents a recent application environment change made by an CodeDeploy deployment or an CloudFormation stack creation or update that can be investigated as a potential cause of the incident.
   */
  batchGetIncidentFindings(callback?: (err: AWSError, data: SSMIncidents.Types.BatchGetIncidentFindingsOutput) => void): Request<SSMIncidents.Types.BatchGetIncidentFindingsOutput, AWSError>;
  /**
   * A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
   */
  createReplicationSet(params: SSMIncidents.Types.CreateReplicationSetInput, callback?: (err: AWSError, data: SSMIncidents.Types.CreateReplicationSetOutput) => void): Request<SSMIncidents.Types.CreateReplicationSetOutput, AWSError>;
  /**
   * A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
   */
  createReplicationSet(callback?: (err: AWSError, data: SSMIncidents.Types.CreateReplicationSetOutput) => void): Request<SSMIncidents.Types.CreateReplicationSetOutput, AWSError>;
  /**
   * Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
   */
  createResponsePlan(params: SSMIncidents.Types.CreateResponsePlanInput, callback?: (err: AWSError, data: SSMIncidents.Types.CreateResponsePlanOutput) => void): Request<SSMIncidents.Types.CreateResponsePlanOutput, AWSError>;
  /**
   * Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
   */
  createResponsePlan(callback?: (err: AWSError, data: SSMIncidents.Types.CreateResponsePlanOutput) => void): Request<SSMIncidents.Types.CreateResponsePlanOutput, AWSError>;
  /**
   * Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
   */
  createTimelineEvent(params: SSMIncidents.Types.CreateTimelineEventInput, callback?: (err: AWSError, data: SSMIncidents.Types.CreateTimelineEventOutput) => void): Request<SSMIncidents.Types.CreateTimelineEventOutput, AWSError>;
  /**
   * Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
   */
  createTimelineEvent(callback?: (err: AWSError, data: SSMIncidents.Types.CreateTimelineEventOutput) => void): Request<SSMIncidents.Types.CreateTimelineEventOutput, AWSError>;
  /**
   * Delete an incident record from Incident Manager. 
   */
  deleteIncidentRecord(params: SSMIncidents.Types.DeleteIncidentRecordInput, callback?: (err: AWSError, data: SSMIncidents.Types.DeleteIncidentRecordOutput) => void): Request<SSMIncidents.Types.DeleteIncidentRecordOutput, AWSError>;
  /**
   * Delete an incident record from Incident Manager. 
   */
  deleteIncidentRecord(callback?: (err: AWSError, data: SSMIncidents.Types.DeleteIncidentRecordOutput) => void): Request<SSMIncidents.Types.DeleteIncidentRecordOutput, AWSError>;
  /**
   * Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
   */
  deleteReplicationSet(params: SSMIncidents.Types.DeleteReplicationSetInput, callback?: (err: AWSError, data: SSMIncidents.Types.DeleteReplicationSetOutput) => void): Request<SSMIncidents.Types.DeleteReplicationSetOutput, AWSError>;
  /**
   * Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
   */
  deleteReplicationSet(callback?: (err: AWSError, data: SSMIncidents.Types.DeleteReplicationSetOutput) => void): Request<SSMIncidents.Types.DeleteReplicationSetOutput, AWSError>;
  /**
   * Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
   */
  deleteResourcePolicy(params: SSMIncidents.Types.DeleteResourcePolicyInput, callback?: (err: AWSError, data: SSMIncidents.Types.DeleteResourcePolicyOutput) => void): Request<SSMIncidents.Types.DeleteResourcePolicyOutput, AWSError>;
  /**
   * Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
   */
  deleteResourcePolicy(callback?: (err: AWSError, data: SSMIncidents.Types.DeleteResourcePolicyOutput) => void): Request<SSMIncidents.Types.DeleteResourcePolicyOutput, AWSError>;
  /**
   * Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
   */
  deleteResponsePlan(params: SSMIncidents.Types.DeleteResponsePlanInput, callback?: (err: AWSError, data: SSMIncidents.Types.DeleteResponsePlanOutput) => void): Request<SSMIncidents.Types.DeleteResponsePlanOutput, AWSError>;
  /**
   * Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
   */
  deleteResponsePlan(callback?: (err: AWSError, data: SSMIncidents.Types.DeleteResponsePlanOutput) => void): Request<SSMIncidents.Types.DeleteResponsePlanOutput, AWSError>;
  /**
   * Deletes a timeline event from an incident.
   */
  deleteTimelineEvent(params: SSMIncidents.Types.DeleteTimelineEventInput, callback?: (err: AWSError, data: SSMIncidents.Types.DeleteTimelineEventOutput) => void): Request<SSMIncidents.Types.DeleteTimelineEventOutput, AWSError>;
  /**
   * Deletes a timeline event from an incident.
   */
  deleteTimelineEvent(callback?: (err: AWSError, data: SSMIncidents.Types.DeleteTimelineEventOutput) => void): Request<SSMIncidents.Types.DeleteTimelineEventOutput, AWSError>;
  /**
   * Returns the details for the specified incident record.
   */
  getIncidentRecord(params: SSMIncidents.Types.GetIncidentRecordInput, callback?: (err: AWSError, data: SSMIncidents.Types.GetIncidentRecordOutput) => void): Request<SSMIncidents.Types.GetIncidentRecordOutput, AWSError>;
  /**
   * Returns the details for the specified incident record.
   */
  getIncidentRecord(callback?: (err: AWSError, data: SSMIncidents.Types.GetIncidentRecordOutput) => void): Request<SSMIncidents.Types.GetIncidentRecordOutput, AWSError>;
  /**
   * Retrieve your Incident Manager replication set.
   */
  getReplicationSet(params: SSMIncidents.Types.GetReplicationSetInput, callback?: (err: AWSError, data: SSMIncidents.Types.GetReplicationSetOutput) => void): Request<SSMIncidents.Types.GetReplicationSetOutput, AWSError>;
  /**
   * Retrieve your Incident Manager replication set.
   */
  getReplicationSet(callback?: (err: AWSError, data: SSMIncidents.Types.GetReplicationSetOutput) => void): Request<SSMIncidents.Types.GetReplicationSetOutput, AWSError>;
  /**
   * Retrieves the resource policies attached to the specified response plan.
   */
  getResourcePolicies(params: SSMIncidents.Types.GetResourcePoliciesInput, callback?: (err: AWSError, data: SSMIncidents.Types.GetResourcePoliciesOutput) => void): Request<SSMIncidents.Types.GetResourcePoliciesOutput, AWSError>;
  /**
   * Retrieves the resource policies attached to the specified response plan.
   */
  getResourcePolicies(callback?: (err: AWSError, data: SSMIncidents.Types.GetResourcePoliciesOutput) => void): Request<SSMIncidents.Types.GetResourcePoliciesOutput, AWSError>;
  /**
   * Retrieves the details of the specified response plan.
   */
  getResponsePlan(params: SSMIncidents.Types.GetResponsePlanInput, callback?: (err: AWSError, data: SSMIncidents.Types.GetResponsePlanOutput) => void): Request<SSMIncidents.Types.GetResponsePlanOutput, AWSError>;
  /**
   * Retrieves the details of the specified response plan.
   */
  getResponsePlan(callback?: (err: AWSError, data: SSMIncidents.Types.GetResponsePlanOutput) => void): Request<SSMIncidents.Types.GetResponsePlanOutput, AWSError>;
  /**
   * Retrieves a timeline event based on its ID and incident record.
   */
  getTimelineEvent(params: SSMIncidents.Types.GetTimelineEventInput, callback?: (err: AWSError, data: SSMIncidents.Types.GetTimelineEventOutput) => void): Request<SSMIncidents.Types.GetTimelineEventOutput, AWSError>;
  /**
   * Retrieves a timeline event based on its ID and incident record.
   */
  getTimelineEvent(callback?: (err: AWSError, data: SSMIncidents.Types.GetTimelineEventOutput) => void): Request<SSMIncidents.Types.GetTimelineEventOutput, AWSError>;
  /**
   * Retrieves a list of the IDs of findings, plus their last modified times, that have been identified for a specified incident. A finding represents a recent application environment change made by an CloudFormation stack creation or update or an CodeDeploy deployment that can be investigated as a potential cause of the incident.
   */
  listIncidentFindings(params: SSMIncidents.Types.ListIncidentFindingsInput, callback?: (err: AWSError, data: SSMIncidents.Types.ListIncidentFindingsOutput) => void): Request<SSMIncidents.Types.ListIncidentFindingsOutput, AWSError>;
  /**
   * Retrieves a list of the IDs of findings, plus their last modified times, that have been identified for a specified incident. A finding represents a recent application environment change made by an CloudFormation stack creation or update or an CodeDeploy deployment that can be investigated as a potential cause of the incident.
   */
  listIncidentFindings(callback?: (err: AWSError, data: SSMIncidents.Types.ListIncidentFindingsOutput) => void): Request<SSMIncidents.Types.ListIncidentFindingsOutput, AWSError>;
  /**
   * Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
   */
  listIncidentRecords(params: SSMIncidents.Types.ListIncidentRecordsInput, callback?: (err: AWSError, data: SSMIncidents.Types.ListIncidentRecordsOutput) => void): Request<SSMIncidents.Types.ListIncidentRecordsOutput, AWSError>;
  /**
   * Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
   */
  listIncidentRecords(callback?: (err: AWSError, data: SSMIncidents.Types.ListIncidentRecordsOutput) => void): Request<SSMIncidents.Types.ListIncidentRecordsOutput, AWSError>;
  /**
   * List all related items for an incident record.
   */
  listRelatedItems(params: SSMIncidents.Types.ListRelatedItemsInput, callback?: (err: AWSError, data: SSMIncidents.Types.ListRelatedItemsOutput) => void): Request<SSMIncidents.Types.ListRelatedItemsOutput, AWSError>;
  /**
   * List all related items for an incident record.
   */
  listRelatedItems(callback?: (err: AWSError, data: SSMIncidents.Types.ListRelatedItemsOutput) => void): Request<SSMIncidents.Types.ListRelatedItemsOutput, AWSError>;
  /**
   * Lists details about the replication set configured in your account. 
   */
  listReplicationSets(params: SSMIncidents.Types.ListReplicationSetsInput, callback?: (err: AWSError, data: SSMIncidents.Types.ListReplicationSetsOutput) => void): Request<SSMIncidents.Types.ListReplicationSetsOutput, AWSError>;
  /**
   * Lists details about the replication set configured in your account. 
   */
  listReplicationSets(callback?: (err: AWSError, data: SSMIncidents.Types.ListReplicationSetsOutput) => void): Request<SSMIncidents.Types.ListReplicationSetsOutput, AWSError>;
  /**
   * Lists all response plans in your account.
   */
  listResponsePlans(params: SSMIncidents.Types.ListResponsePlansInput, callback?: (err: AWSError, data: SSMIncidents.Types.ListResponsePlansOutput) => void): Request<SSMIncidents.Types.ListResponsePlansOutput, AWSError>;
  /**
   * Lists all response plans in your account.
   */
  listResponsePlans(callback?: (err: AWSError, data: SSMIncidents.Types.ListResponsePlansOutput) => void): Request<SSMIncidents.Types.ListResponsePlansOutput, AWSError>;
  /**
   * Lists the tags that are attached to the specified response plan or incident.
   */
  listTagsForResource(params: SSMIncidents.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SSMIncidents.Types.ListTagsForResourceResponse) => void): Request<SSMIncidents.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags that are attached to the specified response plan or incident.
   */
  listTagsForResource(callback?: (err: AWSError, data: SSMIncidents.Types.ListTagsForResourceResponse) => void): Request<SSMIncidents.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists timeline events for the specified incident record.
   */
  listTimelineEvents(params: SSMIncidents.Types.ListTimelineEventsInput, callback?: (err: AWSError, data: SSMIncidents.Types.ListTimelineEventsOutput) => void): Request<SSMIncidents.Types.ListTimelineEventsOutput, AWSError>;
  /**
   * Lists timeline events for the specified incident record.
   */
  listTimelineEvents(callback?: (err: AWSError, data: SSMIncidents.Types.ListTimelineEventsOutput) => void): Request<SSMIncidents.Types.ListTimelineEventsOutput, AWSError>;
  /**
   * Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see Cross-Region and cross-account incident management.
   */
  putResourcePolicy(params: SSMIncidents.Types.PutResourcePolicyInput, callback?: (err: AWSError, data: SSMIncidents.Types.PutResourcePolicyOutput) => void): Request<SSMIncidents.Types.PutResourcePolicyOutput, AWSError>;
  /**
   * Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see Cross-Region and cross-account incident management.
   */
  putResourcePolicy(callback?: (err: AWSError, data: SSMIncidents.Types.PutResourcePolicyOutput) => void): Request<SSMIncidents.Types.PutResourcePolicyOutput, AWSError>;
  /**
   * Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
   */
  startIncident(params: SSMIncidents.Types.StartIncidentInput, callback?: (err: AWSError, data: SSMIncidents.Types.StartIncidentOutput) => void): Request<SSMIncidents.Types.StartIncidentOutput, AWSError>;
  /**
   * Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
   */
  startIncident(callback?: (err: AWSError, data: SSMIncidents.Types.StartIncidentOutput) => void): Request<SSMIncidents.Types.StartIncidentOutput, AWSError>;
  /**
   * Adds a tag to a response plan.
   */
  tagResource(params: SSMIncidents.Types.TagResourceRequest, callback?: (err: AWSError, data: SSMIncidents.Types.TagResourceResponse) => void): Request<SSMIncidents.Types.TagResourceResponse, AWSError>;
  /**
   * Adds a tag to a response plan.
   */
  tagResource(callback?: (err: AWSError, data: SSMIncidents.Types.TagResourceResponse) => void): Request<SSMIncidents.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag from a resource.
   */
  untagResource(params: SSMIncidents.Types.UntagResourceRequest, callback?: (err: AWSError, data: SSMIncidents.Types.UntagResourceResponse) => void): Request<SSMIncidents.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag from a resource.
   */
  untagResource(callback?: (err: AWSError, data: SSMIncidents.Types.UntagResourceResponse) => void): Request<SSMIncidents.Types.UntagResourceResponse, AWSError>;
  /**
   * Update deletion protection to either allow or deny deletion of the final Region in a replication set.
   */
  updateDeletionProtection(params: SSMIncidents.Types.UpdateDeletionProtectionInput, callback?: (err: AWSError, data: SSMIncidents.Types.UpdateDeletionProtectionOutput) => void): Request<SSMIncidents.Types.UpdateDeletionProtectionOutput, AWSError>;
  /**
   * Update deletion protection to either allow or deny deletion of the final Region in a replication set.
   */
  updateDeletionProtection(callback?: (err: AWSError, data: SSMIncidents.Types.UpdateDeletionProtectionOutput) => void): Request<SSMIncidents.Types.UpdateDeletionProtectionOutput, AWSError>;
  /**
   * Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see Interacting through chat.
   */
  updateIncidentRecord(params: SSMIncidents.Types.UpdateIncidentRecordInput, callback?: (err: AWSError, data: SSMIncidents.Types.UpdateIncidentRecordOutput) => void): Request<SSMIncidents.Types.UpdateIncidentRecordOutput, AWSError>;
  /**
   * Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see Interacting through chat.
   */
  updateIncidentRecord(callback?: (err: AWSError, data: SSMIncidents.Types.UpdateIncidentRecordOutput) => void): Request<SSMIncidents.Types.UpdateIncidentRecordOutput, AWSError>;
  /**
   * Add or remove related items from the related items tab of an incident record.
   */
  updateRelatedItems(params: SSMIncidents.Types.UpdateRelatedItemsInput, callback?: (err: AWSError, data: SSMIncidents.Types.UpdateRelatedItemsOutput) => void): Request<SSMIncidents.Types.UpdateRelatedItemsOutput, AWSError>;
  /**
   * Add or remove related items from the related items tab of an incident record.
   */
  updateRelatedItems(callback?: (err: AWSError, data: SSMIncidents.Types.UpdateRelatedItemsOutput) => void): Request<SSMIncidents.Types.UpdateRelatedItemsOutput, AWSError>;
  /**
   * Add or delete Regions from your replication set.
   */
  updateReplicationSet(params: SSMIncidents.Types.UpdateReplicationSetInput, callback?: (err: AWSError, data: SSMIncidents.Types.UpdateReplicationSetOutput) => void): Request<SSMIncidents.Types.UpdateReplicationSetOutput, AWSError>;
  /**
   * Add or delete Regions from your replication set.
   */
  updateReplicationSet(callback?: (err: AWSError, data: SSMIncidents.Types.UpdateReplicationSetOutput) => void): Request<SSMIncidents.Types.UpdateReplicationSetOutput, AWSError>;
  /**
   * Updates the specified response plan.
   */
  updateResponsePlan(params: SSMIncidents.Types.UpdateResponsePlanInput, callback?: (err: AWSError, data: SSMIncidents.Types.UpdateResponsePlanOutput) => void): Request<SSMIncidents.Types.UpdateResponsePlanOutput, AWSError>;
  /**
   * Updates the specified response plan.
   */
  updateResponsePlan(callback?: (err: AWSError, data: SSMIncidents.Types.UpdateResponsePlanOutput) => void): Request<SSMIncidents.Types.UpdateResponsePlanOutput, AWSError>;
  /**
   * Updates a timeline event. You can update events of type Custom Event.
   */
  updateTimelineEvent(params: SSMIncidents.Types.UpdateTimelineEventInput, callback?: (err: AWSError, data: SSMIncidents.Types.UpdateTimelineEventOutput) => void): Request<SSMIncidents.Types.UpdateTimelineEventOutput, AWSError>;
  /**
   * Updates a timeline event. You can update events of type Custom Event.
   */
  updateTimelineEvent(callback?: (err: AWSError, data: SSMIncidents.Types.UpdateTimelineEventOutput) => void): Request<SSMIncidents.Types.UpdateTimelineEventOutput, AWSError>;
  /**
   * Waits for the waitForReplicationSetActive state by periodically calling the underlying SSMIncidents.getReplicationSetoperation every 30 seconds (at most 5 times). Wait for a replication set to become ACTIVE
   */
  waitFor(state: "waitForReplicationSetActive", params: SSMIncidents.Types.GetReplicationSetInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SSMIncidents.Types.GetReplicationSetOutput) => void): Request<SSMIncidents.Types.GetReplicationSetOutput, AWSError>;
  /**
   * Waits for the waitForReplicationSetActive state by periodically calling the underlying SSMIncidents.getReplicationSetoperation every 30 seconds (at most 5 times). Wait for a replication set to become ACTIVE
   */
  waitFor(state: "waitForReplicationSetActive", callback?: (err: AWSError, data: SSMIncidents.Types.GetReplicationSetOutput) => void): Request<SSMIncidents.Types.GetReplicationSetOutput, AWSError>;
  /**
   * Waits for the waitForReplicationSetDeleted state by periodically calling the underlying SSMIncidents.getReplicationSetoperation every 30 seconds (at most 5 times). Wait for a replication set to be deleted
   */
  waitFor(state: "waitForReplicationSetDeleted", params: SSMIncidents.Types.GetReplicationSetInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SSMIncidents.Types.GetReplicationSetOutput) => void): Request<SSMIncidents.Types.GetReplicationSetOutput, AWSError>;
  /**
   * Waits for the waitForReplicationSetDeleted state by periodically calling the underlying SSMIncidents.getReplicationSetoperation every 30 seconds (at most 5 times). Wait for a replication set to be deleted
   */
  waitFor(state: "waitForReplicationSetDeleted", callback?: (err: AWSError, data: SSMIncidents.Types.GetReplicationSetOutput) => void): Request<SSMIncidents.Types.GetReplicationSetOutput, AWSError>;
}
declare namespace SSMIncidents {
  export interface Action {
    /**
     * The Systems Manager automation document to start as the runbook at the beginning of the incident.
     */
    ssmAutomation?: SsmAutomation;
  }
  export type ActionsList = Action[];
  export interface AddRegionAction {
    /**
     * The Amazon Web Services Region name to add to the replication set.
     */
    regionName: RegionName;
    /**
     * The KMS key ID to use to encrypt your replication set.
     */
    sseKmsKeyId?: SseKmsKey;
  }
  export type Arn = string;
  export interface AttributeValueList {
    /**
     * The list of integer values that the filter matches.
     */
    integerValues?: IntegerList;
    /**
     * The list of string values that the filter matches.
     */
    stringValues?: StringList;
  }
  export interface AutomationExecution {
    /**
     * The Amazon Resource Name (ARN) of the automation process.
     */
    ssmExecutionArn?: Arn;
  }
  export type AutomationExecutionSet = AutomationExecution[];
  export interface BatchGetIncidentFindingsError {
    /**
     * The code associated with an error that was returned for a BatchGetIncidentFindings operation.
     */
    code: String;
    /**
     * The ID of a specified finding for which an error was returned for a BatchGetIncidentFindings operation.
     */
    findingId: FindingId;
    /**
     * The description for an error that was returned for a BatchGetIncidentFindings operation.
     */
    message: String;
  }
  export type BatchGetIncidentFindingsErrorList = BatchGetIncidentFindingsError[];
  export interface BatchGetIncidentFindingsInput {
    /**
     * A list of IDs of findings for which you want to view details.
     */
    findingIds: FindingIdList;
    /**
     * The Amazon Resource Name (ARN) of the incident for which you want to view finding details.
     */
    incidentRecordArn: Arn;
  }
  export interface BatchGetIncidentFindingsOutput {
    /**
     * A list of errors encountered during the operation.
     */
    errors: BatchGetIncidentFindingsErrorList;
    /**
     * Information about the requested findings.
     */
    findings: FindingList;
  }
  export type Boolean = boolean;
  export interface ChatChannel {
    /**
     * The Amazon SNS targets that Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel by using the Amazon SNS topics. 
     */
    chatbotSns?: ChatbotSnsConfigurationSet;
    /**
     * Used to remove the chat channel from an incident record or response plan.
     */
    empty?: EmptyChatChannel;
  }
  export type ChatbotSnsConfigurationSet = SnsArn[];
  export type ClientToken = string;
  export interface CloudFormationStackUpdate {
    /**
     * The timestamp for when the CloudFormation stack creation or update ended. Not reported for deployments that are still in progress.
     */
    endTime?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the CloudFormation stack involved in the update.
     */
    stackArn: Arn;
    /**
     * The timestamp for when the CloudFormation stack creation or update began.
     */
    startTime: Timestamp;
  }
  export interface CodeDeployDeployment {
    /**
     * The Amazon Resource Name (ARN) of the CodeDeploy deployment group associated with the deployment.
     */
    deploymentGroupArn: Arn;
    /**
     * The ID of the CodeDeploy deployment.
     */
    deploymentId: CodeDeployDeploymentDeploymentIdString;
    /**
     * The timestamp for when the CodeDeploy deployment ended. Not reported for deployments that are still in progress.
     */
    endTime?: Timestamp;
    /**
     * The timestamp for when the CodeDeploy deployment began.
     */
    startTime: Timestamp;
  }
  export type CodeDeployDeploymentDeploymentIdString = string;
  export interface Condition {
    /**
     * After the specified timestamp.
     */
    after?: Timestamp;
    /**
     * Before the specified timestamp
     */
    before?: Timestamp;
    /**
     * The value is equal to the provided string or integer. 
     */
    equals?: AttributeValueList;
  }
  export interface CreateReplicationSetInput {
    /**
     * A token that ensures that the operation is called only once with the specified details.
     */
    clientToken?: ClientToken;
    /**
     * The Regions that Incident Manager replicates your data to. You can have up to three Regions in your replication set.
     */
    regions: RegionMapInput;
    /**
     * A list of tags to add to the replication set.
     */
    tags?: TagMap;
  }
  export interface CreateReplicationSetOutput {
    /**
     * The Amazon Resource Name (ARN) of the replication set. 
     */
    arn: Arn;
  }
  export interface CreateResponsePlanInput {
    /**
     * The actions that the response plan starts at the beginning of an incident.
     */
    actions?: ActionsList;
    /**
     * The Chatbot chat channel used for collaboration during an incident.
     */
    chatChannel?: ChatChannel;
    /**
     * A token ensuring that the operation is called only once with the specified details.
     */
    clientToken?: ClientToken;
    /**
     * The long format of the response plan name. This field can contain spaces.
     */
    displayName?: ResponsePlanDisplayName;
    /**
     * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
     */
    engagements?: EngagementSet;
    /**
     * Details used to create an incident when using this response plan.
     */
    incidentTemplate: IncidentTemplate;
    /**
     * Information about third-party services integrated into the response plan.
     */
    integrations?: Integrations;
    /**
     * The short format name of the response plan. Can't include spaces.
     */
    name: ResponsePlanName;
    /**
     * A list of tags that you are adding to the response plan.
     */
    tags?: TagMap;
  }
  export interface CreateResponsePlanOutput {
    /**
     * The Amazon Resource Name (ARN) of the response plan.
     */
    arn: Arn;
  }
  export interface CreateTimelineEventInput {
    /**
     * A token that ensures that a client calls the action only once with the specified details.
     */
    clientToken?: ClientToken;
    /**
     * A short description of the event.
     */
    eventData: EventData;
    /**
     * Adds one or more references to the TimelineEvent. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with a resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use the table's ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.
     */
    eventReferences?: EventReferenceList;
    /**
     * The timestamp for when the event occurred.
     */
    eventTime: Timestamp;
    /**
     * The type of event. You can create timeline events of type Custom Event and Note. To make a Note-type event appear on the Incident notes panel in the console, specify eventType as Noteand enter the Amazon Resource Name (ARN) of the incident as the value for eventReference.
     */
    eventType: TimelineEventType;
    /**
     * The Amazon Resource Name (ARN) of the incident record that the action adds the incident to.
     */
    incidentRecordArn: Arn;
  }
  export interface CreateTimelineEventOutput {
    /**
     * The ID of the event for easy reference later. 
     */
    eventId: UUID;
    /**
     * The ARN of the incident record that you added the event to.
     */
    incidentRecordArn: Arn;
  }
  export type DedupeString = string;
  export interface DeleteIncidentRecordInput {
    /**
     * The Amazon Resource Name (ARN) of the incident record you are deleting.
     */
    arn: Arn;
  }
  export interface DeleteIncidentRecordOutput {
  }
  export interface DeleteRegionAction {
    /**
     * The name of the Amazon Web Services Region you're deleting from the replication set.
     */
    regionName: RegionName;
  }
  export interface DeleteReplicationSetInput {
    /**
     * The Amazon Resource Name (ARN) of the replication set you're deleting.
     */
    arn: Arn;
  }
  export interface DeleteReplicationSetOutput {
  }
  export interface DeleteResourcePolicyInput {
    /**
     * The ID of the resource policy you're deleting.
     */
    policyId: PolicyId;
    /**
     * The Amazon Resource Name (ARN) of the resource you're deleting the policy from.
     */
    resourceArn: Arn;
  }
  export interface DeleteResourcePolicyOutput {
  }
  export interface DeleteResponsePlanInput {
    /**
     * The Amazon Resource Name (ARN) of the response plan.
     */
    arn: Arn;
  }
  export interface DeleteResponsePlanOutput {
  }
  export interface DeleteTimelineEventInput {
    /**
     * The ID of the event to update. You can use ListTimelineEvents to find an event's ID.
     */
    eventId: UUID;
    /**
     * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
     */
    incidentRecordArn: Arn;
  }
  export interface DeleteTimelineEventOutput {
  }
  export interface DynamicSsmParameterValue {
    /**
     * Variable dynamic parameters. A parameter value is determined when an incident is created.
     */
    variable?: VariableType;
  }
  export type DynamicSsmParameters = {[key: string]: DynamicSsmParameterValue};
  export type DynamicSsmParametersKeyString = string;
  export interface EmptyChatChannel {
  }
  export type EngagementSet = SsmContactsArn[];
  export type EventData = string;
  export interface EventReference {
    /**
     * The ID of a RelatedItem referenced in a TimelineEvent.
     */
    relatedItemId?: GeneratedId;
    /**
     * The Amazon Resource Name (ARN) of an Amazon Web Services resource referenced in a TimelineEvent.
     */
    resource?: Arn;
  }
  export type EventReferenceList = EventReference[];
  export interface EventSummary {
    /**
     * The timeline event ID.
     */
    eventId: UUID;
    /**
     * A list of references in a TimelineEvent.
     */
    eventReferences?: EventReferenceList;
    /**
     * The timestamp for when the event occurred.
     */
    eventTime: Timestamp;
    /**
     * The type of event. The timeline event must be Custom Event or Note.
     */
    eventType: TimelineEventType;
    /**
     * The timestamp for when the timeline event was last updated.
     */
    eventUpdatedTime: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the incident that the event happened during.
     */
    incidentRecordArn: Arn;
  }
  export type EventSummaryList = EventSummary[];
  export interface Filter {
    /**
     * The condition accepts before or after a specified time, equal to a string, or equal to an integer.
     */
    condition: Condition;
    /**
     * The key that you're filtering on.
     */
    key: FilterKeyString;
  }
  export type FilterKeyString = string;
  export type FilterList = Filter[];
  export interface Finding {
    /**
     * The timestamp for when a finding was created.
     */
    creationTime: Timestamp;
    /**
     * Details about the finding.
     */
    details?: FindingDetails;
    /**
     * The ID assigned to the finding.
     */
    id: FindingId;
    /**
     * The timestamp for when the finding was most recently updated with additional information.
     */
    lastModifiedTime: Timestamp;
  }
  export interface FindingDetails {
    /**
     * Information about the CloudFormation stack creation or update associated with the finding.
     */
    cloudFormationStackUpdate?: CloudFormationStackUpdate;
    /**
     * Information about the CodeDeploy deployment associated with the finding.
     */
    codeDeployDeployment?: CodeDeployDeployment;
  }
  export type FindingId = string;
  export type FindingIdList = FindingId[];
  export type FindingList = Finding[];
  export interface FindingSummary {
    /**
     * The ID of the finding.
     */
    id: FindingId;
    /**
     * The timestamp for when the finding was last updated.
     */
    lastModifiedTime: Timestamp;
  }
  export type FindingSummaryList = FindingSummary[];
  export type GeneratedId = string;
  export interface GetIncidentRecordInput {
    /**
     * The Amazon Resource Name (ARN) of the incident record.
     */
    arn: Arn;
  }
  export interface GetIncidentRecordOutput {
    /**
     * Details the structure of the incident record.
     */
    incidentRecord: IncidentRecord;
  }
  export interface GetReplicationSetInput {
    /**
     * The Amazon Resource Name (ARN) of the replication set you want to retrieve.
     */
    arn: Arn;
  }
  export interface GetReplicationSetOutput {
    /**
     * Details of the replication set.
     */
    replicationSet: ReplicationSet;
  }
  export interface GetResourcePoliciesInput {
    /**
     * The maximum number of resource policies to display for each page of results.
     */
    maxResults?: MaxResults;
    /**
     * The pagination token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
    /**
     * The Amazon Resource Name (ARN) of the response plan with the attached resource policy. 
     */
    resourceArn: Arn;
  }
  export interface GetResourcePoliciesOutput {
    /**
     * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
     */
    nextToken?: NextToken;
    /**
     * Details about the resource policy attached to the response plan.
     */
    resourcePolicies: ResourcePolicyList;
  }
  export interface GetResponsePlanInput {
    /**
     * The Amazon Resource Name (ARN) of the response plan.
     */
    arn: Arn;
  }
  export interface GetResponsePlanOutput {
    /**
     * The actions that this response plan takes at the beginning of the incident.
     */
    actions?: ActionsList;
    /**
     * The ARN of the response plan.
     */
    arn: Arn;
    /**
     * The Chatbot chat channel used for collaboration during an incident.
     */
    chatChannel?: ChatChannel;
    /**
     * The long format name of the response plan. Can contain spaces.
     */
    displayName?: ResponsePlanDisplayName;
    /**
     * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
     */
    engagements?: EngagementSet;
    /**
     * Details used to create the incident when using this response plan.
     */
    incidentTemplate: IncidentTemplate;
    /**
     * Information about third-party services integrated into the Incident Manager response plan.
     */
    integrations?: Integrations;
    /**
     * The short format name of the response plan. The name can't contain spaces.
     */
    name: ResponsePlanName;
  }
  export interface GetTimelineEventInput {
    /**
     * The ID of the event. You can get an event's ID when you create it, or by using ListTimelineEvents.
     */
    eventId: UUID;
    /**
     * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
     */
    incidentRecordArn: Arn;
  }
  export interface GetTimelineEventOutput {
    /**
     * Details about the timeline event.
     */
    event: TimelineEvent;
  }
  export type Impact = number;
  export interface IncidentRecord {
    /**
     * The Amazon Resource Name (ARN) of the incident record.
     */
    arn: Arn;
    /**
     * The runbook, or automation document, that's run at the beginning of the incident.
     */
    automationExecutions?: AutomationExecutionSet;
    /**
     * The chat channel used for collaboration during an incident.
     */
    chatChannel?: ChatChannel;
    /**
     * The timestamp for when Incident Manager created the incident record.
     */
    creationTime: Timestamp;
    /**
     * The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.
     */
    dedupeString: DedupeString;
    /**
     * The impact of the incident on customers and applications.  Supported impact codes     1 - Critical    2 - High    3 - Medium    4 - Low    5 - No Impact  
     */
    impact: Impact;
    /**
     * Details about the action that started the incident.
     */
    incidentRecordSource: IncidentRecordSource;
    /**
     * Who modified the incident most recently.
     */
    lastModifiedBy: Arn;
    /**
     * The timestamp for when the incident was most recently modified.
     */
    lastModifiedTime: Timestamp;
    /**
     * The Amazon SNS targets that are notified when updates are made to an incident.
     */
    notificationTargets?: NotificationTargetSet;
    /**
     * The timestamp for when the incident was resolved. This appears as a timeline event.
     */
    resolvedTime?: Timestamp;
    /**
     * The current status of the incident.
     */
    status: IncidentRecordStatus;
    /**
     * The summary of the incident. The summary is a brief synopsis of what occurred, what's currently happening, and context of the incident.
     */
    summary?: IncidentSummary;
    /**
     * The title of the incident.
     */
    title: IncidentTitle;
  }
  export interface IncidentRecordSource {
    /**
     * The principal that started the incident.
     */
    createdBy: Arn;
    /**
     * The service principal that assumed the role specified in createdBy. If no service principal assumed the role this will be left blank.
     */
    invokedBy?: ServicePrincipal;
    /**
     * The resource that caused the incident to be created.
     */
    resourceArn?: Arn;
    /**
     * The service that started the incident. This can be manually created from Incident Manager, automatically created using an Amazon CloudWatch alarm, or Amazon EventBridge event.
     */
    source: IncidentSource;
  }
  export type IncidentRecordStatus = "OPEN"|"RESOLVED"|string;
  export interface IncidentRecordSummary {
    /**
     * The Amazon Resource Name (ARN) of the incident.
     */
    arn: Arn;
    /**
     * The timestamp for when the incident was created.
     */
    creationTime: Timestamp;
    /**
     * Defines the impact to customers and applications.
     */
    impact: Impact;
    /**
     * What caused Incident Manager to create the incident.
     */
    incidentRecordSource: IncidentRecordSource;
    /**
     * The timestamp for when the incident was resolved.
     */
    resolvedTime?: Timestamp;
    /**
     * The current status of the incident.
     */
    status: IncidentRecordStatus;
    /**
     * The title of the incident. This value is either provided by the response plan or overwritten on creation.
     */
    title: IncidentTitle;
  }
  export type IncidentRecordSummaryList = IncidentRecordSummary[];
  export type IncidentSource = string;
  export type IncidentSummary = string;
  export interface IncidentTemplate {
    /**
     * The string Incident Manager uses to prevent the same root cause from creating multiple incidents in the same account. A deduplication string is a term or phrase the system uses to check for duplicate incidents. If you specify a deduplication string, Incident Manager searches for open incidents that contain the same string in the dedupeString field when it creates the incident. If a duplicate is detected, Incident Manager deduplicates the newer incident into the existing incident.  By default, Incident Manager automatically deduplicates multiple incidents created by the same Amazon CloudWatch alarm or Amazon EventBridge event. You don't have to enter your own deduplication string to prevent duplication for these resource types. 
     */
    dedupeString?: DedupeString;
    /**
     * The impact of the incident on your customers and applications.  Supported impact codes     1 - Critical    2 - High    3 - Medium    4 - Low    5 - No Impact  
     */
    impact: Impact;
    /**
     * Tags to assign to the template. When the StartIncident API action is called, Incident Manager assigns the tags specified in the template to the incident.
     */
    incidentTags?: TagMap;
    /**
     * The Amazon SNS targets that are notified when updates are made to an incident.
     */
    notificationTargets?: NotificationTargetSet;
    /**
     * The summary of the incident. The summary is a brief synopsis of what occurred, what's currently happening, and context.
     */
    summary?: IncidentSummary;
    /**
     * The title of the incident. 
     */
    title: IncidentTitle;
  }
  export type IncidentTitle = string;
  export type Integer = number;
  export type IntegerList = Integer[];
  export interface Integration {
    /**
     * Information about the PagerDuty service where the response plan creates an incident.
     */
    pagerDutyConfiguration?: PagerDutyConfiguration;
  }
  export type Integrations = Integration[];
  export interface ItemIdentifier {
    /**
     * The type of related item. 
     */
    type: ItemType;
    /**
     * Details about the related item.
     */
    value: ItemValue;
  }
  export type ItemType = "ANALYSIS"|"INCIDENT"|"METRIC"|"PARENT"|"ATTACHMENT"|"OTHER"|"AUTOMATION"|"INVOLVED_RESOURCE"|"TASK"|string;
  export interface ItemValue {
    /**
     * The Amazon Resource Name (ARN) of the related item, if the related item is an Amazon resource.
     */
    arn?: Arn;
    /**
     * The metric definition, if the related item is a metric in Amazon CloudWatch.
     */
    metricDefinition?: MetricDefinition;
    /**
     * Details about an incident that is associated with a PagerDuty incident.
     */
    pagerDutyIncidentDetail?: PagerDutyIncidentDetail;
    /**
     * The URL, if the related item is a non-Amazon Web Services resource.
     */
    url?: Url;
  }
  export interface ListIncidentFindingsInput {
    /**
     * The Amazon Resource Name (ARN) of the incident for which you want to view associated findings.
     */
    incidentRecordArn: Arn;
    /**
     * The maximum number of findings to retrieve per call.
     */
    maxResults?: ListIncidentFindingsInputMaxResultsInteger;
    /**
     * The pagination token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
  }
  export type ListIncidentFindingsInputMaxResultsInteger = number;
  export interface ListIncidentFindingsOutput {
    /**
     * A list of findings that represent deployments that might be the potential cause of the incident.
     */
    findings: FindingSummaryList;
    /**
     * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
     */
    nextToken?: NextToken;
  }
  export interface ListIncidentRecordsInput {
    /**
     * Filters the list of incident records you want to search through. You can filter on the following keys:    creationTime     impact     status     createdBy    Note the following when when you use Filters:   If you don't specify a Filter, the response includes all incident records.   If you specify more than one filter in a single request, the response returns incident records that match all filters.   If you specify a filter with more than one value, the response returns incident records that match any of the values provided.  
     */
    filters?: FilterList;
    /**
     * The maximum number of results per page.
     */
    maxResults?: MaxResults;
    /**
     * The pagination token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
  }
  export interface ListIncidentRecordsOutput {
    /**
     * The details of each listed incident record.
     */
    incidentRecordSummaries: IncidentRecordSummaryList;
    /**
     * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
     */
    nextToken?: NextToken;
  }
  export interface ListRelatedItemsInput {
    /**
     * The Amazon Resource Name (ARN) of the incident record containing the listed related items.
     */
    incidentRecordArn: Arn;
    /**
     * The maximum number of related items per page.
     */
    maxResults?: MaxResults;
    /**
     * The pagination token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
  }
  export interface ListRelatedItemsOutput {
    /**
     * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
     */
    nextToken?: NextToken;
    /**
     * Details about each related item.
     */
    relatedItems: RelatedItemList;
  }
  export interface ListReplicationSetsInput {
    /**
     * The maximum number of results per page. 
     */
    maxResults?: MaxResults;
    /**
     * The pagination token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
  }
  export interface ListReplicationSetsOutput {
    /**
     * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
     */
    nextToken?: NextToken;
    /**
     * The Amazon Resource Name (ARN) of the list replication set.
     */
    replicationSetArns: ReplicationSetArnList;
  }
  export interface ListResponsePlansInput {
    /**
     * The maximum number of response plans per page.
     */
    maxResults?: MaxResults;
    /**
     * The pagination token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
  }
  export interface ListResponsePlansOutput {
    /**
     * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
     */
    nextToken?: NextToken;
    /**
     * Details of each response plan.
     */
    responsePlanSummaries: ResponsePlanSummaryList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the response plan or incident.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tags for the response plan or incident.
     */
    tags: TagMap;
  }
  export interface ListTimelineEventsInput {
    /**
     * Filters the timeline events based on the provided conditional values. You can filter timeline events with the following keys:    eventReference     eventTime     eventType    Note the following when deciding how to use Filters:   If you don't specify a Filter, the response includes all timeline events.   If you specify more than one filter in a single request, the response returns timeline events that match all filters.   If you specify a filter with more than one value, the response returns timeline events that match any of the values provided.  
     */
    filters?: FilterList;
    /**
     * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
     */
    incidentRecordArn: Arn;
    /**
     * The maximum number of results per page.
     */
    maxResults?: MaxResults;
    /**
     * The pagination token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: NextToken;
    /**
     * Sort timeline events by the specified key value pair.
     */
    sortBy?: TimelineEventSort;
    /**
     * Sorts the order of timeline events by the value specified in the sortBy field.
     */
    sortOrder?: SortOrder;
  }
  export interface ListTimelineEventsOutput {
    /**
     * Details about each event that occurred during the incident.
     */
    eventSummaries: EventSummaryList;
    /**
     * The pagination token to use when requesting the next set of items. If there are no additional items to return, the string is null.
     */
    nextToken?: NextToken;
  }
  export type MaxResults = number;
  export type MetricDefinition = string;
  export type NextToken = string;
  export interface NotificationTargetItem {
    /**
     * The Amazon Resource Name (ARN) of the SNS topic.
     */
    snsTopicArn?: Arn;
  }
  export type NotificationTargetSet = NotificationTargetItem[];
  export interface PagerDutyConfiguration {
    /**
     * The name of the PagerDuty configuration.
     */
    name: PagerDutyConfigurationNameString;
    /**
     * Details about the PagerDuty service associated with the configuration.
     */
    pagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration;
    /**
     * The ID of the Amazon Web Services Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or User Token REST API Key, and other user credentials.
     */
    secretId: PagerDutyConfigurationSecretIdString;
  }
  export type PagerDutyConfigurationNameString = string;
  export type PagerDutyConfigurationSecretIdString = string;
  export interface PagerDutyIncidentConfiguration {
    /**
     * The ID of the PagerDuty service that the response plan associates with an incident when it launches.
     */
    serviceId: PagerDutyIncidentConfigurationServiceIdString;
  }
  export type PagerDutyIncidentConfigurationServiceIdString = string;
  export interface PagerDutyIncidentDetail {
    /**
     * Indicates whether to resolve the PagerDuty incident when you resolve the associated Incident Manager incident.
     */
    autoResolve?: Boolean;
    /**
     * The ID of the incident associated with the PagerDuty service for the response plan.
     */
    id: PagerDutyIncidentDetailIdString;
    /**
     * The ID of the Amazon Web Services Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or User Token REST API Key, and other user credentials.
     */
    secretId?: PagerDutyIncidentDetailSecretIdString;
  }
  export type PagerDutyIncidentDetailIdString = string;
  export type PagerDutyIncidentDetailSecretIdString = string;
  export type Policy = string;
  export type PolicyId = string;
  export interface PutResourcePolicyInput {
    /**
     * Details of the resource policy.
     */
    policy: Policy;
    /**
     * The Amazon Resource Name (ARN) of the response plan to add the resource policy to.
     */
    resourceArn: Arn;
  }
  export interface PutResourcePolicyOutput {
    /**
     * The ID of the resource policy.
     */
    policyId: PolicyId;
  }
  export type RawData = string;
  export interface RegionInfo {
    /**
     * The ID of the KMS key used to encrypt the data in this Amazon Web Services Region.
     */
    sseKmsKeyId?: SseKmsKey;
    /**
     * The status of the Amazon Web Services Region in the replication set.
     */
    status: RegionStatus;
    /**
     * Information displayed about the status of the Amazon Web Services Region.
     */
    statusMessage?: String;
    /**
     * The timestamp for when Incident Manager updated the status of the Amazon Web Services Region.
     */
    statusUpdateDateTime: Timestamp;
  }
  export type RegionInfoMap = {[key: string]: RegionInfo};
  export type RegionMapInput = {[key: string]: RegionMapInputValue};
  export interface RegionMapInputValue {
    /**
     * The KMS key used to encrypt the data in your replication set.
     */
    sseKmsKeyId?: SseKmsKey;
  }
  export type RegionName = string;
  export type RegionStatus = "ACTIVE"|"CREATING"|"DELETING"|"FAILED"|string;
  export interface RelatedItem {
    /**
     * A unique ID for a RelatedItem.  Don't specify this parameter when you add a RelatedItem by using the UpdateRelatedItems API action. 
     */
    generatedId?: GeneratedId;
    /**
     * Details about the related item.
     */
    identifier: ItemIdentifier;
    /**
     * The title of the related item.
     */
    title?: RelatedItemTitleString;
  }
  export type RelatedItemList = RelatedItem[];
  export type RelatedItemTitleString = string;
  export interface RelatedItemsUpdate {
    /**
     * Details about the related item you're adding.
     */
    itemToAdd?: RelatedItem;
    /**
     * Details about the related item you're deleting.
     */
    itemToRemove?: ItemIdentifier;
  }
  export interface ReplicationSet {
    /**
     * The Amazon Resource Name (ARN) of the replication set.
     */
    arn?: Arn;
    /**
     * Details about who created the replication set.
     */
    createdBy: Arn;
    /**
     * When the replication set was created.
     */
    createdTime: Timestamp;
    /**
     * Determines if the replication set deletion protection is enabled or not. If deletion protection is enabled, you can't delete the last Amazon Web Services Region in the replication set. 
     */
    deletionProtected: Boolean;
    /**
     * Who last modified the replication set.
     */
    lastModifiedBy: Arn;
    /**
     * When the replication set was last updated.
     */
    lastModifiedTime: Timestamp;
    /**
     * The map between each Amazon Web Services Region in your replication set and the KMS key that's used to encrypt the data in that Region.
     */
    regionMap: RegionInfoMap;
    /**
     * The status of the replication set. If the replication set is still pending, you can't use Incident Manager functionality.
     */
    status: ReplicationSetStatus;
  }
  export type ReplicationSetArnList = Arn[];
  export type ReplicationSetStatus = "ACTIVE"|"CREATING"|"UPDATING"|"DELETING"|"FAILED"|string;
  export interface ResourcePolicy {
    /**
     * The JSON blob that describes the policy.
     */
    policyDocument: Policy;
    /**
     * The ID of the resource policy.
     */
    policyId: PolicyId;
    /**
     * The Amazon Web Services Region that policy allows resources to be used in.
     */
    ramResourceShareRegion: String;
  }
  export type ResourcePolicyList = ResourcePolicy[];
  export type ResponsePlanDisplayName = string;
  export type ResponsePlanName = string;
  export interface ResponsePlanSummary {
    /**
     * The Amazon Resource Name (ARN) of the response plan.
     */
    arn: Arn;
    /**
     * The human readable name of the response plan. This can include spaces.
     */
    displayName?: ResponsePlanDisplayName;
    /**
     * The name of the response plan. This can't include spaces.
     */
    name: ResponsePlanName;
  }
  export type ResponsePlanSummaryList = ResponsePlanSummary[];
  export type RoleArn = string;
  export type ServicePrincipal = string;
  export type SnsArn = string;
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export type SseKmsKey = string;
  export interface SsmAutomation {
    /**
     * The automation document's name.
     */
    documentName: SsmAutomationDocumentNameString;
    /**
     * The automation document's version to use when running.
     */
    documentVersion?: SsmAutomationDocumentVersionString;
    /**
     * The key-value pair to resolve dynamic parameter values when processing a Systems Manager Automation runbook.
     */
    dynamicParameters?: DynamicSsmParameters;
    /**
     * The key-value pair parameters to use when running the automation document.
     */
    parameters?: SsmParameters;
    /**
     * The Amazon Resource Name (ARN) of the role that the automation document will assume when running commands.
     */
    roleArn: RoleArn;
    /**
     * The account that the automation document will be run in. This can be in either the management account or an application account.
     */
    targetAccount?: SsmTargetAccount;
  }
  export type SsmAutomationDocumentNameString = string;
  export type SsmAutomationDocumentVersionString = string;
  export type SsmContactsArn = string;
  export type SsmParameterValues = SsmParameterValuesMemberString[];
  export type SsmParameterValuesMemberString = string;
  export type SsmParameters = {[key: string]: SsmParameterValues};
  export type SsmParametersKeyString = string;
  export type SsmTargetAccount = "RESPONSE_PLAN_OWNER_ACCOUNT"|"IMPACTED_ACCOUNT"|string;
  export interface StartIncidentInput {
    /**
     * A token ensuring that the operation is called only once with the specified details.
     */
    clientToken?: ClientToken;
    /**
     * Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.  Supported impact codes     1 - Critical    2 - High    3 - Medium    4 - Low    5 - No Impact  
     */
    impact?: Impact;
    /**
     * Add related items to the incident for other responders to use. Related items are Amazon Web Services resources, external links, or files uploaded to an Amazon S3 bucket. 
     */
    relatedItems?: RelatedItemList;
    /**
     * The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat channels, Amazon SNS topics, runbooks, title, and impact of the incident. 
     */
    responsePlanArn: Arn;
    /**
     * Provide a title for the incident. Providing a title overwrites the title provided by the response plan. 
     */
    title?: IncidentTitle;
    /**
     * Details of what created the incident record in Incident Manager.
     */
    triggerDetails?: TriggerDetails;
  }
  export interface StartIncidentOutput {
    /**
     * The ARN of the newly created incident record.
     */
    incidentRecordArn: Arn;
  }
  export type String = string;
  export type StringList = StringListMemberString[];
  export type StringListMemberString = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export type TagMapUpdate = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the response plan you're adding the tags to.
     */
    resourceArn: String;
    /**
     * A list of tags to add to the response plan.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface TimelineEvent {
    /**
     * A short description of the event.
     */
    eventData: EventData;
    /**
     * The ID of the timeline event.
     */
    eventId: UUID;
    /**
     * A list of references in a TimelineEvent.
     */
    eventReferences?: EventReferenceList;
    /**
     * The timestamp for when the event occurred.
     */
    eventTime: Timestamp;
    /**
     * The type of event that occurred. Currently Incident Manager supports only the Custom Event and Note types.
     */
    eventType: TimelineEventType;
    /**
     * The timestamp for when the timeline event was last updated.
     */
    eventUpdatedTime: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the incident that the event occurred during.
     */
    incidentRecordArn: Arn;
  }
  export type TimelineEventSort = "EVENT_TIME"|string;
  export type TimelineEventType = string;
  export type Timestamp = Date;
  export interface TriggerDetails {
    /**
     * Raw data passed from either Amazon EventBridge, Amazon CloudWatch, or Incident Manager when an incident is created.
     */
    rawData?: RawData;
    /**
     * Identifies the service that sourced the event. All events sourced from within Amazon Web Services begin with "aws." Customer-generated events can have any value here, as long as it doesn't begin with "aws." We recommend the use of Java package-name style reverse domain-name strings. 
     */
    source: IncidentSource;
    /**
     * The timestamp for when the incident was detected.
     */
    timestamp: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the source that detected the incident.
     */
    triggerArn?: Arn;
  }
  export type UUID = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the response plan you're removing a tag from.
     */
    resourceArn: String;
    /**
     * The name of the tag to remove from the response plan.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateDeletionProtectionInput {
    /**
     * The Amazon Resource Name (ARN) of the replication set to update.
     */
    arn: Arn;
    /**
     * A token that ensures that the operation is called only once with the specified details.
     */
    clientToken?: ClientToken;
    /**
     * Specifies if deletion protection is turned on or off in your account. 
     */
    deletionProtected: Boolean;
  }
  export interface UpdateDeletionProtectionOutput {
  }
  export interface UpdateIncidentRecordInput {
    /**
     * The Amazon Resource Name (ARN) of the incident record you are updating.
     */
    arn: Arn;
    /**
     * The Chatbot chat channel where responders can collaborate.
     */
    chatChannel?: ChatChannel;
    /**
     * A token that ensures that a client calls the operation only once with the specified details.
     */
    clientToken?: ClientToken;
    /**
     * Defines the impact of the incident to customers and applications. If you provide an impact for an incident, it overwrites the impact provided by the response plan.  Supported impact codes     1 - Critical    2 - High    3 - Medium    4 - Low    5 - No Impact  
     */
    impact?: Impact;
    /**
     * The Amazon SNS targets that Incident Manager notifies when a client updates an incident. Using multiple SNS topics creates redundancy in the event that a Region is down during the incident.
     */
    notificationTargets?: NotificationTargetSet;
    /**
     * The status of the incident. Possible statuses are Open or Resolved.
     */
    status?: IncidentRecordStatus;
    /**
     * A longer description of what occurred during the incident.
     */
    summary?: IncidentSummary;
    /**
     * A brief description of the incident.
     */
    title?: IncidentTitle;
  }
  export interface UpdateIncidentRecordOutput {
  }
  export interface UpdateRelatedItemsInput {
    /**
     * A token that ensures that a client calls the operation only once with the specified details.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Resource Name (ARN) of the incident record that contains the related items that you update.
     */
    incidentRecordArn: Arn;
    /**
     * Details about the item that you are add to, or delete from, an incident.
     */
    relatedItemsUpdate: RelatedItemsUpdate;
  }
  export interface UpdateRelatedItemsOutput {
  }
  export interface UpdateReplicationSetAction {
    /**
     * Details about the Amazon Web Services Region that you're adding to the replication set.
     */
    addRegionAction?: AddRegionAction;
    /**
     * Details about the Amazon Web Services Region that you're deleting to the replication set.
     */
    deleteRegionAction?: DeleteRegionAction;
  }
  export interface UpdateReplicationSetInput {
    /**
     * An action to add or delete a Region.
     */
    actions: UpdateReplicationSetInputActionsList;
    /**
     * The Amazon Resource Name (ARN) of the replication set you're updating.
     */
    arn: Arn;
    /**
     * A token that ensures that the operation is called only once with the specified details.
     */
    clientToken?: ClientToken;
  }
  export type UpdateReplicationSetInputActionsList = UpdateReplicationSetAction[];
  export interface UpdateReplicationSetOutput {
  }
  export interface UpdateResponsePlanInput {
    /**
     * The actions that this response plan takes at the beginning of an incident.
     */
    actions?: ActionsList;
    /**
     * The Amazon Resource Name (ARN) of the response plan.
     */
    arn: Arn;
    /**
     * The Chatbot chat channel used for collaboration during an incident. Use the empty structure to remove the chat channel from the response plan.
     */
    chatChannel?: ChatChannel;
    /**
     * A token ensuring that the operation is called only once with the specified details.
     */
    clientToken?: ClientToken;
    /**
     * The long format name of the response plan. The display name can't contain spaces.
     */
    displayName?: ResponsePlanDisplayName;
    /**
     * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
     */
    engagements?: EngagementSet;
    /**
     * The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.
     */
    incidentTemplateDedupeString?: DedupeString;
    /**
     * Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.  Supported impact codes     1 - Critical    2 - High    3 - Medium    4 - Low    5 - No Impact  
     */
    incidentTemplateImpact?: Impact;
    /**
     * The Amazon SNS targets that are notified when updates are made to an incident.
     */
    incidentTemplateNotificationTargets?: NotificationTargetSet;
    /**
     * A brief summary of the incident. This typically contains what has happened, what's currently happening, and next steps.
     */
    incidentTemplateSummary?: IncidentSummary;
    /**
     * Tags to assign to the template. When the StartIncident API action is called, Incident Manager assigns the tags specified in the template to the incident. To call this action, you must also have permission to call the TagResource API action for the incident record resource.
     */
    incidentTemplateTags?: TagMapUpdate;
    /**
     * The short format name of the incident. The title can't contain spaces.
     */
    incidentTemplateTitle?: IncidentTitle;
    /**
     * Information about third-party services integrated into the response plan.
     */
    integrations?: Integrations;
  }
  export interface UpdateResponsePlanOutput {
  }
  export interface UpdateTimelineEventInput {
    /**
     * A token that ensures that a client calls the operation only once with the specified details.
     */
    clientToken?: ClientToken;
    /**
     * A short description of the event.
     */
    eventData?: EventData;
    /**
     * The ID of the event to update. You can use ListTimelineEvents to find an event's ID.
     */
    eventId: UUID;
    /**
     * Updates all existing references in a TimelineEvent. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with that resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use its ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.  This update action overrides all existing references. If you want to keep existing references, you must specify them in the call. If you don't, this action removes any existing references and enters only new references. 
     */
    eventReferences?: EventReferenceList;
    /**
     * The timestamp for when the event occurred.
     */
    eventTime?: Timestamp;
    /**
     * The type of event. You can update events of type Custom Event and Note.
     */
    eventType?: TimelineEventType;
    /**
     * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
     */
    incidentRecordArn: Arn;
  }
  export interface UpdateTimelineEventOutput {
  }
  export type Url = string;
  export type VariableType = "INCIDENT_RECORD_ARN"|"INVOLVED_RESOURCES"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SSMIncidents client.
   */
  export import Types = SSMIncidents;
}
export = SSMIncidents;
