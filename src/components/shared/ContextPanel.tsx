import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { HITLRequest, ConversationMessage, ControlInteraction } from '../../types';

export interface ContextPanelProps {
  request: HITLRequest;
  className?: string;
  defaultExpanded?: boolean;
}

/**
 * Collapsible panel showing conversation history and prior interactions.
 */
export function ContextPanel({
  request,
  className = '',
  defaultExpanded = false,
}: ContextPanelProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const { input_summary, conversation, prior_interactions } = request;

  const hasContext =
    (input_summary && Object.keys(input_summary).length > 0) ||
    (conversation && conversation.length > 0) ||
    (prior_interactions && prior_interactions.length > 0);

  if (!hasContext) {
    return null;
  }

  return (
    <div className={`tactus-hitl-context ${className}`.trim()}>
      <button
        type="button"
        className="tactus-hitl-context-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <ChevronDown className="tactus-hitl-context-toggle-icon" size={16} />
        ) : (
          <ChevronRight className="tactus-hitl-context-toggle-icon" size={16} />
        )}
        <span>Context</span>
      </button>

      {isExpanded && (
        <div className="tactus-hitl-context-content">
          {input_summary && Object.keys(input_summary).length > 0 && (
            <InputSummarySection summary={input_summary} />
          )}

          {prior_interactions && prior_interactions.length > 0 && (
            <PriorInteractionsSection interactions={prior_interactions} />
          )}

          {conversation && conversation.length > 0 && (
            <ConversationSection messages={conversation} />
          )}
        </div>
      )}
    </div>
  );
}

function InputSummarySection({ summary }: { summary: Record<string, unknown> }) {
  return (
    <div className="tactus-hitl-context-section">
      <h4 className="tactus-hitl-context-section-title">Input</h4>
      <dl className="tactus-hitl-input-summary">
        {Object.entries(summary).map(([key, value]) => (
          <div key={key} className="tactus-hitl-input-summary-item">
            <dt>{key}</dt>
            <dd>{formatValue(value)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function PriorInteractionsSection({ interactions }: { interactions: ControlInteraction[] }) {
  return (
    <div className="tactus-hitl-context-section">
      <h4 className="tactus-hitl-context-section-title">Prior Decisions</h4>
      <ul className="tactus-hitl-prior-interactions">
        {interactions.map((interaction, index) => (
          <li key={index} className="tactus-hitl-prior-interaction">
            <span className="tactus-hitl-prior-interaction-type">
              {interaction.request_type}
            </span>
            <span className="tactus-hitl-prior-interaction-message">
              {interaction.message}
            </span>
            <span className="tactus-hitl-prior-interaction-response">
              → {formatValue(interaction.response_value)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConversationSection({ messages }: { messages: ConversationMessage[] }) {
  return (
    <div className="tactus-hitl-context-section">
      <h4 className="tactus-hitl-context-section-title">Conversation</h4>
      <div className="tactus-hitl-conversation">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`tactus-hitl-conversation-message tactus-hitl-conversation-message-${msg.role}`}
          >
            <span className="tactus-hitl-conversation-role">{msg.role}</span>
            <span className="tactus-hitl-conversation-content">{msg.content}</span>
            {msg.tool_name && (
              <span className="tactus-hitl-conversation-tool">
                Tool: {msg.tool_name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined) return '—';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (typeof value === 'object') return JSON.stringify(value, null, 2);
  return String(value);
}
