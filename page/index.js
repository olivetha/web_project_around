import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import {
  addForm,
  initialCards,
  openFormButton,
  openAddButton,
  cardsContainerSelector,
  inputTitle,
  inputImage,
  popupAdd,
} from "./constants.js";

const popupWithImage = new PopupWithImage(".popup_full");
popupWithImage.setEventListeners();

function createCard(data, templateSelector) {
  const card = new Card(data, templateSelector);
  return card.getCardElement();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => createCard(data, "#cards"),
  },
  cardsContainerSelector
);

cardSection.render();

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
  addCard({
    name: formData.title,
    link: formData.image,
  });
});
popupAddForm.setEventListeners();
openAddButton.addEventListener("click", () => {
  popupAddForm.open();
});
