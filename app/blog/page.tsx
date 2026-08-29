export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">

      <main className="flex w-full flex-1 justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl rounded-lg bg-white p-8 shadow-sm dark:bg-black sm:p-12">
          <div className="flex flex-col items-start gap-6 text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Blog
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}