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
    <header className="sticky top-0 z-50 border-b border-surface-border/70 bg-page/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main navigation">
          <NavLinks />
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2" aria-label="Social links">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              title={link.name}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-transparent text-body transition hover:border-accent-border/60 hover:bg-accent/15 hover:text-heading focus:outline-none focus:ring-2 focus:ring-accent-border focus:ring-offset-2 focus:ring-offset-page sm:h-11 sm:w-11"
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
