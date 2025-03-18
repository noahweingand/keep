import Image from "next/image";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center bg-blue-950/90">
      <Carousel className="w-full max-w-7xl">
        <CarouselContent className="min-h-1/2 -ml-6 py-12">
          <Item />
          <Item />
          <Item />
        </CarouselContent>
        <div className="flex justify-center gap-6 sm:gap-4">
          <CarouselPrevious className="static text-white bg-blue-950/90" />
          <CarouselNext className="static text-white bg-blue-950/90" />
        </div>
      </Carousel>
    </main>
  );
}

function Item() {
  return (
    <CarouselItem className="basis-full pl-6">
      <div className="flex flex-col sm:flex-row justify-center items-center pt-20 pb-12">
        <div className="relative mr-3 ml-3 sm:mr-12 sm:ml-6 xl:ml-0">
          <div
            className="absolute animate-pulse rounded-full bg-gradient-to-t from-[#4E4A46] via-[#97805A] to-[#E8783A] blur-2xl opacity-10"
            style={{
              inset: "clamp(-2rem, -15%, -5rem)",
            }}
          ></div>
          <Image
            className="relative rounded-lg shadow-lg"
            src="/images/albums/almost_static.jpeg"
            alt="Album artwork for Almost Static by Keep"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col h-full justify-center text-white text-center mt-12 sm:mt-0 sm:text-left">
          <h2 className="text-4xl font-semibold mb-3">Almost Static</h2>
          <h3 className="text-xl font-thin">Our newest single {`"Single Name"`} is out now. </h3>
          <div className="flex flex-row space-x-5 items-center mt-4 justify-center sm:justify-start">
            <Button>Pre-order</Button>
            <Button>Listen</Button>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
