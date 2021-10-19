const { species } = require('../data/zoo_data');

const locations = species.reduce((acc, location) => (!acc.includes(location.location)
  ? acc.concat(location.location) : acc), []);

function getAnimalsResidents(speciesLocale, options) {
  const { sorted = false, sex = undefined } = options;
  return speciesLocale.map((specie) => {
    const getAnimalsLocale = {};
    const getAnimalsName = specie.residents.filter((resident) => (
      sex ? resident.sex === sex : true)).map((resident) => resident.name);
    console.log(getAnimalsName);
    if (sorted) getAnimalsName.sort();
    getAnimalsLocale[specie.name] = getAnimalsName;
    return getAnimalsLocale;
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

module.exports = getAnimalMap;
