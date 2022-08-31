const randomNumber = Math.round(Math.random()*10)

let xAttempts = 1

function handleClick(event) {
event.preventDefault()

const inputNumber = document.querySelector('#inputNumber')


// console.log(inputNumber.value)

if(Number(inputNumber.value) == randomNumber) {
  document.querySelector(".screen1").classList.add("hide")
  document.querySelector(".screen2").classList.remove("hide")

  document.querySelector(".screen2 h2").innerText = `Você acertou em ${xAttempts} tentativas!`
 
}

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