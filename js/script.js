/*Constants --------------------------------*/
const startSound = new Audio("./audio/audio_start.ogg")
const scoreSound = new Audio("./audio/audio_score.wav")
const missedSound = new Audio("./audio/audio_missed.wav")
const gameMusic = new Audio("./audio/audio_music.wav")

/*Variables (state) ----------------------------*/

let score = 0
let timer = 21
gameMusic.loop = false
gameMusic.play()

/*Cached Element References ------------------------*/

const boxEls = document.querySelectorAll(".box")
const scoreEl = document.querySelector("#score")
const timerEl = document.querySelector("#timer")
const resetBtn = document.querySelector("#reset")

/*Functions --------------------------------*/

const showCat = () => {
  if (timer === 0) {
    return
  } else {
    // This function adds a cat in a random box
    const randomIndex = Math.floor(Math.random() * boxEls.length)
    boxEls[randomIndex].classList.add("show")
    // This random duration decides for how long the cat will appear in the box
    const duration = Math.random() * 300 + 700
    // This function will remove the cat from the box after the assigned "duration"
    setTimeout(() => {
      boxEls[randomIndex].classList.remove("show")
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
      timerEl.textContent = `Time left: ${timer} seconds`
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
  gameMusic.play()
}

/*Event Listeners -----------------------------*/

boxEls.forEach((boxEl) => {
  boxEl.addEventListener("click", () => handleClick(boxEl))
})

document.addEventListener("keydown", (event) => {
  if (event.key === "S" || event.key === "s") {
    handleClick(boxEls[0])
  }
  if (event.key === "D" || event.key === "d") {
    handleClick(boxEls[1])
  }
  if (event.key === "F" || event.key === "f") {
    handleClick(boxEls[2])
  }
  if (event.key === "J" || event.key === "j") {
    handleClick(boxEls[3])
  }
  if (event.key === "K" || event.key === "k") {
    handleClick(boxEls[4])
  }
  if (event.key === "L" || event.key === "l") {
    handleClick(boxEls[5])
  }
})

// My reset buttons

resetBtn.addEventListener("click", reset)
document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    reset()
  }
})
