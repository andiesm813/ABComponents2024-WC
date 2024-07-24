import { expect } from '@open-wc/testing';
import Forms from './forms.js';

describe('Forms', () => {
  it('<app-forms> is an instance of Forms', async () => {
    const element = document.createElement('app-forms');
    expect(element).to.be.instanceOf(Forms);
  });
});
