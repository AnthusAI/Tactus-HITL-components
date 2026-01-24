import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SelectSingle } from '../components/SelectSingle';
import { baseRequest, deploymentTargets } from './fixtures';

const meta = {
  title: 'Components/SelectSingle',
  component: SelectSingle,
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
} satisfies Meta<typeof SelectSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButtons: Story = {
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

export const Dropdown: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Select a deployment target',
      options: deploymentTargets,
      metadata: {
        mode: 'single',
        style: 'dropdown',
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Choose deployment target',
      options: deploymentTargets,
      default_value: 'staging',
      metadata: {
        mode: 'single',
        style: 'radio',
      },
    },
  },
};

export const SimpleOptions: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Choose priority',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
        { label: 'Critical', value: 'critical' },
      ],
      metadata: {
        mode: 'single',
        style: 'radio',
      },
    },
  },
};

export const DarkMode: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'select',
      message: 'Select in dark mode',
      options: deploymentTargets,
      metadata: {
        mode: 'single',
        style: 'radio',
      },
    },
  },
  parameters: { hitlTheme: 'dark' },
};
