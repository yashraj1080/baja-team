export default function Navbar() {
  const navItems = [
    "HOME",
    "ABOUT",
    "TEAM",
    "VEHICLE",
    "ACHIEVEMENTS",
    "SPONSORS",
    "CONTACT",
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/60 to-transparent">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        
        {/* Left Section */}
        <div className="flex items-center gap-5">
          
          {/* Logo Placeholder */}
          <div className="h-14 w-14 rounded-full border border-white/20" />

          {/* Team Name */}
          <div>
            <h1 className="text-2xl font-black uppercase tracking-[0.2em] text-white">
              TEAM PREDATORS
            </h1>

            <p className="mt-1 text-xs uppercase tracking-[0.4em] text-zinc-300">
              BAJA SAE
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 xl:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="group relative text-sm font-semibold uppercase tracking-[0.2em] text-white transition"
            >
              {item}

              {/* Underline Hover */}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}