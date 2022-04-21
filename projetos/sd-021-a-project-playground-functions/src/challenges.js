// Desafio 1
function compareTrue(x, y) {
  // seu código aqui
  if (x && y) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  let result = text.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let result = array[array.length - 1] + ', ' + array[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = wins * 3 + ties;
  return result;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let count = 0;
  let higher = array[0];

  for (i of array) {
    if (i > higher) {
      higher = i;
      count = 1;
    } else if (i === higher) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = ((cat1 - mouse) ** 2) ** (1 / 2);
  let cat2Distance = ((cat2 - mouse) ** 2) ** (1 / 2);

  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];

  for (i of array) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fizzBuzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(text) {
  // seu código aqui
  let encoded = '';

  for (i in text) {
    if (text[i] === 'a') {
      encoded += '1';
    } else if (text[i] === 'e') {
      encoded += '2';
    } else if (text[i] === 'i') {
      encoded += '3';
    } else if (text[i] === 'o') {
      encoded += '4';
    } else if (text[i] === 'u') {
      encoded += '5';
    } else {
      encoded += text[i];
    }
  }
  return encoded;
}
function decode(text) {
  // seu código aqui
  let decoded = '';

  for (i in text) {
    if (text[i] === '1') {
      decoded += 'a';
    } else if (text[i] === '2') {
      decoded += 'e';
    } else if (text[i] === '3') {
      decoded += 'i';
    } else if (text[i] === '4') {
      decoded += 'o';
    } else if (text[i] === '5') {
      decoded += 'u';
    } else {
      decoded += text[i];
    }
  }
  return decoded;
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let result = [];
  let arraySorted = array.sort();

  if (array.length > 0) {
    for (i of arraySorted) {
      let techs = {};
      techs['tech'] = i;
      techs['name'] = name;
      result.push(techs);
    }
  } else {
    result = 'Vazio!';
  }

  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
