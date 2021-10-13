const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((idIds) => species
    .reduce((acc, current) => (current.id === idIds ? current : acc)));
}

module.exports = getSpeciesByIds;
