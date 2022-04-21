const data = require('../data/zoo_data');

const { species } = data;
const days = [
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Monday',
];
const animals = species.map((animal) => animal.name);
const schedules = {};

const exhibitionConstructor = (day) => species
  .filter((specie) => specie.availability.includes(day))
  .map((specie) => specie.name);

for (let dayIndex = 0; dayIndex < days.length; dayIndex += 1) {
  const day = days[dayIndex];
  const exhibition = exhibitionConstructor(day);
  const openHour = data.hours[day].open;
  const closeHour = data.hours[day].close;
  const officeHour = `Open from ${openHour}am until ${closeHour}pm`;
  schedules[day] = { officeHour, exhibition };
}

schedules.Monday.officeHour = 'CLOSED';
schedules.Monday.exhibition = 'The zoo will be closed!';

function getSchedule(scheduleTarget) {
  if (typeof scheduleTarget === 'undefined') {
    return schedules;
  }

  if (days.includes(scheduleTarget)) {
    const scheduleDay = {};
    scheduleDay[scheduleTarget] = schedules[scheduleTarget];
    return scheduleDay;
  }

  if (animals.includes(scheduleTarget)) {
    const scheduleAnimals = species.find((animal) => animal.name === scheduleTarget).availability;
    return scheduleAnimals;
  }

  return schedules;
}

getSchedule('Tuesday');
// getSchedule('Wednesday');

module.exports = getSchedule;
