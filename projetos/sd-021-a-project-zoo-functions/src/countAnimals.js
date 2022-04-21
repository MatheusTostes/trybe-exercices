const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const animalCount = {};
    data.species.forEach((ani) => {
      animalCount[ani.name] = ani.residents.length;
      return animalCount;
    });
    return animalCount;
  }
  const { specie } = animal;
  const animalFound = data.species.find((ani) => ani.name === specie);
  if (Object.keys(animal).length === 1) {
    return animalFound.residents.length;
  }
  const countSexRequired = animalFound.residents.filter((ani) => ani.sex === 'female');
  return countSexRequired.length;
}

// countAnimals({specie: 'giraffes'})
countAnimals({ specie: 'bears', sex: 'female' });

module.exports = countAnimals;
