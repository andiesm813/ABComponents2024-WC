import { html, css, LitElement } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IgcCategoryChartModule } from '@infragistics/igniteui-webcomponents-charts';
import { ModuleManager } from '@infragistics/igniteui-webcomponents-core';
import { defineComponents, IgcAccordionComponent, IgcAvatarComponent, IgcBadgeComponent, IgcButtonComponent, IgcButtonGroupComponent, IgcCalendarComponent, IgcCardComponent, IgcCheckboxComponent, IgcComboComponent, IgcDialogComponent, IgcExpansionPanelComponent, IgcIconButtonComponent, IgcIconComponent, IgcInputComponent, IgcListComponent, IgcListHeaderComponent, IgcListItemComponent, IgcRadioComponent, IgcRadioGroupComponent, IgcRangeSliderComponent, IgcRatingComponent, IgcRippleComponent, IgcSelectComponent, IgcSliderComponent, IgcSnackbarComponent, IgcStepperComponent, IgcSwitchComponent, IgcTabsComponent, IgcTextareaComponent, IgcToggleButtonComponent, IgcTreeComponent } from 'igniteui-webcomponents';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import { EmployeesType } from '../models/Northwind/employees-type';
import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';
import { financialService } from '../services/Financial-service';
import { northwindService } from '../services/Northwind-service';

defineComponents(IgcTabsComponent, IgcIconComponent, IgcAccordionComponent, IgcExpansionPanelComponent, IgcListComponent, IgcListHeaderComponent, IgcListItemComponent, IgcAvatarComponent, IgcTreeComponent, IgcSliderComponent, IgcRangeSliderComponent, IgcStepperComponent, IgcButtonComponent, IgcRippleComponent, IgcCardComponent, IgcIconButtonComponent, IgcInputComponent, IgcButtonGroupComponent, IgcToggleButtonComponent, IgcBadgeComponent, IgcCheckboxComponent, IgcRadioGroupComponent, IgcRadioComponent, IgcSwitchComponent, IgcRatingComponent, IgcTextareaComponent, IgcSelectComponent, IgcComboComponent, IgcCalendarComponent, IgcSnackbarComponent, IgcDialogComponent);

ModuleManager.register(IgcCategoryChartModule);

