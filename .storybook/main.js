const {
  mergeConfig
} = require('vite');
const turbosnap = require('vite-plugin-turbosnap');
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, {
    configType
  }) {
    // return the customized config
    if (configType === 'PRODUCTION') {
      config.plugins.push(turbosnap({
        rootDir: config.root
      }));
    }
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: {
          foo: 'bar'
        }
      }
    });
  },
  docs: {
    autodocs: true
  }
};
export default config;