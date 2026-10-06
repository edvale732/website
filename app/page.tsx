import Image from 'next/image';
import Link from 'next/link';
import headshot from '@/app/ui/icons/Headshot.jpg';
import GitHubIcon from '@/app/ui/icons/github-white.png';
import LinkedInIcon from '@/app/ui/icons/linkedin-white.png';
import EmailIcon from '@/app/ui/icons/email.png';
import RevealOnScroll from '@/app/ui/reveal-on-scroll';
import type { Metadata } from 'next';
import { siteUrl } from './site-url';

export const metadata: Metadata = {
  title: 'Home | Edward Vale',
  description:
    'Meet Edward Vale, a First-Class Computer Science graduate from Lancaster University. Explore software projects and get in touch.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Edward Vale | Computer Science Graduate & Developer',
    description:
      'Meet Edward Vale, a First-Class Computer Science graduate from Lancaster University. Explore software projects and get in touch.',
    url: siteUrl,
    type: 'profile',
  },
};

export default function Page() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Edward Vale',
    url: siteUrl,
    image: `${siteUrl}${headshot.src}`,
    description:
      'First-Class Computer Science graduate from Lancaster University interested in building practical software.',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Lancaster University',
    },
    sameAs: [
      'https://github.com/edvale732',
      'https://www.linkedin.com/in/edward-vale-4672b3372',
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
        }}
      />
      <main className="flex w-full flex-1 items-center justify-center px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex w-full max-w-7xl flex-col items-stretch justify-center rounded-2xl border border-accent-border/30 bg-surface/90 p-5 shadow-panel backdrop-blur-sm sm:p-10 lg:min-h-[640px] lg:p-12">
          <div className="grid w-full gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-center">
            <RevealOnScroll as="section" className="flex flex-col gap-7 text-center sm:text-left">
              <div className="space-y-4">
                <h1 className="hero-title mx-auto max-w-xl text-3xl font-semibold leading-tight tracking-tight text-heading sm:mx-0 sm:text-5xl lg:text-6xl">
                  <span className="hero-title__text">Edward Vale</span>
                </h1>
              </div>

              <p className="max-w-2xl text-base leading-7 text-body/85 sm:text-lg">
                Hi, I am Edward, a First-Class Computer Science graduate from Lancaster University who enjoys turning complex problems into practical software. I have developed my skills through university, <Link href="/projects" className="font-medium text-subtle underline decoration-accent-border/70 underline-offset-4 transition hover:text-accent-hover">personal projects</Link> and <a href="https://www.mytutor.co.uk/tutors/10005073/" className="font-medium text-subtle underline decoration-accent-border/70 underline-offset-4 transition hover:text-accent-hover">online tutoring</a>, and I am now seeking opportunities to apply my knowledge, expand my skills and contribute to a team.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                <Link
                  href="/projects"
                  className="rounded-md border border-surface-border/40 bg-accent/15 px-8 py-4 text-base font-semibold text-foreground transition hover:border-accent-hover/70 hover:bg-accent/25 focus:outline-none focus:ring-2 focus:ring-accent-border focus:ring-offset-2 focus:ring-offset-surface"
                >
                  View projects
                </Link>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/edvale732"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-12 w-12 items-center justify-center rounded-md border border-surface-border/30 bg-accent/5 transition hover:border-accent-hover/60 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent-border"
                  >
                    <Image src={GitHubIcon} alt="" width={22} height={22} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/edward-vale-4672b3372"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-12 w-12 items-center justify-center rounded-md border border-surface-border/30 bg-accent/5 transition hover:border-accent-hover/60 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent-border"
                  >
                    <Image src={LinkedInIcon} alt="" width={22} height={22} />
                  </a>
                  <a
                    href="mailto:hello@edwardvale.co.uk"
                    aria-label="Email"
                    className="flex h-12 w-12 items-center justify-center rounded-md border border-surface-border/30 bg-accent/5 transition hover:border-accent-hover/60 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent-border"
                  >
                    <Image src={EmailIcon} alt="" width={22} height={22} />
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150} className="relative flex justify-center">
              <div className="absolute inset-4 -z-10 rounded-[1.5rem] bg-accent/10 blur-2xl" />
              <div className="w-full max-w-[220px] overflow-hidden rounded-[1.5rem] border border-surface-border/20 bg-surface-raised p-2 shadow-portrait sm:max-w-[280px] lg:max-w-[360px]">
                <div className="overflow-hidden rounded-[1.1rem]">
                  <Image
                    src={headshot}
                    alt="Edward Vale headshot"
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 360px"
                    className="h-64 w-full object-cover object-center sm:h-80 lg:h-[420px]"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </main>
    </div>
  );
}
