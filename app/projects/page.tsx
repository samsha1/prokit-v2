import Link from "next/link";
import { formatDate, getProjectsPosts } from "app/lib/posts";

export const metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function ProjectsPosts() {
  let allBlogs = getProjectsPosts();

  return (
    <section>
      <h2>Personal Projects</h2>
      <p>This page lists some of my personal projects. Always working on something new, so this page will be updated regularly.</p>
      
      <div className="flex items-center gap-3 text-md sm:text-xl font-medium text-neutral-800 dark:text-neutral-200 mt-6 mb-10 font-sans">
        <span>
          {`Starting and building `}
          <a
            href="https://www.agenco.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff3300] font-semibold hover:underline"
          >
            {`Agenco`} 
          </a>.
          {` - Recent Projects available `} 
          <a
            href="https://www.agenco.io/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff3300] font-semibold hover:underline"
          >
            {`here`} 
          </a>.
        </span>
      </div>

      <div className="mt-12">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
              href={`/projects/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h4 className="text-black dark:text-white">
                  {post.metadata.title}
                </h4>
                {/* <p className="text-neutral-700 dark:text-neutral-300 text-base">
                  {post.metadata.summary}
                </p> */}
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-base">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
