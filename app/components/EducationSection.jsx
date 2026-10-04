import { education } from "./data";
import SectionHeading from "./SectionHeading";

const ACCENTS = [
  { bg: "bg-yellow-300", fg: "text-neutral-950", label: "Current" },
  { bg: "bg-emerald-400", fg: "text-neutral-950", label: "Completed" },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20"
    >
      {/* Eyebrow row */}
      <div className="mb-8 flex items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          ✦ Background / 004
        </p>
        <span className="h-px flex-1 bg-neutral-950/20" />
      </div>

      <SectionHeading
        title="Academic Journey"
        subtitle="BCA · Commerce with Computer Application"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {education.map(
          ({ level, years, degree, institution, subjects }, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <article
                key={level}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border-2 border-neutral-950 bg-white shadow-[8px_8px_0_0_#0b0b0b] transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#0b0b0b]"
              >
                {/* heavy left accent bar */}
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 w-2 ${accent.bg} border-r-2 border-neutral-950`}
                />

                <div className="flex flex-col p-7 pl-9">
                  {/* top meta row */}
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-neutral-950 bg-neutral-950 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-yellow-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                      {level}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-neutral-950/60 bg-[#f4f1ea] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-700">
                      {years}
                    </span>

                    {/* status stamp */}
                    <span
                      className={`ml-auto inline-flex -rotate-[6deg] items-center rounded-full border-2 border-neutral-950 ${accent.bg} px-3 py-1 text-[9px] font-black uppercase tracking-wider text-neutral-950 shadow-[2px_2px_0_0_#0b0b0b]`}
                    >
                      {accent.label}
                    </span>
                  </div>

                  {/* degree */}
                  <h3 className="mb-2 text-2xl font-black leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-3xl">
                    {degree}
                  </h3>

                  {/* institution */}
                  <p className="mb-5 text-sm font-bold text-neutral-700 sm:text-[15px]">
                    <span className="mr-2 text-neutral-400">@</span>
                    {institution}
                  </p>

                  {/* rule */}
                  <span className="mb-5 h-[3px] w-10 bg-neutral-950 transition-all duration-300 group-hover:w-20 group-hover:bg-yellow-400" />

                  {/* subjects */}
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-neutral-950/70 bg-[#f4f1ea] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-700 transition-colors duration-200 hover:border-neutral-950 hover:bg-yellow-300 hover:text-neutral-950"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          },
        )}
      </div>
    </section>
  );
}