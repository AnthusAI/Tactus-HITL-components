import { useState } from 'react';
import type { HITLComponentProps, SelectMetadata, HITLOption } from '../types';
import { RequestHeader } from './shared/RequestHeader';
import { ContextPanel } from './shared/ContextPanel';

/**
 * Multi-select component for choosing multiple options.
 *
 * Renders as checkboxes with optional min/max constraints.
 */
export function SelectMultiple({
  request,
  onRespond,
  onCancel,
  className = '',
  showHeader = true,
  showContext = true,
}: HITLComponentProps) {
  const { request_id, options, default_value, metadata } = request;
  const selectMeta = metadata as SelectMetadata | undefined;

  const initialSelected = Array.isArray(default_value) ? default_value : [];
  const [selected, setSelected] = useState<unknown[]>(initialSelected);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const displayOptions = options ?? [];
  const minSelections = selectMeta?.min ?? 0;
  const maxSelections = selectMeta?.max;

  const isValid =
    selected.length >= minSelections &&
    (maxSelections === undefined || selected.length <= maxSelections);

  const handleToggle = (value: unknown) => {
    setSelected((prev) => {
      const isSelected = prev.includes(value);
      if (isSelected) {
        return prev.filter((v) => v !== value);
      } else {
        // Check max constraint
        if (maxSelections !== undefined && prev.length >= maxSelections) {
          return prev;
        }
        return [...prev, value];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setIsSubmitting(true);
    onRespond({ request_id, value: selected });
  };

  const constraintText = getConstraintText(minSelections, maxSelections);

  return (
    <div className={`tactus-hitl-select tactus-hitl-select-multiple tactus-ai-card ${className}`.trim()}>
      {showHeader && <RequestHeader request={request} />}
      {showContext && <ContextPanel request={request} />}

      <form onSubmit={handleSubmit} className="tactus-hitl-select-form tactus-ai-field">
        {constraintText && (
          <p className="tactus-hitl-constraint">{constraintText}</p>
        )}

        <div className="tactus-hitl-checkbox-group">
          {displayOptions.map((option, index) => (
            <CheckboxOption
              key={index}
              option={option}
              checked={selected.includes(option.value)}
              onChange={() => handleToggle(option.value)}
              disabled={
                isSubmitting ||
                (!selected.includes(option.value) &&
                  maxSelections !== undefined &&
                  selected.length >= maxSelections)
              }
            />
          ))}
        </div>

        <div className="tactus-hitl-actions">
          <button
            type="submit"
            className="tactus-hitl-button tactus-hitl-button-primary"
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? 'Submitting...' : `Confirm (${selected.length} selected)`}
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

interface CheckboxOptionProps {
  option: HITLOption;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

function CheckboxOption({ option, checked, onChange, disabled }: CheckboxOptionProps) {
  return (
    <label className="tactus-hitl-checkbox-option tactus-ai-option">
      <input
        type="checkbox"
        className="tactus-hitl-checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="tactus-hitl-checkbox-label">{option.label}</span>
      {option.description && (
        <span className="tactus-hitl-checkbox-description">{option.description}</span>
      )}
    </label>
  );
}

function getConstraintText(min: number, max?: number): string | null {
  if (min > 0 && max !== undefined) {
    if (min === max) {
      return `Select exactly ${min} option${min === 1 ? '' : 's'}`;
    }
    return `Select ${min}-${max} options`;
  }
  if (min > 0) {
    return `Select at least ${min} option${min === 1 ? '' : 's'}`;
  }
  if (max !== undefined) {
    return `Select up to ${max} option${max === 1 ? '' : 's'}`;
  }
  return null;
}
