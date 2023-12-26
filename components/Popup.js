export default class Popup {
  constructor(popupSelector) {
    console.log("Popup constructor called with selector:", popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    console.log("Handling ESC key event on:", this._popup);
    if (evt.key === "Escape") {
      console.log("apertou o esc");
      this.close();
    }
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close-button");
    const overlay = this._popup.closest(".overlay");

    closeButton.addEventListener("click", () => this.close());
    if (overlay) {
      overlay.addEventListener("click", () => this.close());
    }

    const form = this._popup.querySelector("form");
    if (form) {
      form.addEventListener("click", (evt) => {
        evt.stopPropagation();
      });
    }
  }
}
