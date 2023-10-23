const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");

editButton.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add("popup_opened");
});

const buttonClose = document.querySelector(".popup__close-button");

buttonClose.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const form = document.querySelector(".popup__form");
const inputName = document.querySelector(".form__input_name");
const inputAbout = document.querySelector(".form__input_about");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.remove("popup_opened");
}

form.addEventListener("submit", handleProfileFormSubmit);
