import { expect } from '@open-wc/testing';
import MouseEvents from './mouse-events.js';

describe('MouseEvents', () => {
  it('<app-mouse-events> is an instance of MouseEvents', async () => {
    const element = document.createElement('app-mouse-events');
    expect(element).to.be.instanceOf(MouseEvents);
  });
});
