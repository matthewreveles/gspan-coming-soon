import Image from "next/image";
import EmailCapture from "@/app/_components/EmailCapture";


export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Ambient light + vignette */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft center glow */}
        <div className="absolute left-1/2 top-[40%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        {/* subtle directional light sweep */}
        <div className="absolute left-1/2 top-[35%] h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-full bg-white/8 blur-3xl" />
        {/* vignette to keep edges quiet */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.85)_68%,rgba(0,0,0,0.98)_100%)]" />
      </div>

      {/* Center stage logo + surface */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="relative w-[min(92vw,1100px)]">
          {/* surface/ledge */}
          <div className="absolute left-1/2 top-[62%] h-[10px] w-[62%] -translate-x-1/2 rounded-full bg-white/10 blur-[6px]" />
          <div className="absolute left-1/2 top-[62%] h-[2px] w-[56%] -translate-x-1/2 rounded-full bg-white/18" />

          {/* logo */}
          <div className="relative mx-auto w-[min(92vw,980px)]">
            <Image
              src="/G-large.png"
              alt="G-SPAN"
              width={1600}
              height={1600}
              priority
              className="mx-auto select-none opacity-90 drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]"
            />

            {/* gentle highlight so it reads “lit,” not masked */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_28%,rgba(255,255,255,0)_58%)]" />
          </div>
        </div>
      </div>

      {/* Bottom-left copy block */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-end px-6 pb-10">
        <div className="w-full max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-white/60">
            G-SPAN
          </div>

          <h1 className="mt-3 text-5xl font-semibold leading-[1.05] text-white">
            Coming soon.
          </h1>

          <p className="mt-3 text-base leading-relaxed text-white/70">
            We&rsquo;re building the future of cannabis advertising. You&rsquo;re a bit
            early.
          </p>

          <EmailCapture />
        </div>
      </div>
    </main>
  );
}
