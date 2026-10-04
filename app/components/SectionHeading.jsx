export default function SectionHeading({ title, subtitle, eyebrow, index }) {
  return (
    <header className="mb-10 md:mb-12">
      {/* eyebrow row */}
      {(eyebrow || index) && (
        <div className="mb-4 flex items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            <span className="text-yellow-500">✦</span>{" "}
            {eyebrow}
            {index && <span className="ml-1 text-neutral-400">/ {index}</span>}
          </p>
          <span className="h-px flex-1 bg-neutral-950/20" />
        </div>
      )}

      {/* title */}
      <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] font-black leading-[1.02] tracking-[-0.03em] text-neutral-950">
        {title}
      </h2>

      {/* subtitle */}
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm font-medium text-neutral-500 sm:text-base">
          {subtitle}
        </p>
      )}
    </header>
  );
}