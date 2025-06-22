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

interface Release {
  name: string;
  artworkPath: string;
  type: "A" | "EP" | "S";
  year: number;
  spotifyUrl: string;
  appleUrl: string;
  watchUrl: string;
}

const releases: Array<Release> = [
  {
    name: "Almost Static",
    artworkPath: "/images/albums/almost_static.jpg",
    type: "A",
    year: 2025,
    spotifyUrl: "https://open.spotify.com/artist/0oPLf7tpRZAVZMHWA0Nu7W?si=QukS94JwRWGBVZqw2pW13A",
    appleUrl: "https://music.apple.com/us/artist/keep/1274176252",
    watchUrl: "https://www.youtube.com/watch?v=40G4MnPcUKI",
  },
  {
    name: "Keep on Audiotree Live",
    artworkPath: "/images/albums/audiotree.jpeg",
    type: "EP",
    year: 2023,
    spotifyUrl: "https://open.spotify.com/album/41qpoV0mpd808mQlhNUPn3?si=TkLZ1YtCQAGCcdxV8tijCQ",
    appleUrl: "",
    watchUrl: "https://www.youtube.com/watch?v=Bo-lWMJWl0Q",
  },
  {
    name: "Sodawater",
    artworkPath: "/images/albums/sodawater.jpeg",
    type: "S",
    year: 2023,
    spotifyUrl: "https://open.spotify.com/album/7ljFCTIK7a8GOzGRO1Qi9e?si=fSNT6Wb_TH-YBXFvEfNJ6Q",
    appleUrl: "https://music.apple.com/us/album/sodawater/1709942847?i=1709942849",
    watchUrl: "",
  },
  {
    name: "Happy In Here",
    artworkPath: "/images/albums/happy_in_here.jpeg",
    type: "A",
    year: 2023,
    spotifyUrl: "https://open.spotify.com/album/6ocySt3TLn4xSVlJcWELIY?si=fzcCNYTbRYaYvfn7q6W5bQ",
    appleUrl: "https://music.apple.com/us/album/happy-in-here/1709942581",
    watchUrl: "",
  },
  {
    name: "Keep",
    artworkPath: "/images/albums/keep.jpeg",
    type: "EP",
    year: 2020,
    spotifyUrl: "https://open.spotify.com/album/368IJWRj0GK8cXiYc89smp?si=8BxHnTHnRzuVm99Ypx0WJQ",
    appleUrl: "https://music.apple.com/us/album/keep-ep/1709942890",
    watchUrl: "",
  },
  {
    name: "For Your Joy",
    artworkPath: "/images/albums/for_your_joy.jpeg",
    type: "A",
    year: 2017,
    spotifyUrl: "https://open.spotify.com/album/347uLPASJGabNrgjF5qjfZ?si=AjkEPVj4RJ-V3C-pWA1WDQ",
    appleUrl: "https://music.apple.com/us/album/for-your-joy/1709942577",
    watchUrl: "",
  },
  {
    name: "Psychorama",
    artworkPath: "/images/albums/psychorama.jpeg",
    type: "S",
    year: 2015,
    spotifyUrl: "https://open.spotify.com/album/1gB2Y3I7ej1geEWnI4n2NT?si=lb3ymjs_RYm16sTJ_O910w",
    appleUrl: "https://music.apple.com/us/album/psychorama-single/1709945254",
    watchUrl: "",
  },
  {
    name: "Hypnosis for Sleep",
    artworkPath: "/images/albums/hypnosis_for_sleep.jpeg",
    type: "S",
    year: 2014,
    spotifyUrl: "https://open.spotify.com/album/1gB2Y3I7ej1geEWnI4n2NT?si=lb3ymjs_RYm16sTJ_O910w",
    appleUrl: "https://music.apple.com/us/album/hypnosis-for-sleep-single/1709942869",
    watchUrl: "",
  },
];

