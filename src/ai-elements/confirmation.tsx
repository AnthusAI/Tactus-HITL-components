import {
  type ComponentProps,
  createContext,
  type ReactNode,
  useContext,
} from 'react';

type ConfirmationState =
  | 'approval-requested'
  | 'approval-responded'
  | 'output-available'
  | 'output-denied'
  | 'input-streaming'
  | 'input-available';

type ToolUIPartApproval =
  | {
      id: string;
      approved?: never;
      reason?: never;
    }
  | {
      id: string;
      approved: boolean;
      reason?: string;
    }
  | {
      id: string;
      approved: true;
      reason?: string;
    }
  | {
      id: string;
      approved: false;
      reason?: string;
    }
  | undefined;

interface ConfirmationContextValue {
  approval: ToolUIPartApproval;
  state: ConfirmationState;
}

const ConfirmationContext = createContext<ConfirmationContextValue | null>(null);

const useConfirmation = () => {
  const context = useContext(ConfirmationContext);

  if (!context) {
    throw new Error('Confirmation components must be used within Confirmation');
  }

  return context;
};

export type ConfirmationProps = ComponentProps<'div'> & {
  approval?: ToolUIPartApproval;
  state: ConfirmationState;
};

export const Confirmation = ({
  className,
  approval,
  state,
  ...props
}: ConfirmationProps) => {
  if (!approval || state === 'input-streaming' || state === 'input-available') {
    return null;
  }

  return (
    <ConfirmationContext.Provider value={{ approval, state }}>
      <div className={`tactus-ai-confirmation ${className ?? ''}`.trim()} {...props} />
    </ConfirmationContext.Provider>
  );
};

export type ConfirmationTitleProps = ComponentProps<'div'>;

export const ConfirmationTitle = ({
  className,
  ...props
}: ConfirmationTitleProps) => (
  <div className={`tactus-ai-confirmation-title ${className ?? ''}`.trim()} {...props} />
);

export interface ConfirmationRequestProps {
  children?: ReactNode;
}

export const ConfirmationRequest = ({ children }: ConfirmationRequestProps) => {
  const { state } = useConfirmation();

  if (state !== 'approval-requested') {
    return null;
  }

  return <div className="tactus-ai-confirmation-request">{children}</div>;
};

export interface ConfirmationAcceptedProps {
  children?: ReactNode;
}

export const ConfirmationAccepted = ({
  children,
}: ConfirmationAcceptedProps) => {
  const { approval, state } = useConfirmation();

  if (
    !approval?.approved ||
    (state !== 'approval-responded' &&
      state !== 'output-denied' &&
      state !== 'output-available')
  ) {
    return null;
  }

  return <div className="tactus-ai-confirmation-accepted">{children}</div>;
};

export interface ConfirmationRejectedProps {
  children?: ReactNode;
}

export const ConfirmationRejected = ({
  children,
}: ConfirmationRejectedProps) => {
  const { approval, state } = useConfirmation();

  if (
    approval?.approved !== false ||
    (state !== 'approval-responded' &&
      state !== 'output-denied' &&
      state !== 'output-available')
  ) {
    return null;
  }

  return <div className="tactus-ai-confirmation-rejected">{children}</div>;
};

export type ConfirmationActionsProps = ComponentProps<'div'>;

export const ConfirmationActions = ({
  className,
  ...props
}: ConfirmationActionsProps) => {
  const { state } = useConfirmation();

  if (state !== 'approval-requested') {
    return null;
  }

  return (
    <div
      className={`tactus-ai-confirmation-actions ${className ?? ''}`.trim()}
      {...props}
    />
  );
};

export type ConfirmationActionVariant = 'default' | 'destructive' | 'outline';

export type ConfirmationActionProps = ComponentProps<'button'> & {
  variant?: ConfirmationActionVariant;
};

const getButtonClassName = (variant?: ConfirmationActionVariant) => {
  switch (variant) {
    case 'destructive':
      return 'tactus-hitl-button tactus-hitl-button-danger';
    case 'outline':
      return 'tactus-hitl-button tactus-hitl-button-secondary';
    default:
      return 'tactus-hitl-button tactus-hitl-button-primary';
  }
};

export const ConfirmationAction = ({
  className,
  variant = 'default',
  ...props
}: ConfirmationActionProps) => (
  <button
    type="button"
    className={`${getButtonClassName(variant)} ${className ?? ''}`.trim()}
    {...props}
  />
);
