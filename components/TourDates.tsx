import { tourDates } from '../constants/tour-dates';

const sortedTourDates = tourDates.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0));

const now = new Date();

export const TourDates = () => {
  const dates = sortedTourDates.filter((tourDate) => {
    const date = new Date(tourDate.date);
    return date.toISOString().split('T')[0] >= now.toISOString().split('T')[0];
  });

  return dates?.some((value) => value != undefined) ? (
    <div className="flex justify-center">
      <table
        className="text-xs leading-8 md:text-lg tui-table w-11/12 md:w-5/6 lg:m-8"
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Venue</th>            
          </tr>
        </thead>
        <tbody>
          {dates?.length > 0 &&
            dates.map((tourDate) => {
              return (
                <tr key={tourDate?.id} style={{ paddingTop: '4px'}}>
                  <td className="text-center w-1/3 text-sm lg:text-lg">{tourDate?.date}</td>
                  <td className="text-center w-1/3 text-sm lg:text-lg">{tourDate?.location}</td>
                  <td className="text-center w-1/3 text-sm lg:text-lg">{tourDate?.venue}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  ) : null;
};
