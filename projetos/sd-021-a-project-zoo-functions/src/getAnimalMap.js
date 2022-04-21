const data = require('../data/zoo_data');

const getAllAnimals = (species) => {
  const northEast = species.filter((specie) => specie.location === 'NE').map((ani) => ani.name);
  const northWest = species.filter((specie) => specie.location === 'NW').map((ani) => ani.name);
  const southEast = species.filter((specie) => specie.location === 'SE').map((ani) => ani.name);
  const southWest = species.filter((specie) => specie.location === 'SW').map((ani) => ani.name);
  return { NE: northEast, NW: northWest, SE: southEast, SW: southWest };
};

function getAnimalMap(options) {
  const { species } = data;
  if (typeof options === 'undefined') {
    const animalsLocation = getAllAnimals(species);
    return animalsLocation;
  }
}

getAnimalMap();

module.exports = getAnimalMap;
