import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  addForm,
  initialCards,
  openFormButton,
  openAddButton,
  cardsContainerSelector,
  inputTitle,
  inputImage,
  popupAdd,
} from "../components/constants.js";

const popupWithImage = new PopupWithImage(".popup_full");
popupWithImage.setEventListeners();

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => createCard(data, "#cards", popupWithImage),
  },
  cardsContainerSelector
);

cardSection.render();

function createCard(data, templateSelector, popupWithImage) {
  const card = new Card(data, templateSelector, popupWithImage);
  return card.getCardElement();
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const cardData = {
    name: inputTitle.value,
    link: inputImage.value,
  };

  const cardElement = createCard(cardData, "#cards");
  cardSection.addItem(cardElement);

  popupAdd.classList.remove("popup_opened");
  document.getElementById("add-card").reset();
}

addForm.addEventListener("submit", handleCardFormSubmit);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
});

const popupProfile = new PopupWithForm(".popup_profile", (formData) => {
  userInfo.setUserInfo(formData);
});
popupProfile.setEventListeners();

openFormButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  popupProfile.setInputValues(currentUserInfo);
  popupProfile.open();
});

const popupAddForm = new PopupWithForm(".popup_add", (formData) => {
  const addCard = {
    name: formData.title,
    link: formData.image,
  };
});
popupAddForm.setEventListeners();
openAddButton.addEventListener("click", () => {
  popupAddForm.open();
});
