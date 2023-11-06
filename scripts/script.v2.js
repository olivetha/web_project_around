const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const form = document.querySelector(".popup__form");
const inputName = document.querySelector(".form__input_name");
const inputAbout = document.querySelector(".form__input_about");

editButton.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add("popup_opened");
});

buttonClose.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.remove("popup_opened");
}
form.addEventListener("submit", handleProfileFormSubmit);

function addCard(cardData) {
  const templateCard = document.querySelector("#cards").content;
  const cardElement = templateCard.cloneNode(true);

  const nameElement = cardElement.querySelector(".elements__description");
  nameElement.textContent = cardData.name;

  const imageElement = cardElement.querySelector(".elements__card-image");
  imageElement.addEventListener("click", () => {
    const popupImageElement = document.querySelector(".popup__image");
    popupImageElement.src = cardData.link;
    popupImageElement.alt = cardData.name;
    popup.classList.add("popup_opened");
  });

  imageElement.src = cardData.link;
  imageElement.alt = cardData.name;

  const cardContainer = document.querySelector(".elements");
  cardContainer.prepend(cardElement);
}

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

initialCards.forEach((addCard) => {
  const cardElement = addCard(cardData);
  cardsContainer.append(cardElement);
});
