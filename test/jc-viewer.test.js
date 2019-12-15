import { html, fixture, expect } from '@open-wc/testing';

import '../jc-viewer.js';

describe('JcViewer', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <jc-viewer></jc-viewer>
    `);

    expect(el.data).to.equal(undefined);
  });
});
