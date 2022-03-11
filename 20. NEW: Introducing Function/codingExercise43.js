// DEFINE YOUR FUNCTION BELOW:
const daysOfTheWeek = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
};

function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  } return daysOfTheWeek[num];
}