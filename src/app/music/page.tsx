import Image from "next/image";

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
  spotifyUrl: string;
  appleUrl: string;
  purchaseUrl: string;
}

// TODO: Info for this
const releases: Array<Release> = [
  {
    name: "Almost Static",
    artworkPath: "/images/albums/almost_static.jpg",
    type: "A",
    spotifyUrl: "",
    appleUrl: "",
    purchaseUrl: "",
  },
  {
    name: "Keep on Audiotree Live",
    artworkPath: "/images/albums/audiotree.jpeg",
    type: "EP",
    spotifyUrl: "https://open.spotify.com/album/41qpoV0mpd808mQlhNUPn3?si=TkLZ1YtCQAGCcdxV8tijCQ",
    appleUrl: "",
    purchaseUrl: "",
  },
  {
    name: "Sodawater",
    artworkPath: "/images/albums/sodawater.jpeg",
    type: "S",
    spotifyUrl: "https://open.spotify.com/album/7ljFCTIK7a8GOzGRO1Qi9e?si=fSNT6Wb_TH-YBXFvEfNJ6Q",
    appleUrl: "",
    purchaseUrl: "",
  },
  {
    name: "Happy In Here",
    artworkPath: "/images/albums/happy_in_here.jpeg",
    type: "A",
    spotifyUrl: "https://open.spotify.com/album/6ocySt3TLn4xSVlJcWELIY?si=fzcCNYTbRYaYvfn7q6W5bQ",
    appleUrl: "",
    purchaseUrl: "",
  },
  {
    name: "Keep",
    artworkPath: "/images/albums/keep.jpeg",
    type: "EP",
    spotifyUrl: "https://open.spotify.com/album/368IJWRj0GK8cXiYc89smp?si=8BxHnTHnRzuVm99Ypx0WJQ",
    appleUrl: "",
    purchaseUrl: "",
  },
  {
    name: "For Your Joy",
    artworkPath: "/images/albums/for_your_joy.jpeg",
    type: "A",
    spotifyUrl: "https://open.spotify.com/album/347uLPASJGabNrgjF5qjfZ?si=AjkEPVj4RJ-V3C-pWA1WDQ",
    appleUrl: "",
    purchaseUrl: "",
  },
  {
    name: "Psychorama",
    artworkPath: "/images/albums/psychorama.jpeg",
    type: "S",
    spotifyUrl: "https://open.spotify.com/album/1gB2Y3I7ej1geEWnI4n2NT?si=lb3ymjs_RYm16sTJ_O910w",
    appleUrl: "",
    purchaseUrl: "",
  },
  {
    name: "Hypnosis for Sleep",
    artworkPath: "/images/albums/hypnosis_for_sleep.jpeg",
    type: "S",
    spotifyUrl: "https://open.spotify.com/album/1gB2Y3I7ej1geEWnI4n2NT?si=lb3ymjs_RYm16sTJ_O910w",
    appleUrl: "",
    purchaseUrl: "",
  },
];

