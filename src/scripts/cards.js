console.log("All work and no play makes Jack write DULL CODE.");

/* 
Create an HTML page that contains a text area and a button labeled Create.
When the user enters in text into the text area and then clicks the create button, 
use a factory function that creates a new DOM component that has a border, 
and includes it's own delete button.
Insert that new component into the DOM.
When the user clicks the Delete button, the containing card, and no other cards, 
should then be removed from the DOM. Not just made invisible, actually removed from the DOM. 
*/
/* 
    const h1Element = document.createElement("h1")
    h1Element.textContent = personName
    console.log("h1", h1Element)
    h1Element.addEventListener("mouseover", () => console.log("H1 was clicked"))

    const divElement = document.createElement("div")
    divElement.textContent = address
    console.log("div", divElement)

    const sectionElement = document.createElement("section")
    sectionElement.appendChild(h1Element)
    sectionElement.appendChild(divElement)
    console.log("section", sectionElement)

    container.appendChild(sectionElement)   
*/

const deleteCard = () => {
    console.log("Delete card clicked", event.target);
}

const renderCardToDom = (card) => {
    console.log("This card will render to DOM", card);
    // TODO: get container element by id
    let cardList = document.getElementById("card-container")
    console.log(cardList);
    // TODO: write card to DOM
    cardList.appendChild(card);
}

const getNewIdNumber = () => {
    let cardArrayLength = document.getElementsByClassName("card").length;
    return cardArrayLength + 1
}

const createCardContainer = (text) => {
    // console.log(text)
    const cardContainer = document.createElement("card")
    cardContainer.className = "card";
    // TODO: iterate length of current card list and create new id
    // console.log(getNewIdNumber());
    let idNumber = getNewIdNumber();
    cardContainer.id = `card--${idNumber}`;
    // console.log(cardContainer);
    const textElement = document.createElement("p");
    textElement.textContent = text;
    // console.log(textElement);
    // TODO: add 'delete' button into card
    const deleteElement = document.createElement("button")
    deleteElement.id = `delete--${idNumber}`;
    deleteElement.textContent = "Delete";
    // TODO: add eventListener to delete card
    deleteElement.addEventListener("click", deleteCard);
    // console.log(deleteElement);
    cardContainer.appendChild(textElement);
    cardContainer.appendChild(deleteElement);
    // console.log("cardContainer", cardContainer);
    return cardContainer
}

const createCardHandler = () => {
    let cardText = document.getElementById("cardText-entry").value;
    // console.log(cardText);
    //TODO: add send cardText to createCardContainer function
    let cardHtml = createCardContainer(cardText);
    console.log("cardHtml", cardHtml)
    //TODO: render outputted html to page
    renderCardToDom(cardHtml);
}

document.querySelector("#create-button").addEventListener("click", createCardHandler);