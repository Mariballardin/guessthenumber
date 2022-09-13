const { handle } = require("express/lib/application")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random()*10)
let xAttempts = 1

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e){
  if(e.key == 'Enter') {
    handleResetClick()

  }
})

function handleTryClick(event) {
event.preventDefault()

const inputNumber = document.querySelector('#inputNumber')


// console.log(inputNumber.value)

if(Number(inputNumber.value) == randomNumber) {
  toggleScreen()
  

  screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas!`
 
}
inputNumber.value = ""
xAttempts++

}


// let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10.")



// let xAttempts = 1

// while(Number(result) != randomNumber) {
//   result = prompt("Você errou! Tente outra vez.")
//   xAttempts++
// }
// if (randomNumber >1) {

// alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você acertou em apenas ${xAttempts} tentativas!`)
// }  
// else {

//   alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você acertou em apenas 1 tentativa!`)
// }



function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")

}

function handleResetClick(){
  toggleScreen()
  xAttempts = 1
}