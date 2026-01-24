import { useState } from 'react';
import type { HITLComponentProps, SelectMetadata, HITLOption } from '../types';
import { RequestHeader } from './shared/RequestHeader';
import { ContextPanel } from './shared/ContextPanel';

/**
 * Single-select component for choosing one option.
 *
 * Renders as radio buttons by default, or dropdown if style="dropdown".
 */
export function SelectSingle({
  request,
  onRespond,
  onCancel,
  className = '',
  showHeader = true,
  showContext = true,
}: HITLComponentProps) {
  const { request_id, options, default_value, metadata } = request;
  const selectMeta = metadata as SelectMetadata | undefined;

  const [selected, setSelected] = useState<unknown>(default_value);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const style = selectMeta?.style ?? 'radio';
  const displayOptions = options ?? [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected === undefined) return;
    setIsSubmitting(true);
    onRespond({ request_id, value: selected });
  };

  // For dropdown style, submit immediately on change
  const handleDropdownChange = (value: unknown) => {
    setIsSubmitting(true);
    onRespond({ request_id, value });
  };

  return (
    <div className={`tactus-hitl-select tactus-hitl-select-single tactus-ai-card ${className}`.trim()}>
      {showHeader && <RequestHeader request={request} />}
      {showContext && <ContextPanel request={request} />}

      <form onSubmit={handleSubmit} className="tactus-hitl-select-form tactus-ai-field">
        {style === 'dropdown' ? (
          <DropdownSelect
            options={displayOptions}
            selected={selected}
            onChange={handleDropdownChange}
            disabled={isSubmitting}
          />
        ) : (
          <RadioSelect
            options={displayOptions}
            selected={selected}
            onChange={setSelected}
            disabled={isSubmitting}
          />
        )}

        {style !== 'dropdown' && (
          <div className="tactus-hitl-actions">
            <button
              type="submit"
              className="tactus-hitl-button tactus-hitl-button-primary"
              disabled={isSubmitting || selected === undefined}
            >
              {isSubmitting ? 'Submitting...' : 'Confirm'}
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
        )}
      </form>
    </div>
  );
}

interface RadioSelectProps {
  options: HITLOption[];
  selected: unknown;
  onChange: (value: unknown) => void;
  disabled?: boolean;
}

function RadioSelect({ options, selected, onChange, disabled }: RadioSelectProps) {
  return (
    <div className="tactus-hitl-radio-group" role="radiogroup">
      {options.map((option, index) => (
        <label key={index} className="tactus-hitl-radio-option tactus-ai-option">
          <input
            type="radio"
            className="tactus-hitl-radio"
            name="selection"
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
            disabled={disabled}
          />
          <span className="tactus-hitl-radio-label">{option.label}</span>
          {option.description && (
            <span className="tactus-hitl-radio-description">{option.description}</span>
          )}
        </label>
      ))}
    </div>
  );
}

interface DropdownSelectProps {
  options: HITLOption[];
  selected: unknown;
  onChange: (value: unknown) => void;
  disabled?: boolean;
}

function DropdownSelect({ options, selected, onChange, disabled }: DropdownSelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value, 10);
    if (!isNaN(index) && options[index]) {
      onChange(options[index].value);
    }
  };

  const selectedIndex = options.findIndex((opt) => opt.value === selected);

  return (
    <select
      className="tactus-hitl-dropdown tactus-ai-input"
      value={selectedIndex >= 0 ? selectedIndex : ''}
      onChange={handleChange}
      disabled={disabled}
    >
      <option value="" disabled>
        Select an option...
      </option>
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
