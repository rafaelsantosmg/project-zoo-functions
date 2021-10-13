const data = require('../data/zoo_data');

const { prices } = data;

const entrantsteste = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

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
