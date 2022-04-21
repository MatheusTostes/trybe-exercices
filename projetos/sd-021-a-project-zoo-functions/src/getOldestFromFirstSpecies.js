const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((worker) => worker.id === id);
  const firstSpecieId = employee.responsibleFor[0];
  const firstSpecie = species.find((specie) => specie.id === firstSpecieId);
  const olderAnimal = firstSpecie.residents.reduce((aniPrev, aniActual) => {
    if (aniActual.age > aniPrev.age) {
      return aniActual;
    }
    return aniPrev;
  });

  console.log(Object.values(olderAnimal));
  return Object.values(olderAnimal);
}

// getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2');

module.exports = getOldestFromFirstSpecies;
