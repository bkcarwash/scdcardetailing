import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#d4a93a] text-black font-bold hover:bg-[#e8c96b] active:bg-[#b8891e] shadow-[0_4px_20px_rgba(212,169,58,0.3)] hover:shadow-[0_4px_30px_rgba(212,169,58,0.5)]',
  secondary:
    'bg-[#1a1a1a] text-white border border-[#2a2a2a] hover:bg-[#2a2a2a] hover:border-[#d4a93a]',
  ghost:
    'text-[#a0a0a0] hover:text-white hover:bg-[#1a1a1a]',
  outline:
    'border-2 border-[#d4a93a] text-[#d4a93a] hover:bg-[#d4a93a] hover:text-black',
};

const sizeClasses: Record<Size, string> = {
  sm:  'px-4 py-2 text-sm rounded-md',
  md:  'px-6 py-3 text-base rounded-lg',
  lg:  'px-8 py-4 text-lg rounded-lg',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonProps | LinkButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;

  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#d4a93a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ('href' in props && props.href) {
    const { href, ...linkRest } = rest as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...(linkRest as Record<string, unknown>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
