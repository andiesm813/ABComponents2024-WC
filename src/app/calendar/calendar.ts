import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcCalendarComponent } from 'igniteui-webcomponents';

defineComponents(IgcCalendarComponent);

@customElement('app-calendar')
export default class Calendar extends LitElement {
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
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .calendar {
      width: max-content;
      height: max-content;
      min-width: max-content;
    }
  `;

  @state()
  private value: string = '2024-07-23T00:00';

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <p class="typography__subtitle-2 text">
            No selected date
          </p>
          <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
        </div>
        <div class="column-layout group_1">
          <p class="typography__subtitle-2 text">
            With selected date
          </p>
          <igc-calendar ?hide-header="${false}" header-orientation="horizontal" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="calendar"></igc-calendar>
        </div>
      </div>
    `;
  }
}
