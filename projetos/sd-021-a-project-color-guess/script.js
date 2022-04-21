let colors = [] 
// let colorSelected = ""

function generateColor() {
    document.getElementById("circles").innerHTML = ""
    let answer = document.getElementById("answer")
    let score = document.getElementById("score").innerText
    let n = 6

    for(let i = 0; i<n; i++) {
        let randomNumR = Math.floor(Math.random() * 256);
        let randomNumG = Math.floor(Math.random() * 256);
        let randomNumB = Math.floor(Math.random() * 256);
        let colorBall = `${randomNumR}, ${randomNumG}, ${randomNumB}`
        // let colorBall = `rgb (${randomNumR}, ${randomNumG}, ${randomNumB})`
    
        let element = document.createElement("div")
        // element.style.color = colorBall
        element.classList.add("ball")
        element.style.backgroundColor = "rgb("+colorBall+")"
        // element.onclick = "verifyColor(event)"
        element.addEventListener('click', function verifyColor (event) {
            let element = event.target
            let color = element.style.backgroundColor
            let colorSelectedStyle = `rgb(${colorSelected})`
            if (color === colorSelectedStyle) {
                answer.innerText = "Acertou!"
                score =+ 3
                document.getElementById("score").innerText = score
                console.log(color);
                return
            } else {
                answer.innerText = "Errou! Tente novamente!"
                console.log(color);
                console.log(colorSelectedStyle);
            }
        })
        // element.style.backgroundColor = colorBall
    
        let circles = document.getElementById("circles")
        circles.appendChild(element)

        colors.push(colorBall)
    }

    console.log(colors);

    let randomIndexColor = Math.floor(Math.random() * 6);
    let colorSelected = colors[randomIndexColor]

    document.getElementById("rgb-color").innerText = colorSelected
    
    return colorSelected
}

function reloadPage() {
    generateColor()
}
