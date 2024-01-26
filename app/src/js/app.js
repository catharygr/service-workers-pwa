import { LitElement, html, css } from "lit";
import * as TimerCompoent from "../../node_modules/@bubulazi/timer/dist/index";
import * as logo from "../images/TimerPWA-logos_transparent.png";

export class App extends LitElement {
  static styles = css`
    .logo {
      max-width: 20rem;
      margin: 0 auto;
      display: block;
    }

    .main-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .inner-container {
      width: clamp(16em, 90vw, 42rem);
    }
  `;
  connectedCallback() {
    super.connectedCallback();
    window.customElements.define("timer-component", TimerCompoent);
  }
  render() {
    return html`
      <main class="main-container">
        <div class="inner-container">
          <img class="logo" src="${logo.default}" alt="TimerPWA logo" />
          <timer-component
            shorttimer
            doubledigits
            btnpause
            btnplay
            btnreset
            reverse
          ></timer-component>
        </div>
      </main>
    `;
  }
}
