import type { HITLRequest } from '../../types';

export interface RequestHeaderProps {
  request: HITLRequest;
  className?: string;
  showMessage?: boolean;
}

/**
 * Header component displaying request message, procedure info, and timing.
 */
export function RequestHeader({
  request,
  className = '',
  showMessage = true,
}: RequestHeaderProps) {
  const { message, procedure_name, subject, elapsed_seconds } = request;

  const formatElapsed = (seconds?: number): string => {
    if (seconds === undefined || seconds === null) return '';
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    return `${Math.floor(seconds / 3600)}h ago`;
  };

  return (
    <div className={`tactus-hitl-header ${className}`.trim()}>
      <div className="tactus-hitl-header-top">
        {procedure_name && (
          <span className="tactus-hitl-procedure-name">{procedure_name}</span>
        )}
        {subject && (
          <span className="tactus-hitl-subject">{subject}</span>
        )}
        {elapsed_seconds !== undefined && (
          <span className="tactus-hitl-elapsed">{formatElapsed(elapsed_seconds)}</span>
        )}
      </div>
      {showMessage && <div className="tactus-hitl-message">{message}</div>}
    </div>
  );
}
