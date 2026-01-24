import { Info, AlertTriangle, XCircle, AlertOctagon } from 'lucide-react';
import type { HITLComponentProps, EscalationMetadata } from '../types';
import { RequestHeader } from './shared/RequestHeader';
import { ContextPanel } from './shared/ContextPanel';

/**
 * Escalation alert component for critical notifications.
 *
 * Displays an alert banner with severity styling and an acknowledge button.
 */
export function EscalationAlert({
  request,
  onRespond,
  onCancel,
  className = '',
  showHeader = true,
  showContext = true,
}: HITLComponentProps) {
  const { request_id, metadata } = request;
  const escalationMeta = metadata as EscalationMetadata | undefined;

  const severity = escalationMeta?.severity ?? 'warning';
  const context = escalationMeta?.context;

  const handleAcknowledge = () => {
    onRespond({ request_id, value: true });
  };

  return (
    <div
      className={`tactus-hitl-escalation tactus-hitl-escalation-${severity} tactus-ai-card tactus-ai-alert ${className}`.trim()}
      role="alert"
    >
      <div className="tactus-hitl-escalation-icon">{getSeverityIcon(severity)}</div>

      <div className="tactus-hitl-escalation-content tactus-ai-field">
        {showHeader && <RequestHeader request={request} />}
        {showContext && <ContextPanel request={request} />}

        {context && Object.keys(context).length > 0 && (
          <div className="tactus-hitl-escalation-context">
            <dl className="tactus-hitl-escalation-context-list">
              {Object.entries(context).map(([key, value]) => (
                <div key={key} className="tactus-hitl-escalation-context-item">
                  <dt>{key}</dt>
                  <dd>{formatContextValue(value)}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <ContextPanel request={request} />
      </div>

      <div className="tactus-hitl-actions">
        <button
          type="button"
          className="tactus-hitl-button tactus-hitl-button-primary"
          onClick={handleAcknowledge}
        >
          Acknowledge
        </button>
        {onCancel && (
          <button
            type="button"
            className="tactus-hitl-button tactus-hitl-button-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

function getSeverityIcon(severity: string): React.ReactNode {
  const iconProps = { size: 24, strokeWidth: 2 };

  switch (severity) {
    case 'info':
      return <Info {...iconProps} />;
    case 'warning':
      return <AlertTriangle {...iconProps} />;
    case 'error':
      return <XCircle {...iconProps} />;
    case 'critical':
      return <AlertOctagon {...iconProps} />;
    default:
      return <AlertTriangle {...iconProps} />;
  }
}

function formatContextValue(value: unknown): string {
  if (value === null || value === undefined) return '—';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}
