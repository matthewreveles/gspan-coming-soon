import Image from "next/image";
import EmailCapture from "./_components/EmailCapture";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* soft center light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[38%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* large G */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <Image
          src="/G-large.png"
          alt="G-SPAN"
          width={900}
          height={900}
          priority
          className="opacity-[0.16] blur-[0.2px]"
        />
      </div>

      {/* bottom content */}
      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-end px-6 pb-16">
        <div className="max-w-xl">
          <div className="text-xs uppercase tracking-[0.22em] text-white/60">
            G-SPAN
          </div>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Coming soon.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/75">
            We’re building the future of cannabis advertising. You’re a bit
            early.
          </p>

          <EmailCapture />
        </div>
      </section>
    </main>
  );
}
