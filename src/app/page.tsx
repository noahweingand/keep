import Image from "next/image";

import { FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";

import {
  ButtonLink,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center bg-black">
      <Carousel className="w-full max-w-7xl">
        <CarouselContent className="min-h-1/2 -ml-6 py-12">
          <Announcement />
          <FunFactsVideo />
          <AudiotreeVideo />
        </CarouselContent>
        <div className="flex justify-center gap-6 sm:gap-4">
          <CarouselPrevious className="static text-white bg-black/90" />
          <CarouselNext className="static text-white bg-black/90" />
        </div>
      </Carousel>
    </main>
  );
}

function Announcement() {
  return (
    <CarouselItem className="basis-full pl-6 mr-24">
      <div className="flex flex-col sm:flex-row justify-center items-center pt-20 pb-12">
        <div className="relative mr-3 ml-3 sm:mr-12 sm:ml-6 xl:ml-0">
          <div
            className="absolute animate-pulse rounded-full bg-gradient-to-t from-yellow-400 via-[#97805A] to-[#E8783A] blur-3xl opacity-20"
            style={{
              inset: "clamp(-2rem, -15%, -5rem)",
            }}
          ></div>
          <Image
            className="relative rounded-lg shadow-lg"
            src="/images/albums/almost_static.jpg"
            alt="Album artwork for Almost Static by Keep"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col h-full justify-center text-white text-center mt-12 sm:mt-0 sm:text-left mr-2">
          <h2 className="text-4xl font-semibold mb-3">Almost Static</h2>
          <h3 className="text-xl font-thin">
            <i>Almost Static</i> — our new album — is out May 30.
          </h3>
          <div className="flex flex-row space-x-4 items-center mt-4 justify-center sm:justify-start">
            <ButtonLink href="https://signalnoiserecords.com/products/keep-almost-static">
              Pre-order
            </ButtonLink>
            <ButtonLink href="https://open.spotify.com/artist/0oPLf7tpRZAVZMHWA0Nu7W?si=QukS94JwRWGBVZqw2pW13A">
              <FaSpotify size={24} />
            </ButtonLink>
            <ButtonLink href="https://music.apple.com/us/artist/keep/1274176252">
              <SiApplemusic size={24} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}

function FunFactsVideo() {
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
            className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] lg:w-[800px] lg:h-[600px] rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/40G4MnPcUKI`}
            title="Music video for Fun Facts by Keep on YouTube"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col h-full justify-center text-white text-center mt-12 sm:mt-0 sm:text-left mr-2">
          <h2 className="text-4xl font-semibold mb-3">Fun Facts</h2>
          <h3 className="text-xl font-thin">
            {`“Fun Facts”`} — from the new LP <i>Almost Static</i>, out May 30. Watch the video now.
          </h3>
          <div className="flex flex-row space-x-4 items-center mt-4 justify-center sm:justify-start">
            <ButtonLink href="https://www.youtube.com/watch?v=40G4MnPcUKI">Watch</ButtonLink>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}

function AudiotreeVideo() {
  return (
    <CarouselItem className="basis-full pl-6">
      <div className="flex flex-col sm:flex-row justify-center items-center pt-20 pb-12">
        <div className="basis-2/3 relative mr-3 ml-3 sm:mr-12 sm:ml-6 xl:ml-0">
          <>
            <div
              className="absolute animate-pulse rounded-full bg-gradient-to-t from-[#4E4A46] via-[#97805A] to-[#E8783A] blur-2xl opacity-10"
              style={{
                inset: "clamp(-2rem, -15%, -5rem)",
              }}
            />
            <iframe
              className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] lg:w-[800px] lg:h-[600px] rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/Bo-lWMJWl0Q`}
              title="Keep Audiotree YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </>
        </div>
        <div className="basis-1/3 flex flex-col h-full justify-center text-white text-center mt-12 sm:mt-0 sm:text-left mr-2">
          <h2 className="text-4xl font-semibold mb-3">Audiotree Live</h2>
          <h3 className="text-xl font-thin">Watch our Audiotree Live session.</h3>
          <div className="flex flex-row space-x-4 items-center mt-4 justify-center sm:justify-start">
            <ButtonLink href="https://www.youtube.com/watch?v=Bo-lWMJWl0Q">Watch</ButtonLink>
            <ButtonLink href="https://open.spotify.com/album/41qpoV0mpd808mQlhNUPn3?si=TkLZ1YtCQAGCcdxV8tijCQ">
              <FaSpotify size={24} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
