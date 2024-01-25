import { LitElement, html, css } from "lit";

export class SoundComponent extends LitElement {
  constructor() {
    super();
    this.sound = "";
  }

  connectedCallback() {
    super.connectedCallback();
  }

  static properties = {
    sound: { type: String },
  };

  render() {
    return html` <audio src="${this.sound}"></audio>`;
  }

  play() {
    this.shadowRoot.querySelector("audio").play();
  }
}

customElements.define("sound-component", SoundComponent);
