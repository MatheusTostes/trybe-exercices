const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  const isManagerTrue = employees.some((employee) => employee.managers.includes(id));
  return isManagerTrue;
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  const managerTest = isManager(managerId);

  if (!managerTest) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const subordinates = employees.filter((worker) => worker.managers.includes(managerId));
  const subordinatesNames = subordinates.map((sub) => `${sub.firstName} ${sub.lastName}`);
  return subordinatesNames;
}

getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };
