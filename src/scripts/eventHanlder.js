import place from "../scripts/place"
import HTMLBuilder from "../scripts/HTMLBuilder";
import apiCall from "../scripts/apiManager";
import newInterestForm from "../scripts/newInterestsForm"


const handlers = {
    createInterest: () => {
        const name = document.getElementById("nameInput").value;
        const decscription = document.getElementById("decInput").value;
        const cost = document.getElementById("costInput").value;
        const divContainer = document.querySelector("#display-container")
        HTMLBuilder.clearContainer(divContainer)
        apiCall.postInterest(newInterestForm.newInterestObj(name, decscription, cost))
    },
    editInterest: () => {
        const costChange = document.getElementById("editCostInput").value;
        const reviewChange = document.getElementById("editReviewInput").value;
        const divContainer = document.querySelector("#display-container")
        HTMLBuilder.clearContainer(divContainer)
    }
}
export default handlers