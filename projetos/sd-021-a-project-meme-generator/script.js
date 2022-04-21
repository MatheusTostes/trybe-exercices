
function setText () {
    let texto = document.getElementById("text-input").value
    document.getElementById("meme-text").innerText = texto
    // console.log(texto);
}

function setImage () {
    let imgSource =  document.getElementById("meme-insert")
    let imgResult = document.getElementById("meme-image")
    let inputImg = URL.createObjectURL(imgSource.files[0]);
    imgResult.src = inputImg;
}

// const inputText = document.getElementById('text-input');
// const memeText = document.getElementById('result');

// const inputHandler = function(e) {
//   memeText.innerHTML = e.target.value;
// }

// inputText.addEventListener('input', inputHandler);
// inputText.addEventListener('propertychange', inputHandler); 