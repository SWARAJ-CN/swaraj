import Link from "next/link";
import Icon from "./Icon";

export default function AwardSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20">
      {/* Section eyebrow */}
      <div className="mb-8 flex items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          ✦ Recognition / 002
        </p>
        <span className="h-px flex-1 bg-neutral-950/20" />
      </div>

      {/* Award card */}
      <div className="relative flex flex-col items-center gap-8 rounded-[28px] border-2 border-neutral-950 bg-white px-6 py-10 shadow-[10px_10px_0_0_#0b0b0b] md:flex-row md:px-10 md:py-12">
        {/* Trophy badge */}
        <div className="relative shrink-0">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-neutral-950 bg-yellow-300 text-neutral-950 shadow-[4px_4px_0_0_#0b0b0b] md:h-28 md:w-28">
            <Icon name="fa-trophy" size={56} />
          </div>
          {/* rotated sticker */}
          <span className="absolute -top-3 -right-4 rotate-[12deg] rounded-full border-2 border-neutral-950 bg-neutral-950 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-yellow-300 shadow-[2px_2px_0_0_#0b0b0b]">
            1st Place
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="mb-4 inline-block rounded-full border-2 border-neutral-950 bg-yellow-300 px-4 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-neutral-950">
            ★ Grand Finale Winner
          </span>

          <h2 className="mb-3 text-3xl font-black leading-[1.05] tracking-[-0.02em] text-neutral-950 sm:text-4xl md:text-5xl">
            Cyber Trail &rsquo;24
          </h2>

          <p className="mb-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Capture The Flag at{" "}
            <span className="font-bold text-neutral-950 underline decoration-[3px] decoration-yellow-400 underline-offset-4">
              The O By Tamara
            </span>{" "}
            , Coimbatore — web exploitation, network security, and ethical
            hacking.
          </p>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {["Web Exploitation", "Network Security", "Ethical Hacking"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-950/70 bg-[#f4f1ea] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-700"
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          <div className="flex justify-center md:justify-start">
            <Link
              href="/asset/ctf.jpeg"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-neutral-950 bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-950 hover:text-yellow-300 hover:shadow-[4px_4px_0_0_#0b0b0b]"
            >
              View Credential
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}