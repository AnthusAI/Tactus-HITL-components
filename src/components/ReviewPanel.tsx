import { useState } from 'react';
import type { HITLComponentProps, ReviewMetadata, ReviewResult, HITLOption } from '../types';
import { RequestHeader } from './shared/RequestHeader';
import { ContextPanel } from './shared/ContextPanel';

/**
 * Review panel for reviewing artifacts with feedback.
 *
 * Displays the artifact and provides options (approve/edit/reject)
 * with an optional feedback text area.
 */
export function ReviewPanel({
  request,
  onRespond,
  onCancel,
  className = '',
  showHeader = true,
  showContext = true,
}: HITLComponentProps) {
  const { request_id, options, metadata } = request;
  const reviewMeta = metadata as ReviewMetadata | undefined;

  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const artifact = reviewMeta?.artifact;
  const artifactType = reviewMeta?.artifact_type ?? 'artifact';

  // Default options if none provided
  const defaultOptions: HITLOption[] = [
    { label: 'Approve', value: 'approve', style: 'primary' },
    { label: 'Request Changes', value: 'request_changes', style: 'secondary' },
    { label: 'Reject', value: 'reject', style: 'danger' },
  ];

  const displayOptions = options && options.length > 0 ? options : defaultOptions;

  const handleSelect = (decision: unknown) => {
    setIsSubmitting(true);
    const result: ReviewResult = {
      decision: String(decision),
      edited_artifact: artifact,
      feedback: feedback.trim() || undefined,
    };
    onRespond({ request_id, value: result });
  };

  return (
    <div className={`tactus-hitl-review tactus-ai-card ${className}`.trim()}>
      {showHeader && <RequestHeader request={request} />}
      {showContext && <ContextPanel request={request} />}

      <div className="tactus-hitl-review-content">
        {artifact !== undefined && (
          <ArtifactDisplay artifact={artifact} artifactType={artifactType} />
        )}

        <div className="tactus-hitl-review-feedback tactus-ai-field">
          <label className="tactus-hitl-review-feedback-label">
            Feedback (optional)
          </label>
          <textarea
            className="tactus-hitl-textarea tactus-ai-input"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Add feedback or comments..."
            disabled={isSubmitting}
            rows={3}
          />
        </div>

        <div className="tactus-hitl-actions">
          {displayOptions.map((option, index) => (
            <button
              key={index}
              type="button"
              className={`tactus-hitl-button tactus-hitl-button-${option.style ?? 'default'}`}
              onClick={() => handleSelect(option.value)}
              disabled={isSubmitting}
              title={option.description}
            >
              {option.label}
            </button>
          ))}
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
      </div>
    </div>
  );
}

interface ArtifactDisplayProps {
  artifact: unknown;
  artifactType: string;
}

function ArtifactDisplay({ artifact, artifactType }: ArtifactDisplayProps) {
  const renderArtifact = () => {
    if (artifact === null || artifact === undefined) {
      return <em>No artifact provided</em>;
    }

    // Render based on type hint
    switch (artifactType) {
      case 'code':
        return (
          <pre className="tactus-hitl-artifact-code">
            <code>{String(artifact)}</code>
          </pre>
        );

      case 'json':
        return (
          <pre className="tactus-hitl-artifact-code">
            <code>
              {typeof artifact === 'string'
                ? artifact
                : JSON.stringify(artifact, null, 2)}
            </code>
          </pre>
        );

      case 'text':
      case 'document':
        return (
          <div className="tactus-hitl-artifact-text">
            {String(artifact)}
          </div>
        );

      default:
        // Generic rendering
        if (typeof artifact === 'string') {
          return <div className="tactus-hitl-artifact-text">{artifact}</div>;
        }
        return (
          <pre className="tactus-hitl-artifact-code">
            <code>{JSON.stringify(artifact, null, 2)}</code>
          </pre>
        );
    }
  };

  return (
    <div className="tactus-hitl-artifact">
      <div className="tactus-hitl-artifact-header">
        <span className="tactus-hitl-artifact-type">{artifactType}</span>
      </div>
      <div className="tactus-hitl-artifact-content">{renderArtifact()}</div>
    </div>
  );
}
