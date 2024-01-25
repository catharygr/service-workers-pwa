// export * from "./src/js/app.js";

import { App } from "./src/js/app.js";

customElements.define("my-app", App);
document.getElementById("app").innerHTML = "<my-app></my-app>";
