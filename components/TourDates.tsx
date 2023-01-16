import { tourDates } from '../constants/tour-dates';

const sortedTourDates = tourDates.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0));

export const TourDates = () => {
  const getCurrentDate = () => {
    const now = new Date();

    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  };

  const currentDate = getCurrentDate();

  const dates = sortedTourDates.map((tourDate) => {
    if (currentDate <= tourDate.date) {
      return tourDate;
    }

    return undefined;
  });

  return (
    dates?.some((value) => value != undefined) && (
      <table className="text-xs sm:text-lg tui-table w-full">
        <thead>
          <tr>
            <th>Venue</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {dates?.length > 0 &&
            dates.map((tourDate) => {
              return (
                <tr key={tourDate?.id} className="p-8">
                  <td className="text-center">{tourDate?.venue}</td>
                  <td className="text-center">{tourDate?.location}</td>
                  <td className="text-center">{tourDate?.date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    )
  );
};
