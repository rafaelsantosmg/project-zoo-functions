const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((acc, current) => {
    if (current.managers.includes(managerId)) {
      acc.push(`${current.firstName} ${current.lastName}`);
    }
    return acc;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
