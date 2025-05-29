import { Preview } from '@storybook/react-vite';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import { allModes } from './modes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    chromatic: {
      modes: {
        mobile: allModes.mobile,
      },
    },
    tags: ['autodocs'],
  },
  initialGlobals: {
    viewport: { value: 'iphone14', isRotated: false },
  },
};

export default preview;
