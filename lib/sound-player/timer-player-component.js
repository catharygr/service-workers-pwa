import { LitElement, html, css } from "lit";

import { TimerComponent } from "./timer-component.js";

export class TimerPlayerComponent extends LitElement {
  static properties = {
    btnpause: { type: Boolean },
    btnplay: { type: Boolean },
    btnreset: { type: Boolean },
  };
}
