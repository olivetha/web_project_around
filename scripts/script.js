const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const popup = document.querySelector(".popup_profile");
const buttonClose = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const form = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input_name");
const inputAbout = document.querySelector(".popup__input_about");
const cardsContainer = document.querySelector(".elements__container");
const inputTitle = document.querySelector(".popup__input_title");
const inputImage = document.querySelector(".popup__input_image");
const popupAdd = document.querySelector(".popup_add");
const closeAdd = popupAdd.querySelector(".popup__close-button");
const addForm = document.querySelector(".form-add");
const fullImage = document.querySelector(".popup_full");

editButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add("popup_opened");
});

buttonClose.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.remove("popup_opened");
}
form.addEventListener("submit", handleProfileFormSubmit);

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
  const cardElement = templateCard.cloneNode(true);
  const cardImage = cardElement.querySelector(".elements__card-image");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  const cardDescription = cardElement.querySelector(".elements__description");
  cardDescription.textContent = card.name;

  cardsContainer.prepend(cardElement);

  const trashButton = document.querySelector("#trash");
  trashButton.addEventListener("click", () => {
    const removeElement = trashButton.closest(".elements__card");
    removeElement.remove();
  });

  const likeButton = document.querySelector("#like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("elements__like-button_click");
  });

  cardImage.addEventListener("click", () => {
    fullImage.classList.add("popup_opened");
    const imageElement = document.querySelector(".popup__image-large");
    imageElement.src = card.link;
    imageElement.alt = card.name;
    const nameElement = document.querySelector(".popup__sub-text");
    nameElement.textContent = card.name;
    const closeImage = document.querySelector("#close-image");
    closeImage.addEventListener("click", () => {
      fullImage.classList.remove("popup_opened");
    });
  });
  return cardElement;
}

initialCards.forEach((card) => {
  const cardElement = addCard(card);
});

addButton.addEventListener("click", () => {
  inputTitle.value = "";
  inputImage.value = "";
  popupAdd.classList.add("popup_opened");
});

closeAdd.addEventListener("click", () => {
  popupAdd.classList.remove("popup_opened");
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: inputTitle.value,
    link: inputImage.value,
  };
  addCard(card);
  popupAdd.classList.remove("popup_opened");
  document.getElementById("add-card").reset();
}
addForm.addEventListener("submit", handleCardFormSubmit);

function escapePopup(evt) {
  if (evt.key === "Escape") {
    popup.classList.remove("popup_opened");
    popupAdd.classList.remove("popup_opened");
    fullImage.classList.remove("popup_opened");
  }
  evt.target.removeEventListener("keydown", escapePopup);
}
document.addEventListener("keydown", escapePopup);

function onClick(evt) {
  evt.target.classList.remove("popup_opened");
}
popup.addEventListener("click", onClick);
fullImage.addEventListener("click", onClick);
popupAdd.addEventListener("click", onClick);
