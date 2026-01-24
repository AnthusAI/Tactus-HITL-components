/**
 * Shared fixtures for Storybook stories.
 */
import type { HITLRequest, HITLOption, ConversationMessage, ControlInteraction } from '../types';

export const sampleConversation: ConversationMessage[] = [
  {
    role: 'user',
    content: 'Please process this customer request',
    timestamp: '2024-01-15T10:30:00Z',
  },
  {
    role: 'agent',
    content: 'I\'ll analyze the customer request and prepare a response.',
    timestamp: '2024-01-15T10:30:05Z',
  },
  {
    role: 'tool',
    content: 'Customer data retrieved successfully',
    timestamp: '2024-01-15T10:30:10Z',
    tool_name: 'get_customer',
    tool_input: { customer_id: 'cust_123' },
    tool_output: { name: 'John Doe', email: 'john@example.com' },
  },
];


export const samplePriorInteractions: ControlInteraction[] = [
  {
    request_type: 'approval',
    message: 'Approve initial analysis?',
    response_value: true,
    responded_by: 'user_123',
    responded_at: '2024-01-15T10:31:00Z',
    channel_id: 'ide',
  },
];

export const baseRequest: Omit<HITLRequest, 'request_type' | 'message'> = {
  request_id: 'req_abc123',
  procedure_id: 'customer-intake',
  procedure_name: 'Customer Intake',
  invocation_id: 'inv_xyz789',
  subject: 'John Doe',
  elapsed_seconds: 45,
  input_summary: {
    customer_name: 'John Doe',
    email: 'john@example.com',
    request_type: 'Support',
  },
};

export const approvalOptions: HITLOption[] = [
  { label: 'Approve', value: true, style: 'primary' },
  { label: 'Reject', value: false, style: 'danger' },
];

export const reviewOptions: HITLOption[] = [
  { label: 'Approve', value: 'approve', style: 'primary' },
  { label: 'Request Changes', value: 'request_changes', style: 'secondary' },
  { label: 'Reject', value: 'reject', style: 'danger' },
];

export const deploymentTargets: HITLOption[] = [
  { label: 'Development', value: 'development', description: 'Development environment for testing' },
  { label: 'Staging', value: 'staging', description: 'Pre-production environment' },
  { label: 'Production', value: 'production', description: 'Live production environment' },
];

export const featureOptions: HITLOption[] = [
  { label: 'Dark Mode', value: 'dark_mode', description: 'Enable dark theme support' },
  { label: 'Notifications', value: 'notifications', description: 'Push notification system' },
  { label: 'Analytics', value: 'analytics', description: 'Usage tracking and metrics' },
  { label: 'Export', value: 'export', description: 'Data export functionality' },
];
