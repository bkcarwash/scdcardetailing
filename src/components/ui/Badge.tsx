import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type BadgeVariant = 'gold' | 'dark' | 'outline';

const variants: Record<BadgeVariant, string> = {
  gold:    'bg-[rgba(212,169,58,0.15)] text-[#d4a93a] border border-[rgba(212,169,58,0.3)]',
  dark:    'bg-[#1a1a1a] text-[#a0a0a0] border border-[#2a2a2a]',
  outline: 'border border-[#d4a93a] text-[#d4a93a]',
};

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
