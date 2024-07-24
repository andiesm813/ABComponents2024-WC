import { expect } from '@open-wc/testing';
import Radiogroup from './radiogroup.js';

describe('Radiogroup', () => {
  it('<app-radiogroup> is an instance of Radiogroup', async () => {
    const element = document.createElement('app-radiogroup');
    expect(element).to.be.instanceOf(Radiogroup);
  });
});
