import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SITE_URL } from '@/lib/siteConfig';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { JsonLd } from './JsonLd';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaItems = [
    { name: 'Home', url: SITE_URL },
    ...items.map((item) => ({
      name: item.label,
      url: `${SITE_URL}${item.href ?? ''}`,
    })),
  ];

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-sm text-[#666]">
        <Link href="/" className="hover:text-[#d4a93a] transition-colors">
          Home
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1">
            <ChevronRight size={12} className="text-[#444]" aria-hidden="true" />
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-[#d4a93a] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#a0a0a0]" aria-current={i === items.length - 1 ? 'page' : undefined}>
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
