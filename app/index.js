// export * from "./src/js/app.js";

import { App } from "./src/js/app.js";
import "./src/scss/guide.scss";
import "./src/scss/first.scss";
import "./src/scss/components.scss";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js", { scope: "/" })
    .then(() => {
      console.log("Service Worker registered");
    })
    .catch((error) => {
      console.log("Service Worker registration failed", error);
    });
}

customElements.define("my-app", App);
document.getElementById("app").innerHTML = "<my-app></my-app>";
