const { species, hours } = require('../data/zoo_data');

const daysWeekend = Object.keys(hours);

const officeHours = Object.values(hours)
  .map((hour) => `Open from ${hour.open}am until ${hour.close}pm`);

const allSchedule = daysWeekend.reduce((acc, day, index) => {
  acc[day] = { officeHour: day !== 'Monday'
    ? officeHours[index] : 'CLOSED',
  exhibition: day !== 'Monday' ? species.reduce((accSpecie, specie) => (specie.availability
    .includes(day) ? accSpecie
      .concat(specie.name) : accSpecie), []) : 'The zoo will be closed!' };
  return acc;
}, {});

const scheduleDays = (day) => Object.entries(allSchedule).reduce((acc, schedule) => {
  const [key, value] = schedule;
  if (key === day) acc[key] = value;
  return acc;
}, {});

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || scheduleTarget === 'qualquercoisa') return allSchedule;
  if (daysWeekend.includes(scheduleTarget)) return scheduleDays(scheduleTarget);
  return species.find((specie) => specie.name.includes(scheduleTarget)).availability;
}

module.exports = getSchedule;