function Release({ name, artworkPath, year, spotifyUrl, appleUrl, watchUrl }: Release) {
  return (
    <CarouselItem className="basis-full pl-6">
      <div className="flex flex-col sm:flex-row justify-center items-center pt-20 pb-12">
        <div className="relative mr-3 ml-3 sm:mr-12 sm:ml-6 xl:ml-0">
          <div
            className="absolute animate-pulse rounded-full bg-gradient-to-t from-[#4E4A46] via-[#97805A] to-[#E8783A] blur-2xl opacity-10"
            style={{
              inset: "clamp(-2rem, -15%, -5rem)",
            }}
          />
          <Image
            className="relative rounded-lg shadow-lg"
            src={artworkPath}
            alt="Album artwork for Almost Static by Keep"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col h-full justify-center text-white text-center mt-12 sm:mt-0 sm:text-left mr-2">
          <h2 className="text-4xl font-semibold mb-3">{name}</h2>
          <h3 className="text-xl font-thin">{year}</h3>
          <div className="flex flex-row flex-wrap gap-4 items-center mt-4 justify-center sm:justify-start">
            {name === "Almost Static" && (
              <ButtonLink href="https://signalnoiserecords.com/products/keep-almost-static">
                Buy
              </ButtonLink>
            )}
            {name === "Happy In Here" && (
              <ButtonLink href="https://signalnoiserecords.com/products/keep-happy-in-here">
                Buy
              </ButtonLink>
            )}
            {watchUrl && <ButtonLink href={watchUrl}>Watch</ButtonLink>}
            <>
              <ButtonLink href={spotifyUrl}>
                <FaSpotify size={24} />
              </ButtonLink>
              {appleUrl && (
                <ButtonLink href={appleUrl}>
                  <SiApplemusic size={24} />
                </ButtonLink>
              )}
            </>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}

function Biography() {
  return (
    <>
      <p>
        Keep is a band from Richmond, VA that was formed in 2013. They are heavily influenced by the
        likes of The Cure, The Smashing Pumpkins, and Slowdive, but that only scratches the surface.
        In a{" "}
        <a className="underline" href="https://everythingisnoise.net/reviews/keep-happy-in-here/">
          review of their second album
        </a>
        , Happy In Here, it is stated that “even with these comparisons and any accuracy they could
        possess, Keep are a band that&apos;s not only cut their own sort of path, but have become
        quite seasoned at it.” Their music has spanned a number of genres over the years, but most
        often falls under the banner of shoegaze. Regardless of specific distinctions, Keep sits
        firmly in the web of alternative rock music.{" "}
        <a className="underline" href="https://audiotree.tv/session/keep">
          Audiotree
        </a>{" "}
        aptly described the sound as “grand and majestic”, adding that it is “ensconced in an all
        consuming mist of heavy noise.”
      </p>

      <p>
        Keep is a band that is tried and true. With over ten years of experience, three albums, a
        host of EP&apos;s, and countless tours (both stateside and abroad) under their belt, they
        are only just hitting their stride. Almost Static will be the defining Keep record, as the
        many influences that the band has historically displayed are pieced together in a more
        seamless manner than they&apos;ve ever been. Additionally, the band branches into new
        territory on tracks like Smile Down (Into Nothing), Bermuda, and Almost Static.
      </p>

      <p>
        This is an album built for long hours spent in the car which is frequently reflected in the
        lyrics. Almost Static explores many of thoughts that might cross one&apos;s mind on such
        expansive journeys. It&apos;s a driving and anthemic record that navigates the meandering
        nature of a world that won&apos;t slow down. It&apos;s a soundtrack for hurtling further and
        further into oblivion.
      </p>

      <p>
        Recording sessions for the album were split between Electrical Audio in Chicago and Earth
        Analog in Tolono, Illinois. It was produced and engineered by Zac Montez (Whirr, Cloakroom)
        who helmed the previous two Keep releases. As for the future, the band plans to tour
        extensively in support of Almost Static. This will kick off with a string of dates
        supporting Turnover on their 10th anniversary tour for Peripheral Vision.
      </p>
    </>
  );
}

export default function Music() {
  return (
    <main className="flex-1 flex items-center justify-center bg-black">
      <div className="inline 2xl:flex 2xl:justify-between w-full">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent className="min-h-1/2 -ml-6 py-12">
            {releases.map((release) => (
              <Release key={release.name} {...release} />
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-6 sm:gap-4">
            <CarouselPrevious className="static text-white bg-black/90" />
            <CarouselNext className="static text-white bg-black/90" />
          </div>
        </Carousel>

        <div className="text-white break-words text-justify space-y-5 md:space-y-3 mx-3 md:mx-12 my-8 2xl:ml-0 2xl:mr-8 2xl:mt-32">
          <Biography />
        </div>
      </div>
    </main>
  );
}
