import Image from "next/image";

import { ButtonLink } from "@/components";

import { tourDates } from "@/constants";

const sortedTourDates = tourDates.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0));
const now = new Date();

function formatDate(ogDate: string) {
  const date = new Date(ogDate);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

interface TourDateProps {
  date: string;
  venue: string;
  location: string;
  ticketsLink?: string;
}

function TourDate({ date, venue, location, ticketsLink }: TourDateProps) {
  return (
    <div className="flex w-full flex-row justify-between space-x-1 sm:text-2xl py-6">
      <span className="basis-1/3 text-pretty">{formatDate(date)}</span>
      <div className="basis-1/3 block text-left text-pretty">
        <span className="block font-semibold">{location}</span>
        <span>{venue}</span>
      </div>
      {ticketsLink ? (
        <span className="basis-1/3 flex items-center justify-end text-pretty">
          <ButtonLink href={ticketsLink}>Tickets</ButtonLink>
        </span>
      ) : (
        <div className="w-full" />
      )}
    </div>
  );
}

export default function Tour() {
  const dates = sortedTourDates.filter((tourDate) => {
    const date = new Date(tourDate.date);
    return date.toISOString().split("T")[0] >= now.toISOString().split("T")[0];
  });

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
        {dates.map((tourDate) => (
          <TourDate key={tourDate.id} {...tourDate} />
        ))}
      </div>
    </main>
  );
}
