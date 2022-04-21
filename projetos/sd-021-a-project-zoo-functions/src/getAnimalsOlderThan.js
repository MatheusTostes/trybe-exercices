const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.filter((specie) => animal === specie.name);
  // console.log(animals);
  const ageTest = animals[0].residents.every((animalItem) => animalItem.age >= age);

  return ageTest;
}

getAnimalsOlderThan('otters', 9);

module.exports = getAnimalsOlderThan;
