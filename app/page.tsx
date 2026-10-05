import Image from 'next/image';
import Link from 'next/link';
import headshot from '@/app/ui/icons/Headshot.jpg';
import GitHubIcon from '@/app/ui/icons/github-white.png';
import LinkedInIcon from '@/app/ui/icons/linkedin-white.png';
import RevealOnScroll from '@/app/ui/reveal-on-scroll';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-foreground">
      <main className="flex w-full flex-1 items-center justify-center px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex w-full max-w-7xl flex-col items-stretch rounded-2xl border border-accent-border/30 bg-surface/90 p-5 shadow-panel backdrop-blur-sm sm:p-10 lg:min-h-[640px] lg:p-12">
          <div className="grid w-full gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-center">
            <RevealOnScroll as="section" className="flex flex-col gap-7 text-center sm:text-left">
              <div className="space-y-4">
                <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-heading sm:text-5xl lg:text-6xl">
                  Edward Vale
                </h1>
              </div>

              <p className="max-w-2xl text-base leading-7 text-body/85 sm:text-lg">
                Hi, I am Edward, a First-Class Computer Science graduate from Lancaster University who enjoys turning complex problems into practical software. I have developed my skills through university, <Link href="/projects" className="font-medium text-subtle underline decoration-accent-border/70 underline-offset-4 transition hover:text-accent-hover">personal projects</Link> and <a href="https://www.mytutor.co.uk/tutors/10005073/" className="font-medium text-subtle underline decoration-accent-border/70 underline-offset-4 transition hover:text-accent-hover">online tutoring</a>, and I am now seeking opportunities to apply my knowledge, expand my skills and contribute to a team.
              </p>

              <div className="grid gap-4 rounded-2xl border border-accent-border/20 bg-accent/5 p-4 text-center text-sm text-body/85 sm:grid-cols-3 sm:text-left">
                <div>
                  <p className="mb-1 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-subtle/70">
                    Based in
                  </p>
                  <p className="font-medium text-accent-hover">England</p>
                </div>

                <div>
                  <p className="mb-1 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-subtle/70">
                    Email
                  </p>
                  <a
                    href="mailto:hello@edwardvale.co.uk"
                    className="break-words font-medium text-accent-hover transition hover:text-body"
                  >
                    hello@edwardvale.co.uk
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-subtle/70">
                    Links
                  </p>
                  <div className="flex items-center justify-center gap-3 sm:justify-start">
                    <a
                      href="https://github.com/edvale732"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-surface-border/20 bg-accent/5 transition hover:border-accent-hover/60 hover:bg-accent/10"
                    >
                      <Image src={GitHubIcon} alt="GitHub logo" width={18} height={18} className="h-[18px] w-[18px]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/edward-vale-4672b3372"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-surface-border/20 bg-accent/5 transition hover:border-accent-hover/60 hover:bg-accent/10"
                    >
                      <Image src={LinkedInIcon} alt="LinkedIn logo" width={18} height={18} className="h-[18px] w-[18px]" />
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150} className="relative hidden justify-center lg:flex">
              <div className="absolute inset-4 -z-10 rounded-[1.5rem] bg-accent/10 blur-2xl" />
              <div className="w-full max-w-[360px] overflow-hidden rounded-[1.5rem] border border-surface-border/20 bg-surface-raised p-2 shadow-portrait">
                <div className="overflow-hidden rounded-[1.1rem]">
                  <Image
                    src={headshot}
                    alt="Edward Vale headshot"
                    priority
                    className="h-[420px] w-full object-cover object-center"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={250} className="mt-2 flex justify-center sm:justify-start">
            <Link
              href="/projects"
              className="rounded-md border border-surface-border/40 bg-accent/15 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent-hover/70 hover:bg-accent/25 focus:outline-none focus:ring-2 focus:ring-accent-border focus:ring-offset-2 focus:ring-offset-surface"
            >
              View projects
            </Link>
          </RevealOnScroll>
        </div>
      </main>
    </div>
  );
}
