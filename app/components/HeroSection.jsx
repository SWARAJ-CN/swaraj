import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f4f1ea] px-6 pt-14 pb-24 md:px-8 md:pt-20 md:pb-28"
    >
      {/* ============================================================
          MINI CSS HUMAN — styles (scoped, decorative, non-invasive)
         ============================================================ */}
      <style>{`
        .mh-root, .mh-root * { box-sizing: border-box; }

        .mh-scale { width: 120px; height: 168px; }

        .mh-stage {
          position: relative;
          width: 400px;
          height: 560px;
          transform: scale(0.3);
          transform-origin: top left;
        }

        .mh-shadow {
          position: absolute;
          left: 95px; top: 496px;
          width: 210px; height: 26px;
          border-radius: 50%;
          background: rgba(11, 11, 11, 0.22);
          filter: blur(6px);
          animation: mh-shadow 3s ease-in-out infinite;
        }

        .mh-person {
          position: absolute;
          inset: 0;
          animation: mh-bob 3s ease-in-out infinite;
        }

        @keyframes mh-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-7px); }
        }
        @keyframes mh-shadow {
          0%, 100% { transform: scale(1);    opacity: 0.9; }
          50%      { transform: scale(0.94); opacity: 0.6; }
        }

        /* ---------- legs ---------- */
        .mh-leg {
          position: absolute;
          top: 312px;
          width: 42px; height: 166px;
          border-radius: 21px 21px 14px 14px;
          background: #34d399;
          box-shadow: inset 0 0 0 7px #0b0b0b;
          z-index: 1;
        }
        .mh-leg.mh-l { left: 147px; }
        .mh-leg.mh-r { left: 211px; }

        /* ---------- shoes ---------- */
        .mh-shoe {
          position: absolute;
          top: 462px;
          width: 62px; height: 34px;
          border-radius: 16px 16px 14px 14px;
          background: #0b0b0b;
          z-index: 2;
        }
        .mh-shoe.mh-l { left: 137px; }
        .mh-shoe.mh-r { left: 201px; }

        /* ---------- hair (behind head) ---------- */
        .mh-hair-back {
          position: absolute;
          left: 141px; top: 26px;
          width: 118px; height: 118px;
          border-radius: 50%;
          background: #0b0b0b;
          z-index: 1;
        }

        /* ---------- neck ---------- */
        .mh-neck {
          position: absolute;
          left: 183px; top: 128px;
          width: 34px; height: 46px;
          background: #ffd9b3;
          z-index: 1;
        }

        /* ---------- arms ---------- */
        .mh-arm {
          position: absolute;
          top: 180px;
          width: 32px; height: 148px;
          border-radius: 16px;
          background: #fde047;
          box-shadow: inset 0 0 0 7px #0b0b0b;
          transform-origin: 50% 0;
          z-index: 1;
        }
        .mh-arm.mh-l { left: 117px; transform: rotate(7deg); }
        .mh-arm.mh-r { left: 251px; animation: mh-wave 4s ease-in-out infinite; }

        .mh-arm::after {
          content: "";
          position: absolute;
          left: 50%; bottom: -16px;
          width: 30px; height: 30px;
          margin-left: -15px;
          border-radius: 50%;
          background: #ffd9b3;
          box-shadow: inset 0 0 0 7px #0b0b0b;
        }

        @keyframes mh-wave {
          0%   { transform: rotate(-8deg);   }
          15%  { transform: rotate(-8deg);   }
          30%  { transform: rotate(-138deg); }
          40%  { transform: rotate(-122deg); }
          50%  { transform: rotate(-138deg); }
          60%  { transform: rotate(-122deg); }
          75%  { transform: rotate(-138deg); }
          90%  { transform: rotate(-8deg);   }
          100% { transform: rotate(-8deg);   }
        }

        /* ---------- torso ---------- */
        .mh-torso {
          position: absolute;
          left: 135px; top: 158px;
          width: 130px; height: 170px;
          border-radius: 42px 42px 22px 22px;
          background: #fde047;
          box-shadow: inset 0 0 0 7px #0b0b0b;
          z-index: 2;
        }
        .mh-torso::after {
          content: "";
          position: absolute;
          left: 50%; top: 52px;
          width: 10px; height: 10px;
          margin-left: -5px;
          border-radius: 50%;
          background: #0b0b0b;
          box-shadow: 0 34px 0 #0b0b0b, 0 68px 0 #0b0b0b;
        }

        /* ---------- shoulder caps ---------- */
        .mh-shoulder {
          position: absolute;
          top: 158px;
          width: 44px; height: 44px;
          border-radius: 50%;
          background: #fde047;
          box-shadow: inset 0 0 0 7px #0b0b0b;
          z-index: 3;
        }
        .mh-shoulder.mh-l { left: 111px; }
        .mh-shoulder.mh-r { left: 245px; }

        /* ---------- head ---------- */
        .mh-head {
          position: absolute;
          left: 148px; top: 34px;
          width: 104px; height: 112px;
          border-radius: 50%;
          background: #ffd9b3;
          box-shadow: inset 0 0 0 7px #0b0b0b;
          z-index: 3;
        }
        /* fringe */
        .mh-head::before {
          content: "";
          position: absolute;
          left: 6px; right: 6px; top: 6px;
          height: 34px;
          border-radius: 46px 46px 30px 30px / 38px 38px 18px 18px;
          background: #0b0b0b;
        }

        .mh-brow {
          position: absolute;
          top: 46px;
          width: 18px; height: 4px;
          border-radius: 4px;
          background: #0b0b0b;
        }
        .mh-brow.mh-l { left: 20px; transform: rotate(-5deg); }
        .mh-brow.mh-r { left: 66px; transform: rotate(5deg);  }

        .mh-eye {
          position: absolute;
          top: 58px;
          width: 12px; height: 14px;
          border-radius: 50%;
          background: #0b0b0b;
          animation: mh-blink 4.5s infinite;
        }
        .mh-eye.mh-l { left: 22px; }
        .mh-eye.mh-r { left: 70px; }

        .mh-eye::after {
          content: "";
          position: absolute;
          top: 3px; left: 3px;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #ffffff;
        }

        @keyframes mh-blink {
          0%, 92%, 100% { transform: scaleY(1);   }
          95%           { transform: scaleY(0.1); }
        }

        .mh-cheek {
          position: absolute;
          top: 74px;
          width: 18px; height: 11px;
          border-radius: 50%;
          background: rgba(244, 114, 100, 0.45);
          filter: blur(1.5px);
        }
        .mh-cheek.mh-l { left: 10px; }
        .mh-cheek.mh-r { left: 76px; }

        .mh-mouth {
          position: absolute;
          left: 32px; top: 80px;
          width: 40px; height: 18px;
          border-bottom: 4px solid #0b0b0b;
          border-radius: 0 0 40px 40px;
        }

        @media (prefers-reduced-motion: reduce) {
          .mh-person, .mh-shadow, .mh-arm.mh-r, .mh-eye {
            animation: none !important;
          }
          .mh-arm.mh-r { transform: rotate(-8deg); }
        }
      `}</style>

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

      {/* ============================================================
          MINI CSS HUMAN — markup (bottom-right, decorative)
         ============================================================ */}
      <div
        aria-hidden
        className="mh-root pointer-events-none absolute right-6 bottom-4 z-0 hidden select-none lg:block"
      >
        <div className="mh-scale">
          <div className="mh-stage">
            <div className="mh-shadow" />

            <div className="mh-person">
              {/* legs + shoes */}
              <div className="mh-leg mh-l" />
              <div className="mh-leg mh-r" />
              <div className="mh-shoe mh-l" />
              <div className="mh-shoe mh-r" />

              {/* hair + neck */}
              <div className="mh-hair-back" />
              <div className="mh-neck" />

              {/* arms */}
              <div className="mh-arm mh-l" />
              <div className="mh-arm mh-r" />

              {/* body */}
              <div className="mh-torso" />
              <div className="mh-shoulder mh-l" />
              <div className="mh-shoulder mh-r" />

              {/* head */}
              <div className="mh-head">
                <div className="mh-brow mh-l" />
                <div className="mh-brow mh-r" />
                <div className="mh-eye mh-l" />
                <div className="mh-eye mh-r" />
                <div className="mh-cheek mh-l" />
                <div className="mh-cheek mh-r" />
                <div className="mh-mouth" />
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  src="/asset/Monochrome Paper-Cutout Portrait.png"
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