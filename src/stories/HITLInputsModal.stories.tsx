import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HITLInputsModal } from '../components/HITLInputsModal';
import { baseRequest } from './fixtures';
import type { HITLRequestItem } from '../types';

const meta = {
  title: 'Components/HITLInputsModal',
  component: HITLInputsModal,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onRespond: fn(),
    onCancel: fn(),
  },
} satisfies Meta<typeof HITLInputsModal>;

export default meta;
type Story = StoryObj<typeof meta>;

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

const registrationItems: HITLRequestItem[] = [
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
      { label: 'Dark Mode', value: 'dark_mode' },
      { label: 'Notifications', value: 'notifications' },
      { label: 'Analytics', value: 'analytics' },
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

const ModalWrapper = ({
  items,
  title,
  description,
}: {
  items: HITLRequestItem[];
  title: string;
  description?: string;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {!open && (
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
      )}
      <HITLInputsModal
        open={open}
        onOpenChange={setOpen}
        title={title}
        description={description}
        request={{
          ...baseRequest,
          request_type: 'inputs',
          message: title,
          items,
        }}
        onRespond={fn()}
        onCancel={fn()}
      />
    </div>
  );
};

export const DeploymentModal: Story = {
  args: {} as any,
  render: () => (
    <ModalWrapper
      title="Deployment Configuration"
      description="Review settings before submitting."
      items={deploymentItems}
    />
  ),
};

export const RegistrationModal: Story = {
  args: {} as any,
  render: () => (
    <ModalWrapper
      title="User Registration"
      description="Complete the form to create a new user."
      items={registrationItems}
    />
  ),
};

export const DarkMode: Story = {
  args: {} as any,
  render: () => (
    <ModalWrapper
      title="Deployment Configuration (Dark Mode)"
      description="Review settings before submitting."
      items={deploymentItems}
    />
  ),
  parameters: { hitlTheme: 'dark' },
};
