const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.some((specie) => animal === specie.name
  && specie.residents.every((ages) => ages.age >= age));
}

module.exports = getAnimalsOlderThan;
