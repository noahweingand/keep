"use client";

import { useState } from "react";

import Image from "next/image";

import { ButtonLink } from "../button-link";
import { CarouselItem } from "../ui/carousel";

export function FunFactsVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <CarouselItem className="basis-full pl-12">
      <div className="flex flex-col sm:flex-row justify-center items-center pt-20 pb-12">
        <div className="relative mr-3 ml-3 sm:mr-12 sm:ml-6 xl:ml-0">
          <>
            {isPlaying ? (
              <iframe
                className="w-[300px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px]"
                src={`https://www.youtube.com/embed/40G4MnPcUKI?autoplay=1`}
                title="Music video for Fun Facts by Keep on YouTube"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <div
                  className="absolute animate-pulse rounded-full bg-gradient-to-t from-[#4E4A46] via-[#97805A] to-[#E8783A] blur-2xl opacity-10"
                  style={{
                    inset: "clamp(-2rem, -15%, -5rem)",
                  }}
                ></div>
                <Image
                  className="relative"
                  src="https://i.ytimg.com/vi/40G4MnPcUKI/maxresdefault.jpg"
                  alt="YouTube thumbnail for Fun Facts music video by Keep"
                  width={600}
                  height={400}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => setIsPlaying(true)}
                >
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </>
            )}
          </>
        </div>
        <div className="flex flex-col h-full justify-center text-white text-center mt-12 sm:mt-0 sm:text-left mr-2">
          <h2 className="text-4xl font-semibold mb-3">Fun Facts</h2>
          <h3 className="text-xl font-thin">
            The video accompanying our latest single on the LP, {`"Almost Static"`}
          </h3>
          <div className="flex flex-row space-x-4 items-center mt-4 justify-center sm:justify-start">
            <ButtonLink href="https://www.youtube.com/watch?v=40G4MnPcUKI">Watch</ButtonLink>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
