import { expect } from '@open-wc/testing';
import AvatarsImages from './avatars-images.js';

describe('AvatarsImages', () => {
  it('<app-avatars-images> is an instance of AvatarsImages', async () => {
    const element = document.createElement('app-avatars-images');
    expect(element).to.be.instanceOf(AvatarsImages);
  });
});
