const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getEmployee = (info) => {
  if (Object.keys(info).includes('id')) {
    return employees.find((worker) => worker.id === info.id);
  }

  if (Object.keys(info).includes('name')) {
    return employees
      .find((workr) => workr.firstName.includes(info.name) || workr.lastName.includes(info.name));
  }
};

const getSpecies = (idSpecie) =>
  species
    .filter((specie) => idSpecie.includes(specie.id))
    .map((animal) => animal.name);

const getLocations = (idSpecie) =>
  species
    .filter((specie) => idSpecie.includes(specie.id))
    .map((animal) => animal.location);

const generateEmployee = (employeeObj) => {
  const employee = {};
  const idSpecie = employeeObj.responsibleFor;
  employee.id = employeeObj.id;
  employee.fullName = `${employeeObj.firstName} ${employeeObj.lastName}`;
  employee.species = getSpecies(idSpecie);
  employee.locations = getLocations(idSpecie);
  return employee;
};

function getEmployeesCoverage(info) {
  if (!info) {
    const employeesCoverage = employees
      .map((employeeObj) => generateEmployee(employeeObj));
    return employeesCoverage;
  }

  const employeeObj = getEmployee(info);
  if (!employeeObj) {
    throw new Error('Informações inválidas');
  }

  const employee = generateEmployee(employeeObj);

  console.log(employee);
  return employee;
}

// getEmployeesCoverage({ id:'c1f50212-35a6-4ecd-8223-f835538526c2' })
// getEmployeesCoverage({ name: 'Spry' })
// getEmployeesCoverage({ name: 'Nelson' })
// getEmployeesCoverage()
// getEmployeesCoverage({ name: 'Sprys' })

module.exports = getEmployeesCoverage;
