console.log("All work and no play makes Jack write DULL CODE.");
/* 
 - Creates and adds new text cards, then renders to DOM
 - Checks if text is blank
 - Can delete individual cards
*/

const deleteCard = () => {
    // get card Id from event
    let cardId = event.target.id.split("--")[1];
    let cardToDelete = document.getElementById(`card--${cardId}`);
    // get current card list
    let cardList = document.getElementById("card-container")
    cardList.removeChild(cardToDelete);
}

const renderCardToDom = (card) => {
    let cardList = document.getElementById("card-container")
    cardList.appendChild(card);
}

// iterate length of current card list and create new id
const getNewIdNumber = () => {
    let cardArrayLength = document.getElementsByClassName("card").length;
    return cardArrayLength + 1 // prevent 0-indexed card id list
}

const createCardContainer = (text) => {
    const cardContainer = document.createElement("card")
    cardContainer.className = "card";
    let idNumber = getNewIdNumber();
    cardContainer.id = `card--${idNumber}`;

    const textElement = document.createElement("p");
    textElement.textContent = text;

    const deleteElement = document.createElement("button")
    deleteElement.id = `delete--${idNumber}`;
    deleteElement.textContent = "Delete";
    deleteElement.addEventListener("click", deleteCard);

    // add items to card
    cardContainer.appendChild(textElement);
    cardContainer.appendChild(deleteElement);
    return cardContainer
}

const createCardHandler = () => {
    let cardText = document.getElementById("cardText-entry").value;
    
    // prevent empty card creation
    if (cardText){
        let cardHtml = createCardContainer(cardText);
        renderCardToDom(cardHtml);
    }
}

document.querySelector("#create-button").addEventListener("click", createCardHandler);

// clear current contents of textbox
const clearTextArea = () => { document.querySelector("#cardText-entry").value = ""; }
// clear content event listener
document.querySelector("#clear-button").addEventListener("click", clearTextArea);