import handlers from "../scripts/eventHanlder"
import HTMLBuilder from "../scripts/HTMLBuilder"


const interestForm = {
    newInterestsForm: () => {
        let interestsFrag = document.createDocumentFragment()
        const interestsName = HTMLBuilder.createElementWithText("label", "Name: ", undefined);
        const interestsNameInput = HTMLBuilder.createElementWithText("input", undefined, "nameInput");
        const interestsDecLabal = HTMLBuilder.createElementWithText("label", "Description: ", undefined);
        const interestsDecInput = HTMLBuilder.createElementWithText("input", undefined, "decInput");
        const interestsCostLabel = HTMLBuilder.createElementWithText("label", "Cost: ", undefined);
        const interestsCostinput = HTMLBuilder.createElementWithText("input", undefined, "costInput");
        const dropDownLabel = HTMLBuilder.createElementWithText("label", "Location: ")
        const dropDown = HTMLBuilder.createElementWithText("select", undefined);
        const option1 = HTMLBuilder.createElementWithText("option", "Buenos Aires", "location-- 1");
        const option2 = HTMLBuilder.createElementWithText("option", "Rio de Janeiro", "location-- 2")
        const option3 = HTMLBuilder.createElementWithText("option", "Santiago", "location-- 3")
        dropDown.appendChild(option1)
        dropDown.appendChild(option2)
        dropDown.appendChild(option3)
        const submitButton = HTMLBuilder.createElementWithText("button", "Submit New Interests", "submitInterests");
        submitButton.addEventListener("click", handlers.createInterest)
        interestsFrag.appendChild(interestsName)
        interestsFrag.appendChild(interestsNameInput)
        interestsFrag.appendChild(interestsDecLabal)
        interestsFrag.appendChild(interestsDecInput)
        interestsFrag.appendChild(interestsCostLabel)
        interestsFrag.appendChild(interestsCostinput)
        interestsFrag.appendChild(dropDownLabel)
        interestsFrag.appendChild(dropDown)
        interestsFrag.appendChild(submitButton)
        return interestsFrag
    },
    newInterestObj:  (name , description, cost) => {
        return {
            Name: name,
            Description: description,
            Cost: cost
        }
    }
}
export default interestForm