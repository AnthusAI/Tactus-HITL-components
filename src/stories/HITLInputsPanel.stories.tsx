import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HITLInputsPanel } from '../components/HITLInputsPanel';
import { baseRequest } from './fixtures';
import type { HITLRequestItem } from '../types';

const meta = {
  title: 'Components/HITLInputsPanel',
  component: HITLInputsPanel,
  parameters: {
    layout: 'centered',
  },
  args: {
    onRespond: fn(),
    onCancel: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '700px', maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HITLInputsPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Simple 2-item deployment scenario
const deploymentItems: HITLRequestItem[] = [
  {
    item_id: 'target',
    label: 'Target',
    request_type: 'select',
    message: 'Which environment should we deploy to?',
    options: [
      { label: 'Development', value: 'dev' },
      { label: 'Staging', value: 'staging' },
      { label: 'Production', value: 'prod', style: 'danger' },
    ],
    required: true,
    metadata: { mode: 'single', style: 'radio' },
  },
  {
    item_id: 'confirm',
    label: 'Confirm',
    request_type: 'approval',
    message: 'Are you sure you want to proceed with this deployment?',
    required: true,
  },
];

export const DeploymentFlow: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'inputs',
      message: 'Deployment Configuration',
      items: deploymentItems,
    },
  },
};

// Complex 4-item scenario with optional inputs
const complexItems: HITLRequestItem[] = [
  {
    item_id: 'env',
    label: 'Environment',
    request_type: 'select',
    message: 'Select target environment',
    options: [
      { label: 'Development', value: 'dev' },
      { label: 'Staging', value: 'staging' },
      { label: 'Production', value: 'prod' },
    ],
    required: true,
    metadata: { mode: 'single', style: 'dropdown' },
  },
  {
    item_id: 'features',
    label: 'Features',
    request_type: 'select',
    message: 'Which features should be enabled?',
    options: [
      { label: 'Dark Mode', value: 'dark_mode' },
      { label: 'Notifications', value: 'notifications' },
      { label: 'Analytics', value: 'analytics' },
      { label: 'Debug Mode', value: 'debug' },
    ],
    required: true,
    metadata: { mode: 'multiple', min: 1, max: 3 },
  },
  {
    item_id: 'notes',
    label: 'Notes',
    request_type: 'input',
    message: 'Any deployment notes? (optional)',
    required: false,
    metadata: { placeholder: 'Enter notes...', multiline: true },
  },
  {
    item_id: 'approval',
    label: 'Final Approval',
    request_type: 'approval',
    message: 'Ready to deploy with these settings?',
    required: true,
  },
];

export const ComplexFlow: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'inputs',
      message: 'Complete Deployment Configuration',
      items: complexItems,
    },
  },
};

// Mixed input types showcase
const mixedItems: HITLRequestItem[] = [
  {
    item_id: 'name',
    label: 'Name',
    request_type: 'input',
    message: 'Enter your name',
    required: true,
    metadata: { placeholder: 'John Doe' },
  },
  {
    item_id: 'role',
    label: 'Role',
    request_type: 'select',
    message: 'Select your role',
    options: [
      { label: 'Developer', value: 'dev' },
      { label: 'Designer', value: 'design' },
      { label: 'Manager', value: 'manager' },
    ],
    required: true,
    metadata: { mode: 'single', style: 'radio' },
  },
  {
    item_id: 'agree',
    label: 'Terms',
    request_type: 'approval',
    message: 'Do you agree to the terms and conditions?',
    required: true,
  },
];

export const MixedTypes: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'inputs',
      message: 'User Registration',
      items: mixedItems,
    },
  },
};

// All optional inputs
const optionalItems: HITLRequestItem[] = [
  {
    item_id: 'email',
    label: 'Email',
    request_type: 'input',
    message: 'Email address (optional)',
    required: false,
    metadata: { placeholder: 'user@example.com' },
  },
  {
    item_id: 'phone',
    label: 'Phone',
    request_type: 'input',
    message: 'Phone number (optional)',
    required: false,
    metadata: { placeholder: '+1 (555) 123-4567' },
  },
  {
    item_id: 'newsletter',
    label: 'Newsletter',
    request_type: 'approval',
    message: 'Subscribe to newsletter?',
    required: false,
    default_value: false,
  },
];

export const AllOptional: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'inputs',
      message: 'Optional Contact Information',
      items: optionalItems,
    },
  },
};

// Human.multiple() examples (from examples/92-test-multiple.tac)
const humanMultipleDeploymentItems: HITLRequestItem[] = [
  {
    item_id: 'target',
    label: 'Target',
    request_type: 'select',
    message: 'Which environment should we deploy to?',
    options: [
      { label: 'dev', value: 'dev' },
      { label: 'staging', value: 'staging' },
      { label: 'prod', value: 'prod' },
    ],
    metadata: { mode: 'single', style: 'radio' },
    required: true,
  },
  {
    item_id: 'confirmed',
    label: 'Confirm',
    request_type: 'approval',
    message: 'Are you sure you want to proceed with this deployment?',
    required: true,
  },
  {
    item_id: 'notes',
    label: 'Notes',
    request_type: 'input',
    message: 'Any deployment notes? (optional)',
    required: false,
    metadata: { placeholder: 'Enter deployment notes...', multiline: true },
  },
];

export const HumanMultipleDeployment: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'inputs',
      message: 'Deployment Configuration',
      items: humanMultipleDeploymentItems,
    },
  },
};

const humanMultipleRegistrationItems: HITLRequestItem[] = [
  {
    item_id: 'name',
    label: 'Name',
    request_type: 'input',
    message: 'Enter your full name',
    metadata: { placeholder: 'John Doe' },
    required: true,
  },
  {
    item_id: 'role',
    label: 'Role',
    request_type: 'select',
    message: 'Select your role',
    options: [
      { label: 'Developer', value: 'dev' },
      { label: 'Designer', value: 'design' },
      { label: 'Manager', value: 'manager' },
    ],
    metadata: { mode: 'single', style: 'radio' },
    required: true,
  },
  {
    item_id: 'features',
    label: 'Features',
    request_type: 'select',
    message: 'Which features do you want enabled?',
    options: [
      { label: 'dark_mode', value: 'dark_mode' },
      { label: 'notifications', value: 'notifications' },
      { label: 'analytics', value: 'analytics' },
    ],
    metadata: { mode: 'multiple', min: 1 },
    required: true,
  },
  {
    item_id: 'agree_terms',
    label: 'Terms',
    request_type: 'approval',
    message: 'Do you agree to the terms and conditions?',
    required: true,
  },
];

export const HumanMultipleRegistration: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'inputs',
      message: 'User Registration',
      items: humanMultipleRegistrationItems,
    },
  },
};

export const DarkMode: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'inputs',
      message: 'Deployment Configuration (Dark Mode)',
      items: humanMultipleDeploymentItems,
    },
  },
  parameters: { hitlTheme: 'dark' },
};
