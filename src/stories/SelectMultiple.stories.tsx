import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SelectMultiple } from '../components/SelectMultiple';
import { baseRequest, featureOptions } from './fixtures';

const meta = {
  title: 'Components/SelectMultiple',
  component: SelectMultiple,
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
} satisfies Meta<typeof SelectMultiple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Which features should we enable?',
      options: featureOptions,
      metadata: {
        mode: 'multiple',
      },
    },
  },
};

export const WithMinMax: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Select 1-2 features to enable',
      options: featureOptions,
      metadata: {
        mode: 'multiple',
        min: 1,
        max: 2,
      },
    },
  },
};

export const WithDefaultValues: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Choose features (notifications pre-selected)',
      options: featureOptions,
      default_value: ['notifications'],
      metadata: {
        mode: 'multiple',
      },
    },
  },
};

export const ExactSelection: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Select exactly 2 features',
      options: featureOptions,
      metadata: {
        mode: 'multiple',
        min: 2,
        max: 2,
      },
    },
  },
};

export const DarkMode: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Select features in dark mode',
      options: featureOptions,
      metadata: {
        mode: 'multiple',
        min: 1,
      },
    },
  },
  parameters: { hitlTheme: 'dark' },
};
