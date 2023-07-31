import type { StorybookConfig } from '@storybook/react-vite';
import type { StorybookConfigVite, ViteFinal } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';
import turbosnap from 'vite-plugin-turbosnap';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins || [];
    // return the customized config
    if (configType === 'PRODUCTION') {
      // ignore @ts-ignore because it's not in the vite types yet
      config.plugins.push(
        turbosnap({
          rootDir: config.root || '',
        })
      );
    }
    return mergeConfig(config, {
      // Your environment configuration here
    });
  },
  docs: {
    autodocs: true,
  },
};
export default config;
