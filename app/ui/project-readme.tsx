import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ProjectReadmeProps = {
  readmeUrl?: string;
};

export default async function ProjectReadme({
  readmeUrl,
}: ProjectReadmeProps) {
  if (!readmeUrl) {
    return (
      <section className="mt-10 border-t border-violet-400/20 pt-8">
        <p className="mt-3 text-sm leading-6 text-violet-100/80">
          No public README is available for this project.
        </p>
      </section>
    );
  }

  const response = await fetch(readmeUrl, { cache: 'force-cache' });
  if (!response.ok) {
    throw new Error(
      `Failed to load project README (${response.status}) from ${readmeUrl}`,
    );
  }

  const markdown = await response.text();

  return (
    <section>
      <div className="space-y-5 break-words text-sm leading-7 text-violet-100/80 [&>*:first-child]:!mt-0 [&_a]:text-violet-300 [&_a]:underline [&_a]:decoration-violet-400/50 [&_a]:underline-offset-4 [&_a:hover]:text-white [&_blockquote]:border-l-2 [&_blockquote]:border-violet-400/40 [&_blockquote]:pl-4 [&_code]:rounded [&_code]:bg-violet-400/10 [&_code]:px-1 [&_code]:py-0.5 [&_h1]:mt-8 [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:text-white [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_hr]:border-violet-400/20 [&_li]:my-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-[#090611] [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-violet-400/20 [&_td]:p-2 [&_th]:border [&_th]:border-violet-400/20 [&_th]:bg-violet-400/10 [&_th]:p-2 [&_ul]:list-disc [&_ul]:pl-6">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ href, title, children }) => (
              <a
                href={href}
                title={title}
                target="_blank"
                rel="noreferrer"
              >
                {children}
              </a>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </section>
  );
}
