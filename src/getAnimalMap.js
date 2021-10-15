const { species } = require('../data/zoo_data');

const locations = species.reduce((acc, location) => (!acc.includes(location.location)
  ? acc.concat(location.location) : acc), []);

function getAnimalsResidents(speciesLocale, options) {
  const { sorted = false, sex = null } = options;
  return speciesLocale.map((specie) => {
    const animalsObj = {};
    const animalsName = specie.residents
      .filter((resident) => (sex ? resident.sex === sex : true))
      .map((resident) => resident.name);
    if (sorted) animalsName.sort();
    animalsObj[specie.name] = animalsName;
    return animalsObj;
  });
}

function getAnimalMap(options = {}) {
  const { includeNames = false } = options;
  return locations.reduce((acc, region) => {
    const speciesLocale = species.filter((specie) => specie.location === region);
    const speciesName = speciesLocale.map((specie) => specie.name);
    acc[region] = includeNames ? getAnimalsResidents(speciesLocale, options) : speciesName;
    return acc;
  }, {});
}

console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
