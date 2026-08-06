import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article';
};

export function SectionWrapper({
  children,
  className,
  id,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn('py-16 sm:py-20 lg:py-24', className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Tag>
  );
}

type SectionHeadingProps = {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  badge,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12 lg:mb-16', className)}>
      {badge && (
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[rgba(212,169,58,0.1)] text-[#d4a93a] border border-[rgba(212,169,58,0.25)]">
          {badge}
        </span>
      )}
      <h2
        className="text-white"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="text-gradient-gold">{titleHighlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-[#a0a0a0] text-lg leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
