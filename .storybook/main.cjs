const {
  mergeConfig
} = require('vite');
const turbosnap = require('vite-plugin-turbosnap');
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],
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
  }
};