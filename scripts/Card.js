export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;

    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector(".elements__card-image");
    this._captionElement = this._element.querySelector(
      ".elements__description"
    );

    this._setEventListeners();
    this._updateCard();
  }

  _getTemplate() {
    const template = document.querySelector(this._templateSelector);
    const cardElement = template.content
      .cloneNode(true)
      .querySelector(".elements__card");
    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__like-button")
      .addEventListener("click", () => {
        this._handleLike();
      });

    this._element.querySelector("#trash").addEventListener("click", () => {
      this._handleDelete();
    });

    this._imageElement.addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  _handleLike() {
    const likeButton = this._element.querySelector(".elements__like-button");
    likeButton.classList.toggle("elements__like-button_click");
  }

  _handleDelete() {
    this._element.remove();
  }

  _handleImageClick() {
    const fullImagePopup = document.querySelector(".popup_full");
    const imageElement = fullImagePopup.querySelector(".popup__image-large");
    const nameElement = fullImagePopup.querySelector(".popup__sub-text");

    imageElement.src = this._link;
    imageElement.alt = this._name;
    nameElement.textContent = this._name;

    fullImagePopup.classList.add("popup_opened");
  }

  _updateCard() {
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._captionElement.textContent = this._name;
  }

  getCardElement() {
    return this._element;
  }
}
