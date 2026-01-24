import { useState } from 'react';
import type { HITLComponentProps, HITLOption } from '../types';
import { RequestHeader } from './shared/RequestHeader';
import { ContextPanel } from './shared/ContextPanel';
import {
  Confirmation,
  ConfirmationAccepted,
  ConfirmationActions,
  ConfirmationAction,
  ConfirmationRejected,
  ConfirmationRequest,
} from '../ai-elements/confirmation';

/**
 * Approval panel for yes/no decisions.
 *
 * Renders the request message with Approve/Reject buttons.
 */
export function ApprovalPanel({
  request,
  onRespond,
  onCancel,
  className = '',
  showHeader = true,
  showContext = true,
}: HITLComponentProps) {
  const { request_id, options } = request;
  const [responded, setResponded] = useState(false);
  const [responseValue, setResponseValue] = useState<unknown>(undefined);

  // Default options if none provided
  const defaultOptions: HITLOption[] = [
    { label: 'Approve', value: true, style: 'primary' },
    { label: 'Reject', value: false, style: 'danger' },
  ];

  const displayOptions = options && options.length > 0 ? options : defaultOptions;

  const handleSelect = (value: unknown) => {
    setResponded(true);
    setResponseValue(value);
    onRespond({ request_id, value });
  };

  return (
    <div className={`tactus-hitl-approval ${className}`.trim()}>
      {showHeader && <RequestHeader request={request} showMessage={false} />}
      {showContext && <ContextPanel request={request} />}

      <Confirmation
        approval={
          responded
            ? {
                id: request_id,
                approved: !!responseValue,
                reason: responseValue ? 'Approved by user' : 'Rejected by user',
              }
            : {
                id: request_id,
              }
        }
        state={responded ? 'approval-responded' : 'approval-requested'}
      >
        <ConfirmationRequest>{request.message}</ConfirmationRequest>

        <ConfirmationAccepted>
          You approved this action
        </ConfirmationAccepted>

        <ConfirmationRejected>
          You rejected this action
        </ConfirmationRejected>

        <ConfirmationActions>
          {displayOptions.map((option) => (
            <ConfirmationAction
              key={option.label}
              variant={
                option.style === 'danger'
                  ? 'destructive'
                  : option.style === 'secondary'
                  ? 'outline'
                  : 'default'
              }
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </ConfirmationAction>
          ))}
          {!displayOptions.length && onCancel && (
            <ConfirmationAction variant="outline" onClick={onCancel}>
              Cancel
            </ConfirmationAction>
          )}
        </ConfirmationActions>
      </Confirmation>
    </div>
  );
}
