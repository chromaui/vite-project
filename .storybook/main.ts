import type { StorybookConfig } from '@storybook/react-vite';
const { mergeConfig } = require('vite');
const turbosnap = require('vite-plugin-turbosnap');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config, { configType }) {
    // return the customized config
    if (configType === 'PRODUCTION') {
      config?.plugins?.push(turbosnap({ rootDir: config.root }));
    }
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: { foo: 'bar' },
      },
    });
  },

  docs: {
    autodocs: true,
  },
};

export default config;
