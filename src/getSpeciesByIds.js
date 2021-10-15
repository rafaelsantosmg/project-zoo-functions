const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((idIds) => species
    .reduce((acc, current) => (current.id === idIds ? current : acc)));
}

module.exports = getSpeciesByIds;
