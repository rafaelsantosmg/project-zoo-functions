const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) child += 1;
    if (element.age >= 18 && element.age < 50) adult += 1;
    if (element.age >= 50) senior += 1;
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const entrant = countEntrants(entrants);
  let total = 0;
  total += entrant.child * prices.child;
  total += entrant.adult * prices.adult;
  total += entrant.senior * prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
