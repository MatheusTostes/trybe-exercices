



function loadData () {
  let storage = { ... localStorage}
  
  let listaTarefas = document.getElementById('lista-tarefas');
  // console.log(listaTarefas);
  for (let i in storage) {
    i.classList
    let newRow = document.createElement('li');
    newRow.classList = i.value;
    newRow.innerText = i;
    // console.log(newRow);
    listaTarefas.appendChild(newRow);
  }
}

// let storage = JSON.parse(localStorage.getItem(data));
// localStorage.setItem('data',JSON.stringify(data))
// localStorage.clear();
// localStorage.removeItem(key);


function criarTarefa() {
  let tarefa = document.getElementById('texto-tarefa');
  localStorage.setItem(tarefa.value, tarefa.classList)

  let listaTarefas = document.getElementById('lista-tarefas');

  let newRow = document.createElement('li');
  newRow.classList.add('item');
  newRow.innerText = tarefa.value;
  listaTarefas.appendChild(newRow);

  tarefa.value = '';
  document.getElementById('texto-tarefa').focus();
}

function view(event) {
  let element = event.target;

  let elements = document.getElementsByClassName('item');

  for (let i of elements) {
    i.style.backgroundColor = '';
  }

  element.style.backgroundColor = 'grey';
}

function checked(event) {
  let elementClassList = event.target.classList;

  if (elementClassList.contains('completed')) {
    elementClassList.remove('completed');
  } else {
    elementClassList.add('completed');
    // console.log(elementClassList);
  }
}

function clearList() {
  let elements = document.getElementById('lista-tarefas');

  elements.innerHTML = '';
}

function clearCompleted() {
  let elements = document.getElementsByClassName('item');

  for (let i of elements) {
    console.log(elements);
    if (i.classList.contains('completed')) {
      i.remove();
      clearCompleted();
    }
  }
}
