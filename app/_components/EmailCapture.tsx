"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("bad_response");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex w-full max-w-xl gap-3">
      <label className="sr-only" htmlFor="email">
        Email address
      </label>

      <input
        id="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 flex-1 rounded-2xl border border-white/10 bg-black/35 px-4 text-white outline-none backdrop-blur-sm placeholder:text-white/35 focus:border-white/20"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="h-12 rounded-2xl bg-white px-5 font-medium text-black transition active:scale-[0.99] disabled:opacity-60"
      >
        {status === "success" ? "You’re in" : status === "loading" ? "Sending…" : "Stay informed"}
      </button>

      {status === "error" ? (
        <p className="sr-only">Something went wrong.</p>
      ) : null}
    </form>
  );
}
