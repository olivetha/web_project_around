const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const popup = document.querySelector(".popup_profile");
const buttonClose = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const profileForm = document.querySelector(".popup__form_profile");
const inputName = document.querySelector(".popup__input_name");
const inputAbout = document.querySelector(".popup__input_about");
const inputTitle = document.querySelector(".popup__input_title");
const inputImage = document.querySelector(".popup__input_image");
const popupAdd = document.querySelector(".popup_add");
const closeAdd = popupAdd.querySelector(".popup__close-button");
const fullImage = document.querySelector(".popup_full");
const closeImage = fullImage.querySelector(".popup__close-button");

editButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add("popup_opened");
});

buttonClose.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.remove("popup_opened");
});

addButton.addEventListener("click", () => {
  inputTitle.value = "";
  inputImage.value = "";
  popupAdd.classList.add("popup_opened");
});

closeAdd.addEventListener("click", () => {
  popupAdd.classList.remove("popup_opened");
});

closeImage.addEventListener("click", () => {
  fullImage.classList.remove("popup_opened");
});

document.addEventListener("keydown", function escapePopup(evt) {
  if (evt.key === "Escape") {
    popup.classList.remove("popup_opened");
    popupAdd.classList.remove("popup_opened");
    fullImage.classList.remove("popup_opened");
  }
  evt.target.removeEventListener("keydown", escapePopup);
});

function onClick(evt) {
  evt.target.classList.remove("popup_opened");
}
popup.addEventListener("click", onClick);
fullImage.addEventListener("click", onClick);
popupAdd.addEventListener("click", onClick);
