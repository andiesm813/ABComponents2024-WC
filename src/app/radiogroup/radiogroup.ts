import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';

defineComponents(IgcRadioGroupComponent, IgcRadioComponent);

@customElement('app-radiogroup')
export default class Radiogroup extends LitElement {
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
      flex-grow: 1;
      flex-basis: 0;
    }
    .radio-group {
      width: max-content;
      height: max-content;
    }
    .radio {
      padding: 8px;
    }
  `;

  @state()
  private value: string = '1';

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <igc-radio-group alignment="horizontal" .value="${this.value}" @igcChange="${(e: any) => this.value = e.target.value}" class="radio-group">
          <igc-radio value="1" class="radio">
            Label
          </igc-radio>
          <igc-radio value="2" class="radio">
            Label
          </igc-radio>
          <igc-radio value="3" class="radio">
            Label
          </igc-radio>
        </igc-radio-group>
        <igc-radio-group alignment="horizontal" .value="${this.value}" @igcChange="${(e: any) => this.value = e.target.value}" class="radio-group">
          <igc-radio value="1" class="radio">
            Label
          </igc-radio>
          <igc-radio value="2" class="radio">
            Label
          </igc-radio>
          <igc-radio value="3" class="radio">
            Label
          </igc-radio>
        </igc-radio-group>
        <igc-radio-group .value="${this.value}" @igcChange="${(e: any) => this.value = e.target.value}" class="radio-group">
          <igc-radio value="1" class="radio">
            Label
          </igc-radio>
          <igc-radio value="2" class="radio">
            Label
          </igc-radio>
          <igc-radio value="3" class="radio">
            Label
          </igc-radio>
        </igc-radio-group>
        <igc-radio-group .value="${this.value}" @igcChange="${(e: any) => this.value = e.target.value}" class="radio-group">
          <igc-radio value="1" class="radio">
            Label
          </igc-radio>
          <igc-radio value="2" class="radio">
            Label
          </igc-radio>
          <igc-radio value="3" class="radio">
            Label
          </igc-radio>
        </igc-radio-group>
      </div>
    `;
  }
}
