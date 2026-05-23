"use client";

const sponsors = [
  {
    name: "Red Bull",
    logo: "/sponsors/redbull.png",
  },
  {
    name: "Tesla",
    logo: "/sponsors/tesla.png",
  },
  {
    name: "NVIDIA",
    logo: "/sponsors/nvidia.png",
  },
  {
    name: "AWS",
    logo: "/sponsors/aws.png",
  },
  {
    name: "Microsoft",
    logo: "/sponsors/microsoft.png",
  },
  {
    name: "Oracle",
    logo: "/sponsors/oracle.png",
  },
];

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center py-32 px-6 text-center">
        
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-80" />

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-zinc-400 mb-4 text-sm">
            Powering Innovation
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Our Sponsors
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            The companies and partners who support Team Predators Racing in
            building world-class engineering, innovation, and performance.
          </p>
        </div>
      </section>

      {/* SPONSORS GRID */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex flex-col items-center justify-center transition-all duration-500 hover:border-white hover:-translate-y-2"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5 blur-2xl" />

                {/* Logo */}
                <div className="relative z-10 h-24 flex items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-20 object-contain grayscale group-hover:grayscale-0 transition duration-500"
                  />
                </div>

                {/* Name */}
                <h3 className="relative z-10 mt-8 text-2xl font-semibold">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Become a Sponsor
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Partner with Team Predators Racing and help shape the future of
            motorsports engineering and student innovation.
          </p>

          <button className="mt-10 px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}