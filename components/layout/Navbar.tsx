import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "TEAM", href: "/team" },
    { label: "VEHICLE", href: "/vehicle" },
    { label: "ACHIEVEMENTS", href: "/achievements" },
    { label: "SPONSORS", href: "/sponsors" },
    { label: "GALLERY", href: "/gallery" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/70 to-transparent">

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* LEFT */}
        <Link href="/" className="flex items-center gap-4">

          {/* Logo */}
          <Image
            src="/logos/logo.png"
            alt="Team Predators Logo"
            width={65}
            height={65}
            className="object-contain"
            priority
          />

          {/* Team Name */}
          <div>
            <h1 className="text-xl font-black uppercase tracking-[0.15em] text-white md:text-2xl">
              TEAM PREDATORS
            </h1>

            <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-zinc-300 md:text-xs">
              BAJA SAE
            </p>
          </div>
        </Link>

        {/* RIGHT NAVIGATION */}
        <nav className="hidden items-center gap-6 xl:flex 2xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text-xs font-semibold uppercase tracking-[0.18em] text-white transition md:text-sm"
            >
              {item.label}

              {/* Hover Underline */}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}