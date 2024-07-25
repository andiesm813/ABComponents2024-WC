import { expect } from '@open-wc/testing';
import Lists from './lists.js';

describe('Lists', () => {
  it('<app-lists> is an instance of Lists', async () => {
    const element = document.createElement('app-lists');
    expect(element).to.be.instanceOf(Lists);
  });
});
