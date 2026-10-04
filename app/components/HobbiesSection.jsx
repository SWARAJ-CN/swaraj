import { hobbies } from "./data";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const ACCENT_COLORS = [
  "hover:bg-yellow-300",
  "hover:bg-emerald-400",
  "hover:bg-sky-300",
  "hover:bg-pink-300",
];

export default function HobbiesSection() {
  return (
    <section
      id="hobbies"
      className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20"
    >
      {/* Eyebrow row */}
      <div className="mb-8 flex items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          ✦ Off-Screen / 008
        </p>
        <span className="h-px flex-1 bg-neutral-950/20" />
      </div>

      <SectionHeading
        title="Outside the Terminal"
        subtitle="things i enjoy"
      />

      <div className="mt-10 flex flex-wrap gap-3">
        {hobbies.map(([icon, label], i) => {
          const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
          return (
            <span
              key={label}
              className={`group inline-flex cursor-default items-center gap-2 rounded-full border-2 border-neutral-950 bg-white px-5 py-2.5 text-sm font-black uppercase tracking-[0.1em] text-neutral-950 shadow-[3px_3px_0_0_#0b0b0b] transition-all duration-200 hover:-translate-y-1 hover:rotate-[-2deg] hover:shadow-[6px_6px_0_0_#0b0b0b] ${accent}`}
            >
              <Icon
                name={icon}
                size={15}
                className="text-neutral-950 transition-transform duration-200 group-hover:scale-110"
              />
              {label}
            </span>
          );
        })}

        {/* decorative end cap */}
        <span
          aria-hidden
          className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-neutral-950 bg-neutral-950 text-lg font-black text-yellow-300 shadow-[3px_3px_0_0_#0b0b0b]"
        >
          ✦
        </span>
      </div>
    </section>
  );
}