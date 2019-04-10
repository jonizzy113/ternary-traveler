


const HTMLBuilder = {
    createElementWithText(element, text, id) {
        const newElement = document.createElement(element);
        if (text) {
            newElement.textContent = text;
        }
        if (id) {
            newElement.id = id;
        }
        return newElement;
    },
    clearContainer(elementToClear) {
        while (elementToClear.firstChild) {
            elementToClear.removeChild(elementToClear.firstChild);
        }
    },
}
export default HTMLBuilder