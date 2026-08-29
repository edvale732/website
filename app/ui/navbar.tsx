import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
