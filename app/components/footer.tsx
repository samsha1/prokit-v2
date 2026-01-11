"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  // FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/lib/config";
import buildInfo from "../../build-info.json";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      {/* <a href="/rss.xml" target="_self">
        <FaRss />
      </a> */}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-neutral-100 pt-6 text-base text-neutral-500 dark:border-neutral-800">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row mb-6">
        <span>{`Last updated on ${buildInfo.lastUpdated}`}</span>
        <span className="hidden text-neutral-300 sm:inline">|</span>
        <span>
          {`I can be reached at `}
          <a
            className="ml-1 inline-block rounded-md bg-neutral-100 px-2 py-0.5 font-medium text-neutral-900 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
            href={socialLinks.email}
          >{socialLinks.email.replace('mailto:', '')}</a>
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="block text-[#1C1C1C] dark:text-[#D4D4D4]">
          <time>
            <a
              className="no-underline"
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              {metaData.title}
            </a>{" "}
            © {`2021 - ` + YEAR}
          </time>
        </div>
        <SocialLinks />
      </div>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          footer {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </footer>
  );
}
