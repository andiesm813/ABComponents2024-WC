import { expect } from '@open-wc/testing';
import Charts from './charts.js';

describe('Charts', () => {
  it('<app-charts> is an instance of Charts', async () => {
    const element = document.createElement('app-charts');
    expect(element).to.be.instanceOf(Charts);
  });
});
