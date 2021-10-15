const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((employee) => (employee.firstName === employeeName
    || employee.lastName === employeeName ? employee : null));
}

module.exports = getEmployeeByName;
