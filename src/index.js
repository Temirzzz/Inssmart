import "./images/svg/icon";
import "./assets/styles/main.scss";

if (document.querySelector(".tabs")) {
  import("./components/tabs/tabs").then(({ initTabs }) => {
    initTabs();
  });
}

if (document.querySelector(".input")) {
  import("./components/input/input").then(({ initInput }) => {
    initInput();
  });
}
