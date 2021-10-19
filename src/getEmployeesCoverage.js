const {
  species,
  employees,
} = require('../data/zoo_data');

const getSpecies = (responsible) => species
  .reduce((accSpecie, specie) => (responsible
    .includes(specie.id) ? accSpecie.concat(specie.name) : accSpecie), []);

const getLocations = (responsible) => species
  .reduce((accSpecie, specie) => (responsible
    .includes(specie.id) ? accSpecie.concat(specie.location) : accSpecie), []);

const getAllEmployees = () => employees
  .reduce((acc, employee) => acc.concat({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee.responsibleFor),
    locations: getLocations(employee.responsibleFor),
  }), []);

const getEmployeesByNameId = ({
  name,
  id,
}) => getAllEmployees().find((employee) => {
  const [firstname, lastname] = employee.fullName.split(' ');
  if (firstname === name || lastname === name || employee.id === id) {
    return employee;
  }
  return null;
});

function getEmployeesCoverage(options) {
  if (!options) return getAllEmployees();
  if (!getEmployeesByNameId(options)) {
    throw new Error('Informações inválidas');
  }
  return getEmployeesByNameId(options);
}

module.exports = getEmployeesCoverage;
