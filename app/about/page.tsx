import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* HERO SECTION */}
        <section className="relative flex h-screen items-center overflow-hidden">

          {/* Background Image */}
          <Image
            src="/images/about/about-banner.jpeg"
            alt="Team Predators"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
            <div className="max-w-4xl">

              <p className="mb-6 text-sm uppercase tracking-[0.5em] text-orange-500">
                ABOUT TEAM PREDATORS
              </p>

              <h1 className="text-6xl font-black uppercase leading-none md:text-8xl">
                ENGINEERED
                <br />
                TO WIN
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
                6× National Champions with an unbroken podium legacy
                driven by engineering excellence, innovation, and
                relentless performance.
              </p>

            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-32">
          <div className="mx-auto grid max-w-7xl gap-20 px-8 lg:grid-cols-2">

            {/* Left */}
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-500">
                WHO WE ARE
              </p>

              <h2 className="text-5xl font-black uppercase leading-tight">
                Building the Future of Off-Road Racing
              </h2>
            </div>

            {/* Right */}
            <div>
              <p className="text-lg leading-relaxed text-zinc-300">
                Team Predators Racing is the official BAJA SAE team
                of D. Y. Patil College of Engineering, Akurdi, Pune.
                We are a group of driven engineering students dedicated
                to designing, building, and racing high-performance
                off-road vehicles.
              </p>

              <p className="mt-8 text-lg leading-relaxed text-zinc-300">
                Our success is built on strong engineering fundamentals,
                innovative design, and rigorous testing across powertrain,
                vehicle dynamics, manufacturing, and endurance systems.
              </p>
            </div>

          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="border-y border-white/10 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-8 md:grid-cols-3">

            <div>
              <h3 className="text-7xl font-black text-orange-500">
                6×
              </h3>

              <p className="mt-4 text-xl uppercase tracking-[0.2em]">
                National Champions
              </p>
            </div>

            <div>
              <h3 className="text-7xl font-black text-orange-500">
                4×
              </h3>

              <p className="mt-4 text-xl uppercase tracking-[0.2em]">
                Consecutive Titles
              </p>
            </div>

            <div>
              <h3 className="text-7xl font-black text-orange-500">
                2017
              </h3>

              <p className="mt-4 text-xl uppercase tracking-[0.2em]">
                Podium Streak Since
              </p>
            </div>

          </div>
        </section>

        {/* VISION */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-8 text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-500">
              OUR VISION
            </p>

            <h2 className="text-5xl font-black uppercase leading-tight md:text-7xl">
              Driving the Future
              <br />
              of Electric Mobility
            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-zinc-300">
              As we advance towards electric mobility, our focus is on
              developing next-generation off-road vehicles while continuing
              to set new benchmarks at both national and international
              BAJA platforms.
            </p>

          </div>
        </section>

      </main>
    </>
  );
}