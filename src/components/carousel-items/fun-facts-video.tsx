"use client";

import { useState } from "react";

import Image from "next/image";

import { ButtonLink } from "../button-link";
import { CarouselItem } from "../ui/carousel";

export function FunFactsVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <CarouselItem className="basis-full pl-6 mr-24">
      <div className="flex flex-col sm:flex-row justify-center items-center pt-20 pb-12">
        <div className="relative mr-3 ml-3 sm:mr-12 sm:ml-6 xl:ml-0">
          <div
            className="absolute animate-pulse rounded-full bg-gradient-to-t from-[#4E4A46] via-[#97805A] to-[#E8783A] blur-2xl opacity-10"
            style={{
              inset: "clamp(-2rem, -15%, -5rem)",
            }}
          ></div>
          <iframe
            className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] lg:w-[800px] lg:h-[600px] "
            src={`https://www.youtube.com/embed/40G4MnPcUKI`}
            title="Music video for Fun Facts by Keep on YouTube"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col h-full justify-center text-white text-center mt-12 sm:mt-0 sm:text-left mr-2">
          <h2 className="text-4xl font-semibold mb-3">Fun Facts</h2>
          <h3 className="text-xl font-thin">
            Watch the video for "Fun Facts" on our latest LP, "Almost Static", out May 30th.
          </h3>
          <div className="flex flex-row space-x-4 items-center mt-4 justify-center sm:justify-start">
            <ButtonLink href="https://www.youtube.com/watch?v=40G4MnPcUKI">Watch</ButtonLink>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
