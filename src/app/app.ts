import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcNavDrawerComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .navbar {
      height: max-content;
      min-width: min-content;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      max-width: 240px;
      flex-shrink: 0;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
    .nav-drawer::part(main) {
      width: 240px;
    }
    .h6 {
      margin: 0;
      flex-shrink: 0;
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  render() {
    return html`
      <link href='node_modules/@igniteui/material-icons-extended/styles/sprite.css' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <igc-icon-button slot="start" variant="flat">
          <span class="material-icons">
            menu
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <div class="row-layout group">
          <h6 class="h6">
            All AB Components 2024
          </h6>
        </div>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            search
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            favorite
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button slot="end" variant="flat">
          <span class="material-icons">
            more_vert
          </span>
          <igc-ripple></igc-ripple>
        </igc-icon-button>
      </igc-navbar>
      <div class="row-layout group_1">
        <igc-nav-drawer ?open="${true}" position="relative" class="nav-drawer">
          <igc-nav-drawer-header-item>
            <div slot="content">Component Pages</div>
          </igc-nav-drawer-header-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/all-components`)}">
            <span slot="icon">
              <span class="imx-icon imx-development icon"></span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">All Components</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/avatars-images`)}">
            <span slot="icon">
              <span class="material-icons icon">
                image
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Avatars &amp; Images</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/calendar`)}">
            <span slot="icon">
              <span class="material-icons icon">
                calendar_month
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Calendar</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/forms`)}">
            <span slot="icon">
              <span class="material-icons icon">
                dynamic_form
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Forms</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/forms`)}">
            <span slot="icon">
              <span class="material-icons icon">
                view_list
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Lists</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/radiogroup`)}">
            <span slot="icon">
              <span class="material-icons icon">
                radio_button_checked
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Radio Group</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/stepper`)}">
            <span slot="icon">
              <span class="material-icons icon">
                123
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Stepper</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <router-outlet class="view-container"></router-outlet>
        <igc-nav-drawer position="relative" class="nav-drawer">
          <div slot="mini">
            <igc-nav-drawer-header-item>
              <span slot="icon">
                <span class="material-icons icon">
                  account_circle
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-header-item>
            <igc-nav-drawer-item @click="${() => Router.go(`/all-components`)}">
              <span slot="icon">
                <span class="material-icons icon">
                  account_circle
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item @click="${() => Router.go(`/radiogroup`)}">
              <span slot="icon">
                <span class="material-icons icon">
                  account_circle
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item @click="${() => Router.go(`/stepper`)}">
              <span slot="icon">
                <span class="material-icons icon">
                  account_circle
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  account_circle
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
          </div>
          <igc-nav-drawer-header-item>
            <div slot="content">Component Pages</div>
          </igc-nav-drawer-header-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/all-components`)}">
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">All Components</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/radiogroup`)}">
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Radio Group</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click="${() => Router.go(`/stepper`)}">
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Stepper</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
              <igc-ripple></igc-ripple>
            </span>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
