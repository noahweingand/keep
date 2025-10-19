import Image from "next/image";

import TourDates from "./dates";

export default async function Tour() {
  return (
    <main className="flex-1 flex-col justify-center bg-black px-4 py-10 md:px-12 lg:px-16 text-white">
      <div className="flex justify-center items-center">
        <Image
          className="rounded-lg shadow-lg"
          src="/images/promo/stars_FrankieRuggiero.png"
          alt="Promo, taken by Frankie Ruggiero, of Keep"
          width={5495}
          height={3376}
        />
      </div>
      <h1 className="font-semibold text-6xl mt-8">Tour</h1>
      <div className="flex-col divide-y w-full justify-center mt-8 font-light text-xl sm:text-2xl">
        <>
          <TourDates />
        </>
      </div>
    </main>
  );
}
