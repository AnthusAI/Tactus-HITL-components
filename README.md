# Tactus-HITL-components

React components for rendering Tactus Human-in-the-Loop (HITL) request UIs.

These components follow the Vercel AI Elements patterns for HITL approval flows and
include lightweight AI Elements primitives in this package.

## Installation

```bash
npm install @anthus/tactus-hitl-components
```

## Quick Start

```tsx
import { HITLRequestRenderer } from '@anthus/tactus-hitl-components';
import '@anthus/tactus-hitl-components/styles.css';

function MyApp() {
  const request = {
    request_id: 'req_123',
    procedure_id: 'my-procedure',
    procedure_name: 'My Procedure',
    request_type: 'approval',
    message: 'Deploy to production?',
  };

  const handleRespond = (response) => {
    console.log('Response:', response);
    // Send response to your backend
  };

  return (
    <HITLRequestRenderer
      request={request}
      onRespond={handleRespond}
    />
  );
}
```

## Components

### HITLRequestRenderer

The main component that automatically renders the appropriate UI based on `request_type`.

```tsx
<HITLRequestRenderer
  request={hitlRequest}
  onRespond={(response) => handleResponse(response)}
  onCancel={() => handleCancel()}
/>
```

### Individual Components

You can also use individual components directly:

- **ApprovalPanel** - Yes/no approval decisions
- **TextInput** - Free-form text input
- **SelectSingle** - Single-select (radio buttons or dropdown)
- **SelectMultiple** - Multi-select (checkboxes)
- **ReviewPanel** - Review artifacts with feedback
- **FileUpload** - File upload with drag-and-drop
- **EscalationAlert** - Critical alerts requiring acknowledgment
- **HITLInputsModal** - Modal wrapper for batched inputs

## Request Types

### approval

Simple yes/no decision.

```tsx
const request = {
  request_type: 'approval',
  message: 'Approve this change?',
  options: [
    { label: 'Approve', value: true, style: 'primary' },
    { label: 'Reject', value: false, style: 'danger' },
  ],
};
```

### input

Free-form text input.

```tsx
const request = {
  request_type: 'input',
  message: 'Enter your name',
  default_value: 'John',
  metadata: {
    placeholder: 'Your name...',
    multiline: false,  // true for textarea
  },
};
```

### select

Single or multi-select from options.

```tsx
// Single select (radio buttons)
const request = {
  request_type: 'select',
  message: 'Choose environment',
  options: [
    { label: 'Development', value: 'dev' },
    { label: 'Staging', value: 'staging' },
    { label: 'Production', value: 'prod' },
  ],
  metadata: {
    mode: 'single',
    style: 'radio',  // or 'dropdown'
  },
};

// Multi-select (checkboxes)
const request = {
  request_type: 'select',
  message: 'Select features',
  options: [
    { label: 'Dark Mode', value: 'dark_mode' },
    { label: 'Notifications', value: 'notifications' },
  ],
  metadata: {
    mode: 'multiple',
    min: 1,  // minimum selections
    max: 3,  // maximum selections
  },
};
```

### review

Review an artifact with options and feedback.

```tsx
const request = {
  request_type: 'review',
  message: 'Review the generated document',
  options: [
    { label: 'Approve', value: 'approve', style: 'primary' },
    { label: 'Request Changes', value: 'changes', style: 'secondary' },
    { label: 'Reject', value: 'reject', style: 'danger' },
  ],
  metadata: {
    artifact: 'Document content to review...',
    artifact_type: 'document',  // or 'code', 'json', 'text'
  },
};
```

### upload

File upload.

```tsx
const request = {
  request_type: 'upload',
  message: 'Upload your document',
  metadata: {
    accept: ['.pdf', '.doc', 'image/*'],
    max_size: 10 * 1024 * 1024,  // 10MB
    multiple: false,
  },
};
```

### escalation

Critical alert requiring acknowledgment.

```tsx
const request = {
  request_type: 'escalation',
  message: 'Manual intervention required',
  metadata: {
    severity: 'warning',  // 'info', 'warning', 'error', 'critical'
    context: {
      reason: 'Unusual pattern detected',
      attempts: 3,
    },
  },
};
```

### inputs

Batched inputs - collect multiple inputs in a single interaction with tabbed UI.

```tsx
const request = {
  request_type: 'inputs',
  message: 'Deployment Configuration',
  items: [
    {
      item_id: 'target',
      label: 'Target',           // Pithy tab name
      request_type: 'select',
      message: 'Which environment?',
      options: [
        { label: 'Development', value: 'dev' },
        { label: 'Staging', value: 'staging' },
        { label: 'Production', value: 'prod' },
      ],
      required: true,
      metadata: { mode: 'single', style: 'radio' },
    },
    {
      item_id: 'confirm',
      label: 'Confirm',
      request_type: 'approval',
      message: 'Are you sure you want to deploy?',
      required: true,
    },
    {
      item_id: 'notes',
      label: 'Notes',
      request_type: 'input',
      message: 'Any deployment notes?',
      required: false,           // Optional input
      metadata: { placeholder: 'Enter notes...', multiline: true },
    },
  ],
};

// Response format: { target: 'prod', confirm: true, notes: 'Friday deploy' }
```

