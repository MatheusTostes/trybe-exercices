const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const employeeFilter = (emp) => emp.firstName === employeeName || emp.lastName === employeeName;
  const employesWithName = employees.filter(employeeFilter);
  const obj = {};
  return employesWithName.length === 0 ? obj : employesWithName[0];
}

getEmployeeByName();

module.exports = getEmployeeByName;
