import React from "react";
import "./tweet.css";

const STATIC_TWEETS: Record<
  string,
  {
    text: string;
    name: string;
    screen_name: string;
    profile_image: string;
    date: string;
  }
> = {
  "1942052808276238742": {
    text: "Steal this idea.\n\nAn AI-powered coding agent on WhatsApp.\n\nWrap Claude Code or Gemini CLI on WhatsApp api, and enable millions to easily build their first app/website.\n\nMake money selling domains and hosting for apps they make.",
    name: "Paras Chopra",
    screen_name: "paraschopra",
    profile_image:
      "https://pbs.twimg.com/profile_images/1982070651423694848/0vUKWPER_normal.jpg",
    date: "Jul 7, 2025",
  },
};

export async function TweetComponent({ id }: { id: string }) {
  const tweet = STATIC_TWEETS[id];

  if (!tweet) {
    return (
      <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 my-6 text-center text-sm text-neutral-500 font-sans">
        Tweet not found (ID: {id})
      </div>
    );
  }

  return (
    <div className="tweet my-6 max-w-[550px] w-full mx-auto">
      <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 bg-white dark:bg-neutral-900/40 shadow-sm transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700">
        {/* Header: Avatar, Name, Handle */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={tweet.profile_image}
              alt={tweet.name}
              className="w-10 h-10 rounded-full object-cover bg-neutral-100"
              onError={(e) => {
                // Fallback avatar if X avatar URL expires
                (e.target as HTMLImageElement).src =
                  "https://fnz1dopstoar937o.public.blob.vercel-storage.com/samsha-P6QWV1ArF5qqR8HPrfyIGISoYsbwWh.jpg";
              }}
            />
            <div className="flex flex-col text-sm leading-tight font-sans">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1">
                {tweet.name}
                <svg
                  className="w-4 h-4 text-[#ff3300]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </span>
              <span className="text-neutral-500">@{tweet.screen_name}</span>
            </div>
          </div>
          {/* X Logo */}
          <span className="text-neutral-400 dark:text-neutral-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </span>
        </div>

        {/* Tweet Content */}
        <p className="text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-pre-wrap font-sans mb-4 select-text">
          {tweet.text}
        </p>

        {/* Footer: Date */}
        <div className="text-[13px] text-neutral-500 font-sans pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
          {tweet.date}
        </div>
      </div>
    </div>
  );
}
