/*Constants --------------------------------*/
const scoreSound = new Audio("./audio/audio_score.wav")
const missedSound = new Audio("./audio/audio_missed.wav")
// missedSound credit = UHOH.wav by xtrgamr -- https://freesound.org/s/259172/ -- License: Attribution 4.0

/*Variables (state) ----------------------------*/
let score = 0
let timer = 6

/*Cached Element References ------------------------*/
const boxEls = document.querySelectorAll(".box")
const scoreEl = document.querySelector("#score")
const timerEl = document.querySelector("#timer")

/*Functions --------------------------------*/

const showCat = () => {
  if (timer === 0) {
    return
  } else {
    //this function adds the cat in a random spot and removes it - only once
    const getRandomBox = Math.floor(Math.random() * boxEls.length)
    boxEls[getRandomBox].classList.add("show")
    const duration = Math.random() * 500 + 500
    setTimeout(() => {
      boxEls[getRandomBox].classList.remove("show")
    }, duration)
  }
}

const loopShowCat = () => {
  //this function loops the above function (showCat)
  setInterval(() => {
    showCat()
  }, 500 + 500)
}
loopShowCat()

const handleClick = (boxEl) => {
  if (timer === 0) {
    return
  } else if (boxEl.classList.contains("show")) {
    score = score + 1
    scoreSound.play()
    console.log("Boop! +1")
  } else {
    score = score - 1
    missedSound.play()
    console.log("Missed! -1")
  }
  scoreEl.textContent = score
  console.log(score)
}

const countDown = () => {
  setInterval(() => {
    if (timer !== 0) {
      timer = timer - 1
      timerEl.textContent = timer
      console.log(timer)
    } else {
      return (timerEl.textContent = "Time's up!")
    }
  }, 1000)
}
countDown()

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
