import Link from "next/link";

export default function FollowButton() {
  return (
    <Link
      href="https://x.com/intent/follow?original_referer=https%3A%2F%2Fsamrat.fyi%2F&screen_name=samratshakya5"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-full text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3 w-3 fill-current"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      Follow @samratshakya5
    </Link>
  );
}