#### Modal wrapper

If you want batched inputs in a modal, use `HITLInputsModal`:

```tsx
import { HITLInputsModal } from '@anthus/tactus-hitl-components';

<HITLInputsModal
  open={modalOpen}
  onOpenChange={setModalOpen}
  request={request}
  onRespond={(response) => handleResponse(response)}
  onCancel={() => setModalOpen(false)}
  title="Complete Form"
  description="Fill out all required fields."
/>;
```

## Rich Context

Requests can include rich context for decision-making:

```tsx
const request = {
  request_type: 'approval',
  message: 'Approve the generated response?',

  // Identity
  procedure_name: 'Customer Intake',
  subject: 'John Doe',
  elapsed_seconds: 45,

  // Input summary
  input_summary: {
    customer_name: 'John Doe',
    request_type: 'Support',
  },

  // Conversation history
  conversation: [
    { role: 'user', content: 'Process this request', timestamp: '...' },
    { role: 'agent', content: 'Analyzing...', timestamp: '...' },
  ],

  // Prior HITL interactions
  prior_interactions: [
    {
      request_type: 'approval',
      message: 'Approve initial analysis?',
      response_value: true,
      channel_id: 'ide',
    },
  ],
};
```

## Styling

### Default Styles

Import the default styles:

```tsx
import '@anthus/tactus-hitl-components/styles.css';
```

### Custom Styling

Components use semantic CSS class names. Override with your own styles:

```css
/* Custom button styling */
.tactus-hitl-button-primary {
  background-color: #your-brand-color;
}

/* Custom panel styling */
.tactus-hitl-approval {
  border: 2px solid #your-border-color;
  border-radius: 12px;
}
```

## Theme Management

The library supports light/dark mode with system preference detection.

### Basic Usage

Wrap your app or HITL components with `ThemeProvider`:

```tsx
import { ThemeProvider } from '@anthus/tactus-hitl-components';
import '@anthus/tactus-hitl-components/styles.css';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
      <HITLRequestRenderer request={request} onRespond={handleRespond} />
    </ThemeProvider>
  );
}
```

The `ThemeProvider` component:
- Automatically detects system dark mode preference
- Persists user choice to localStorage (optional)
- Updates in real-time when system theme changes
- Supports three modes: `'light'`, `'dark'`, `'system'`

### Theme Toggle Component

Use the pre-built toggle button:

```tsx
import { ThemeToggle } from '@anthus/tactus-hitl-components';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <ThemeToggle />
    </header>
  );
}
```

The toggle cycles through: light → dark → system

### Custom Theme Controls

Build custom theme controls using the `useTheme` hook:

```tsx
import { useTheme } from '@anthus/tactus-hitl-components';

function CustomToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Current: {resolvedTheme}
    </button>
  );
}
```

### Manual Theme Management

If you prefer to manage themes manually without `ThemeProvider`, you can still use the CSS classes:

```tsx
<div className="tactus-hitl-theme">
  <HITLRequestRenderer request={request} onRespond={handleRespond} />
</div>
```

To enable dark mode, add the `dark` class:

```tsx
<div className="tactus-hitl-theme dark">
  <HITLRequestRenderer request={request} onRespond={handleRespond} />
</div>
```

This scoped wrapper allows hosts to theme HITL independently of the rest of the UI.

### Embedding in Host UIs

If your host app already renders headers or context, you can hide them:

```tsx
<HITLRequestRenderer
  request={hitlRequest}
  onRespond={handleRespond}
  showHeader={false}
  showContext={false}
/>
```

### CSS Variables

The default styles use CSS custom properties for theming:

```css
:root {
  --tactus-hitl-color-primary: #2563eb;
  --tactus-hitl-color-danger: #dc2626;
  --tactus-hitl-color-text: #1a1a1a;
  --tactus-hitl-color-bg: #ffffff;
  /* ... more variables */
}
```

## TypeScript

Full TypeScript support with exported types:

```tsx
import type {
  HITLRequest,
  HITLResponse,
  HITLOption,
  HITLRequestType,
  HITLComponentProps,
} from '@anthus/tactus-hitl-components';
```

## Storybook

View all components in Storybook:

```bash
npm run storybook
```

Build a static Storybook bundle:

```bash
npm run build-storybook
```

Storybook runs on `http://localhost:6006` by default.

## Development

Install dependencies:

```bash
npm install
```

Run the Vite dev server (component playground):

```bash
npm run dev
```

Create a production build of the library:

```bash
npm run build
```

Typecheck and lint:

```bash
npm run typecheck
npm run lint
```

Run tests:

```bash
npm test
```

## Local Development With Another Repo

If you need to iterate on these components from another project (for example, the Tactus IDE),
use a local link so changes are reflected immediately.

1) From this repo, build once and link:

```bash
npm install
npm run build
npm link
```

2) In the consuming repo:

```bash
npm link @anthus/tactus-hitl-components
```

3) If the consuming app needs the styles, ensure this import exists:

```tsx
import '@anthus/tactus-hitl-components/styles.css';
```

When done, unlink in the consuming repo:

```bash
npm unlink @anthus/tactus-hitl-components
```

## License

MIT
