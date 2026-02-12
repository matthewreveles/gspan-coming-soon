import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Soft center light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),rgba(0,0,0,0.85)_55%,rgba(0,0,0,1)_100%)]" />
      </div>

      {/* Centerpiece "G" */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="relative h-[380px] w-[380px] sm:h-[460px] sm:w-[460px]">
          <Image
            src="/G-large.png"
            alt=""
            fill
            priority
            className="object-contain opacity-80 drop-shadow-[0_20px_70px_rgba(0,0,0,0.65)]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-3xl items-center px-5 py-14">
        <div className="rounded-2xl border border-white/10 bg-black/35 p-7 backdrop-blur-md sm:p-9">
          <div className="text-xs uppercase tracking-[0.18em] text-white/70">
            G-SPAN
          </div>

          <h1 className="mt-3 text-5xl font-semibold leading-[1.02] sm:text-6xl">
            Coming soon.
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-white/85">
            GreenPharms Self-Powered Advertising Network. We’re building the
            pipes for owned-media ads, reporting and brand-safe placements
            across the network.
          </p>

          <p className="mt-5 text-sm text-white/60">
            If you landed here from a badge, you’re early — that’s the point.
          </p>
        </div>
      </div>
    </main>
  );
}
