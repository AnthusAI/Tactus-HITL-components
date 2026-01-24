import type { HITLComponentProps, HITLResponse } from '../types';
import { HITLInputsPanel } from './HITLInputsPanel';

export interface HITLInputsModalProps extends HITLComponentProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
}

/**
 * Modal wrapper for batched HITL inputs.
 */
export function HITLInputsModal({
  request,
  onRespond,
  onCancel,
  className = '',
  open,
  onOpenChange,
  title,
  description,
  showHeader = false,
  showContext = false,
}: HITLInputsModalProps) {
  if (!open) {
    return null;
  }

  const handleClose = () => {
    onOpenChange?.(false);
    onCancel?.();
  };

  const handleRespond = (response: HITLResponse) => {
    onRespond(response);
    onOpenChange?.(false);
  };

  return (
    <div className={`tactus-hitl-modal ${className}`.trim()}>
      <button
        type="button"
        className="tactus-hitl-modal-overlay"
        aria-label="Close"
        onClick={handleClose}
      />
      <div className="tactus-hitl-modal-content" role="dialog" aria-modal="true">
        <div className="tactus-hitl-modal-header">
          <div>
            <div className="tactus-hitl-modal-title">
              {title ?? 'Complete Form'}
            </div>
            {description && (
              <div className="tactus-hitl-modal-description">{description}</div>
            )}
          </div>
          <button
            type="button"
            className="tactus-hitl-modal-close"
            aria-label="Close"
            onClick={handleClose}
          >
            x
          </button>
        </div>

        <div className="tactus-hitl-modal-body">
          <HITLInputsPanel
            request={request}
            onRespond={handleRespond}
            onCancel={handleClose}
            showHeader={showHeader}
            showContext={showContext}
          />
        </div>
      </div>
    </div>
  );
}
