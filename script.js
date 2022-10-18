function guessGame() {
  const random = Math.floor(Math.random()*2)+1

let guessName = prompt("Hello, What's your username?", []);
let guess = prompt(`Welcome ${guessName} guess the number generated between from 1 to 2`, [])

if (guess == random) {
  alert(`${guessName} you guessed the right number, Proceed to Next Stage`)
    let newRandom = Math.floor(Math.random()*3) + 1;
    let newGuess = prompt(`Welcome ${guessName} guess another number generated from of 1 to 3`, [])
  if (newGuess == newRandom) {
    alert(`${guessName} you guessed the right number, you win`)
  } else {
    alert("you had a wrong guess")
  }
} else {
  alert("you had a wrong guess")
}
}
guessGame()

