/**
 * TypeScript interfaces for Tactus HITL components.
 *
 * These types mirror the Python protocol definitions in tactus/protocols/control.py
 * to ensure type safety across the frontend/backend boundary.
 */

/**
 * Types of HITL requests supported by Tactus.
 */
export type HITLRequestType =
  | 'approval'
  | 'input'
  | 'review'
  | 'escalation'
  | 'select'
  | 'upload'
  | 'inputs';

/**
 * Style hints for options/buttons.
 */
export type OptionStyle = 'primary' | 'danger' | 'secondary' | 'default';

/**
 * An option for selection or action.
 */
export interface HITLOption {
  /** Display label for the option */
  label: string;
  /** Value to return if selected */
  value: unknown;
  /** Style hint for rendering */
  style?: OptionStyle;
  /** Optional description for the option */
  description?: string;
}

/**
 * A message in the conversation history.
 */
export interface ConversationMessage {
  /** Message role: agent, user, tool, system */
  role: 'agent' | 'user' | 'tool' | 'system';
  /** Message content */
  content: string;
  /** When the message was created */
  timestamp: string;
  /** Tool name if role is 'tool' */
  tool_name?: string;
  /** Tool input parameters */
  tool_input?: Record<string, unknown>;
  /** Tool output/result */
  tool_output?: unknown;
}

/**
 * A prior control interaction in the same invocation.
 */
export interface ControlInteraction {
  /** Type of the original request */
  request_type: HITLRequestType;
  /** The original request message */
  message: string;
  /** The response value */
  response_value: unknown;
  /** Who responded (user ID or channel) */
  responded_by?: string;
  /** When the response was received */
  responded_at: string;
  /** Channel that provided the response */
  channel_id: string;
}

/**
 * A single input item within a batched request.
 *
 * Used when request_type='inputs' to specify multiple inputs
 * that should be collected together.
 */
export interface HITLRequestItem {
  /** Unique ID within batch (used as response key) */
  item_id: string;
  /** Short semantic label for tabs/UI */
  label: string;
  /** Type of input (not 'inputs' - individual types only) */
  request_type: Exclude<HITLRequestType, 'inputs'>;
  /** Message to display */
  message: string;
  /** Options for select/review types */
  options?: HITLOption[];
  /** Default value */
  default_value?: unknown;
  /** Whether this item must be completed */
  required?: boolean;
  /** Type-specific metadata */
  metadata?: Record<string, unknown>;
}

/**
 * A request for human input.
 *
 * This is the core data structure passed to HITL components.
 * It mirrors Python's ControlRequest from tactus/protocols/control.py.
 */
export interface HITLRequest {
  /** Unique request identifier */
  request_id: string;
  /** Procedure that initiated the request */
  procedure_id: string;
  /** Human-readable procedure name */
  procedure_name: string;
  /** Unique invocation identifier */
  invocation_id?: string;
  /** Type of interaction requested */
  request_type: HITLRequestType;
  /** Message to display to the human */
  message: string;
  /** Short semantic label for UI (e.g., tab name, chip label) */
  label?: string;
  /** Options for the human to choose from */
  options?: HITLOption[];
  /** Timeout in seconds (undefined = wait forever) */
  timeout_seconds?: number;
  /** Default value on timeout */
  default_value?: unknown;

  /** Individual input items (used when request_type='inputs') */
  items?: HITLRequestItem[];

  // Rich context for decision-making
  /** Human-readable subject identifier (e.g., "John Doe", "Order #12345") */
  subject?: string;
  /** Seconds since invocation started */
  elapsed_seconds?: number;
  /** Summary of key input fields for context */
  input_summary?: Record<string, unknown>;
  /** Full conversation history with tool calls */
  conversation?: ConversationMessage[];
  /** Previous control interactions in this invocation */
  prior_interactions?: ControlInteraction[];

  /** Additional context and metadata */
  metadata?: Record<string, unknown>;
}

/**
 * Response from a human.
 */
export interface HITLResponse {
  /** Request ID this responds to */
  request_id: string;
  /** The response value from the human */
  value: unknown;
}

// =============================================================================
// Metadata types for specific request types
// =============================================================================

/**
 * Metadata for 'select' request type.
 */
export interface SelectMetadata {
  /** Selection mode: "single" or "multiple" */
  mode: 'single' | 'multiple';
  /** UI style hint: "radio", "dropdown", "checkbox" */
  style?: 'radio' | 'dropdown' | 'checkbox';
  /** Minimum selections required (for multiple mode) */
  min?: number;
  /** Maximum selections allowed (for multiple mode) */
  max?: number;
}

/**
 * Metadata for 'upload' request type.
 */
export interface UploadMetadata {
  /** Accepted file types (e.g., [".pdf", "image/*"]) */
  accept?: string[];
  /** Maximum file size in bytes */
  max_size?: number;
  /** Allow multiple files */
  multiple?: boolean;
}

/**
 * Metadata for 'review' request type.
 */
export interface ReviewMetadata {
  /** The artifact to review */
  artifact?: unknown;
  /** Type of artifact (e.g., "document", "code", "image") */
  artifact_type?: string;
}

/**
 * Metadata for 'escalation' request type.
 */
export interface EscalationMetadata {
  /** Severity level */
  severity?: 'info' | 'warning' | 'error' | 'critical';
  /** Additional context */
  context?: Record<string, unknown>;
}

/**
 * Metadata for 'input' request type.
 */
export interface InputMetadata {
  /** Placeholder text for input field */
  placeholder?: string;
  /** Whether to use multiline textarea */
  multiline?: boolean;
}

// =============================================================================
// Component Props
// =============================================================================

/**
 * Base props for all HITL components.
 */
export interface HITLComponentProps {
  /** The HITL request to render */
  request: HITLRequest;
  /** Callback when human responds */
  onRespond: (response: HITLResponse) => void;
  /** Optional callback when human cancels */
  onCancel?: () => void;
  /** Optional CSS class name */
  className?: string;
  /** Optional toggle for request header */
  showHeader?: boolean;
  /** Optional toggle for context panel */
  showContext?: boolean;
}

/**
 * Props for the main HITLRequestRenderer component.
 */
export interface HITLRequestRendererProps extends HITLComponentProps {
}

/**
 * File info returned from upload.
 */
export interface UploadedFile {
  /** Local filesystem path to uploaded file */
  path: string;
  /** Original filename */
  name: string;
  /** File size in bytes */
  size: number;
  /** MIME type of file */
  mime_type: string;
}

/**
 * Review result returned from review.
 */
export interface ReviewResult {
  /** Selected decision */
  decision: string;
  /** Optional edited artifact */
  edited_artifact?: unknown;
  /** Optional feedback text */
  feedback?: string;
}
