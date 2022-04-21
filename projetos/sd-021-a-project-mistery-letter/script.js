const estilo = [`newspaper`, `magazine1`, `magazine2`];
const tamanho = [`medium`, `big`, `reallybig`];
const rotacao = [`rotateleft`, `rotateright`];
const inclinacao = [`skewleft`, `skewright`];

function wordsCounter (wordsList) {
    let counter = wordsList.length
    document.getElementById("carta-contador").innerText = counter
}


function generateLetter() {
  const carta = document.getElementById('carta-gerada');
  carta.innerHTML = '';

  let textMonoSpaces = document
    .getElementById('carta-texto')
    .value.replace(/\s+/g, ' ')
    .trim();
  let wordsList = textMonoSpaces.split(' ');
  wordsCounter (wordsList)

  if (wordsList < 1) {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i of wordsList) {
      let spanWord = document.createElement('span');
      spanWord.innerText = i;

      const estiloRandom = estilo[Math.floor(Math.random() * estilo.length)];
      const tamanhoRandom = tamanho[Math.floor(Math.random() * tamanho.length)];
      const rotacaoRandom = rotacao[Math.floor(Math.random() * rotacao.length)];
      const inclinacaoRandom = inclinacao[Math.floor(Math.random() * inclinacao.length)];

      spanWord.classList.add(estiloRandom, tamanhoRandom, rotacaoRandom, inclinacaoRandom)
    //   spanWord.onclick = 'changeRandomClasses(event)'
        spanWord.addEventListener('click', function changeRandomClasses (event) {
        let element = event.target
        element.classList = ""

        const estiloRandom = estilo[Math.floor(Math.random() * estilo.length)];
        const tamanhoRandom = tamanho[Math.floor(Math.random() * tamanho.length)];
        const rotacaoRandom = rotacao[Math.floor(Math.random() * rotacao.length)];
        const inclinacaoRandom = inclinacao[Math.floor(Math.random() * inclinacao.length)];
        spanWord.classList.add(estiloRandom, tamanhoRandom, rotacaoRandom, inclinacaoRandom)
    });

      carta.appendChild(spanWord);
    }
    wordsList = '';
  }
}

