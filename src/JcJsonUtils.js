import { html, css, LitElement } from 'lit-element';

export class JcJsonUtils extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
      }
    `;
  }

  static get properties() {
    return {
      data: { type: String },
    };
  }

  __transformJson() {
    const data = JSON.parse(this.data);
    data.id = 1;
    const event = new CustomEvent('json-transform', {
      detail: {
        message: data,
      },
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <pre>${this.data}</pre>
      <button @click=${this.__transformJson}>Transform</button>
    `;
  }
}
