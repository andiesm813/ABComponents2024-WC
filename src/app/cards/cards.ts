import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent, IgcAvatarComponent);

@customElement('app-cards')
export default class Cards extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
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
      width: 400px;
      min-width: 400px;
      max-width: 400px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .card {
      height: max-content;
      min-width: 320px;
    }
    .card_1 {
      height: max-content;
      min-width: 320px;
      flex-direction: row;
    }
    .group_1 {
      flex-grow: 1;
    }
    .group_2 {
      width: 100%;
    }
    .row-layout {
      display: flex;
    }
    .media-content {
      height: 120px;
      min-height: 120px;
      max-height: 120px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .media-content_1 {
      width: 120px;
      min-width: 120px;
      max-width: 120px;
    }
    .media-content_2 {
      width: 80px;
      height: 80px;
      min-width: 80px;
      min-height: 80px;
      max-width: 80px;
      max-height: 80px;
    }
    .divider {
      display: none;
    }
    .actions-content_1 {
      flex-direction: column;
      align-items: end;
      min-width: 50px;
      min-height: 40px;
    }
    .image {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .button {
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-card class="card">
          <igc-card-media class="media-content">
            <img src="/src/assets/SketchParser.png" class="image" />
          </igc-card-media>
          <igc-card-header>
            <h3 slot="title">
              Title goes here...
            </h3>
            <h5 slot="subtitle">
              Subtitle goes here...
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content">
            <p class="typography__body-2 text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. 
            </p>
          </igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" slot="start" size="large" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                bookmark
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
        <igc-card class="card">
          <igc-card-header>
            <div slot="thumbnail">
              <igc-avatar shape="circle">
                <span class="material-icons">
                  person
                </span>
              </igc-avatar>
            </div>
            <h3 slot="title">
              Title goes here...
            </h3>
            <h5 slot="subtitle">
              Subtitle goes here...
            </h5>
          </igc-card-header>
          <igc-card-media class="media-content">
            <img src="/src/assets/SketchParser.png" class="image" />
          </igc-card-media>
          <igc-card-content class="body-content">
            <p class="typography__body-2 text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. 
            </p>
          </igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" slot="start" size="large" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                bookmark
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
        <igc-card class="card_1">
          <div class="group_1">
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar shape="circle">
                  <span class="material-icons">
                    person
                  </span>
                </igc-avatar>
              </div>
              <h3 slot="title">
                Title goes here...
              </h3>
              <h5 slot="subtitle">
                Subtitle goes here...
              </h5>
            </igc-card-header>
            <igc-card-content class="body-content">
              <p class="typography__body-2 text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. 
              </p>
            </igc-card-content>
          </div>
          <igc-card-media class="media-content_1">
            <img src="/src/assets/SketchParser.png" class="image" />
          </igc-card-media>
        </igc-card>
        <igc-card class="card_1">
          <div class="group_2">
            <div class="row-layout">
              <igc-card-header>
                <div slot="thumbnail">
                  <igc-card-media class="media-content_2">
                    <img src="/src/assets/SketchParser.png" />
                  </igc-card-media>
                </div>
                <h3 slot="title">
                  Title goes here...
                </h3>
                <h5 slot="subtitle">
                  Subtitle goes here...
                </h5>
              </igc-card-header>
            </div>
            <igc-card-content class="body-content">
              <p class="typography__body-2 text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. 
              </p>
            </igc-card-content>
          </div>
          <span class="divider">Divider not yet available in WebComponents</span>
          <igc-card-actions class="igx-card-actions--justify actions-content_1">
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                bookmark
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
      </div>
    `;
  }
}
