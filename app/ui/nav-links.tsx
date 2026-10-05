'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex items-center justify-center rounded-md border border-transparent px-3 py-2 text-sm font-medium text-body transition hover:border-accent-border/60 hover:bg-accent/15 hover:text-heading focus:outline-none focus:ring-2 focus:ring-accent-border focus:ring-offset-2 focus:ring-offset-page',
            {
              'border-accent-border/70 bg-accent/20 text-heading shadow-panel': pathname === link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
