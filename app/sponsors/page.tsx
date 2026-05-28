import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const sponsors = [
  {
    name: "Replus",
    logo: "/images/sponsors/replus.jpg",
  },
  {
    name: "Jendamark",
    logo: "/images/sponsors/jendamark.jpg",
  },
  {
    name: "Neo Wheels",
    logo: "/images/sponsors/neo-wheels.jpg",
  },
  {
    name: "Pollux Logistics",
    logo: "/images/sponsors/pollux-logistics.jpg",
  },
  {
    name: "C2M",
    logo: "/images/sponsors/c2m.jpg",
  },
  {
    name: "Bharat Mechatronics",
    logo: "/images/sponsors/bharat-mechatronics.jpg",
  },
  {
    name: "Seven Hours",
    logo: "/images/sponsors/seven-hours.jpg",
  },
  {
    name: "Strataroh",
    logo: "/images/sponsors/strataroh.jpg",
  },
];

export default function SponsorsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* PAGE TITLE */}
        <section className="border-b border-white/10 pt-32 pb-12">

          <div className="mx-auto max-w-7xl px-8">

            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-orange-500">
              Team Predators Racing
            </p>

            <h1 className="text-3xl font-bold uppercase md:text-5xl">
              Sponsors & Partners
            </h1>

          </div>

        </section>

        {/* SPONSORS GRID */}
        <section className="py-24">

          <div className="mx-auto max-w-7xl px-8">

            <div className="mb-16">

              <p className="mb-4 text-xs uppercase tracking-[0.5em] text-orange-500">
                Technical Partners
              </p>

              <h2 className="text-2xl font-bold uppercase md:text-4xl">
                Engineering Support
              </h2>

            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">

              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="bg-zinc-900/60 p-12 backdrop-blur-sm transition duration-300 hover:bg-zinc-800/80"
                >

                  {/* LOGO */}
                  <div className="flex h-52 items-center justify-center">

                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={320}
                      height={160}
                      className="max-h-32 w-auto object-contain opacity-90"
                    />

                  </div>

                  {/* NAME */}
                  <div className="mt-8 border-t border-white/10 pt-5">

                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                      {sponsor.name}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

      </main>
    </>
  );
}