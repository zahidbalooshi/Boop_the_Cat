/*Constants --------------------------------*/
const startSound = new Audio("./audio/audio_start.ogg")
const scoreSound = new Audio("./audio/audio_score.wav")
const missedSound = new Audio("./audio/audio_missed.wav")
const gameSound = new Audio("./audio/audio_music.wav")

/*Variables (state) ----------------------------*/

let score = 0
let timer = 21

/*Cached Element References ------------------------*/

const boxEls = document.querySelectorAll(".box")
const scoreEl = document.querySelector("#score")
const timerEl = document.querySelector("#timer")
const resetBtn = document.querySelector("#reset")

/*Functions --------------------------------*/

gameSound.play()

const showCat = () => {
  if (timer === 0) {
    return
  } else {
    const getRandomBox = Math.floor(Math.random() * boxEls.length)
    boxEls[getRandomBox].classList.add("show")
    const duration = Math.random() * 500 + 500
    setTimeout(() => {
      boxEls[getRandomBox].classList.remove("show")
    }, duration)
  }
}

const loopShowCat = () => {
  setInterval(() => {
    showCat()
  }, 1000)
}
loopShowCat()

const handleClick = (boxEl) => {
  if (timer === 0) {
    return
  } else if (boxEl.classList.contains("show")) {
    score = score + 1
    scoreSound.play()
  } else {
    score = score - 1
    missedSound.play()
  }
  scoreEl.textContent = score
}

const countDown = () => {
  setInterval(() => {
    if (timer !== 0) {
      timer = timer - 1
      timerEl.textContent = timer
    } else {
      timerEl.textContent = "Time's up!"
    }
  }, 1000)
}
countDown()

const reset = () => {
  timer = 21
  score = 0
  scoreEl.textContent = score
  startSound.play()
  gameSound.play()
}

/*Event Listeners -----------------------------*/

boxEls.forEach((boxEl) => {
  boxEl.addEventListener("click", () => handleClick(boxEl))
})

document.addEventListener("keydown", (event) => {
  if (event.key === "S" || event.key === "s") {
    handleClick(boxEls[0])
    console.log("S for index 0")
  }
  if (event.key === "D" || event.key === "d") {
    handleClick(boxEls[1])
    console.log("D for index 1")
  }
  if (event.key === "F" || event.key === "f") {
    handleClick(boxEls[2])
    console.log("F for index 2")
  }
  if (event.key === "J" || event.key === "j") {
    handleClick(boxEls[3])
    console.log("J for index 3")
  }
  if (event.key === "K" || event.key === "k") {
    handleClick(boxEls[4])
    console.log("K for index 4")
  }
  if (event.key === "L" || event.key === "l") {
    handleClick(boxEls[5])
    console.log("L for index 5")
  }
})

resetBtn.addEventListener("click", reset)
