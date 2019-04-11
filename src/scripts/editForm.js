import HTMLbuilder from "../scripts/HTMLBuilder"
import HTMLBuilder from "../scripts/HTMLBuilder";


const edit = {
    editForm: () => {
        let editFrag = document.createDocumentFragment()
        const editCost = HTMLBuilder.createElementWithText("label", "Cost: ")
        const editCostInput = HTMLBuilder.createElementWithText("input", undefined, "editCostInput")
        const editReview = HTMLBuilder.createElementWithText("label", "Review: ")
        const editReviewInput = HTMLBuilder.createElementWithText("input", undefined, "editReviewInput")
        const saveButton = HTMLbuilder.createElementWithText("button", "Save Button", "saveButton")
        editFrag.appendChild(editCost)
        editFrag.appendChild(editCostInput)
        editFrag.appendChild(editReview)
        editFrag.appendChild(editReviewInput)
        editFrag.appendChild(saveButton)
        return editFrag
    }
}
export default edit