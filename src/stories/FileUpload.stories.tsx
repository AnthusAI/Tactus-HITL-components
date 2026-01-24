import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FileUpload } from '../components/FileUpload';
import { baseRequest } from './fixtures';

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
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
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'upload',
      message: 'Upload a file',
    },
  },
};

export const DocumentUpload: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'upload',
      message: 'Upload your document',
      metadata: {
        accept: ['.pdf', '.doc', '.docx'],
        max_size: 10 * 1024 * 1024, // 10MB
      },
    },
  },
};

export const ImageUpload: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'upload',
      message: 'Upload an image',
      metadata: {
        accept: ['image/*'],
        max_size: 5 * 1024 * 1024, // 5MB
      },
    },
  },
};

export const MultipleFiles: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'upload',
      message: 'Upload your images',
      metadata: {
        accept: ['image/*'],
        max_size: 5 * 1024 * 1024, // 5MB each
        multiple: true,
      },
    },
  },
};

export const CsvUpload: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'upload',
      message: 'Upload CSV data file',
      metadata: {
        accept: ['.csv', '.tsv'],
        max_size: 50 * 1024 * 1024, // 50MB
      },
    },
  },
};

export const DarkMode: Story = {
  args: {
    request: {
      ...baseRequest,
      request_type: 'upload',
      message: 'Upload in dark mode',
      metadata: {
        accept: ['.pdf', '.doc', '.docx'],
        max_size: 10 * 1024 * 1024,
      },
    },
  },
  parameters: { hitlTheme: 'dark' },
};
