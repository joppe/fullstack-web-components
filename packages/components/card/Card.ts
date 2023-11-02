export class Card extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
        max-width: 300px;
        overflow: hidden;
        border-radius: 8px;
        background-color: var(--ctp-mocha-surface1);
      }

      ::slotted(*) {
        padding-left: var(--spacing-sm);
        padding-right: var(--spacing-sm);
      }

      ::slotted(a) {
        display: block;
      }
      
      ::slotted(img) {
        display: block;
        margin-bottom: var(--spacing-sm);
        padding: 0;
        width: 100%;
      }

      ::slotted(:last-child) {
        margin-bottom: var(--spacing-sm);
      }
      </style>
      <header>
        <slot name="header"></slot>
      </header>
      <section>
        <slot name="content"></slot>
      </section>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('in-card', Card);
