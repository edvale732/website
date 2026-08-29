'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
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
            'flex items-center justify-center rounded-md border border-transparent px-3 py-2 text-sm font-medium text-violet-100 transition hover:border-violet-400/60 hover:bg-violet-500/15 hover:text-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-black',
            {
              'border-violet-400/70 bg-violet-500/20 text-violet-50 shadow-[0_0_0_1px_rgba(196,181,253,0.2)]': pathname === link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
