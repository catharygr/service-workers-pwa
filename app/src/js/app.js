import { LitElement, html, css } from "lit";
import TimerComponent from "../../node_modules/@bubulazi/timer/dist/index";
import SoundComponent from "../../node_modules/@bubulazi/sound-player/dist/index";
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
    // window.customElements.define("timer-component", TimerComponent);
    // window.customElements.define("sound-component", SoundComponent);
    window.addEventListener("timer-end", () => {
      this.shadowRoot.querySelector("sound-component").play();
    });
  }
  render() {
    return html`
      <main class="main-container">
        <div class="inner-container">
          <img class="logo" src="${logo.default}" alt="TimerPWA logo" />
          <sound-component sound="assets/fairy.mp3"></sound-component>
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