@customElement('app-all-components')
export default class AllComponents extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 24px;
      overflow: auto;
      position: relative;
      padding: 20px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
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
      min-width: 320px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .tabs {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .accordion {
      overflow-y: auto;
      flex-shrink: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 0.5rem;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .card {
      height: max-content;
      min-width: 320px;
      flex-direction: row;
    }
    .group_4 {
      flex-grow: 1;
    }
    .card_1 {
      height: max-content;
      min-width: 320px;
    }
    .group_5 {
      width: 100%;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: auto;
      position: relative;
      min-width: 320px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 420px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 8px 0;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
    }
    .group_12 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_13 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 240px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_15 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .card_2 {
      width: 320px;
      height: max-content;
      min-width: 320px;
      max-width: 320px;
    }
    .group_16 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .tab-item-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      overflow: auto;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .tab-item-content_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .range-slider {
      height: max-content;
      min-width: 50px;
    }
    .stepper {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
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
    .tab-item-content_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: auto;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .media-content {
      width: 96px;
      min-width: 96px;
      max-width: 96px;
    }
    .media-content_1 {
      height: 200px;
      min-height: 200px;
      max-height: 200px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .media-content_2 {
      width: 64px;
      height: 64px;
      min-width: 64px;
      min-height: 64px;
      max-width: 64px;
      max-height: 64px;
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
    .step-content_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      overflow: auto;
      position: relative;
      height: 100%;
      min-width: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .media-content_3 {
      height: 120px;
      min-height: 120px;
      max-height: 120px;
    }
    .text {
      height: max-content;
      min-width: min-content;
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
    .image {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .icon_1 {
      --size: 18px;
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    .icon_2 {
      --size: 36px;
      font-size: 36px;
      width: 36px;
      height: 36px;
    }
    .icon_3 {
      --size: 48px;
      font-size: 48px;
      width: 48px;
      height: 48px;
    }
    .calendar {
      width: max-content;
      height: max-content;
      min-width: max-content;
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
    .avatar_6::part(base) {
      background-color: transparent;
    }
    .avatar_7::part(base) {
      background-color: transparent;
    }
    .avatar_8::part(base) {
      background-color: transparent;
    }
    .list {
      height: max-content;
    }
    .tree {
      min-width: max-content;
      min-height: max-content;
    }
    .grid {
      flex-grow: 1;
      flex-basis: 0;
    }
    .slider {
      height: max-content;
      min-width: 50px;
    }
    .button {
      height: max-content;
      flex-shrink: 0;
    }
    .button_1 {
      height: max-content;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .user-input_2 {
      width: max-content;
      height: max-content;
    }
    .radio {
      padding: 8px;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .badge {
      width: max-content;
      height: max-content;
    }
    .notification {
      height: max-content;
      min-width: min-content;
    }
    .category-chart {
      min-width: 400px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    this.financialBoxOfficeRevenue = financialService.getBoxOfficeRevenue();
    this.northwindEmployees = northwindService.getEmployees();
  }

  @state()
  private value: number = 0;

  @state()
  private value1: number = 50;

  @query('#stepper')
  private stepper?: IgcStepperComponent;

  @query('#stepper1')
  private stepper1?: IgcStepperComponent;

  @state()
  private value2: string = '1';

  @state()
  private checked: boolean = true;

  @state()
  private value3: number = 1;

  @state()
  private value4: number = 2;

  @state()
  private value5: number = 4;

  @state()
  private financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  @state()
  private northwindEmployees: EmployeesType[] = [];

  @query('#snackbar')
  private snackbar?: IgcSnackbarComponent;

  @query('#dialog')
  private dialog?: IgcDialogComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <igc-tabs class="tabs">
            <igc-tab ?selected="${true}">
              <span class="material-icons">
                info
              </span>
              <span>Expanders and Lists</span>
            </igc-tab>
            <igc-tab-panel class="column-layout tab-item-content">
              <igc-accordion class="accordion">
                <igc-expansion-panel>
                  <p class="typography__body-2 text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                  <span slot="title">Title goes here...</span>
                </igc-expansion-panel>
                <igc-expansion-panel>
                  <p class="typography__body-2 text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                  <span slot="title">Title goes here...</span>
                </igc-expansion-panel>
                <igc-expansion-panel>
                  <p class="typography__body-2 text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </p>
                  <span slot="title">Title goes here...</span>
                </igc-expansion-panel>
              </igc-accordion>
              <igc-list class="list">
                <igc-list-header>Header</igc-list-header>
                <igc-list-item>
                  <div slot="title">Single Line Item Default</div>
                  <span slot="end" class="material-icons icon">
                    keyboard_arrow_right
                  </span>
                </igc-list-item>
                <igc-list-item>
                  <igc-avatar src="/src/assets/7e86e8b8b495deb8eefcdd3556151a40532211e1.png" slot="start" shape="circle" class="avatar"></igc-avatar>
                  <div slot="title">Avatar + Title</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="subtitle">Single Line</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Default with Subtitle</div>
                  <div slot="subtitle">Subtitle...</div>
                  <span slot="end" class="material-icons icon">
                    keyboard_arrow_right
                  </span>
                </igc-list-item>
                <igc-list-item>
                  <igc-avatar src="/src/assets/d4c387693b4db8c8354a14897762a46dcf820844.png" slot="start" shape="circle" class="avatar_1"></igc-avatar>
                  <div slot="title">Image asset</div>
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
                <igc-list-item>
                  <igc-avatar slot="start" shape="circle">
                    <span class="material-icons">
                      person
                    </span>
                  </igc-avatar>
                  <div slot="title">Default with Subtitle and Avatar</div>
                  <div slot="subtitle">Subtitle...</div>
                  <span slot="end" class="material-icons icon">
                    keyboard_arrow_right
                  </span>
                </igc-list-item>
                <igc-list-item>
                  <igc-avatar initials="AB" slot="start" shape="circle"></igc-avatar>
                  <div slot="title">Initials Avatar</div>
                  <div slot="subtitle">Subtitle...</div>
                  <span slot="end" class="material-icons icon">
                    keyboard_arrow_right
                  </span>
                </igc-list-item>
              </igc-list>
            </igc-tab-panel>
            <igc-tab>
              <span class="material-icons">
                info
              </span>
              <span>Tree &amp; Sliders</span>
            </igc-tab>
            <igc-tab-panel class="column-layout tab-item-content_1">
              <igc-tree selection="none" class="tree">
                <igc-tree-item label="Design">
                  <igc-tree-item label="Figma"></igc-tree-item>
                  <igc-tree-item label="Adobe XD"></igc-tree-item>
                  <igc-tree-item label="Sketch"></igc-tree-item>
                </igc-tree-item>
                <igc-tree-item label="Development">
                  <igc-tree-item label="Angular"></igc-tree-item>
                  <igc-tree-item label="Blazor"></igc-tree-item>
                  <igc-tree-item label="Web components" ?disabled="${true}"></igc-tree-item>
                </igc-tree-item>
              </igc-tree>
              <div class="column-layout group_2">
                <igc-slider min="0" max="100" step="10" ?discrete-track="${true}" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="slider"></igc-slider>
                <igc-range-slider .lower="10" .upper="40" .min="0" .max="100" .step="10" .discrete-track="true" class="range-slider"></igc-range-slider>
                <igc-slider min="0" max="100" primary-ticks="3" secondary-ticks="2" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="slider"></igc-slider>
                <igc-slider min="0" max="100" step="10" ?discrete-track="${true}" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail}" class="slider"></igc-slider>
                <igc-slider ?disabled="${true}" min="0" max="100" step="10" ?discrete-track="${true}" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="slider"></igc-slider>
              </div>
            </igc-tab-panel>
            <igc-tab>
              <span class="material-icons">
                info
              </span>
              <span>Stepper</span>
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content_1">
              <igc-stepper title-position="bottom" id="stepper" class="stepper">
                <igc-step ?invalid="${true}">
                  <div class="column-layout step-content">
                    <p class="typography__body-1 text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
                    </p>
                    <div class="row-layout group_3">
                      <igc-button size="large" @click="${() => this.stepper?.next()}" class="button">
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
                    <div class="row-layout group_3">
                      <igc-button size="large" @click="${() => this.stepper?.prev()}" class="button">
                        Prev
                        <igc-ripple></igc-ripple>
                      </igc-button>
                      <igc-button size="large" @click="${() => this.stepper?.next()}" class="button">
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
                    <div class="row-layout group_3">
                      <igc-button size="large" @click="${() => this.stepper?.prev()}" class="button">
                        Prev
                        <igc-ripple></igc-ripple>
                      </igc-button>
                      <igc-button size="large" @click="${() => this.stepper?.reset()}" class="button">
                        Reset
                        <igc-ripple></igc-ripple>
                      </igc-button>
                    </div>
                  </div>
                  <p .slot="title">Wrap</p>
                  <p .slot="subtitle">(Optional)</p>
                </igc-step>
              </igc-stepper>
            </igc-tab-panel>
            <igc-tab>
              <span class="material-icons">
                info
              </span>
              <span>Cards</span>
            </igc-tab>
            <igc-tab-panel class="column-layout tab-item-content_2">
              <igc-card class="card">
                <div class="group_4">
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
                    <p class="typography__body-1 text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                  </igc-card-content>
                </div>
                <igc-card-media class="media-content">
                  <img src="/src/assets/SketchParser.png" class="image" />
                </igc-card-media>
              </igc-card>
              <igc-card class="card_1">
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
                <igc-card-media class="media-content_1">
                  <img src="/src/assets/SketchParser.png" class="image" />
                </igc-card-media>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" slot="start" size="large" class="button_1">
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
                <div class="group_5">
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
                    <p class="typography__body-1 text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
            </igc-tab-panel>
            <igc-tab ?disabled="${true}">
              <span class="material-icons">
                info
              </span>
              <span>Disabled</span>
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content_1"></igc-tab-panel>
          </igc-tabs>
        </div>
        <div class="column-layout group_6">
          <igc-stepper orientation="vertical" title-position="bottom" id="stepper1" class="stepper">
            <igc-step ?invalid="${true}">
              <div class="column-layout step-content_1">
                <igc-input label="Label" placeholder="Placholder" ?outlined="${true}" class="user-input">
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
                <igc-input label="Label" placeholder="Placholder" ?outlined="${true}" class="user-input">
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
                <igc-input label="Label" placeholder="Placholder" ?outlined="${true}" class="user-input">
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
                <div class="row-layout group_3">
                  <igc-button size="large" @click="${() => this.stepper1?.next()}" class="button">
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
                <div class="row-layout group_3">
                  <igc-button size="large" @click="${() => this.stepper1?.prev()}" class="button">
                    Prev
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button size="large" @click="${() => this.stepper1?.next()}" class="button">
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
                <div class="row-layout group_3">
                  <igc-button size="large" @click="${() => this.stepper1?.prev()}" class="button">
                    Prev
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button size="large" @click="${() => this.stepper1?.reset()}" class="button">
                    Reset
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
              </div>
              <p .slot="title">Wrap</p>
              <p .slot="subtitle">(Optional)</p>
            </igc-step>
          </igc-stepper>
        </div>
        <div class="column-layout group_7">
          <div class="row-layout group_8">
            <igc-button size="large" @click="${() => this.dialog?.toggle()}" class="button_1">
              <span class="material-icons">
                add
              </span>
              <span>Open Dialog</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button ?disabled="${true}" size="large" class="button_1">
              <span class="material-icons">
                add
              </span>
              <span>Button</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="outlined" size="large" class="button_1">
              <span class="material-icons">
                add
              </span>
              <span>Open Banner</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="outlined" ?disabled="${true}" size="large" class="button_1">
              <span class="material-icons">
                add
              </span>
              <span>Button</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="flat" size="large" @click="${() => this.snackbar?.toggle()}" class="button_1">
              <span class="material-icons">
                add
              </span>
              <span>Open Snackbar</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="flat" ?disabled="${true}" size="large" class="button_1">
              <span class="material-icons">
                add
              </span>
              <span>Button</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                email
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-button variant="fab" size="large" class="user-input_2">
              <span class="material-icons">
                add
              </span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="fab" size="large" class="user-input_2">
              <span class="material-icons">
                add
              </span>
              <span>FAB</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
          <igc-button-group class="user-input">
            <igc-toggle-button>
              Button
              <igc-ripple></igc-ripple>
            </igc-toggle-button>
            <igc-toggle-button>
              Button
              <igc-ripple></igc-ripple>
            </igc-toggle-button>
            <igc-toggle-button>
              Button
              <igc-ripple></igc-ripple>
            </igc-toggle-button>
          </igc-button-group>
          <div class="row-layout group_9">
            <span class="material-icons icon_1">
              mail
            </span>
            <span class="material-icons icon">
              mail
            </span>
            <span class="material-icons icon_2">
              mail
            </span>
            <span class="material-icons icon_3">
              mail
            </span>
            <igc-badge class="badge">
              Badge
            </igc-badge>
            <igc-badge class="badge">
              1
            </igc-badge>
            <igc-badge class="badge">
              10
            </igc-badge>
            <igc-badge class="badge">
              1000
            </igc-badge>
            <igc-badge class="badge">
              <span class="material-icons">
                mail
              </span>
            </igc-badge>
          </div>
          <div class="row-layout group_2">
            <div class="column-layout group_10">
              <igc-checkbox labelPosition="after" class="user-input_2">
                Label
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="user-input_2">
                Label
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="user-input_2">
                Label
              </igc-checkbox>
            </div>
            <igc-radio-group .value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.target.value}" class="user-input_2">
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
            <div class="column-layout group_11">
              <igc-radio-group alignment="horizontal" .value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.target.value}" class="user-input_2">
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
              <div class="row-layout group_12">
                <igc-switch class="user-input_2">
                  Label
                </igc-switch>
                <igc-switch ?disabled="${true}" class="user-input_2">
                  Label
                </igc-switch>
                <igc-switch LabelPosition="before" ?checked="${this.checked}" @igcChange="${(e: any) => this.checked = e.detail}" class="user-input_2">
                  Label
                </igc-switch>
                <igc-switch LabelPosition="before" ?disabled="${true}" ?checked="${this.checked}" @igcChange="${(e: any) => this.checked = e.detail}" class="user-input_2">
                  Label
                </igc-switch>
              </div>
            </div>
          </div>
          <div class="row-layout group_2">
            <igc-rating label="Label" size="large" value="${this.value3}" @igcChange="${(e: any) => this.value3 = e.detail}" class="user-input_2"></igc-rating>
            <igc-rating label="Label" max="3" size="medium" value="${this.value4}" @igcChange="${(e: any) => this.value4 = e.detail}" class="user-input_2"></igc-rating>
            <igc-rating label="Label" size="small" ?readonly="${true}" ?hover-preview="${true}" ?disabled="${true}" value="${this.value5}" @igcChange="${(e: any) => this.value5 = e.detail}" class="user-input_2"></igc-rating>
          </div>
          <div class="row-layout group_13">
            <igc-avatar size="large" shape="circle">
              <span class="material-icons">
                people
              </span>
            </igc-avatar>
            <igc-avatar size="medium" shape="circle">
              <span class="material-icons">
                people
              </span>
            </igc-avatar>
            <igc-avatar shape="circle">
              <span class="material-icons">
                people
              </span>
            </igc-avatar>
            <igc-avatar initials="AB" size="large"></igc-avatar>
            <igc-avatar initials="AB" size="medium"></igc-avatar>
            <igc-avatar initials="AB"></igc-avatar>
            <igc-avatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" shape="rounded" size="large" class="avatar_3"></igc-avatar>
            <igc-avatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" shape="rounded" size="medium" class="avatar_4"></igc-avatar>
            <igc-avatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" shape="rounded" class="avatar_5"></igc-avatar>
            <igc-avatar src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&amp;w=2592&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" shape="rounded" size="large" class="avatar_6"></igc-avatar>
            <igc-avatar src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&amp;w=2592&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" shape="rounded" size="medium" class="avatar_7"></igc-avatar>
            <igc-avatar src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&amp;w=2592&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" shape="rounded" class="avatar_8"></igc-avatar>
          </div>
        </div>
        <div class="column-layout group_14">
          <igc-input label="Label" placeholder="Placholder" ?outlined="${true}" class="user-input">
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
          <span class="date-picker">DatePicker not yet available in WebComponents</span>
          <igc-textarea label="Label/Placeholder" placeholder="Text Area Content" ?outlined="${true}" class="user-input"></igc-textarea>
          <igc-select ?outlined="${true}" label="Select" placeholder="Placeholder" class="user-input">
            <igc-select-item value="Option">
              Option
            </igc-select-item>
          </igc-select>
          <igc-combo ?outlined="${true}" .data="${this.financialBoxOfficeRevenue}" label="Combo" placeholder="Placeholder" display-key="Franchise" ?single-select="${true}" class="user-input"></igc-combo>
          <igc-input label="Label" placeholder="Placholder" ?outlined="${false}" class="user-input">
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
          <span class="date-picker">DatePicker not yet available in WebComponents</span>
          <igc-textarea label="Label/Placeholder" placeholder="Text Area Content" ?outlined="${false}" class="user-input"></igc-textarea>
          <igc-select ?outlined="${false}" label="Select" placeholder="Placeholder" class="user-input">
            <igc-select-item value="Option">
              Option
            </igc-select-item>
          </igc-select>
          <igc-combo .data="${this.financialBoxOfficeRevenue}" label="Combo" placeholder="Placeholder" display-key="Franchise" ?outlined="${false}" ?single-select="${true}" class="user-input"></igc-combo>
        </div>
        <div class="column-layout group_15">
          <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
          <igc-card class="card_2">
            <igc-card-media class="media-content_3">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" slot="start" size="large" class="button_1">
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
      <div class="row-layout group_16">
        <igc-category-chart .dataSource="${this.financialBoxOfficeRevenue}" chart-type="line" computed-plot-area-margin-mode="series" class="category-chart"></igc-category-chart>
        <igc-category-chart .dataSource="${this.financialBoxOfficeRevenue}" computed-plot-area-margin-mode="series" class="category-chart"></igc-category-chart>
        <igc-grid .data="${this.northwindEmployees}" primary-key="employeeID" display-density="cosy" ?allow-filtering="${true}" filter-mode="excelStyleFilter" class="ig-typography ig-scrollbar grid">
          <igc-column field="employeeID" data-type="number" header="employeeID" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="lastName" data-type="string" header="lastName" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="firstName" data-type="string" header="firstName" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="title" data-type="string" header="title" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="titleOfCourtesy" data-type="string" header="titleOfCourtesy" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="birthDate" data-type="date" header="birthDate" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="hireDate" data-type="date" header="hireDate" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="address.street" data-type="string" header="address street" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="address.city" data-type="string" header="address city" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="address.region" data-type="string" header="address region" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="address.postalCode" data-type="string" header="address postalCode" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="address.country" data-type="string" header="address country" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="address.phone" data-type="string" header="address phone" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="managerID" data-type="number" header="managerID" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="notes" data-type="string" header="notes" ?sortable="${true}" selectable="false"></igc-column>
          <igc-column field="avatarUrl" data-type="string" header="avatarUrl" ?sortable="${true}" selectable="false"></igc-column>
        </igc-grid>
      </div>
      <igc-snackbar action-text="Action" @igcAction="${() => this.snackbar?.toggle()}" id="snackbar" class="notification">
        This is a message
      </igc-snackbar>
      <igc-dialog ?close-on-outside-click="${true}" id="dialog">
        <h5 slot="title">
          Confirmation
        </h5>
        <p>Are you sure you want to do this?</p>
        <div slot="footer">
          <igc-button variant="flat" size="large" @click="${() => this.dialog?.toggle()}">
            Cancel
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" size="large" @click="${() => this.dialog?.toggle()}">
            OK
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
      <span class="notification">Banner not yet available in WebComponents</span>
    `;
  }
}
