import { tourDates } from '../constants/tour-dates';

export const TourDates = () => {
  const sortedTourDates = tourDates.sort((a, b) =>
    a.date > b.date ? 1 : b.date > a.date ? -1 : 0,
  );

  return (
    <table className="text-xs sm:text-lg tui-table w-full">
      <thead>
        <tr>
          <th>Venue</th>
          <th>Location</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {sortedTourDates.map(({ id, venue, location, date }) => {
          return (
            <tr key={id} className="p-8">
              <td className="text-center">{venue}</td>
              <td className="text-center">{location}</td>
              <td className="text-center">{date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
