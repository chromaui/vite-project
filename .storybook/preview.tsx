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

    a11y: {
      // I didn't know this was a thing!
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  initialGlobals: {
    viewport: { value: 'iphone14', isRotated: false },
  },
};

export default preview;
