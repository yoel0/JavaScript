/* getHoursDiffBetweenDates, Javascript, Date
* Calculates the difference (in hours) between two dates.
*
* 1. Subtract the two Date objects and divide by the number of milliseconds
* in an hour to get the difference (in hours) between them.
*/

const getHoursDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600);

console.log(
  getHoursDiffBetweenDates(
    new Date('2021-06-05'),
    new Date('2021-06-06')
  )
);

// Returns
// 24