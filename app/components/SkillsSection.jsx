import Image from "next/image";
import { skillGroups } from "./data";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const BADGE_COLORS = [
  "bg-yellow-300",
  "bg-emerald-400",
  "bg-sky-300",
  "bg-pink-300",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20"
    >
      {/* Eyebrow row */}
      <div className="mb-8 flex items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          ✦ Stack / 006
        </p>
        <span className="h-px flex-1 bg-neutral-950/20" />
      </div>

      <SectionHeading
        title="Technical Arsenal"
        subtitle="main · programming · tools · extra"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {skillGroups.map(({ title, icon, skills }, i) => {
          const badge = BADGE_COLORS[i % BADGE_COLORS.length];
          return (
            <article
              key={title}
              className="group relative rounded-[24px] border-2 border-neutral-950 bg-white p-7 shadow-[8px_8px_0_0_#0b0b0b] transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#0b0b0b]"
            >
              {/* header */}
              <div className="mb-6 flex items-center gap-4">
                {/* icon tile */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-neutral-950 ${badge} text-neutral-950 shadow-[3px_3px_0_0_#0b0b0b] transition-transform duration-200 group-hover:-rotate-6`}
                >
                  <Icon name={icon} size={22} />
                </div>

                {/* title */}
                <h3 className="text-xl font-black uppercase leading-[1.1] tracking-[0.02em] text-neutral-950 sm:text-[22px]">
                  {title}
                </h3>

                {/* index */}
                <span
                  aria-hidden
                  className="ml-auto select-none font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400"
                >
                  /{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* rule */}
              <span className="mb-6 block h-[3px] w-10 bg-neutral-950 transition-all duration-300 group-hover:w-24 group-hover:bg-yellow-400" />

              {/* chips */}
              <div className="flex flex-wrap gap-2">
                {skills.map(([skillIcon, label]) => (
                  <span
                    key={label}
                    className="group/chip inline-flex items-center gap-2 rounded-full border-2 border-neutral-950 bg-[#f4f1ea] px-3.5 py-1.5 text-[12px] font-bold text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-[2px_2px_0_0_#0b0b0b]"
                  >
                    {skillIcon === "gimp" ? (
                      <Image
                        src="/asset/gimp.svg"
                        width={16}
                        height={16}
                        alt=""
                        className="shrink-0"
                      />
                    ) : (
                      <Icon
                        name={skillIcon}
                        size={13}
                        className="text-neutral-950 transition-colors duration-200 group-hover/chip:text-neutral-950"
                      />
                    )}
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}