import Image from "next/image";
import EmailCapture from "./_components/EmailCapture";

const CONSOLE_BASE = "https://gspan-console.vercel.app";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[38%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(111,164,83,0.20),rgba(255,255,255,0.04)_34%,rgba(255,255,255,0.00)_68%)]" />
        <div className="absolute left-1/2 top-[24%] h-[620px] w-[1120px] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),rgba(255,255,255,0.00)_72%)] blur-[16px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.48)_58%,rgba(0,0,0,0.86)_100%)]" />
      </div>

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/[0.04]">
            <Image
              src="/G-large.png"
              alt=""
              width={38}
              height={38}
              priority
              className="h-8 w-8 object-contain"
            />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.22em]">G-SPAN</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-white/45">
              Advertising network
            </span>
          </span>
        </a>

        <a
          href={`${CONSOLE_BASE}/sign-in`}
          className="rounded-full border border-white/18 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/82 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
        >
          Client login
        </a>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-92px)] w-full max-w-7xl items-center gap-12 px-6 pb-14 pt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:px-10 lg:pb-20"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.045] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6fa453]" />
            Web + in-store advertising
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            One campaign.
            <br />
            Every G-SPAN channel.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl">
            Plan, traffic and measure digital campaigns across web placements and
            in-store screens from one client-facing control plane built for the
            cannabis market.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${CONSOLE_BASE}/demo/start`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#6fa453] px-6 text-sm font-bold text-black transition hover:bg-[#82b866]"
            >
              Try the live demo
              <span className="ml-2" aria-hidden="true">→</span>
            </a>

            <a
              href={`${CONSOLE_BASE}/sign-in`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/[0.045] px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              Client login
            </a>
          </div>

          <div className="mt-10 flex max-w-2xl flex-wrap gap-2">
            {["Web ad network", "Screen network", "Campaign CMS", "Proof of play", "Revive delivery"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-black/20 px-3 py-1.5 text-xs font-medium text-white/52"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-12 max-w-2xl border-t border-white/10 pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/38">
              Updates + launch access
            </p>
            <EmailCapture />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,rgba(111,164,83,0.14),rgba(0,0,0,0)_66%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/14 bg-white/[0.045] p-5 shadow-[0_36px_100px_rgba(0,0,0,0.58)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-black/30">
                  <Image
                    src="/G-large.png"
                    alt=""
                    width={30}
                    height={30}
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold">G-SPAN Console</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/36">
                    Campaign control plane
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-[#6fa453]/35 bg-[#6fa453]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#95c67b]">
                Live demo
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Campaigns", "Web + signage"],
                ["Creative", "Multi-format assets"],
                ["Delivery", "Revive + players"],
                ["Reporting", "Clicks + proof of play"],
              ].map(([label, detail]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/86">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    Public demo
                  </p>
                  <p className="mt-2 text-lg font-semibold">Explore the real product</p>
                  <p className="mt-2 text-sm leading-6 text-white/48">
                    Guided, read-only workspaces let partners see campaigns,
                    assets, screens and reporting without access to live client
                    data or publishing controls.
                  </p>
                </div>
              </div>

              <a
                href={`${CONSOLE_BASE}/demo/start`}
                className="mt-5 flex min-h-11 w-full items-center justify-center rounded-xl border border-[#6fa453]/35 bg-[#6fa453]/10 text-sm font-bold text-[#a5d28e] transition hover:bg-[#6fa453]/16"
              >
                Launch demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
