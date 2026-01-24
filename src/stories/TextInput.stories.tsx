import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextInput } from '../components/TextInput';
import { baseRequest, sampleConversation } from './fixtures';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
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
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'input',
      message: 'What is your name?',
      metadata: {
        placeholder: 'Enter your name...',
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'input',
      message: 'Enter the project name',
      default_value: 'my-project',
      metadata: {
        placeholder: 'Project name...',
      },
    },
  },
};

export const Multiline: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'input',
      message: 'Provide a detailed description',
      metadata: {
        placeholder: 'Enter description...',
        multiline: true,
      },
    },
  },
};

export const WithContext: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'input',
      message: 'What topic should we research?',
      metadata: {
        placeholder: 'Enter topic...',
      },
      conversation: sampleConversation,
    },
  },
};

export const DarkMode: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'input',
      message: 'Input in dark mode',
      metadata: {
        placeholder: 'Type here...',
      },
    },
  },
  parameters: { hitlTheme: 'dark' },
};
