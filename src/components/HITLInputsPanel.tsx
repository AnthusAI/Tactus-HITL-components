import { useState } from 'react';
import type { HITLComponentProps, HITLRequestItem } from '../types';
import { ApprovalPanel } from './ApprovalPanel';
import { TextInput } from './TextInput';
import { SelectSingle } from './SelectSingle';
import { SelectMultiple } from './SelectMultiple';
import { ReviewPanel } from './ReviewPanel';
import { FileUpload } from './FileUpload';
import { EscalationAlert } from './EscalationAlert';
import { RequestHeader } from './shared/RequestHeader';
import { ContextPanel } from './shared/ContextPanel';

/**
 * Tabbed interface for collecting multiple inputs in a single interaction.
 *
 * Presents each input item as a tab with completion indicators.
 * All required inputs must be completed before submission.
 */
export interface HITLInputsPanelProps extends HITLComponentProps {
}

export function HITLInputsPanel({
  request,
  onRespond,
  onCancel,
  className = '',
  showHeader = true,
  showContext = true,
}: HITLInputsPanelProps) {
  const items = request.items || [];
  const [activeTab, setActiveTab] = useState(items[0]?.item_id || '');
  const [values, setValues] = useState<Record<string, unknown>>({});
  const [completedTabs, setCompletedTabs] = useState<Set<string>>(new Set());

  // Check if all required items are complete
  const allRequiredComplete = items.every((item) => {
    if (item.required === false) return true;
    return completedTabs.has(item.item_id);
  });

  // Handle value change for an item
  const handleItemResponse = (item_id: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [item_id]: value }));
    setCompletedTabs((prev) => new Set(prev).add(item_id));
  };

  // Handle submit
  const handleSubmit = () => {
    onRespond({
      request_id: request.request_id,
      value: values,
    });
  };

  // Render the component for a specific item
  const renderItemComponent = (item: HITLRequestItem) => {
    // Create a synthetic HITLRequest for the item
    const itemRequest = {
      ...request,
      request_id: `${request.request_id}_${item.item_id}`,
      request_type: item.request_type,
      message: item.message,
      label: item.label,
      options: item.options,
      default_value: item.default_value,
      metadata: item.metadata,
    };

    // Create a handler for this item
    const handleItemSubmit = (response: { value: unknown }) => {
      handleItemResponse(item.item_id, response.value);
    };

    // Render appropriate component based on type
    switch (item.request_type) {
      case 'approval':
        return (
          <ApprovalPanel
            request={itemRequest as any}
            onRespond={handleItemSubmit}
            onCancel={onCancel}
          />
        );
      case 'input':
        return (
          <TextInput
            request={itemRequest as any}
            onRespond={handleItemSubmit}
            onCancel={onCancel}
          />
        );
      case 'select': {
        const mode = itemRequest.metadata?.mode;
        return mode === 'multiple' ? (
          <SelectMultiple
            request={itemRequest as any}
            onRespond={handleItemSubmit}
            onCancel={onCancel}
          />
        ) : (
          <SelectSingle
            request={itemRequest as any}
            onRespond={handleItemSubmit}
            onCancel={onCancel}
          />
        );
      }
      case 'review':
        return (
          <ReviewPanel
            request={itemRequest as any}
            onRespond={handleItemSubmit}
            onCancel={onCancel}
          />
        );
      case 'upload':
        return (
          <FileUpload
            request={itemRequest as any}
            onRespond={handleItemSubmit}
            onCancel={onCancel}
          />
        );
      case 'escalation':
        return (
          <EscalationAlert
            request={itemRequest as any}
            onRespond={handleItemSubmit}
            onCancel={onCancel}
          />
        );
      default:
        return <div>Unsupported item type: {item.request_type}</div>;
    }
  };

  const activeItem = items.find((item) => item.item_id === activeTab);

  return (
    <div className={`tactus-hitl-inputs tactus-ai-card ${className}`.trim()}>
      {showHeader && <RequestHeader request={request} />}

      {showContext && <ContextPanel request={request} />}

      <div className="tactus-hitl-tabs">
        <div className="tactus-hitl-tabs-list" role="tablist">
          {items.map((item) => {
            const isActive = item.item_id === activeTab;
            const isComplete = completedTabs.has(item.item_id);
            const isRequired = item.required !== false;

            return (
              <button
                key={item.item_id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${item.item_id}`}
                className={`tactus-hitl-tab ${isActive ? 'tactus-hitl-tab-active' : ''} ${
                  isComplete ? 'tactus-hitl-tab-complete' : ''
                }`.trim()}
                onClick={() => setActiveTab(item.item_id)}
              >
                <span className="tactus-hitl-tab-label">{item.label}</span>
                {isRequired && !isComplete && (
                  <span className="tactus-hitl-tab-required" aria-label="required">
                    *
                  </span>
                )}
                {isComplete && (
                  <span className="tactus-hitl-tab-check" aria-label="complete">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="tactus-hitl-tabs-content"
        >
          {activeItem && renderItemComponent(activeItem)}
        </div>
      </div>

      <div className="tactus-hitl-actions">
        <button
          type="button"
          className="tactus-hitl-button tactus-hitl-button-primary"
          onClick={handleSubmit}
          disabled={!allRequiredComplete}
        >
          Submit All
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
