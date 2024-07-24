import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcComboComponent, IgcDateTimeInputComponent, IgcIconComponent, IgcInputComponent, IgcSelectComponent, IgcSelectHeaderComponent, IgcTextareaComponent } from 'igniteui-webcomponents';
import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';
import { financialService } from '../services/Financial-service';

defineComponents(IgcInputComponent, IgcIconComponent, IgcDateTimeInputComponent, IgcTextareaComponent, IgcSelectComponent, IgcSelectHeaderComponent, IgcComboComponent);

@customElement('app-forms')
export default class Forms extends LitElement {
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
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .user-input_2 {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .date-time-input {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
  `;

  constructor() {
    super();
    this.financialBoxOfficeRevenue = financialService.getBoxOfficeRevenue();
  }

  @state()
  private value: string = '5';

  @state()
  private value1: number = 10;

  @state()
  private value2: string = 'vvxcvxcvxcv';

  @state()
  private value3: string = 'cvxcvxcvxc';

  @state()
  private value4: string = '1';

  @state()
  private financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-input placeholder="Search" ?outlined="${true}" class="user-input">
          <span slot="prefix">
            <span class="material-icons icon">
              search
            </span>
          </span>
          <span slot="suffix">
            <span class="material-icons icon">
              clear
            </span>
          </span>
        </igc-input>
        <div class="row-layout group_1">
          <igc-input ?outlined="${true}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
          <igc-input label="Just Label" ?outlined="${true}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
        </div>
        <div class="row-layout group_1">
          <igc-input placeholder="Just Placeholder" ?outlined="${true}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
          <igc-input label="Label" placeholder="Placeholder" ?outlined="${true}" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
            <span slot="helper-text">sample hint text</span>
          </igc-input>
        </div>
        <div class="row-layout group_1">
          <igc-input type="number" label="Duration" placeholder="Placholder" ?outlined="${true}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
          <igc-input type="number" label="Duration" placeholder="Placholder" ?outlined="${true}" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
        </div>
        <div class="row-layout group_1">
          <igc-input type="email" label="Email address" placeholder="Placeholder" ?outlined="${true}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                email
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
          <igc-input type="password" label="Password" placeholder="Placeholder" ?outlined="${true}" value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                lock
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
        </div>
        <igc-input type="tel" label="Phone" placeholder="Placeholder" ?outlined="${true}" value="${this.value3}" @igcChange="${(e: any) => this.value3 = e.detail}" class="user-input">
          <span slot="prefix">
            <span class="material-icons icon">
              phone
            </span>
          </span>
          <span slot="suffix">
            <span class="material-icons icon">
              clear
            </span>
          </span>
        </igc-input>
        <div class="row-layout group_1">
          <igc-date-time-input label="Date" .Placeholder="Placeholder" ?outlined="${true}" class="date-time-input">
            <span slot="prefix">
              <span class="material-icons icon">
                calendar_month
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-date-time-input>
          <span class="date-picker">DatePicker not yet available in WebComponents</span>
        </div>
        <igc-textarea label="Label/Placeholder" placeholder="Text Area Content" ?outlined="${true}" class="user-input"></igc-textarea>
        <div class="row-layout group_1">
          <igc-select ?outlined="${true}" label="Select" placeholder="Placeholder" class="user-input_2">
            <igc-select-header>
              Option
            </igc-select-header>
            <igc-select-item value="Option">
              Option
            </igc-select-item>
            <igc-select-item value="Option">
              Option
            </igc-select-item>
          </igc-select>
          <igc-select ?outlined="${true}" label="Select" placeholder="Placeholder" value="${this.value4}" @igcChange="${(e: any) => this.value4 = e.detail.value}" class="user-input_2">
            <igc-select-header>
              Option
            </igc-select-header>
            <igc-select-item value="1">
              Option
            </igc-select-item>
            <igc-select-item value="Option">
              Option
            </igc-select-item>
          </igc-select>
        </div>
        <igc-combo ?outlined="${true}" .data="${this.financialBoxOfficeRevenue}" label="Combo" placeholder="Placeholder" display-key="Franchise" ?single-select="${true}" class="user-input"></igc-combo>
      </div>
      <div class="column-layout group">
        <igc-input placeholder="Search" ?outlined="${false}" class="user-input">
          <span slot="prefix">
            <span class="material-icons icon">
              search
            </span>
          </span>
          <span slot="suffix">
            <span class="material-icons icon">
              clear
            </span>
          </span>
        </igc-input>
        <div class="row-layout group_1">
          <igc-input ?outlined="${false}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
          <igc-input label="Just Label" ?outlined="${false}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
        </div>
        <div class="row-layout group_1">
          <igc-input placeholder="Just Placeholder" ?outlined="${false}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
          <igc-input label="Label" placeholder="Placeholder" ?outlined="${false}" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
            <span slot="helper-text">sample hint text</span>
          </igc-input>
        </div>
        <div class="row-layout group_1">
          <igc-input type="number" label="Duration" placeholder="Placholder" ?outlined="${false}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
          <igc-input type="number" label="Duration" placeholder="Placholder" ?outlined="${false}" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
        </div>
        <div class="row-layout group_1">
          <igc-input type="email" label="Email address" placeholder="Placeholder" ?outlined="${false}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                email
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
          <igc-input type="password" label="Password" placeholder="Placeholder" ?outlined="${false}" value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                lock
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
        </div>
        <igc-input type="tel" label="Phone" placeholder="Placeholder" ?outlined="${false}" value="${this.value3}" @igcChange="${(e: any) => this.value3 = e.detail}" class="user-input">
          <span slot="prefix">
            <span class="material-icons icon">
              phone
            </span>
          </span>
          <span slot="suffix">
            <span class="material-icons icon">
              clear
            </span>
          </span>
        </igc-input>
        <div class="row-layout group_1">
          <igc-date-time-input label="Date" .Placeholder="Placeholder" ?outlined="${false}" class="date-time-input">
            <span slot="prefix">
              <span class="material-icons icon">
                calendar_month
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-date-time-input>
          <span class="date-picker">DatePicker not yet available in WebComponents</span>
        </div>
        <igc-textarea label="Label/Placeholder" placeholder="Text Area Content" ?outlined="${false}" class="user-input"></igc-textarea>
        <div class="row-layout group_1">
          <igc-select ?outlined="${false}" label="Select" placeholder="Placeholder" class="user-input_2">
            <igc-select-header>
              Option
            </igc-select-header>
            <igc-select-item value="Option">
              Option
            </igc-select-item>
            <igc-select-item value="Option">
              Option
            </igc-select-item>
          </igc-select>
          <igc-select ?outlined="${false}" label="Select" placeholder="Placeholder" value="${this.value4}" @igcChange="${(e: any) => this.value4 = e.detail.value}" class="user-input_2">
            <igc-select-header>
              Option
            </igc-select-header>
            <igc-select-item value="1">
              Option
            </igc-select-item>
            <igc-select-item value="Option">
              Option
            </igc-select-item>
          </igc-select>
        </div>
        <igc-combo .data="${this.financialBoxOfficeRevenue}" label="Combo" placeholder="Placeholder" display-key="Franchise" ?outlined="${false}" ?single-select="${true}" class="user-input"></igc-combo>
      </div>
    `;
  }
}
