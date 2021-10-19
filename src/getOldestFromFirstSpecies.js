const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeesRessibleId = employees.find((employee) => employee.id === id).responsibleFor;
  return species.reduce((acc, specie) => (employeesRessibleId[0] === specie.id
    ? Object.values(specie.residents.reduce((accResident, resident) => (
      accResident.age > resident.age
        ? accResident : resident))) : acc), 0);
}

module.exports = getOldestFromFirstSpecies;
