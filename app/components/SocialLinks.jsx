import Link from "next/link";
import { socialLinks } from "./data";

export default function SocialLinks({ variant = "contact" }) {
  const isFooter = variant === "footer";

  return (
    <div
      className={
        isFooter
          ? "mt-7 flex gap-3"
          : "mt-8 flex flex-wrap gap-3"
      }
    >
      {socialLinks.map(({ label, href, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={
            isFooter
              ? "group inline-flex size-11 items-center justify-center rounded-xl border-2 border-white/15 bg-white/5 text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-300 hover:bg-yellow-300 hover:text-neutral-950 hover:shadow-[3px_3px_0_0_#facc15]"
              : "group inline-flex size-12 items-center justify-center rounded-xl border-2 border-neutral-950 bg-white text-neutral-950 shadow-[3px_3px_0_0_#0b0b0b] transition-all duration-200 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-[6px_6px_0_0_#0b0b0b]"
          }
        >
          <Icon
            size={isFooter ? 17 : 19}
            strokeWidth={2.2}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:scale-110"
          />
        </Link>
      ))}
    </div>
  );
}