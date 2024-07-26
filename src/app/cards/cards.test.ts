import { expect } from '@open-wc/testing';
import Cards from './cards.js';

describe('Cards', () => {
  it('<app-cards> is an instance of Cards', async () => {
    const element = document.createElement('app-cards');
    expect(element).to.be.instanceOf(Cards);
  });
});
