import { useState } from 'react';
import type { HITLComponentProps, InputMetadata } from '../types';
import { RequestHeader } from './shared/RequestHeader';
import { ContextPanel } from './shared/ContextPanel';

/**
 * Text input for free-form input requests.
 *
 * Renders a text field (single line or multiline) with submit button.
 */
export function TextInput({
  request,
  onRespond,
  onCancel,
  className = '',
  showHeader = true,
  showContext = true,
}: HITLComponentProps) {
  const { request_id, default_value, metadata } = request;
  const inputMeta = metadata as InputMetadata | undefined;

  const [value, setValue] = useState<string>(
    typeof default_value === 'string' ? default_value : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const placeholder = inputMeta?.placeholder ?? '';
  const multiline = inputMeta?.multiline ?? false;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onRespond({ request_id, value });
  };

  return (
    <div className={`tactus-hitl-input tactus-ai-card ${className}`.trim()}>
      {showHeader && <RequestHeader request={request} />}
      {showContext && <ContextPanel request={request} />}

      <form onSubmit={handleSubmit} className="tactus-hitl-input-form tactus-ai-field">
        {multiline ? (
          <textarea
            className="tactus-hitl-textarea tactus-ai-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            disabled={isSubmitting}
            rows={4}
          />
        ) : (
          <input
            type="text"
            className="tactus-hitl-textfield tactus-ai-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            disabled={isSubmitting}
          />
        )}

        <div className="tactus-hitl-actions">
          <button
            type="submit"
            className="tactus-hitl-button tactus-hitl-button-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {onCancel && (
            <button
              type="button"
              className="tactus-hitl-button tactus-hitl-button-secondary"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
