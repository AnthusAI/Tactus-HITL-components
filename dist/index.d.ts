import { ComponentProps } from 'react';
import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';

/**
 * Apply theme classes to an element
 * @param theme - The theme to apply ('light' or 'dark')
 * @param element - The element to apply the theme to (defaults to document.documentElement)
 * @param classPrefix - The class prefix to use (defaults to 'tactus-hitl-theme')
 */
export declare function applyTheme(theme: ResolvedTheme, element?: HTMLElement, classPrefix?: string): void;

/**
 * Approval panel for yes/no decisions.
 *
 * Renders the request message with Approve/Reject buttons.
 */
export declare function ApprovalPanel({ request, onRespond, onCancel, className, showHeader, showContext, }: HITLComponentProps): JSX_2.Element;

export declare const Confirmation: ({ className, approval, state, ...props }: ConfirmationProps) => JSX_2.Element | null;

export declare const ConfirmationAccepted: ({ children, }: ConfirmationAcceptedProps) => JSX_2.Element | null;

declare interface ConfirmationAcceptedProps {
    children?: ReactNode;
}

export declare const ConfirmationAction: ({ className, variant, ...props }: ConfirmationActionProps) => JSX_2.Element;

declare type ConfirmationActionProps = ComponentProps<'button'> & {
    variant?: ConfirmationActionVariant;
};

export declare const ConfirmationActions: ({ className, ...props }: ConfirmationActionsProps) => JSX_2.Element | null;

declare type ConfirmationActionsProps = ComponentProps<'div'>;

declare type ConfirmationActionVariant = 'default' | 'destructive' | 'outline';

declare type ConfirmationProps = ComponentProps<'div'> & {
    approval?: ToolUIPartApproval;
    state: ConfirmationState;
};

export declare const ConfirmationRejected: ({ children, }: ConfirmationRejectedProps) => JSX_2.Element | null;

declare interface ConfirmationRejectedProps {
    children?: ReactNode;
}

export declare const ConfirmationRequest: ({ children }: ConfirmationRequestProps) => JSX_2.Element | null;

declare interface ConfirmationRequestProps {
    children?: ReactNode;
}

declare type ConfirmationState = 'approval-requested' | 'approval-responded' | 'output-available' | 'output-denied' | 'input-streaming' | 'input-available';

export declare const ConfirmationTitle: ({ className, ...props }: ConfirmationTitleProps) => JSX_2.Element;

declare type ConfirmationTitleProps = ComponentProps<'div'>;

/**
 * Collapsible panel showing conversation history and prior interactions.
 */
export declare function ContextPanel({ request, className, defaultExpanded, }: ContextPanelProps): JSX_2.Element | null;

declare interface ContextPanelProps {
    request: HITLRequest;
    className?: string;
    defaultExpanded?: boolean;
}

/**
 * A prior control interaction in the same invocation.
 */
