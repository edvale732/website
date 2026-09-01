import Image from 'next/image';
import Link from 'next/link';
import headshot from '@/app/ui/icons/Headshot.jpg';
import GitHubIcon from '@/app/ui/icons/github-white.png';
import LinkedInIcon from '@/app/ui/icons/linkedin-white.png';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0713] font-sans text-violet-50">
      <main className="flex w-full flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-7xl items-center rounded-2xl border border-violet-400/30 bg-[#160f24]/90 p-8 shadow-[0_0_0_1px_rgba(139,92,246,0.12)] backdrop-blur-sm sm:p-10 lg:min-h-[640px] lg:p-12">
          <div className="grid w-full gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-center">
            <section className="flex flex-col gap-7 text-left">
              <div className="space-y-4">
                <h1 className="max-w-xl text-8xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Edward Vale
                </h1>
              </div>

              <p className="max-w-2xl text-base leading-7 text-violet-100/85 sm:text-lg">
                Hi, I am Edward, a First-Class Computer Science graduate from Lancaster University who enjoys turning complex problems into practical software. I have developed my skills through university, <Link href="/projects" className="font-medium text-violet-300 underline decoration-violet-400/70 underline-offset-4 transition hover:text-violet-200">personal projects</Link> and <a href="https://www.mytutor.co.uk/tutors/10005073/" className="font-medium text-violet-300 underline decoration-violet-400/70 underline-offset-4 transition hover:text-violet-200">online tutoring</a>, and I am now seeking opportunities to apply my knowledge, expand my skills and contribute to a team.
              </p>

              <div className="grid gap-4 rounded-2xl border border-violet-400/20 bg-violet-500/5 p-4 text-sm text-violet-100/85 sm:grid-cols-3">
                <div>
                  <p className="mb-1 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-violet-300/70">
                    Based in
                  </p>
                  <p className="font-medium text-violet-200">England</p>
                </div>

                <div>
                  <p className="mb-1 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-violet-300/70">
                    Email
                  </p>
                  <a
                    href="mailto:hello@edwardvale.co.uk"
                    className="font-medium text-violet-200 transition hover:text-violet-100"
                  >
                    hello@edwardvale.co.uk
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-violet-300/70">
                    Links
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/edvale732"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-violet-300/20 bg-violet-500/5 transition hover:border-violet-200/60 hover:bg-violet-500/10"
                    >
                      <Image src={GitHubIcon} alt="GitHub logo" width={18} height={18} className="h-[18px] w-[18px]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/edward-vale-4672b3372"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-violet-300/20 bg-violet-500/5 transition hover:border-violet-200/60 hover:bg-violet-500/10"
                    >
                      <Image src={LinkedInIcon} alt="LinkedIn logo" width={18} height={18} className="h-[18px] w-[18px]" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <div className="relative hidden justify-center lg:flex">
              <div className="absolute inset-4 -z-10 rounded-[1.5rem] bg-violet-500/10 blur-2xl" />
              <div className="w-full max-w-[360px] overflow-hidden rounded-[1.5rem] border border-violet-300/20 bg-[#120d1d] p-2 shadow-[0_12px_30px_rgba(76,29,149,0.22)]">
                <div className="overflow-hidden rounded-[1.1rem]">
                  <Image
                    src={headshot}
                    alt="Edward Vale headshot"
                    priority
                    className="h-[420px] w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
