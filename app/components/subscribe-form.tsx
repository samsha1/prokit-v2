"use client";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Assuming react-icons is installed, or I can use an SVG

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message);
    }
  };

  return (
    <div className="mt-16 w-full">
      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Subscribe to my newsletter</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
        Get notified whenever I write something new.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          className="flex-1 px-0 py-2 border-b border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-black dark:focus:border-white bg-transparent text-black dark:text-white placeholder:text-neutral-400"
          required
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-[#0099ff] text-white px-4 py-2 rounded font-semibold hover:bg-[#007acc] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
        >
          {status === "loading" ? (
             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : status === "success" ? (
            "Subscribed!"
          ) : (
            "SUBSCRIBE"
          )}
        </button>
      </form>
      {message && (
        <p
          className={`mt-2 text-sm ${
            status === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
