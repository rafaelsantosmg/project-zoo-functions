const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.some((specie) => animal === specie.name
  && specie.residents.every((ages) => ages.age >= age));
}

module.exports = getAnimalsOlderThan;
