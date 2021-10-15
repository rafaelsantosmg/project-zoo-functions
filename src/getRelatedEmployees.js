const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((acc, current) => (current.managers.includes(managerId)
    ? acc.concat(`${current.firstName} ${current.lastName}`) : acc), []);
}

module.exports = { isManager, getRelatedEmployees };
