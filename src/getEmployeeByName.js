const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) return employee;
    return null;
  });
}

module.exports = getEmployeeByName;
