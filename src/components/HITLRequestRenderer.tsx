import type { HITLRequestRendererProps, SelectMetadata } from '../types';
import { ApprovalPanel } from './ApprovalPanel';
import { TextInput } from './TextInput';
import { SelectSingle } from './SelectSingle';
import { SelectMultiple } from './SelectMultiple';
import { ReviewPanel } from './ReviewPanel';
import { FileUpload } from './FileUpload';
import { EscalationAlert } from './EscalationAlert';
import { HITLInputsPanel } from './HITLInputsPanel';

/**
 * Main dispatcher component that renders the appropriate HITL UI
 * based on the request type.
 *
 * Usage:
 * ```tsx
 * <HITLRequestRenderer
 *   request={hitlRequest}
 *   onRespond={(response) => sendResponse(response)}
 *   onCancel={() => handleCancel()}
 * />
 * ```
 */
export function HITLRequestRenderer({
  request,
  onRespond,
  onCancel,
  className = '',
  showHeader = true,
  showContext = true,
}: HITLRequestRendererProps) {
  const { request_type, metadata } = request;

  const componentProps = {
    request,
    onRespond,
    onCancel,
    className,
    showHeader,
    showContext,
  };

  switch (request_type) {
    case 'approval':
      return <ApprovalPanel {...componentProps} />;

    case 'input':
      return <TextInput {...componentProps} />;

    case 'select': {
      const selectMeta = metadata as SelectMetadata | undefined;
      const mode = selectMeta?.mode ?? 'single';
      return mode === 'multiple' ? (
        <SelectMultiple {...componentProps} />
      ) : (
        <SelectSingle {...componentProps} />
      );
    }

    case 'review':
      return <ReviewPanel {...componentProps} />;

    case 'upload':
      return <FileUpload {...componentProps} />;

    case 'escalation':
      return <EscalationAlert {...componentProps} />;

    case 'inputs':
      return <HITLInputsPanel {...componentProps} />;

    default:
      // Unknown request type - render a fallback
      return (
        <div className={`tactus-hitl-unknown ${className}`.trim()}>
          <p>Unknown request type: {request_type}</p>
          <p>{request.message}</p>
          <button
            type="button"
            className="tactus-hitl-button tactus-hitl-button-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      );
  }
}
