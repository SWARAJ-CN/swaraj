import { internships } from "./data";
import SectionHeading from "./SectionHeading";

export default function InternshipsSection() {
  return (
    <section
      id="internships"
      className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20"
    >
      {/* Eyebrow row */}
      <div className="mb-8 flex items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          ✦ Experience / 003
        </p>
        <span className="h-px flex-1 bg-neutral-950/20" />
      </div>

      <SectionHeading
        title="Professional Internships"
        subtitle="Practical industry training and skill development."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {internships.map(({ role, organization, description }, i) => (
          <article
            key={organization}
            className="group relative flex flex-col rounded-[24px] border-2 border-neutral-950 bg-white p-7 shadow-[8px_8px_0_0_#0b0b0b] transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#0b0b0b]"
          >
            {/* index number */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-5 -right-3 select-none text-[4.5rem] font-black leading-none tracking-tighter text-neutral-950/5 transition-colors duration-300 group-hover:text-yellow-300/60"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* role badge */}
            <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full border-2 border-neutral-950 bg-yellow-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-neutral-950">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
              {role}
            </span>

            {/* organization */}
            <h3 className="mb-3 text-2xl font-black leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-[26px]">
              {organization}
            </h3>

            {/* rule */}
            <span className="mb-4 h-[3px] w-10 bg-neutral-950 transition-all duration-300 group-hover:w-16 group-hover:bg-yellow-400" />

            {/* description */}
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
              {description}
            </p>

            {/* corner stamp */}
            <span className="absolute -bottom-3 -right-2 rotate-[-6deg] rounded-full border-2 border-neutral-950 bg-emerald-400 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-neutral-950 shadow-[2px_2px_0_0_#0b0b0b]">
              Completed
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}