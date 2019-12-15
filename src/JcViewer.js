import { html, css, LitElement } from 'lit-element';
import JSONEditor from 'jsoneditor';

export class JcViewer extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  static get properties() {
    return {
      data: { type: String },
    };
  }

  firstUpdated() {
    const options = {
      mode: 'view',
    };
    const el = this.shadowRoot.querySelector('#jc-viewer-tree-container');
    const data = JSON.parse(this.data);
    this.tree = new JSONEditor(el, options, data);
  }

  render() {
    return this.data
      ? html`
          <link
            rel="stylesheet"
            href="https://unpkg.com/jsoneditor@8.0.0/dist/jsoneditor.min.css"
          />
          <div id="jc-viewer-tree-container"></div>
        `
      : html`
          <p>No data found</p>
        `;
  }
}
