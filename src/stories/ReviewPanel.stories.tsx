import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReviewPanel } from '../components/ReviewPanel';
import { baseRequest, reviewOptions, sampleConversation } from './fixtures';

const meta = {
  title: 'Components/ReviewPanel',
  component: ReviewPanel,
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
} satisfies Meta<typeof ReviewPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleDocument = `Dear John,

Thank you for reaching out to our support team. We've reviewed your request and are happy to assist.

Based on your account details, we can offer the following resolution:
- Full refund of the disputed amount ($49.99)
- 20% discount on your next purchase
- Extended warranty on your current product

Please let us know which option works best for you.

Best regards,
Support Team`;

const sampleCode = `function processOrder(order: Order): ProcessedOrder {
  // Validate order items
  const validItems = order.items.filter(item => item.quantity > 0);

  // Calculate totals
  const subtotal = validItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return {
    ...order,
    items: validItems,
    subtotal,
    tax,
    total,
    processedAt: new Date().toISOString(),
  };
}`;

export const TextDocument: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'review',
      message: 'Review the generated response',
      options: reviewOptions,
      metadata: {
        artifact: sampleDocument,
        artifact_type: 'document',
      },
    },
  },
};

export const CodeReview: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'review',
      message: 'Review the generated code',
      options: reviewOptions,
      metadata: {
        artifact: sampleCode,
        artifact_type: 'code',
      },
    },
  },
};

export const JsonReview: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'review',
      message: 'Review the configuration',
      options: reviewOptions,
      metadata: {
        artifact: {
          database: {
            host: 'localhost',
            port: 5432,
            name: 'production_db',
          },
          cache: {
            enabled: true,
            ttl: 3600,
          },
        },
        artifact_type: 'json',
      },
    },
  },
};

export const WithContext: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'review',
      message: 'Review the AI-generated response',
      options: reviewOptions,
      metadata: {
        artifact: sampleDocument,
        artifact_type: 'document',
      },
      conversation: sampleConversation,
    },
  },
};

export const DarkMode: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'review',
      message: 'Review in dark mode',
      options: reviewOptions,
      metadata: {
        artifact: sampleDocument,
        artifact_type: 'document',
      },
    },
  },
  parameters: { hitlTheme: 'dark' },
};
