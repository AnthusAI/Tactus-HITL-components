import type { HITLOption, OptionStyle } from '../../types';

export interface ResponseActionsProps {
  /** Options to render as buttons */
  options?: HITLOption[];
  /** Callback when an option is selected */
  onSelect: (value: unknown) => void;
  /** Optional cancel callback */
  onCancel?: () => void;
  /** Whether the form is currently submitting */
  isSubmitting?: boolean;
  /** CSS class name */
  className?: string;
}

/**
 * Action buttons for responding to HITL requests.
 *
 * Renders options as styled buttons. If no options provided,
 * renders default Submit/Cancel buttons.
 */
export function ResponseActions({
  options,
  onSelect,
  onCancel,
  isSubmitting = false,
  className = '',
}: ResponseActionsProps) {
  const hasOptions = options && options.length > 0;

  return (
    <div className={`tactus-hitl-actions ${className}`.trim()}>
      {hasOptions ? (
        options.map((option, index) => (
          <ActionButton
            key={index}
            option={option}
            onClick={() => onSelect(option.value)}
            disabled={isSubmitting}
          />
        ))
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

interface ActionButtonProps {
  option: HITLOption;
  onClick: () => void;
  disabled?: boolean;
}

function ActionButton({ option, onClick, disabled }: ActionButtonProps) {
  const styleClass = getStyleClass(option.style);

  return (
    <button
      type="button"
      className={`tactus-hitl-button ${styleClass}`}
      onClick={onClick}
      disabled={disabled}
      title={option.description}
    >
      {option.label}
    </button>
  );
}

function getStyleClass(style?: OptionStyle): string {
  switch (style) {
    case 'primary':
      return 'tactus-hitl-button-primary';
    case 'danger':
      return 'tactus-hitl-button-danger';
    case 'secondary':
      return 'tactus-hitl-button-secondary';
    default:
      return 'tactus-hitl-button-default';
  }
}
