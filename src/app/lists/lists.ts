import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcIconComponent, IgcListComponent, IgcListHeaderComponent, IgcListItemComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent, IgcListHeaderComponent, IgcListItemComponent, IgcIconComponent, IgcAvatarComponent);

@customElement('app-lists')
export default class Lists extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
    }
    .list {
      height: max-content;
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .avatar_1::part(base) {
      background-color: transparent;
    }
    .avatar_2::part(base) {
      background-color: transparent;
    }
    .avatar_3::part(base) {
      background-color: transparent;
    }
    .avatar_4::part(base) {
      background-color: transparent;
    }
    .avatar_5::part(base) {
      background-color: transparent;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <div class="column-layout group_1">
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
          <igc-list class="list">
            <igc-list-header>Header</igc-list-header>
            <igc-list-item>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
          </igc-list>
          <igc-list class="list">
            <igc-list-header>Header</igc-list-header>
            <igc-list-item>
              <igc-avatar slot="start">
                <span class="material-icons">
                  person
                </span>
              </igc-avatar>
              <div slot="title">Single Line Item Default</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar slot="start">
                <span class="material-icons">
                  person
                </span>
              </igc-avatar>
              <div slot="title">Single Line Item Default</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar slot="start">
                <span class="material-icons">
                  person
                </span>
              </igc-avatar>
              <div slot="title">Single Line Item Default</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
          </igc-list>
          <igc-list class="list">
            <igc-list-header>Header</igc-list-header>
            <igc-list-item>
              <igc-avatar initials="AB" shape="rounded" slot="start"></igc-avatar>
              <div slot="title">Single Line Item Default</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar initials="AB" shape="rounded" slot="start"></igc-avatar>
              <div slot="title">Single Line Item Default</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar initials="AB" shape="rounded" slot="start"></igc-avatar>
              <div slot="title">Single Line Item Default</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
          </igc-list>
        </div>
        <div class="column-layout group_1">
          <igc-list class="list">
            <igc-list-header>Header</igc-list-header>
            <igc-list-item>
              <div slot="title">Image URL</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Image URL</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Image URL</div>
              <div slot="subtitle">Subtitle...</div>
            </igc-list-item>
          </igc-list>
          <igc-list class="list">
            <igc-list-header>Header</igc-list-header>
            <igc-list-item>
              <igc-avatar src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&amp;w=2592&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" slot="start" shape="circle" class="avatar"></igc-avatar>
              <div slot="title">Image URL</div>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&amp;w=2592&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" slot="start" shape="circle" class="avatar_1"></igc-avatar>
              <div slot="title">Image URL</div>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&amp;w=2592&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" slot="start" shape="circle" class="avatar_2"></igc-avatar>
              <div slot="title">Image URL</div>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
          </igc-list>
          <igc-list class="list">
            <igc-list-header>Header</igc-list-header>
            <igc-list-item>
              <igc-avatar src="/src/assets/7e86e8b8b495deb8eefcdd3556151a40532211e1.png" slot="start" shape="circle" class="avatar_3"></igc-avatar>
              <div slot="title">Default with Subtitle and Avatar</div>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="/src/assets/d4c387693b4db8c8354a14897762a46dcf820844.png" slot="start" shape="circle" class="avatar_4"></igc-avatar>
              <div slot="title">Default with Subtitle and Avatar</div>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" slot="start" shape="circle" class="avatar_5"></igc-avatar>
              <div slot="title">Default with Subtitle and Avatar</div>
              <div slot="subtitle">Subtitle...</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
          </igc-list>
        </div>
      </div>
    `;
  }
}