function Release({ name, artworkPath, type, spotifyUrl, appleUrl, purchaseUrl }: Release) {
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
          <h3 className="text-xl font-thin">{type}</h3>
          <div className="flex flex-row space-x-4 items-center mt-4 justify-center sm:justify-start">
            {name === "Almost Static" && <ButtonLink>Pre-order</ButtonLink>}
            {name === "Almost Static" && <ButtonLink>Watch</ButtonLink>}
            <ButtonLink>Listen</ButtonLink>
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
        possess, Keep are a band that's not only cut their own sort of path, but have become quite
        seasoned at it.” Their music has spanned a number of genres over the years, but most often
        falls under the banner of shoegaze. Regardless of specific distinctions, Keep sits firmly in
        the web of alternative rock music.{" "}
        <a className="underline" href="https://audiotree.tv/session/keep">
          Audiotree
        </a>{" "}
        aptly described the sound as “grand and majestic”, adding that it is “ensconced in an all
        consuming mist of heavy noise.”
      </p>

      <p>
        Keep is a band that is tried and true. With over ten years of experience, three albums, a
        host of EP's, and countless tours (both stateside and abroad) under their belt, they are
        only just hitting their stride. Almost Static will be the defining Keep record, as the many
        influences that the band has historically displayed are pieced together in a more seamless
        manner than they've ever been. Additionally, the band branches into new territory on tracks
        like Smile Down (Into Nothing), Bermuda, and Almost Static.
      </p>

      <p>
        This is an album built for long hours spent in the car which is frequently reflected in the
        lyrics. Almost Static explores many of thoughts that might cross one's mind on such
        expansive journeys. It's a driving and anthemic record that navigates the meandering nature
        of a world that won't slow down. It's a soundtrack for hurtling further and further into
        oblivion.
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
    <main className="flex-1 flex items-center justify-center bg-blue-950/90">
      <div className="inline 2xl:flex 2xl:justify-between w-full">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent className="min-h-1/2 -ml-6 py-12">
            {releases.map((release) => (
              <Release key={release.name} {...release} />
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-6 sm:gap-4">
            <CarouselPrevious className="static text-white bg-blue-950/90" />
            <CarouselNext className="static text-white bg-blue-950/90" />
          </div>
        </Carousel>

        <div className="text-white space-y-5 md:space-y-3 mx-3 md:mx-12 mt-8 2xl:ml-0 2xl:mr-5 2xl:mt-32">
          <Biography />
        </div>
      </div>
    </main>
  );
}

// const Biography = {
//   PartOne: () => (
//     <>
//       <p>
//         Keep is a band from Richmond, VA that was formed in 2013. They are heavily influenced by the
//         likes of The Cure, The Smashing Pumpkins, and Slowdive, but that only scratches the surface.
//         In a{" "}
//         <a className="underline" href="https://everythingisnoise.net/reviews/keep-happy-in-here/">
//           review of their second album
//         </a>
//         , Happy In Here, it is stated that “even with these comparisons and any accuracy they could
//         possess, Keep are a band that's not only cut their own sort of path, but have become quite
//         seasoned at it.” Their music has spanned a number of genres over the years, but most often
//         falls under the banner of shoegaze. Regardless of specific distinctions, Keep sits firmly in
//         the web of alternative rock music.{" "}
//         <a className="underline" href="https://audiotree.tv/session/keep">
//           Audiotree
//         </a>{" "}
//         aptly described the sound as “grand and majestic”, adding that it is “ensconced in an all
//         consuming mist of heavy noise.”
//       </p>

//       <p>
//         Keep is a band that is tried and true. With over ten years of experience, three albums, a
//         host of EP's, and countless tours (both stateside and abroad) under their belt, they are
//         only just hitting their stride. Almost Static will be the defining Keep record, as the many
//         influences that the band has historically displayed are pieced together in a more seamless
//         manner than they've ever been. Additionally, the band branches into new territory on tracks
//         like Smile Down (Into Nothing), Bermuda, and Almost Static.
//       </p>
//     </>
//   ),
//   PartTwo: () => (
//     <>
//       <p>
//         This is an album built for long hours spent in the car which is frequently reflected in the
//         lyrics. Almost Static explores many of thoughts that might cross one's mind on such
//         expansive journeys. It's a driving and anthemic record that navigates the meandering nature
//         of a world that won't slow down. It's a soundtrack for hurtling further and further into
//         oblivion.
//       </p>

//       <p>
//         Recording sessions for the album were split between Electrical Audio in Chicago and Earth
//         Analog in Tolono, Illinois. It was produced and engineered by Zac Montez (Whirr, Cloakroom)
//         who helmed the previous two Keep releases. As for the future, the band plans to tour
//         extensively in support of Almost Static. This will kick off with a string of dates
//         supporting Turnover on their 10th anniversary tour for Peripheral Vision.
//       </p>
//     </>
//   ),
// };

// export default function Music() {
//   return (
//     <main className="flex-1 flex items-center justify-center bg-blue-950/90">
//       <div className="inline 2xl:flex 2xl:justify-between w-full">
//         <Carousel className="w-full max-w-6xl 2xl:order-2">
//           <CarouselContent className="min-h-1/2 -ml-6 py-12">
//             {releases.map((release) => (
//               <Release key={release.name} {...release} />
//             ))}
//           </CarouselContent>
//           <div className="flex justify-center gap-6 sm:gap-4">
//             <CarouselPrevious className="static text-white bg-blue-950/90" />
//             <CarouselNext className="static text-white bg-blue-950/90" />
//           </div>
//         </Carousel>

//         <div className="text-white space-y-5 md:space-y-3 ml-6 2xl:order-1 2xl:mt-32">
//           <Biography.PartOne />
//         </div>

//         <div className="text-white space-y-5 md:space-y-3 mr-6 mt-5 order-3 2xl:mt-32">
//           <Biography.PartTwo />
//         </div>
//       </div>
//     </main>
//   );
// }
