import Image from "next/image";
import Link from "next/link";
import { navigation } from "./data";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10 bg-[#f4f1ea]/80 backdrop-blur-xl" />
      {/* bottom rule */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[2px] bg-neutral-950" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 md:px-10">
        {/* Logo */}
        <Link
          href="#home"
          className="group relative flex items-baseline gap-1.5"
        >
          <span className="text-2xl font-black tracking-tight text-neutral-950 md:text-[28px]">
            SCN
          </span>
          <span className="h-2 w-2 -translate-y-0.5 rounded-full bg-yellow-400 ring-2 ring-neutral-950 transition-transform duration-300 group-hover:scale-125" />
        </Link>

        {/* Mobile toggle */}
        <input id="nav-check" type="checkbox" className="peer sr-only" />
        <label
          htmlFor="nav-check"
          aria-label="Toggle navigation"
          className="relative z-[101] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-neutral-950 bg-yellow-300 transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#0b0b0b] md:hidden"
        >
          <Image
            src="/asset/apps-svgrepo-com.svg"
            width={18}
            height={18}
            alt=""
            className="opacity-90"
          />
        </label>

        {/* Backdrop overlay for mobile menu */}
        <label
          htmlFor="nav-check"
          aria-hidden="true"
          className="fixed inset-0 z-[99] hidden bg-neutral-950/25 opacity-0 backdrop-blur-sm transition-opacity duration-300 peer-checked:block peer-checked:opacity-100 md:!hidden"
        />

        {/* Nav links */}
        <ul
          className="
            fixed left-0 top-[68px] z-[100] flex h-[calc(100vh-68px)] w-full flex-col items-stretch gap-1
            border-t-2 border-neutral-950 bg-[#f4f1ea]/98 px-6 pt-8 shadow-2xl backdrop-blur-xl
            -translate-y-2 opacity-0 pointer-events-none
            transition-all duration-300 ease-out
            peer-checked:translate-y-0 peer-checked:opacity-100 peer-checked:pointer-events-auto
            md:static md:h-auto md:w-auto md:translate-y-0 md:flex-row md:items-center md:gap-0.5
            md:border-0 md:bg-transparent md:p-0 md:pt-0 md:opacity-100 md:pointer-events-auto md:shadow-none md:backdrop-blur-none
          "
        >
          {navigation.map(([label, section]) => (
            <li key={section} className="w-full md:w-auto">
              <Link
                href={`#${section}`}
                className="
                  group relative block w-full rounded-full px-4 py-2.5 text-center text-sm font-bold uppercase tracking-[0.08em] text-neutral-700
                  transition-colors duration-200 hover:text-neutral-950
                  md:w-auto md:py-2 md:text-[12px]
                "
              >
                <span className="relative z-10">{label}</span>
                {/* Hover pill background */}
                <span className="absolute inset-0 -z-0 scale-95 rounded-full bg-yellow-300 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
                {/* Underline accent (desktop only) */}
                <span className="pointer-events-none absolute left-1/2 hidden h-[2px] w-0 -translate-x-1/2 rounded-full bg-neutral-950 transition-all duration-300 group-hover:w-6 md:block md:-bottom-1" />
              </Link>
            </li>
          ))}

          {/* CTA */}
          <li className="mt-6 w-full md:mt-0 md:ml-3 md:w-auto">
            <Link
              href="#contact"
              className="
                block w-full rounded-full border-2 border-neutral-950 bg-neutral-950 px-5 py-2.5 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-yellow-300
                transition-all duration-200
                hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[3px_3px_0_0_#0b0b0b]
                md:w-auto
              "
            >
              Get in touch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}