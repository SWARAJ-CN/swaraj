import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "swarajcn774@gmail.com",
    href: "mailto:swarajcn774@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8590053568",
    href: "tel:+918590053568",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kallar, Kasaragod, Kerala, India",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20"
    >
      {/* Eyebrow row */}
      <div className="mb-8 flex items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
          ✦ Contact / 009
        </p>
        <span className="h-px flex-1 bg-neutral-950/20" />
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        {/* LEFT — info */}
        <div>
          <h2 className="mb-4 text-[clamp(2.25rem,5vw,3.5rem)] font-black leading-[1.02] tracking-[-0.03em] text-neutral-950">
            Let&rsquo;s
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">connect.</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-[0.35em] -rotate-1 bg-yellow-300"
              />
            </span>
          </h2>

          <p className="mb-8 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
            Based in Kallar, Kasaragod — open for{" "}
            <span className="font-bold text-neutral-950 underline decoration-2 decoration-yellow-400 underline-offset-4">
              freelance
            </span>{" "}
            and full-time roles.
          </p>

          {/* contact rows */}
          <ul className="mb-8 flex flex-col gap-4">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
              const Inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-neutral-950 bg-yellow-300 text-neutral-950 shadow-[3px_3px_0_0_#0b0b0b] transition-transform duration-200 group-hover:-rotate-6">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                      {label}
                    </span>
                    <span className="truncate text-sm font-black text-neutral-950 sm:text-[15px]">
                      {value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={label}>
                  {href ? (
                    <Link
                      href={href}
                      className="group flex items-center gap-4"
                    >
                      {Inner}
                    </Link>
                  ) : (
                    <div className="group flex items-center gap-4">
                      {Inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* socials */}
          <div className="border-t-2 border-neutral-950 pt-6">
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              Find me on
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* RIGHT — map */}
        <div className="relative">
          {/* rotated sticker */}
          <span className="absolute -top-3 left-6 z-10 rotate-[-6deg] rounded-full border-2 border-neutral-950 bg-emerald-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-neutral-950 shadow-[3px_3px_0_0_#0b0b0b]">
            ★ Based in Kerala
          </span>

          <div className="h-[320px] min-h-64 overflow-hidden rounded-[24px] border-2 border-neutral-950 bg-neutral-100 shadow-[10px_10px_0_0_#0b0b0b] transition-all duration-300 hover:shadow-[14px_14px_0_0_#0b0b0b] md:h-full">
            <iframe
              title="Map showing Kallar, Kasaragod, Kerala"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20150.9759253811!2d75.25870796422156!3d12.432301409990734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba48a3773ad04b3%3A0xcb1e6e30b9eb325a!2sKallar%2C%20Kerala%20671532!5e1!3m2!1sen!2sin!4v1773571445599!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-full w-full border-0 grayscale contrast-110 transition-all duration-500 hover:scale-[1.02] hover:grayscale-0"
            />
          </div>
        </div>

        {/* FORM — full width */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="relative flex h-fit w-full flex-col gap-5 rounded-[24px] border-2 border-neutral-950 bg-white p-6 shadow-[10px_10px_0_0_#0b0b0b] md:col-span-2 md:p-10"
        >
          <input
            type="hidden"
            name="access_key"
            value="24c4d710-cbc5-47db-a21b-2fb8d6238631"
          />

          {/* form header */}
          <div className="mb-2 flex items-center gap-4">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
              Send a message
            </p>
            <span className="h-px flex-1 bg-neutral-950/20" />
            <span className="rounded-full border-2 border-neutral-950 bg-yellow-300 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-neutral-950">
              Replies in ~24h
            </span>
          </div>

          {/* name + email row */}
          <div className="flex w-full flex-col gap-5 md:flex-row">
            <label className="flex flex-1 flex-col gap-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Name
              </span>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="h-12 w-full rounded-xl border-2 border-neutral-950 bg-[#f4f1ea] px-4 text-sm font-semibold text-neutral-950 outline-none transition-colors placeholder:font-medium placeholder:text-neutral-400 focus:bg-white focus:border-yellow-500"
              />
            </label>

            <label className="flex flex-1 flex-col gap-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border-2 border-neutral-950 bg-[#f4f1ea] px-4 text-sm font-semibold text-neutral-950 outline-none transition-colors placeholder:font-medium placeholder:text-neutral-400 focus:bg-white focus:border-yellow-500"
              />
            </label>
          </div>

          {/* message */}
          <label className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              Message
            </span>
            <textarea
              name="message"
              required
              placeholder="Tell me about your project…"
              className="h-32 w-full resize-none rounded-xl border-2 border-neutral-950 bg-[#f4f1ea] px-4 py-3 text-sm font-semibold text-neutral-950 outline-none transition-colors placeholder:font-medium placeholder:text-neutral-400 focus:bg-white focus:border-yellow-500"
            />
          </label>

          {/* actions */}
          <div className="flex w-full flex-col gap-3 md:flex-row">
            <button
              type="submit"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-neutral-950 bg-neutral-950 px-6 text-[12px] font-black uppercase tracking-[0.14em] text-yellow-300 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#0b0b0b] md:w-auto md:min-w-[180px]"
            >
              Send Mail
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
            <button
              type="reset"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-neutral-950 bg-white px-6 text-[12px] font-black uppercase tracking-[0.14em] text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f4f1ea] md:w-auto md:min-w-[160px]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}