type FeedbackMessageProps = {
  mensagem: string;
};

export const FeedbackMessage = ({ mensagem }: FeedbackMessageProps) => (
  <p className="mt-4 text-sm text-center text-rose-600">{mensagem}</p>
);
