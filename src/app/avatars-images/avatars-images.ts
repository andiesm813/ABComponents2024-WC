import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent, IgcListComponent, IgcListItemComponent, IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent);

@customElement('app-avatars-images')
export default class AvatarsImages extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 40px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 24px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
    }
    .group_2 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .card {
      width: 320px;
      height: max-content;
      min-width: 320px;
      max-width: 320px;
      flex-shrink: 0;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .image {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .image_1 {
      object-fit: cover;
      width: 509px;
      height: 296px;
      min-width: 0;
      min-height: 0;
      max-width: 509px;
      max-height: 296px;
      flex-shrink: 0;
    }
    .image_2 {
      object-fit: cover;
      width: 509px;
      height: 306px;
      min-width: 0;
      min-height: 0;
      max-width: 509px;
      max-height: 306px;
      flex-shrink: 0;
    }
    .media-content {
      height: 200px;
      min-height: 200px;
      max-height: 200px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .list {
      height: max-content;
      flex-shrink: 0;
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
        <div class="row-layout group_1">
          <div class="column-layout group_2">
            <div class="row-layout group_3">
              <igc-avatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" size="large" shape="circle" class="avatar"></igc-avatar>
              <igc-avatar src="/src/assets/7e86e8b8b495deb8eefcdd3556151a40532211e1.png" shape="rounded" size="medium" class="avatar"></igc-avatar>
              <igc-avatar src="/src/assets/d4c387693b4db8c8354a14897762a46dcf820844.png" class="avatar"></igc-avatar>
            </div>
            <p class="typography__subtitle-2 text">
              Images from Assets
            </p>
          </div>
          <div class="column-layout group_2">
            <div class="row-layout group_3">
              <igc-avatar src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&amp;w=2592&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" size="large" shape="circle" class="avatar"></igc-avatar>
              <igc-avatar src="https://images.unsplash.com/photo-1640379878948-72b9db349e17?q=80&amp;w=1944&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" shape="rounded" size="medium" class="avatar"></igc-avatar>
              <igc-avatar src="https://images.unsplash.com/photo-1642861937504-62b536fcc1b9?q=80&amp;w=1944&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="avatar"></igc-avatar>
            </div>
            <p class="typography__subtitle-2 text">
              Images from URL
            </p>
          </div>
        </div>
        <div class="row-layout group_2">
          <igc-list class="list">
            <igc-list-item>
              <igc-avatar slot="start" shape="circle" class="avatar"></igc-avatar>
              <div slot="title">No image</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="/src/assets/a06650fce7091f420c440f26201d916f775db29d.png" slot="start" class="avatar"></igc-avatar>
              <div slot="title">Image from Workspace</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="https://images.unsplash.com/photo-1639503611585-1054af5dbfab?q=80&amp;w=2592&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" slot="start" class="avatar"></igc-avatar>
              <div slot="title">Image from URL</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
          </igc-list>
          <igc-list class="list">
            <igc-list-item>
              <igc-avatar size="medium" slot="start" shape="circle" class="avatar"></igc-avatar>
              <div slot="title">No image</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="/src/assets/10a04583112d68e72f71ea3d9a5d02a35bbdf8d8.png" shape="rounded" size="medium" slot="start" class="avatar"></igc-avatar>
              <div slot="title">Image from Workspace</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&amp;w=3774&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" shape="rounded" size="medium" slot="start" class="avatar"></igc-avatar>
              <div slot="title">Image from URL</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
          </igc-list>
          <igc-list class="list">
            <igc-list-item>
              <igc-avatar size="large" slot="start" shape="circle" class="avatar"></igc-avatar>
              <div slot="title">No image</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="/src/assets/82e19827573e63ebf434524f39a708e6fd21f88a.png" size="large" slot="start" shape="circle" class="avatar"></igc-avatar>
              <div slot="title">Image from Workspace</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?q=80&amp;w=3880&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" size="large" slot="start" shape="circle" class="avatar"></igc-avatar>
              <div slot="title">Image from URL</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
          </igc-list>
        </div>
        <div class="row-layout group_4">
          <igc-card class="card">
            <igc-card-media class="media-content">
              <img src="/src/assets/start-building-dark.svg" class="image" />
            </igc-card-media>
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/Avatar13.png" size="large" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Images from Assets
              </h3>
              <h5 slot="subtitle">
                Subtitle goes here...
              </h5>
            </igc-card-header>
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
            <igc-card-media class="media-content">
              <img src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&amp;w=2592&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" />
            </igc-card-media>
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&amp;w=3864&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" size="large" shape="circle" class="avatar"></igc-avatar>
              </div>
              <h3 slot="title">
                Images From URL
              </h3>
              <h5 slot="subtitle">
                Subtitle goes here...
              </h5>
            </igc-card-header>
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
        </div>
      </div>
      <div class="column-layout group">
        <p class="typography__subtitle-2 text">
          Image from Assets
        </p>
        <img src="/src/assets/SketchParser.png" class="image_1" />
        <p class="typography__subtitle-2 text">
          Image from URL
        </p>
        <img src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&amp;w=2334&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image_2" />
      </div>
    `;
  }
}
