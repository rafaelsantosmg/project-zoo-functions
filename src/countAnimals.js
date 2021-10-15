const data = require('../data/zoo_data');

const { species } = data;

const countResidents = (resident) => {
  const residents = species.reduce((acc, specie) =>
    (specie.name === resident.specie ? specie.residents : acc));
  if (!resident.sex) return residents.length;
  return residents.reduce((acc, currentSpecie) => (
    currentSpecie.sex === resident.sex ? acc + 1 : acc), 0);
};

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return species.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  return countResidents(animal);
}

countAnimals({ specie: 'bears', sex: 'male' });

module.exports = countAnimals;
