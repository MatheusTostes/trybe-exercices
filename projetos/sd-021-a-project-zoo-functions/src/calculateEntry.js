const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const classes = { child: '', adult: '', senior: '' };
  classes.child = entrants.filter((person) => person.age < 18).length;
  classes.adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  classes.senior = entrants.filter((person) => person.age >= 50).length;
  return classes;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }

  const classes = countEntrants(entrants);
  const priceChild = classes.child * data.prices.child;
  const priceAdult = classes.adult * data.prices.adult;
  const priceSenior = classes.senior * data.prices.senior;
  return priceChild + priceAdult + priceSenior;
}

const entrantsTest = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

calculateEntry(entrantsTest);

module.exports = { calculateEntry, countEntrants };
