import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const premierSponsors = [
  {
    name: "Replus",
    logo: "/images/sponsors/replus.jpg",
    description:
      "Replus supports Team Predators Racing through innovation-driven engineering solutions and technical collaboration.",
  },
  {
    name: "Bharat Mechatronics",
    logo: "/images/sponsors/bharat-mechatronics.jpg",
    description:
      "Bharat Mechatronics contributes engineering expertise and manufacturing support for precision vehicle development.",
  },
  {
    name: "C2M",
    logo: "/images/sponsors/c2m.jpg",
    description:
      "C2M Engineering supports Team Predators Racing with fabrication and performance-focused manufacturing solutions.",
  },
  {
    name: "Strataroh",
    logo: "/images/sponsors/strataroh.jpg",
    description:
      "Strataroh partners with the team in driving innovation, technology integration, and engineering excellence.",
  },
];

const technicalSponsors = [
  {
    name: "Neo Wheels",
    logo: "/images/sponsors/neo-wheels.jpg",
  },
  {
    name: "Pollux Logistics",
    logo: "/images/sponsors/pollux-logistics.jpg",
  },
  {
    name: "Jendamark",
    logo: "/images/sponsors/jendamark.jpg",
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

        {/* PREMIER PARTNERS */}
        <section className="py-24">

          <div className="mx-auto max-w-7xl px-8">

            <div className="mb-16">

              <p className="mb-4 text-xs uppercase tracking-[0.5em] text-orange-500">
                Premier Partners
              </p>

              <h2 className="text-2xl font-bold uppercase md:text-4xl">
                Driving Innovation Together
              </h2>

            </div>

            <div className="space-y-24">

              {premierSponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="grid items-center gap-16 border-b border-white/10 pb-16 lg:grid-cols-2"
                >

                  {/* LOGO */}
                  <div className="flex items-center justify-center lg:justify-start">

                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={500}
                      height={220}
                      className="max-h-52 w-auto object-contain"
                    />

                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="mb-5 text-2xl font-bold uppercase">
                      {sponsor.name}
                    </h3>

                    <p className="text-base leading-relaxed text-zinc-400">
                      {sponsor.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* TECHNICAL PARTNERS */}
        <section className="border-t border-white/10 py-24">

          <div className="mx-auto max-w-7xl px-8">

            <div className="mb-16">

              <p className="mb-4 text-xs uppercase tracking-[0.5em] text-orange-500">
                Technical Partners
              </p>

              <h2 className="text-2xl font-bold uppercase md:text-4xl">
                Engineering Support
              </h2>

            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">

              {technicalSponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="bg-zinc-900/60 p-12 backdrop-blur-sm"
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

        {/* CTA */}
        <section className="border-t border-white/10 py-24">

          <div className="mx-auto max-w-4xl px-8 text-center">

            <p className="mb-5 text-xs uppercase tracking-[0.5em] text-orange-500">
              Partnership Opportunities
            </p>

            <h2 className="text-3xl font-bold uppercase md:text-5xl">
              Become A Sponsor
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
              Collaborate with Team Predators Racing and support
              the next generation of motorsport engineering and innovation.
            </p>

            <button className="mt-10 border border-white/20 px-10 py-4 text-sm font-bold uppercase tracking-[0.3em] transition hover:border-orange-500 hover:text-orange-500">
              Contact Us
            </button>

          </div>

        </section>

      </main>
    </>
  );
}