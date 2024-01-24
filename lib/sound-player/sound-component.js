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
    // Crear una nueva instancia del componente
    const soundComponent = document.createElement("sound-component");

    // Establecer la propiedad 'sound' con la URL del sonido que quieres reproducir
    soundComponent.sound = "../../app/src/sounds/fairy.mp3";

    // Añadir el componente al DOM
    document.body.appendChild(soundComponent);

    // Reproducir el sonido
    soundComponent.playSound();
    return html` <audio src="${this.sound}"></audio>`;
  }

  playSound() {
    this.shadowRoot.querySelector("audio").play();
  }
}

customElements.define("sound-component", SoundComponent);
