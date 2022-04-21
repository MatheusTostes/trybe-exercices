const colorsList = ['red', 'blue', 'green', 'purple', 'yellow', 'pink', 'brown', 'grey', 'orange']

const randomColor = colorsList[Math.floor(Math.random() * colorsList.length)];

let colorSelected = 'black';

function colorSelect(event) {
  let clearSelect = document.getElementsByClassName('color');
  for (let i of clearSelect) {
    i.classList.remove('selected');
    // console.log(i.classList);
  }

  let element = event.target;
  // console.log(element.classList);
  element.classList.add('selected');

  if (element.classList.contains('black')) {
    colorSelected = 'black';
  } else if (element.classList.contains('red')) {
    colorSelected = 'red';
  } else if (element.classList.contains('blue')) {
    colorSelected = 'blue';
  } else if (element.classList.contains('green')) {
    colorSelected = 'green';
  }
}

function pixelClick(event) {
  let element = event.target;
  // alert(event.target)

  element.classList.remove('black', 'red', 'blue', 'green');
  element.classList.add(colorSelected);

  // console.log(element.classList);
}

function clearBoard() {
  let clearSelect = document.getElementsByClassName('pixel');
  for (let i of clearSelect) {
    i.classList = 'pixel';
    // console.log(i.classList);
  }
}

function resizeBoard() {
    let n = document.getElementById("board-size").value;

    if (n < 1) {
        alert("Board inválido!")
        n = 5
    } else if (n < 5){
        n = 5
    } else if (n > 50){
        n = 50
    }

    console.log("teste");

    document.getElementById('pixel-board').innerHTML = ""
    
    for (let i=0; i<n; i++) {
        let newRow = document.createElement('ul')
        newRow.classList.add("pixelList")
        
        for (let k=0; k<n; k++) {
            let newCol = document.createElement('li')
            newRow.classList.add("pixel")
            newRow.appendChild(newCol)
        }

        document.getElementById("pixel-board").appendChild(newRow)
    }
}
