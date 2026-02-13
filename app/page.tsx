import Image from "next/image";
import EmailCapture from "./_components/EmailCapture";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Light + atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft center light */}
        <div className="absolute left-1/2 top-[42%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),rgba(255,255,255,0.00)_60%)]" />

        {/* subtle directional sweep (top-right -> center) */}
        <div className="absolute left-1/2 top-[30%] h-[520px] w-[980px] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),rgba(255,255,255,0.00)_70%)] blur-[2px]" />

        {/* gentle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.88)_100%)]" />
      </div>

      {/* Center stage: logo sits on a subtle surface */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="relative w-[min(780px,92vw)]">
          {/* “surface/ledge” */}
          <div className="absolute left-1/2 top-[64%] h-px w-[78%] -translate-x-1/2 bg-white/14" />
          <div className="absolute left-1/2 top-[64%] h-12 w-[78%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),rgba(255,255,255,0.00)_70%)] blur-[6px]" />

          {/* Logo (smaller, grounded) */}
          <div className="relative mx-auto w-[min(520px,72vw)] translate-y-[-4%]">
            <Image
              src="/G-large.png"
              alt="G-SPAN"
              width={1200}
              height={1200}
              priority
              className="h-auto w-full opacity-95 drop-shadow-[0_40px_70px_rgba(0,0,0,0.70)]"
            />
          </div>

          {/* contact shadow under logo */}
          <div className="absolute left-1/2 top-[66%] h-10 w-[52%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.65),rgba(0,0,0,0.00)_70%)] blur-[10px]" />
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
