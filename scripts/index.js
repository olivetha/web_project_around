import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const addForm = document.querySelector(".popup__form_add");

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function addCard(card) {
  const templateCard = document.querySelector("#cards").content;
  const cardInstance = new Card(card, "#cards");
  const cardsContainer = document.querySelector(".elements__container");

  cardsContainer.prepend(cardInstance.getCardElement());

  return cardInstance;
}

initialCards.forEach((card) => {
  addCard(card);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const inputTitle = document.querySelector(".popup__input_title");
  const inputImage = document.querySelector(".popup__input_image");
  const popupAdd = document.querySelector(".popup_add");
  const card = {
    name: inputTitle.value,
    link: inputImage.value,
  };
  addCard(card);
  popupAdd.classList.remove("popup_opened");
  document.getElementById("add-card").reset();
}
addForm.addEventListener("submit", handleCardFormSubmit);
