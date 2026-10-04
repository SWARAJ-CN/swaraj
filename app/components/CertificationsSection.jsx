import Link from "next/link";
import { certifications } from "./data";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20"
    >
      {/* Eyebrow row */}
      <div className="mb-8 flex items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          ✦ Credentials / 005
        </p>
        <span className="h-px flex-1 bg-neutral-950/20" />
      </div>

      <SectionHeading
        title="Certifications & Achievements"
        subtitle="Courses and recognitions"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {certifications.map(({ icon, title, issuer, href }, i) => (
          <article
            key={title}
            className="group relative flex flex-col rounded-[24px] border-2 border-neutral-950 bg-white p-7 shadow-[8px_8px_0_0_#0b0b0b] transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#0b0b0b]"
          >
            {/* index number */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-5 -right-3 select-none text-[4.5rem] font-black leading-none tracking-tighter text-neutral-950/5 transition-colors duration-300 group-hover:text-yellow-300/60"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* icon tile */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-neutral-950 bg-yellow-300 text-neutral-950 shadow-[4px_4px_0_0_#0b0b0b] transition-transform duration-200 group-hover:-rotate-6">
              <Icon name={icon} size={26} />
            </div>

            {/* title */}
            <h3 className="mb-2 text-xl font-black leading-[1.15] tracking-[-0.01em] text-neutral-950 sm:text-[22px]">
              {title}
            </h3>

            {/* issuer */}
            <p className="mb-5 text-sm font-semibold text-neutral-500">
              <span className="mr-1.5 text-neutral-400">—</span>
              {issuer}
            </p>

            {/* rule */}
            <span className="mb-6 h-[3px] w-10 bg-neutral-950 transition-all duration-300 group-hover:w-20 group-hover:bg-yellow-400" />

            {/* CTA */}
            <Link
              href={href}
              className="group/btn mt-auto inline-flex w-fit items-center gap-2 rounded-full border-2 border-neutral-950 bg-white px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-neutral-950 transition-all duration-200 hover:bg-neutral-950 hover:text-yellow-300 hover:shadow-[4px_4px_0_0_#0b0b0b]"
            >
              View Credential
              <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
                →
              </span>
            </Link>

            {/* corner stamp */}
            <span className="absolute -top-3 left-6 rotate-[-5deg] rounded-full border-2 border-neutral-950 bg-emerald-400 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-neutral-950 shadow-[2px_2px_0_0_#0b0b0b]">
              ✓ Verified
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}