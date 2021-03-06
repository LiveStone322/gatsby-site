import "./src/styles/global.scss"
import "bootstrap/dist/css/bootstrap-grid.css"
import Scroll, { scroller } from "react-scroll"

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty("--vh", `${vh}px`)

Scroll?.Events?.scrollEvent.register("begin", function (to, element) {
  console.log("begin", to, element)
})

document.addEventListener("scroll", function (e) {
  console.log(e)
})
