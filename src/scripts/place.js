import HTMLBuilder from "../scripts/HTMLBuilder"
import apiCall from "../scripts/apiManager"
import handlers from "../scripts/eventHanlder"
import form from "../scripts/newInterestsForm"


const build = {  
    buildCard: () => {
        const divContainer = document.querySelector("#display-container")
        let fragment = document.createDocumentFragment()
        const divHead = HTMLBuilder.createElementWithText("div", undefined, "divHead")
        const hTag = HTMLBuilder.createElementWithText("h2", "Ternary Traveler" , "hTag")
        divHead.appendChild(hTag)
        const divBody = HTMLBuilder.createElementWithText("div", undefined, "divBody")
        divHead.appendChild(divBody)
        const createInterestsButton = HTMLBuilder.createElementWithText("button", "Create New Interest", "createInterestsButton")
        divHead.appendChild(createInterestsButton)
        createInterestsButton.addEventListener("click", function () {
            HTMLBuilder.clearContainer(divContainer)
            divContainer.appendChild(form.newInterestsForm())
        })
        const pTag = HTMLBuilder.createElementWithText("p", undefined, "pTag")
        divHead.appendChild(pTag)
        fragment.appendChild(divHead)
        divContainer.appendChild(fragment)

    },
    displayInterest: () => {
        let displayInterestDiv = HTMLBuilder.createElementWithText("div", undefined, "displayInterestDiv")
        apiCall.getInterests()
        .then(interestArray => {
            interestArray.forEach(interest => {
                let innerDiv = HTMLBuilder.createElementWithText("div", )
                let nameInterest = HTMLBuilder.createElementWithText("h1",`Name of Interest: ${interest.name}`)
                innerDiv.appendChild(nameInterest)

                let descriptionInterest = HTMLBuilder.createElementWithText("p", `Description of Interest: ${interest.description}`)
                innerDiv.appendChild(descriptionInterest)

                let costInterest = HTMLBuilder.createElementWithText("p",`Cost of Interest: $${interest.cost}`)
                innerDiv.appendChild(costInterest)
                let locatedInterest = HTMLBuilder.createElementWithText("p",`Location of Interest: ${interest.place.name}`)
                innerDiv.appendChild(locatedInterest)

                let editInterestButton = HTMLBuilder.createElementWithText("button", "Edit", `editButton--${interest.id}`)
                innerDiv.appendChild(editInterestButton)
                let deleteInterestButton = HTMLBuilder.createElementWithText("button",  "Delete", `deleteButton--${interest.id}`)
                innerDiv.appendChild(deleteInterestButton)

                displayInterestDiv.appendChild(innerDiv)
            })
        })
        return displayInterestDiv
    }
}

export default build