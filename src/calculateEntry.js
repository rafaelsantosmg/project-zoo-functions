const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, element) => {
    if (element.age < 18) acc.child += 1;
    if (element.age >= 18 && element.age < 50) acc.adult += 1;
    if (element.age >= 50) acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const entrant = countEntrants(entrants);
  let total = 0;
  total += entrant.child * prices.child;
  total += entrant.adult * prices.adult;
  total += entrant.senior * prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
