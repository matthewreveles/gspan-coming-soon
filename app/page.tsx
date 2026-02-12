// app/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Soft center light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),rgba(0,0,0,0.88)_55%,rgba(0,0,0,1)_100%)]" />
      </div>

      {/* Centerpiece G */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="relative h-[380px] w-[380px] sm:h-[480px] sm:w-[480px]">
          <Image
            src="/G-large.png"
            alt=""
            fill
            priority
            className="object-contain opacity-85 drop-shadow-[0_24px_90px_rgba(0,0,0,0.65)]"
          />
        </div>
      </div>

      {/* Bottom copy + email */}
      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-end px-5 pb-10 pt-14 sm:pb-14">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md sm:p-8">
          <div className="text-[11px] uppercase tracking-[0.20em] text-white/70">
            G-SPAN
          </div>

          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            We’re building the future of cannabis advertising.
          </h1>

          <p className="mt-3 text-base leading-relaxed text-white/80">
            You’re a bit early. Drop your email and we’ll let you know when the
            network goes live.
          </p>

          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="email">
              Email address
            </label>

            <input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@company.com"
              className="h-11 w-full rounded-xl border border-white/15 bg-black/45 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/35 focus:ring-2 focus:ring-white/10 sm:flex-1"
            />

            <button
              type="submit"
              className="h-11 rounded-xl border border-white/15 bg-white/10 px-5 text-sm font-medium text-white/90 transition hover:bg-white/15 active:bg-white/20"
            >
              Stay informed
            </button>
          </form>

          <p className="mt-4 text-xs text-white/45">
            No spam. No weird list-selling. Updates only.
          </p>
        </div>
      </div>
    </main>
  );
}
