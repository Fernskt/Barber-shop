import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 bg-[#C6A15B]/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-[#C6A15B]" />
      </div>
      <h3 className="text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-6 max-w-md">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
}
