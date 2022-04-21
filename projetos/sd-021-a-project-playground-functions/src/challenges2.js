// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (!(array.length === 11)) {
    return 'Array com tamanho incorreto.';
  }

  let result = '';
  let number = [];

  for (i of array) {
    number.push(i);
  }

  let arraySorted = array.sort();
  arraySorted.push('', '');

  for (let r = 0; r < arraySorted.length - 3; r++) {
    if (arraySorted[r] === arraySorted[r + 2]) {
      console.log(
        'não é possível gerar um número de telefone com esses valores'
      );
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (arraySorted[r] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (arraySorted[r] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  number.splice(0, 0, '(');
  number.splice(3, 0, ')');
  number.splice(4, 0, ' ');
  number.splice(10, 0, '-');

  for (i of number) {
    result += i.toString();
  }

  console.log(result);
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let lines = [lineA, lineB, lineC, lineA, lineB];

  for (i in lines) {
    lines[i] = (lines[i] ** 2) ** (1 / 2);
  }

  for (let i = 0; i < lines.length - 2; i++) {
    if (lines[i] >= lines[i + 1] + lines[i + 2]) {
      console.log(`${lines[i]} é maior ou igual a soma das outras linhas`);
      return false;
    } else if (lines[i] < ((lines[i + 1] - lines[i + 2]) ** 2) ** (1 / 2)) {
      return false;
    } else {
      return true;
    }
  }
}

// Desafio 13
function hydrate(text) {
  // seu código aqui
  let numbers = '1234567890';
  let quantity = [];
  for (i of text) {
    if (numbers.includes(i)) {
      quantity.push(i);
    }
  }

  let count = 0;

  for (k of quantity) {
    count += parseInt(k);
  }

  if (count > 1) {
    return `${count} copos de água`;
  } else {
    return `${count} copo de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
