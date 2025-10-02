/*Constants --------------------------------*/
let box
let score = 0
/*Variables (state) ----------------------------*/

/*Cached Element References ------------------------*/
const boxEls = document.querySelectorAll(".box")
// const boxIndex = document.querySelectorAll("#id")
const scoreEl = document.querySelector("#score")

/*Functions --------------------------------*/

const handleClick = () => {
  score = score + 10
  scoreEl.textContent = score
  console.log("BOOP WORKS!")
  console.log(score)
}

/*Event Listeners -----------------------------*/

boxEls.forEach((boxEl) => {
  boxEl.addEventListener("click", handleClick)
})

document.addEventListener("keydown", (event) => {
  if (event.key === "S" || event.key === "s") {
    handleClick(boxEls[0])
    console.log("S works")
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "D" || event.key === "d") {
    handleClick(boxEls[1])
    console.log("D works")
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "F" || event.key === "f") {
    handleClick(boxEls[2])
    console.log("F works")
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "J" || event.key === "j") {
    handleClick(boxEls[3])
    console.log("J works")
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "K" || event.key === "k") {
    handleClick(boxEls[4])
    console.log("K works")
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "L" || event.key === "l") {
    handleClick(boxEls[5])
    console.log("L works")
  }
})
