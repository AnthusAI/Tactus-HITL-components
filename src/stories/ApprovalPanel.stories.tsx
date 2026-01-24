import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ApprovalPanel } from '../components/ApprovalPanel';
import { baseRequest, approvalOptions, sampleConversation, samplePriorInteractions } from './fixtures';

const meta = {
  title: 'Components/ApprovalPanel',
  component: ApprovalPanel,
  parameters: {
    layout: 'centered',
  },
  args: {
    onRespond: fn(),
    onCancel: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ApprovalPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'approval',
      message: 'Deploy to production?',
      options: approvalOptions,
    },
  },
};

export const WithoutOptions: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'approval',
      message: 'Approve this change?',
      options: undefined,
    },
  },
};

export const WithContext: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'approval',
      message: 'Approve the generated response?',
      options: approvalOptions,
      conversation: sampleConversation,
      prior_interactions: samplePriorInteractions,
    },
  },
};

export const LongMessage: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'approval',
      message: 'This is a longer approval message that provides more context about what the user is being asked to approve. The system has analyzed the customer request and prepared a draft response. Please review and approve to proceed.',
      options: approvalOptions,
    },
  },
};

export const DarkMode: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'approval',
      message: 'Approve this change in dark mode?',
      options: approvalOptions,
    },
  },
  parameters: { hitlTheme: 'dark' },
};
