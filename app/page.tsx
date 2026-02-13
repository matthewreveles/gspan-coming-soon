import Image from "next/image";
import EmailCapture from "./_components/EmailCapture";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Light + atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft center glow (stronger) */}
        <div className="absolute left-1/2 top-[42%] h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),rgba(255,255,255,0.00)_62%)]" />

        {/* subtle directional sweep (stronger + a touch blur) */}
        <div className="absolute left-1/2 top-[30%] h-[560px] w-[1040px] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),rgba(255,255,255,0.00)_72%)] blur-[3px]" />

        {/* gentler vignette so the light can exist */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.46)_58%,rgba(0,0,0,0.78)_100%)]" />
      </div>

      {/* Center stage: logo sits on a subtle surface */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="relative w-[min(820px,92vw)]">
          {/* “ledge” line — we’ll anchor the logo to this */}
          <div className="absolute left-1/2 top-[66%] h-px w-[78%] -translate-x-1/2 bg-white/16" />
          <div className="absolute left-1/2 top-[66%] h-12 w-[78%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),rgba(255,255,255,0.00)_70%)] blur-[8px]" />

          {/* Logo (25% smaller + positioned to rest ON the line) */}
          <div className="absolute left-1/2 top-[66%] w-[min(390px,64vw)] -translate-x-1/2 -translate-y-full">
            <Image
              src="/G-large.png"
              alt="G-SPAN"
              width={1200}
              height={1200}
              priority
              className="h-auto w-full opacity-95 drop-shadow-[0_34px_64px_rgba(0,0,0,0.72)]"
            />
          </div>

          {/* contact shadow (just under the line) */}
          <div className="absolute left-1/2 top-[67.25%] h-10 w-[52%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.62),rgba(0,0,0,0.00)_70%)] blur-[12px]" />
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 flex min-h-screen items-end px-6 pb-10">
        <div className="w-full max-w-3xl">
          <div className="text-xs uppercase tracking-[0.22em] text-white/55">G-SPAN</div>

          <h1 className="mt-3 text-5xl font-semibold leading-[1.02] text-white sm:text-6xl">
            Coming soon.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/65">
            We&apos;re building the future of cannabis advertising. You&apos;re a bit early.
          </p>

          <EmailCapture />

          <p className="mt-4 text-sm text-white/40">
            If you landed here from a badge, you&apos;re early — that&apos;s the point.
          </p>
        </div>
      </div>
    </main>
  );
}
