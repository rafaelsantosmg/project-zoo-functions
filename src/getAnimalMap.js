const data = require('../data/zoo_data');

const { species } = data;

const locations = species.reduce((acc, location) => (!acc.includes(location.location)
  ? acc.concat(location.location) : acc), []);

const getNameAnimals = species.reduce((acc, specie) => specie.residents
  .filter((resident) => acc.concat(resident.name)), []);

console.log(getNameAnimals);

const arrayAnimalsLocale = () => locations.reduce((acc, locale) => {
  acc[locale] = species.reduce((accSpecie, specie) => (specie.location === locale
    ? accSpecie.concat(specie.name) : accSpecie), []);
  return acc;
}, {});

// const arrayNameAminals = (options) => locations.reduce((acc, locale) => {
//   acc[locale] = Ob reduce((accSpecie, specie) => (options.includeNames === true
//     ? accSpecie.concat(specie.name) : accSpecie), []);
//   return acc;
// }, {});

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return arrayAnimalsLocale();
  if (options.sex === 'female' || (options.sex === 'female'
    && options.sorted === true)) return arrayAnimalsLocale();
  // return arrayNameAminals(options);
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
