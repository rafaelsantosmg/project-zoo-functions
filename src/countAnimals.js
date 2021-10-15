const { species } = require('../data/zoo_data');

const countResidents = (resident) => {
  const residents = species.reduce((acc, specie) =>
    (specie.name === resident.specie ? specie.residents : acc));
  if (!resident.sex) return residents.length;
  return residents.reduce((acc, currentSpecie) => (
    currentSpecie.sex === resident.sex ? acc + 1 : acc), 0);
};

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  return countResidents(animal);
}

module.exports = countAnimals;
