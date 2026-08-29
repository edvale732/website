import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import GitHubIcon from '@/app/ui/icons/github-white.png';
import LinkedInIcon from '@/app/ui/icons/linkedin-white.png';
import EmailIcon from '@/app/ui/icons/email.png';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/edvale732', icon: GitHubIcon, alt: 'GitHub logo' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/edward-vale-4672b3372', icon: LinkedInIcon, alt: 'LinkedIn logo' },
  { name: 'Email', href: 'mailto:hello@edwardvale.co.uk', icon: EmailIcon, alt: 'Email logo'},
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-violet-400/30 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2" aria-label="Main navigation">
          <NavLinks />
        </nav>

        <div className="ml-auto flex items-center gap-2" aria-label="Social links">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              title={link.name}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-transparent text-violet-100 transition hover:border-violet-400/60 hover:bg-violet-500/15 hover:text-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Image
                src={link.icon}
                alt={link.alt}
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
