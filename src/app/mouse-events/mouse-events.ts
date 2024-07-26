import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListHeaderComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcIconButtonComponent, IgcListComponent, IgcListHeaderComponent, IgcListItemComponent);

@customElement('app-mouse-events')
export default class MouseEvents extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 24px;
      width: 320px;
      min-width: 320px;
      max-width: 320px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .button {
      height: max-content;
    }
    .button_1 {
      width: max-content;
      height: max-content;
      align-self: center;
    }
    .button_2::part(base) {
      background-color: hsla(var(--ig-success-500));
    }
    .button_3::part(base) {
      background-color: hsla(var(--ig-success-500));
    }
    .button_4::part(base) {
      color: hsla(var(--ig-success-500));
      border-color: hsla(var(--ig-success-500));
    }
    .button_5::part(base) {
      color: hsla(var(--ig-success-500));
      border-color: hsla(var(--ig-success-500));
    }
    .button_6::part(base) {
      color: hsla(var(--ig-success-500));
    }
    .button_7::part(base) {
      color: hsla(var(--ig-success-500));
    }
    .button_1_1::part(base) {
      background-color: hsla(var(--ig-success-500));
    }
    .button_1_2::part(base) {
      background-color: hsla(var(--ig-success-500));
    }
    .icon-button {
      align-self: center;
    }
    .icon-button_1::part(base) {
      color: hsla(var(--ig-success-500));
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .icon_1 {
      color: hsla(var(--ig-success-500));
    }
    .list {
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="column-layout group_1">
          <igc-button size="large" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button size="large" class="button">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" size="large" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" size="large" class="button">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" size="large" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" size="large" class="button">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="fab" size="large" class="button_1">
            <span class="material-icons">
              add
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="fab" size="large" class="button_1">
            <span class="material-icons">
              add
            </span>
            <span>FAB</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons">
              email
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </div>
        <igc-list class="list">
          <igc-list-header>Header</igc-list-header>
          <igc-list-item>
            <div slot="title">Single Line Item Default</div>
            <span slot="end" class="material-icons icon">
              keyboard_arrow_right
            </span>
          </igc-list-item>
          <igc-list-item>
            <div slot="title">Single Line Item Default</div>
          </igc-list-item>
          <igc-list-item>
            <div slot="title">Single Line Item Default</div>
            <span slot="end" class="material-icons icon">
              keyboard_arrow_right
            </span>
          </igc-list-item>
        </igc-list>
      </div>
      <div class="column-layout group">
        <div class="column-layout group_1">
          <igc-button size="large" class="button button_2">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button size="large" class="button button_3">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" size="large" class="button button_4">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" size="large" class="button button_5">
            <span class="material-icons icon_1">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" size="large" class="button button_6">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" size="large" class="button button_7">
            <span class="material-icons icon_1">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="fab" size="large" class="button_1 button_1_1">
            <span class="material-icons">
              add
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="fab" size="large" class="button_1 button_1_2">
            <span class="material-icons">
              add
            </span>
            <span>FAB</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-icon-button variant="flat" class="icon-button icon-button_1">
            <span class="material-icons icon_1">
              email
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </div>
        <igc-list class="list">
          <igc-list-header>Header</igc-list-header>
          <igc-list-item>
            <div slot="title">Single Line Item Default</div>
            <span slot="end" class="material-icons icon">
              keyboard_arrow_right
            </span>
          </igc-list-item>
          <igc-list-item>
            <div slot="title">Single Line Item Default</div>
          </igc-list-item>
          <igc-list-item>
            <div slot="title">Single Line Item Default</div>
            <span slot="end" class="material-icons icon">
              keyboard_arrow_right
            </span>
          </igc-list-item>
        </igc-list>
      </div>
    `;
  }
}
