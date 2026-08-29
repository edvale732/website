import Image from 'next/image';
import Link from 'next/link';
import headshot from '@/app/ui/icons/Headshot.jpg';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0713] font-sans text-violet-50">
      <main className="flex w-full flex-1 justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl rounded-2xl border border-violet-400/30 bg-[#160f24]/90 p-8 shadow-[0_0_0_1px_rgba(139,92,246,0.12)] backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-center">
            <section className="flex flex-col gap-7 text-left">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-violet-300/80">
                  Edward Vale
                </p>
                <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Building software to solve problems and create value
                </h1>
              </div>

              <p className="max-w-2xl text-base leading-7 text-violet-100/85 sm:text-lg">
                Hi, I'm Ed, a First-Class Computer Science graduate from Lancaster University with a passion for solving problems through software. I have developed my skills through university, <a href="https://www.mytutor.co.uk/tutors/10005073/" className="font-medium text-violet-300 underline decoration-violet-400/70 underline-offset-4 transition hover:text-violet-200">online tutoring</a> and <Link href="/projects" className="font-medium text-violet-300 underline decoration-violet-400/70 underline-offset-4 transition hover:text-violet-200">personal projects</Link>, and I am now seeking opportunities to apply my knowledge and contribute to innovative software development.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:hello@edwardvale.co.uk"
                  className="inline-flex items-center justify-center rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
                >
                  hello@edwardvale.co.uk
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-violet-300/30 bg-white/0 px-5 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-200/60 hover:bg-violet-400/10"
                >
                  View projects
                </Link>
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
