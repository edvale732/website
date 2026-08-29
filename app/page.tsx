import NavBar from '@/app/ui/navbar';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0713] font-sans text-violet-50">
    

      <main className="flex w-full flex-1 justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl rounded-xl border border-violet-400/30 bg-[#160f24] p-8 shadow-[0_0_0_1px_rgba(139,92,246,0.12)] sm:p-12">
          <div className="flex flex-col items-start gap-6 text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white">
              Edward Vale
            </h1>
            <p className="max-w-xl text-base leading-7 text-violet-100/85">
              First-Class Computer Science graduate from Lancaster University, looking to begin a career in tech.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
