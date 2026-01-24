import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HITLRequestRenderer } from '../components/HITLRequestRenderer';
import {
  baseRequest,
  approvalOptions,
  deploymentTargets,
  featureOptions,
  reviewOptions,
  sampleConversation,
  samplePriorInteractions,
} from './fixtures';

const meta = {
  title: 'Components/HITLRequestRenderer',
  component: HITLRequestRenderer,
  parameters: {
    layout: 'centered',
  },
  args: {
    onRespond: fn(),
    onCancel: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HITLRequestRenderer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Approval: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'approval',
      message: 'Deploy to production?',
      options: approvalOptions,
    },
  },
};

export const Input: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'input',
      message: 'Enter project name',
      metadata: {
        placeholder: 'my-project',
      },
    },
  },
};

export const SelectSingle: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Choose deployment target',
      options: deploymentTargets,
      metadata: {
        mode: 'single',
        style: 'radio',
      },
    },
  },
};

export const SelectMultiple: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Select features to enable',
      options: featureOptions,
      metadata: {
        mode: 'multiple',
        min: 1,
        max: 3,
      },
    },
  },
};

export const Review: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'review',
      message: 'Review the generated document',
      options: reviewOptions,
      metadata: {
        artifact: 'This is the document content that needs to be reviewed before sending to the customer.',
        artifact_type: 'document',
      },
    },
  },
};

export const Upload: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'upload',
      message: 'Upload supporting documents',
      metadata: {
        accept: ['.pdf', '.doc', '.docx'],
        max_size: 10 * 1024 * 1024,
        multiple: true,
      },
    },
  },
};

export const Escalation: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'escalation',
      message: 'Manual intervention required',
      metadata: {
        severity: 'warning',
        context: {
          reason: 'Complex edge case',
          attempts: 3,
        },
      },
    },
  },
};

export const WithFullContext: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'approval',
      message: 'Approve the AI-generated response?',
      options: approvalOptions,
      conversation: sampleConversation,
      prior_interactions: samplePriorInteractions,
    },
  },
};

export const DarkMode: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'approval',
      message: 'Approve the change in dark mode?',
      options: approvalOptions,
    },
  },
  parameters: { hitlTheme: 'dark' },
};
