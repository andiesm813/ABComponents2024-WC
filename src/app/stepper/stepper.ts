import { html, css, LitElement } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcComboComponent, IgcInputComponent, IgcRippleComponent, IgcStepperComponent } from 'igniteui-webcomponents';
import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';
import { financialService } from '../services/Financial-service';

defineComponents(IgcStepperComponent, IgcInputComponent, IgcButtonComponent, IgcRippleComponent, IgcComboComponent);

@customElement('app-stepper')
export default class Stepper extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
    }
    .stepper {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .step-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 10px;
      overflow: auto;
      position: relative;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .button {
      height: max-content;
      flex-shrink: 0;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 0.5rem;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
  `;

  constructor() {
    super();
    this.financialBoxOfficeRevenue = financialService.getBoxOfficeRevenue();
  }

  @query('#stepper2')
  private stepper2?: IgcStepperComponent;

  @query('#stepper3')
  private stepper3?: IgcStepperComponent;

  @query('#stepper4')
  private stepper4?: IgcStepperComponent;

  @state()
  private financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-stepper title-position="bottom" id="stepper2" class="stepper">
        <igc-step ?invalid="${true}">
          <div class="column-layout step-content">
            <igc-input label="Label" placeholder="This is the placeholder" ?outlined="${true}" class="user-input"></igc-input>
            <igc-input label="Label" placeholder="This is the placeholder" ?outlined="${true}" class="user-input"></igc-input>
            <div class="row-layout group">
              <igc-button size="large" @click="${() => this.stepper2?.next()}" class="button">
                Next
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Address</p>
        </igc-step>
        <igc-step ?invalid="${true}">
          <div class="column-layout step-content">
            <p class="typography__body-1 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
            </p>
            <div class="row-layout group">
              <igc-button size="large" @click="${() => this.stepper2?.prev()}" class="button">
                Prev
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button size="large" @click="${() => this.stepper2?.next()}" class="button">
                Next
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Item</p>
        </igc-step>
        <igc-step ?optional="${true}">
          <div class="column-layout step-content">
            <p class="typography__body-1 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
            </p>
            <div class="row-layout group">
              <igc-button size="large" @click="${() => this.stepper2?.prev()}" class="button">
                Prev
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button size="large" @click="${() => this.stepper2?.reset()}" class="button">
                Reset
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Wrap</p>
          <p .slot="subtitle">(Optional)</p>
        </igc-step>
      </igc-stepper>
      <igc-stepper orientation="vertical" title-position="bottom" id="stepper3" class="stepper">
        <igc-step ?invalid="${true}">
          <div class="column-layout step-content">
            <span class="date-picker">DatePicker not yet available in WebComponents</span>
            <igc-input label="Label" placeholder="This is the placeholder" ?outlined="${true}" class="user-input"></igc-input>
            <igc-input label="Label" placeholder="This is the placeholder" ?outlined="${true}" class="user-input"></igc-input>
            <div class="row-layout group">
              <igc-button size="large" @click="${() => this.stepper3?.next()}" class="button">
                Next
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Address</p>
        </igc-step>
        <igc-step ?invalid="${true}">
          <div class="column-layout step-content">
            <p class="typography__body-1 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
            </p>
            <div class="row-layout group">
              <igc-button size="large" @click="${() => this.stepper3?.prev()}" class="button">
                Prev
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button size="large" @click="${() => this.stepper3?.next()}" class="button">
                Next
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Item</p>
        </igc-step>
        <igc-step ?optional="${true}">
          <div class="column-layout step-content">
            <p class="typography__body-1 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
            </p>
            <div class="row-layout group">
              <igc-button size="large" @click="${() => this.stepper3?.prev()}" class="button">
                Prev
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button size="large" @click="${() => this.stepper3?.reset()}" class="button">
                Reset
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Wrap</p>
          <p .slot="subtitle">(Optional)</p>
        </igc-step>
      </igc-stepper>
      <igc-stepper orientation="vertical" title-position="bottom" id="stepper4" class="stepper">
        <igc-step ?invalid="${true}">
          <div class="column-layout step-content">
            <igc-combo ?outlined="${true}" .data="${this.financialBoxOfficeRevenue}" label="Label/Placeholder" placeholder="Placeholder" display-key="Franchise" ?single-select="${true}" class="user-input"></igc-combo>
            <igc-input label="Label" placeholder="This is the placeholder" ?outlined="${true}" class="user-input"></igc-input>
            <igc-input label="Label" placeholder="This is the placeholder" ?outlined="${true}" class="user-input"></igc-input>
            <div class="row-layout group">
              <igc-button size="large" @click="${() => this.stepper4?.next()}" class="button">
                Next
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Address</p>
        </igc-step>
        <igc-step ?invalid="${true}">
          <div class="column-layout step-content">
            <p class="typography__body-1 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
            </p>
            <div class="row-layout group">
              <igc-button size="large" @click="${() => this.stepper4?.prev()}" class="button">
                Prev
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button size="large" @click="${() => this.stepper4?.next()}" class="button">
                Next
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Item</p>
        </igc-step>
        <igc-step ?optional="${true}">
          <div class="column-layout step-content">
            <p class="typography__body-1 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
            </p>
            <div class="row-layout group">
              <igc-button size="large" @click="${() => this.stepper4?.prev()}" class="button">
                Prev
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button size="large" @click="${() => this.stepper4?.reset()}" class="button">
                Reset
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <p .slot="title">Wrap</p>
          <p .slot="subtitle">(Optional)</p>
        </igc-step>
      </igc-stepper>
    `;
  }
}
