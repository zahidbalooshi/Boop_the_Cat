/*Constants --------------------------------*/
let box
let score = 0
/*Variables (state) ----------------------------*/

/*Cached Element References ------------------------*/
const boxEls = document.querySelectorAll(".box")
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
