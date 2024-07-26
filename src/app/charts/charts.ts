import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IgcCategoryChartModule } from '@infragistics/igniteui-webcomponents-charts';
import { ModuleManager } from '@infragistics/igniteui-webcomponents-core';
import { TeamGrowthType } from '../models/DashboardData/team-growth-type';
import { dashboardDataService } from '../services/DashboardData-service';

ModuleManager.register(IgcCategoryChartModule);

@customElement('app-charts')
export default class Charts extends LitElement {
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
      gap: 24px;
      position: relative;
      padding: 24px;
      width: 600px;
      min-width: 600px;
      max-width: 600px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .category-chart {
      min-width: 400px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .category-chart_1 {
      --brushes: #893976 #FBA650 #E14778 #37AF79 #FD7E50;
      --outlines: #893976 #FBA650 #E14778 #37AF79 #FD7E50;
      --marker-brushes: #893976 #FBA650 #E14778 #37AF79 #FD7E50;
      --marker-outlines: #893976 #FBA650 #E14778 #37AF79 #FD7E50;
      min-width: 400px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    dashboardDataService.getTeamGrowthList().then(data => this.dashboardDataTeamGrowth = data);
  }

  @state()
  private dashboardDataTeamGrowth: TeamGrowthType[] = [];

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <p class="typography__subtitle-2 text">
          Chart With Default Palette
        </p>
        <igc-category-chart .dataSource="${this.dashboardDataTeamGrowth}" chart-type="area" computed-plot-area-margin-mode="series" class="category-chart"></igc-category-chart>
        <p class="typography__subtitle-2 text">
          Chart With Custom Palette
        </p>
        <igc-category-chart .dataSource="${this.dashboardDataTeamGrowth}" chart-type="area" computed-plot-area-margin-mode="series" class="category-chart_1"></igc-category-chart>
      </div>
    `;
  }
}
