"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = email.trim();

    if (!clean) return;

    try {
      setStatus("loading");

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: clean }),
      });

      if (!res.ok) throw new Error("Bad response");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    } finally {
      setTimeout(() => setStatus("idle"), 2500);
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
        className="h-11 flex-1 rounded-xl border border-white/10 bg-black/35 px-4 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur-md focus:border-white/25"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="h-11 shrink-0 rounded-xl bg-white px-5 text-sm font-medium text-black transition hover:bg-white/90 disabled:opacity-60"
      >
        Stay informed
      </button>

      <span
        className="sr-only"
        aria-live="polite"
      >{`${status}`}</span>
    </form>
  );
}
