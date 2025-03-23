"use client";

import { useState } from "react";

import Image from "next/image";

import { ButtonLink } from "../button-link";
import { CarouselItem } from "../ui/carousel";

export function AudiotreeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <CarouselItem className="basis-full pl-6">
      <div className="flex flex-col sm:flex-row justify-center items-center pt-20 pb-12">
        <div className="relative mr-3 ml-3 sm:mr-12 sm:ml-6 xl:ml-0">
          <>
            {isPlaying ? (
              <iframe
                className="w-[300px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px]"
                src={`https://www.youtube.com/embed/Bo-lWMJWl0Q?autoplay=1`}
                title="Keep Audiotree YouTube video"
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
                  src="https://i.ytimg.com/vi/Bo-lWMJWl0Q/maxresdefault.jpg"
                  alt="Keep Audiotree YouTube video thumbnail"
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
          <h2 className="text-4xl font-semibold mb-3">Audiotree Live</h2>
          <h3 className="text-xl font-thin">Watch our Audiotree Live session</h3>
          <div className="flex flex-row space-x-4 items-center mt-4 justify-center sm:justify-start">
            <ButtonLink href="https://www.youtube.com/watch?v=Bo-lWMJWl0Q">Watch</ButtonLink>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
