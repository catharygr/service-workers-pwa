// export * from "./src/js/app.js";

import { App } from "./src/js/app.js";
import "./src/scss/guide.scss";
import "./src/scss/first.scss";
import "./src/scss/components.scss";

customElements.define("my-app", App);
document.getElementById("app").innerHTML = "<my-app></my-app>";
