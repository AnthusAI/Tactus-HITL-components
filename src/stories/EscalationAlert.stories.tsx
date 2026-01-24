import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { EscalationAlert } from '../components/EscalationAlert';
import { baseRequest, sampleConversation } from './fixtures';

const meta = {
  title: 'Components/EscalationAlert',
  component: EscalationAlert,
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
} satisfies Meta<typeof EscalationAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'escalation',
      message: 'This task requires manual review',
      metadata: {
        severity: 'info',
        context: {
          reason: 'Complex request',
          estimated_time: '5 minutes',
        },
      },
    },
  },
};

export const Warning: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'escalation',
      message: 'Action required: Unusual pattern detected',
      metadata: {
        severity: 'warning',
        context: {
          pattern_type: 'Multiple failed attempts',
          count: 5,
          last_attempt: '2 minutes ago',
        },
      },
    },
  },
};

export const Error: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'escalation',
      message: 'Failed to process request after multiple retries',
      metadata: {
        severity: 'error',
        context: {
          error_code: 'PROCESSING_FAILED',
          attempts: 3,
          last_error: 'Connection timeout',
        },
      },
    },
  },
};

export const Critical: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'escalation',
      message: 'URGENT: Security incident detected',
      metadata: {
        severity: 'critical',
        context: {
          incident_type: 'Unauthorized access attempt',
          source_ip: '192.168.1.100',
          affected_resource: 'Customer database',
          timestamp: '2024-01-15T10:30:00Z',
        },
      },
    },
  },
};

export const WithConversationContext: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'escalation',
      message: 'Unable to resolve customer request automatically',
      metadata: {
        severity: 'warning',
        context: {
          customer_id: 'cust_123',
          issue_type: 'Billing dispute',
        },
      },
      conversation: sampleConversation,
    },
  },
};

export const DarkMode: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'escalation',
      message: 'Critical alert in dark mode',
      metadata: {
        severity: 'critical',
        context: {
          incident_type: 'Unauthorized access attempt',
          source_ip: '192.168.1.100',
        },
      },
    },
  },
  parameters: { hitlTheme: 'dark' },
};
