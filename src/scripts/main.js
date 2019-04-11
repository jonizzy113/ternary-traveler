import build from "../scripts/place"

build.buildCard()
let divContainer = document.querySelector("#display-container")
divContainer.appendChild(build.displayInterest())
