import place from "../scripts/place"
import HTMLBuilder from "../scripts/HTMLBuilder";
import apiCall from "../scripts/apiManager"


const handlers = {
    createInterest: () => {
        const name = document.getElementById("nameInput").value;
        const decscription = document.getElementById("decInput").value;
        const cost = document.getElementById("costInput").value;
        const divContainer = document.querySelector("#display-container")
        HTMLBuilder.clearContainer(divContainer)
        apiCall.postInterest(place.newInterestObj(name, decscription, cost))
    }
}
export default handlers