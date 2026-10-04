import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation } from "./data";
import Icon from "./Icon";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-neutral-950 bg-neutral-950 px-6 pb-8 pt-16 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 border-b-2 border-white/10 pb-12 sm:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Link
            href="#home"
            className="mb-4 inline-flex items-baseline gap-2"
          >
            <span className="text-4xl font-black tracking-tight text-white">
              SCN
            </span>
            <span className="h-2.5 w-2.5 -translate-y-1 rounded-full bg-yellow-300 ring-2 ring-neutral-950 transition-transform duration-300 hover:scale-125" />
          </Link>
          <p className="mb-6 max-w-[18rem] text-sm leading-relaxed text-neutral-400">
            Building secure, human-centric web apps with a defensive mindset.
            <span className="text-white"> Full-stack</span> &amp; automation
            enthusiast.
          </p>
          <SocialLinks variant="footer" />
        </div>

        {/* Explore */}
        <div>
          <FooterHeading>Explore</FooterHeading>
          <ul className="space-y-3">
            {navigation.slice(0, 6).map(([label, section]) => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-400 transition-colors duration-200 hover:text-yellow-300"
                >
                  <span className="h-px w-0 bg-yellow-300 transition-all duration-300 group-hover:w-4" />
                  {section === "certifications" ? "Certifications" : label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <FooterHeading>Connect</FooterHeading>
          <ul className="space-y-3">
            <FooterExternalLink href="https://github.com/SWARAJ-CN">
              GitHub
            </FooterExternalLink>
            <FooterExternalLink href="https://gitlab.com/swarajcn774">
              GitLab
            </FooterExternalLink>
            <FooterExternalLink href="https://www.linkedin.com/in/swaraj-cn-8668112b1">
              LinkedIn
            </FooterExternalLink>
            <FooterExternalLink href="https://www.instagram.com/s.waraj_/">
              Instagram
            </FooterExternalLink>
          </ul>
        </div>

        {/* Reach out */}
        <div>
          <FooterHeading>Reach out</FooterHeading>
          <address className="flex flex-col gap-3 not-italic">
            <FooterContact icon={Mail} href="mailto:swarajcn774@gmail.com">
              swarajcn774@gmail.com
            </FooterContact>
            <FooterContact icon={Phone} href="tel:+918590053568">
              +91 8590053568
            </FooterContact>
            <FooterContact icon={MapPin}>
              Kallar, Kasaragod
            </FooterContact>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
        <span>© 2026 Swaraj CN</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1 text-[10px] font-bold text-yellow-300">
          <Icon name="fa-bolt" size={11} />
          Available for freelance
        </span>
      </div>
    </footer>
  );
}

function FooterHeading({ children }) {
  return (
    <h2 className="relative mb-6 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.24em] text-neutral-500">
      <span className="text-yellow-300">✦</span>
      {children}
    </h2>
  );
}

function FooterExternalLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-400 transition-colors duration-200 hover:text-yellow-300"
      >
        <span className="h-px w-0 bg-yellow-300 transition-all duration-300 group-hover:w-4" />
        {children}
      </Link>
    </li>
  );
}

function FooterContact({ icon: IconComponent, children, href }) {
  const Inner = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-neutral-700 bg-neutral-900 text-yellow-300 transition-all duration-200 group-hover:border-yellow-300 group-hover:-rotate-6">
        <IconComponent size={15} strokeWidth={2.5} />
      </span>
      <span className="text-sm font-semibold text-neutral-300 transition-colors duration-200 group-hover:text-white">
        {children}
      </span>
    </>
  );

  return (
    <div className="group">
      {href ? (
        <Link href={href} className="flex items-center gap-3">
          {Inner}
        </Link>
      ) : (
        <span className="flex items-center gap-3">{Inner}</span>
      )}
    </div>
  );
}