import { LitElement, html, css } from "lit";
import * as TimerCompoent from "../../node_modules/@bubulazi/timer/dist/index";

export class App extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    window.customElements.define("timer-component", TimerCompoent);
  }
  render() {
    return html`
      <h1>Hello World</h1>
      <timer-component></timer-component>
    `;
  }
}
