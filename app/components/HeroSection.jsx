import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f4f1ea] px-6 pt-14 pb-24 md:px-8 md:pt-20 md:pb-28"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#0b0b0b 1px, transparent 1px), linear-gradient(90deg, #0b0b0b 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* top meta row */}
        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available · 2026
          </span>
          <span className="hidden sm:inline">—</span>
          <span className="hidden sm:inline">Based in India</span>
          <span className="hidden md:inline">—</span>
          <span className="hidden md:inline">Full Stack Developer</span>
        </div>

        <div className="grid items-end gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          {/* LEFT: Big type block */}
          <div>
            {/* eyebrow */}
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
              ✦ Portfolio / 001
            </p>

            {/* Huge name — tight, bold, blocky */}
            <h1 className="mb-6 text-[clamp(3.5rem,11vw,9rem)] font-black leading-[0.85] tracking-[-0.045em] text-neutral-950">
              SWARAJ
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">CN.</span>
                {/* highlighter swipe */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-[0.35em] -rotate-1 bg-yellow-300"
                />
              </span>
            </h1>

            {/* BOLD statement — big mixed-weight line */}
            <p className="mb-8 max-w-2xl text-2xl leading-tight text-neutral-800 sm:text-3xl md:text-4xl">
              I build{" "}
              <span className="font-black italic underline decoration-[3px] decoration-yellow-400 underline-offset-[6px]">
                fast
              </span>
              ,{" "}
              <span className="font-black italic underline decoration-[3px] decoration-yellow-400 underline-offset-[6px]">
                defensive
              </span>{" "}
              web apps with{" "}
              <span className="rounded-md bg-neutral-950 px-2 py-0.5 font-black text-yellow-300">
                Next.js
              </span>{" "}
              &amp; the{" "}
              <span className="rounded-md bg-neutral-950 px-2 py-0.5 font-black text-yellow-300">
                MERN
              </span>{" "}
              stack.
            </p>

            {/* small descriptive copy */}
            <p className="mb-9 max-w-lg text-sm leading-relaxed text-neutral-600 sm:text-base">
              21 — full-stack developer focused on Next.js and MERN. Obsessed with
              UI craft, Linux internals, and security-first engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                View Projects
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-950 bg-transparent px-7 py-3 text-sm font-bold text-neutral-950 transition-colors duration-200 hover:bg-neutral-950 hover:text-white"
              >
                Contact me
              </Link>

              <Link
                href="/asset/res.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-700 underline decoration-2 decoration-yellow-400 underline-offset-4 transition-colors hover:text-neutral-950"
              >
                <Icon name="fa-file-pdf" size={13} />
                Resume
              </Link>
            </div>
          </div>

          {/* RIGHT: portrait + stickers */}
          <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
            {/* big number behind */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 -left-6 z-0 select-none font-black text-[10rem] leading-none tracking-tighter text-neutral-950/5 md:text-[13rem]"
            >
              21
            </span>

            {/* portrait card */}
            <div className="relative z-10 rotate-2 border-4 border-neutral-950 bg-white p-3 shadow-[10px_10px_0_0_#0b0b0b] transition-transform duration-300 hover:rotate-0">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/asset/WhatsApp Image 2026-03-06 at 1.05.30 PM (1).webp"
                  fill
                  sizes="(max-width: 768px) 340px, 420px"
                  alt="Swaraj CN"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center justify-between px-1 pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Swaraj · CN
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  001
                </span>
              </div>
            </div>

            {/* rotated sticker — top right */}
            <div className="absolute -top-3 -right-3 z-20 rotate-[10deg] rounded-full border-2 border-neutral-950 bg-yellow-300 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-neutral-950 shadow-[3px_3px_0_0_#0b0b0b]">
              ★ Full Stack
            </div>

            {/* rotated sticker — bottom left */}
            <div className="absolute -bottom-4 -left-4 z-20 -rotate-[8deg] rounded-full border-2 border-neutral-950 bg-emerald-400 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-neutral-950 shadow-[3px_3px_0_0_#0b0b0b]">
              Open to work
            </div>
          </div>
        </div>

        {/* bottom ticker strip */}
        <div className="relative mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t-2 border-neutral-950 pt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-700">
          <span>Next.js</span>
          <span className="text-neutral-400">✦</span>
          <span>React</span>
          <span className="text-neutral-400">✦</span>
          <span>Node</span>
          <span className="text-neutral-400">✦</span>
          <span>MongoDB</span>
          <span className="text-neutral-400">✦</span>
          <span>Tailwind</span>
          <span className="text-neutral-400">✦</span>
          <span>Linux</span>
          <span className="text-neutral-400">✦</span>
          <span>Security</span>
        </div>
      </div>
    </section>
  );
}