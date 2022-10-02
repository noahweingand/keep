import { Link } from './Link';
import { tourDates } from '../constants/tour-dates';

export const TourDates = () => {
  return (
    <table className="tui-table m-4 p-4">
      <thead>
        <tr>
          <th>Venue</th>
          <th>Location</th>
          <th>Date</th>
          <th>More Info</th>
        </tr>
      </thead>
      <tbody>
        {tourDates.map(({ id, venue, location, date, info }) => {
          return (
            <tr key={id} className="p-8">
              <td className="text-center">{venue}</td>
              <td className="text-center">{location}</td>
              <td className="text-center">{date}</td>
              <td className="text-center">
                <Link href={info} text="Click here" noShadow={true} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
