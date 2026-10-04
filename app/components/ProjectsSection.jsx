import Link from "next/link";
import { projects } from "./data";
import FeatureTags from "./FeatureTags";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

function ProjectCard({ title, description, features, href }, i) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[24px] border-2 border-neutral-950 bg-white shadow-[8px_8px_0_0_#0b0b0b] transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#0b0b0b]">
      {/* index number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-5 -right-3 select-none text-[4.5rem] font-black leading-none tracking-tighter text-neutral-950/5 transition-colors duration-300 group-hover:text-yellow-300/60"
      >
        {String(i + 2).padStart(2, "0")}
      </span>

      <div className="flex flex-1 flex-col p-7">
        {/* tiny meta line */}
        <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
          Project / {String(i + 2).padStart(2, "0")}
        </p>

        {/* title */}
        <h3 className="mb-3 text-[22px] font-black leading-[1.15] tracking-[-0.01em] text-neutral-950">
          {title}
        </h3>

        {/* rule */}
        <span className="mb-4 h-[3px] w-10 bg-neutral-950 transition-all duration-300 group-hover:w-20 group-hover:bg-yellow-400" />

        {/* description */}
        <p className="mb-5 text-sm leading-relaxed text-neutral-600">
          {description}
        </p>

        {/* feature tags */}
        <div className="mb-6">
          <FeatureTags features={features} />
        </div>

        {/* CTA */}
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-950 bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-neutral-950 transition-all duration-200 hover:bg-neutral-950 hover:text-yellow-300 hover:shadow-[4px_4px_0_0_#0b0b0b]"
        >
          Live Demo
          <Icon
            name="fa-google"
            size={13}
            className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20"
    >
      {/* Eyebrow row */}
      <div className="mb-8 flex items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          ✦ Work / 007
        </p>
        <span className="h-px flex-1 bg-neutral-950/20" />
      </div>

      <SectionHeading
        title="Live Projects & Security Explorations"
        subtitle="real-world apps & early learning deep dive"
      />

      {/* FEATURED: Auto USB */}
      <article className="group relative mt-12 mb-10 overflow-hidden rounded-[28px] border-2 border-neutral-950 bg-neutral-950 p-8 text-white shadow-[12px_12px_0_0_#0b0b0b] sm:p-10 md:p-12">
        {/* rotated featured stamp */}
        <span className="absolute -top-3 right-6 rotate-[8deg] rounded-full border-2 border-neutral-950 bg-yellow-300 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-neutral-950 shadow-[3px_3px_0_0_#fafaf9]">
          ★ Featured
        </span>

        {/* eyebrow */}
        <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-300">
          Throwback / 2024
        </p>

        {/* title */}
        <h3 className="mb-5 flex items-center gap-3 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
          <Icon name="fa-usb" className="text-yellow-300" />
          Auto USB
        </h3>

        {/* subtitle */}
        <p className="mb-6 max-w-2xl text-sm font-bold uppercase tracking-[0.14em] text-neutral-400">
          Early cybersecurity exploration
        </p>

        {/* description */}
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          Throwback to one of my early learning projects (2 years ago). A
          Python-based experimental tool developed in a{" "}
          <span className="font-bold text-yellow-300 underline decoration-[3px] decoration-yellow-300/40 underline-offset-4">
            controlled lab
          </span>{" "}
          to understand USB data exfiltration &amp; background device
          detection.
        </p>

        {/* tags */}
        <div className="mb-8">
          <FeatureTags
            features={[
              ["fa-python", "Python"],
              ["fa-window-maximize", "CustomTkinter UI"],
              ["fa-satellite-dish", "device detection"],
              ["fa-bug", "endpoint security"],
            ]}
          />
        </div>

        {/* goal callout */}
        <div className="mb-8 rounded-2xl border-l-4 border-yellow-300 bg-white/5 p-5 backdrop-blur-sm">
          <p className="text-sm leading-relaxed text-neutral-200 sm:text-base">
            <span className="mr-2 font-black uppercase tracking-[0.14em] text-yellow-300">
              Goal:
            </span>
            learn attack patterns → build better defenses. This project sparked
            my deep interest in ethical hacking.
          </p>
        </div>

        {/* mention link */}
        <Link
          href="https://www.linkedin.com/posts/swaraj-cn-8668112b1_cybersecurity-ethicalhacking-python-activity-7429846832127668224-EeYD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEsMjI4B7M3ZLZBTwBXwgoAn7655pwKZC9E"
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-white transition-all duration-200 hover:border-yellow-300 hover:bg-yellow-300 hover:text-neutral-950"
        >
          <Icon name="fa-arrow-up-right-from-square" size={12} />
          Mentioned on LinkedIn
          <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">
            →
          </span>
        </Link>
      </article>

      {/* GRID: other projects */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.href} {...project} i={i} />
        ))}
      </div>

      {/* REPO LINKS */}
      <div className="mt-12 flex flex-wrap items-center gap-3 border-t-2 border-neutral-950 pt-6">
        <p className="mr-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
          Find me on
        </p>

        {[
          ["GitHub", "https://github.com/SWARAJ-CN", "fa-git-alt"],
          ["GitLab", "https://gitlab.com/swarajcn774", "fa-gitlab"],
          ["Gitea", "https://gitea.com/dirtyhacke", "fa-mug-saucer"],
        ].map(([label, href, icon]) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-neutral-950 bg-white px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-950 hover:text-yellow-300 hover:shadow-[4px_4px_0_0_#0b0b0b]"
          >
            <Icon name={icon} size={14} />
            {label}
          </Link>
        ))}

        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
          <Icon name="fa-gitlab" size={12} />
          more on
          <Link
            href="https://www.linkedin.com/in/swaraj-cn-8668112b1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-neutral-950 underline decoration-2 decoration-yellow-400 underline-offset-4 transition-colors hover:text-neutral-700"
          >
            LinkedIn
          </Link>
        </span>
      </div>
    </section>
  );
}