export declare interface ControlInteraction {
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
 * A message in the conversation history.
 */
export declare interface ConversationMessage {
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
 * Escalation alert component for critical notifications.
 *
 * Displays an alert banner with severity styling and an acknowledge button.
 */
export declare function EscalationAlert({ request, onRespond, onCancel, className, showHeader, showContext, }: HITLComponentProps): JSX_2.Element;

/**
 * Metadata for 'escalation' request type.
 */
export declare interface EscalationMetadata {
    /** Severity level */
    severity?: 'info' | 'warning' | 'error' | 'critical';
    /** Additional context */
    context?: Record<string, unknown>;
}

/**
 * File upload component for requesting file uploads.
 *
 * Provides drag-and-drop zone and file picker with type/size validation.
 *
 * Note: This component handles the UI for file selection. The actual file
 * upload and storage is handled by the consuming application, which should
 * provide an `onUpload` handler in the request metadata if needed.
 */
export declare function FileUpload({ request, onRespond, onCancel, className, showHeader, showContext, }: HITLComponentProps): JSX_2.Element;

/**
 * Detect the system theme preference
 * @returns 'dark' if system prefers dark mode, 'light' otherwise
 */
export declare function getSystemTheme(): ResolvedTheme;

/**
 * Base props for all HITL components.
 */
export declare interface HITLComponentProps {
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
 * Modal wrapper for batched HITL inputs.
 */
export declare function HITLInputsModal({ request, onRespond, onCancel, className, open, onOpenChange, title, description, showHeader, showContext, }: HITLInputsModalProps): JSX_2.Element | null;

declare interface HITLInputsModalProps extends HITLComponentProps {
    open: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: string;
    description?: string;
}

export declare function HITLInputsPanel({ request, onRespond, onCancel, className, showHeader, showContext, }: HITLInputsPanelProps): JSX_2.Element;

/**
 * Tabbed interface for collecting multiple inputs in a single interaction.
 *
 * Presents each input item as a tab with completion indicators.
 * All required inputs must be completed before submission.
 */
declare interface HITLInputsPanelProps extends HITLComponentProps {
}

/**
 * An option for selection or action.
 */
export declare interface HITLOption {
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
 * A request for human input.
 *
 * This is the core data structure passed to HITL components.
 * It mirrors Python's ControlRequest from tactus/protocols/control.py.
 */
export declare interface HITLRequest {
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
 * A single input item within a batched request.
 *
 * Used when request_type='inputs' to specify multiple inputs
 * that should be collected together.
 */
export declare interface HITLRequestItem {
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
 * Main dispatcher component that renders the appropriate HITL UI
 * based on the request type.
 *
 * Usage:
 * ```tsx
 * <HITLRequestRenderer
 *   request={hitlRequest}
 *   onRespond={(response) => sendResponse(response)}
 *   onCancel={() => handleCancel()}
 * />
 * ```
 */
export declare function HITLRequestRenderer({ request, onRespond, onCancel, className, showHeader, showContext, }: HITLRequestRendererProps): JSX_2.Element;

/**
 * Props for the main HITLRequestRenderer component.
 */
export declare interface HITLRequestRendererProps extends HITLComponentProps {
}

/**
 * TypeScript interfaces for Tactus HITL components.
 *
 * These types mirror the Python protocol definitions in tactus/protocols/control.py
 * to ensure type safety across the frontend/backend boundary.
 */
/**
 * Types of HITL requests supported by Tactus.
 */
export declare type HITLRequestType = 'approval' | 'input' | 'review' | 'escalation' | 'select' | 'upload' | 'inputs';

/**
 * Response from a human.
 */
export declare interface HITLResponse {
    /** Request ID this responds to */
    request_id: string;
    /** The response value from the human */
    value: unknown;
}

/**
 * Metadata for 'input' request type.
 */
export declare interface InputMetadata {
    /** Placeholder text for input field */
    placeholder?: string;
    /** Whether to use multiline textarea */
    multiline?: boolean;
}

/**
 * Style hints for options/buttons.
 */
export declare type OptionStyle = 'primary' | 'danger' | 'secondary' | 'default';

/**
 * Header component displaying request message, procedure info, and timing.
 */
export declare function RequestHeader({ request, className, showMessage, }: RequestHeaderProps): JSX_2.Element;

declare interface RequestHeaderProps {
    request: HITLRequest;
    className?: string;
    showMessage?: boolean;
}

export declare type ResolvedTheme = 'light' | 'dark';

/**
 * Resolve a theme preference to an actual theme
 * @param preference - The theme preference ('light', 'dark', or 'system')
 * @returns The resolved theme ('light' or 'dark')
 */
export declare function resolveTheme(preference: Theme): ResolvedTheme;

/**
 * Action buttons for responding to HITL requests.
 *
 * Renders options as styled buttons. If no options provided,
 * renders default Submit/Cancel buttons.
 */
export declare function ResponseActions({ options, onSelect, onCancel, isSubmitting, className, }: ResponseActionsProps): JSX_2.Element;

declare interface ResponseActionsProps {
    /** Options to render as buttons */
    options?: HITLOption[];
    /** Callback when an option is selected */
    onSelect: (value: unknown) => void;
    /** Optional cancel callback */
    onCancel?: () => void;
    /** Whether the form is currently submitting */
    isSubmitting?: boolean;
    /** CSS class name */
    className?: string;
}

/**
 * Metadata for 'review' request type.
 */
export declare interface ReviewMetadata {
    /** The artifact to review */
    artifact?: unknown;
    /** Type of artifact (e.g., "document", "code", "image") */
    artifact_type?: string;
}

/**
 * Review panel for reviewing artifacts with feedback.
 *
 * Displays the artifact and provides options (approve/edit/reject)
 * with an optional feedback text area.
 */
export declare function ReviewPanel({ request, onRespond, onCancel, className, showHeader, showContext, }: HITLComponentProps): JSX_2.Element;

/**
 * Review result returned from review.
 */
export declare interface ReviewResult {
    /** Selected decision */
    decision: string;
    /** Optional edited artifact */
    edited_artifact?: unknown;
    /** Optional feedback text */
    feedback?: string;
}

/**
 * Metadata for 'select' request type.
 */
export declare interface SelectMetadata {
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
 * Multi-select component for choosing multiple options.
 *
 * Renders as checkboxes with optional min/max constraints.
 */
export declare function SelectMultiple({ request, onRespond, onCancel, className, showHeader, showContext, }: HITLComponentProps): JSX_2.Element;

/**
 * Single-select component for choosing one option.
 *
 * Renders as radio buttons by default, or dropdown if style="dropdown".
 */
export declare function SelectSingle({ request, onRespond, onCancel, className, showHeader, showContext, }: HITLComponentProps): JSX_2.Element;

/**
 * Text input for free-form input requests.
 *
 * Renders a text field (single line or multiline) with submit button.
 */
export declare function TextInput({ request, onRespond, onCancel, className, showHeader, showContext, }: HITLComponentProps): JSX_2.Element;

/**
 * Theme utilities for detecting and applying themes
 */
export declare type Theme = 'light' | 'dark' | 'system';

export declare interface ThemeContextValue {
    /** Current theme preference (light, dark, or system) */
    theme: Theme;
    /** Set theme preference */
    setTheme: (theme: Theme) => void;
    /** The actual resolved theme (light or dark) */
    resolvedTheme: ResolvedTheme;
}

/**
 * ThemeProvider component
 *
 * Wraps your application or HITL components to provide theme management.
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from '@anthus/tactus-hitl-components';
 *
 * function App() {
 *   return (
 *     <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
 *       <YourComponents />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export declare function ThemeProvider({ children, defaultTheme, storageKey, disableTransitionOnChange, classPrefix, }: ThemeProviderProps): JSX_2.Element;

export declare interface ThemeProviderProps {
    /** The child components to wrap */
    children: default_2.ReactNode;
    /** Default theme preference (defaults to 'system') */
    defaultTheme?: Theme;
    /** localStorage key for persisting theme choice (if undefined, no persistence) */
    storageKey?: string;
    /** Disable transition animation when theme changes */
    disableTransitionOnChange?: boolean;
    /** Class prefix for theme wrapper (defaults to 'tactus-hitl-theme') */
    classPrefix?: string;
}

/**
 * Pre-built theme toggle button
 *
 * Cycles through: light → dark → system
 *
 * @example
 * ```tsx
 * import { ThemeToggle } from '@anthus/tactus-hitl-components';
 *
 * function Header() {
 *   return (
 *     <header>
 *       <h1>My App</h1>
 *       <ThemeToggle />
 *     </header>
 *   );
 * }
 * ```
 */
export declare function ThemeToggle({ className }: ThemeToggleProps): JSX_2.Element;

/**
 * ThemeToggle component - Pre-built button for toggling between themes
 */
declare interface ThemeToggleProps {
    /** Additional CSS class name */
    className?: string;
}

declare type ToolUIPartApproval = {
    id: string;
    approved?: never;
    reason?: never;
} | {
    id: string;
    approved: boolean;
    reason?: string;
} | {
    id: string;
    approved: true;
    reason?: string;
} | {
    id: string;
    approved: false;
    reason?: string;
} | undefined;

/**
 * File info returned from upload.
 */
export declare interface UploadedFile {
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
 * Metadata for 'upload' request type.
 */
export declare interface UploadMetadata {
    /** Accepted file types (e.g., [".pdf", "image/*"]) */
    accept?: string[];
    /** Maximum file size in bytes */
    max_size?: number;
    /** Allow multiple files */
    multiple?: boolean;
}

/**
 * Hook to access theme context
 *
 * @throws Error if used outside ThemeProvider
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { theme, setTheme, resolvedTheme } = useTheme();
 *
 *   return (
 *     <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *       Current: {resolvedTheme}
 *     </button>
 *   );
 * }
 * ```
 */
export declare function useTheme(): ThemeContextValue;

export { }
