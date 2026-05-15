"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/constants/heroSlides";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-500">
              TEAM PREDATORS RACING
            </p>

            <h1 className="text-5xl font-black uppercase leading-none text-white md:text-7xl">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">
              
              <button className="bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-orange-600">
                Explore Team
              </button>

              <button className="border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white">
                View Vehicle
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 border border-white/20 bg-black/40 px-4 py-3 text-white transition hover:bg-black/70"
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 border border-white/20 bg-black/40 px-4 py-3 text-white transition hover:bg-black/70"
      >
        →
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              currentSlide === index
                ? "bg-orange-500"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}