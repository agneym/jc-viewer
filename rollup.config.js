import { createDefaultConfig } from '@open-wc/building-rollup';

import commonjs from 'rollup-plugin-commonjs';

// if you need to support IE11 use `createCompatibilityConfig` instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

const defaultConfig = createDefaultConfig({
  input: './index.html',
  output: {
    chunkFileNames: '[name].js',
  },
  plugins: {
    workbox: false,
  },
});

export default {
  ...defaultConfig,
  plugins: [...defaultConfig.plugins, commonjs()],
};
