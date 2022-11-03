export default class Input {
  constructor() {
    this.inputs = document.querySelectorAll(".input__field");
    this.errorMessage = document.querySelector(".error-message");
    this.inputBtn = document.querySelector(".button__self-button");
    this.buildCache();
    this.bindEvents();
  }

  init() {
    this.validateInput();
  }

  buildCache() {
    this.inputBtn.setAttribute("disabled", "");
    this.inputBtn.style.cursor = "auto";
  }

  bindEvents() {}

  validateInput() {
    this.inputs.forEach((input) => {
      input.addEventListener("input", (event) => {
        if (event.target.value.length < 5) {
          this.inputBtn.setAttribute("disabled", "");
          this.inputBtn.style.cursor = "auto";
          input.parentElement.nextSibling.classList.add("error-message_show");
        } else {
          input.parentElement.nextSibling.classList.remove("error-message_show");
          this.inputBtn.removeAttribute("disabled", "");
          this.inputBtn.style.cursor = "pointer";
        }
      });
    });
  }
}

export const initInput = (el = document.querySelectorAll(".input")) => {
  el.forEach((item) => {
    if (item) {
      const _ = new Input(item);
      _.init();
    }
  });
};
