import { ResultAsync, okAsync, errAsync } from "neverthrow";

import { ButtonLink } from "@/components";

interface BandsInTownEvent {
  id: string;
  url: string;
  datetime: string;
  title: string;
  description: string;
  venue: {
    location: string;
    name: string;
    city: string;
    country: string;
  };
  lineup: Array<string>;
  offers: Array<{ status: string; type: string; url: string }>;
  free: boolean;
  starts_at: string;
  presale: string;
  sold_out: boolean;
}

interface TourDate {
  id: string;
  datetime: string;
  venue: string;
  location: string;
  ticketsUri: string | null;
  isSoldOut: boolean;
}

function getVenue(event: BandsInTownEvent) {
  // Custom hacks
  if (event?.description.includes("The Star & Garter")) return "The Star & Garter";
  if (event?.starts_at.includes("2025-10-31")) return "Ancienne Belgique";
  if (event?.starts_at.includes("2025-11-01")) return "Rotown";

  // BandsInTown formatting
  if (event?.description && !event?.description.includes(":")) {
    return event.description;
  }

  if (event?.venue?.name?.includes("-")) {
    const splits = event.venue.name.split(" - ");
    const name = splits[1] || "";
    return name.trim();
  }

  return event.venue.name;
}

const FOUR_HOURS_IN_SECONDS = 60 * 60 * 4;
const NEXT_FETCH_CONFIG = {
  revalidate: FOUR_HOURS_IN_SECONDS,
};

// TODO: Timezone lookup
const fetchBandInTownEvents = async () => {
  const BANDSINTOWN_RESOURCE = `https://rest.bandsintown.com/artists/${process.env.BANDSINTOWN_ARTIST_ID}/events?app_id=${process.env.BANDSINTOWN_APP_ID}`;

  return ResultAsync.fromPromise(
    fetch(BANDSINTOWN_RESOURCE, { next: NEXT_FETCH_CONFIG }),
    (error) => ({ message: "BandsInTown network error", error }),
  )
    .andThen((response) => {
      if (!response.ok) {
        return errAsync({
          message: `BandsInTown api error: ${response.statusText} (${response.status})`,
        });
      }
      return okAsync(response);
    })
    .andThen((response) =>
      ResultAsync.fromPromise(response.json() as Promise<Array<BandsInTownEvent>>, () => ({
        message: "BandsInTown invalid JSON response",
      })),
    )
    .andThen((response) => {
      const dates = response.map((event) => {
        const tourDate: TourDate = {
          id: event.id,
          datetime: event.datetime,
          venue: getVenue(event),
          location: event?.venue?.location || "",
          ticketsUri: event?.url || "",
          isSoldOut: event?.sold_out || false,
        };

        return tourDate;
      });

      return okAsync(dates);
    });
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  day: "2-digit",
  month: "short",
  year: "numeric",
});

function formatDateTime(datetime: string) {
  return dateFormatter.format(new Date(datetime));
}

function TourDate({ datetime, venue, location, ticketsUri }: TourDate) {
  return (
    <div className="flex w-full flex-row justify-between space-x-1 sm:text-2xl py-6">
      <span className="basis-1/3 text-pretty">{formatDateTime(datetime)}</span>
      <div className="basis-1/3 block text-left text-pretty">
        <span className="block font-semibold">{location}</span>
        <span>{venue}</span>
      </div>
      {ticketsUri ? (
        <span className="basis-1/3 flex items-center justify-end text-pretty">
          <ButtonLink href={ticketsUri}>Tickets</ButtonLink>
        </span>
      ) : (
        <div className="w-full" />
      )}
    </div>
  );
}

export default async function TourDates() {
  const result = await fetchBandInTownEvents();
  if (result.isOk()) {
    if (result.value.length === 0) {
      return <h2>No upcoming dates.</h2>;
    }

    return (
      <>
        {result.value.map((event) => (
          <TourDate key={event.id} {...event} />
        ))}
      </>
    );
  }

  return <h2>We are having trouble loading our tour dates. Please try again later.</h2>;
}
