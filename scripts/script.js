let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");

editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

let buttonClose = document.querySelector(".popup__close-button");

buttonClose.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let form = document.querySelector(".popup__form");
let inputName = document.querySelector(".form__input_name");
let inputAbout = document.querySelector(".form__input_about");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.remove("popup_opened");
}

form.addEventListener("submit", handleProfileFormSubmit);
