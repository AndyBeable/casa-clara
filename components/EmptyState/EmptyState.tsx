import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface px-6 py-12 text-center">
      <h2 className="font-display text-2xl font-medium">{title}</h2>

      <p className="mt-2 text-muted">{description}</p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
