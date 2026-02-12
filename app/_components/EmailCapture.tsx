"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Placeholder: wire to Brevo/Klaviyo/etc later.
    if (email.trim().length > 3) {
      setStatus("ok");
      setEmail("");
    }
  }

  return (
    <div className="mt-5">
      <form onSubmit={onSubmit} className="flex w-full max-w-md gap-2">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 flex-1 rounded-md bg-white/5 px-3 text-sm text-white outline-none ring-1 ring-white/10 placeholder:text-white/40 focus:ring-white/25"
          required
        />
        <button
          type="submit"
          className="h-11 rounded-md px-4 text-sm font-medium text-black bg-white hover:bg-white/90"
        >
          Stay informed
        </button>
      </form>

      {status === "ok" && (
        <div className="mt-3 text-xs text-white/70">
          Got it. You’re on the list.
        </div>
      )}
    </div>
  );
}
