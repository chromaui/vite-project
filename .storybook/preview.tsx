import React from 'react';
import { allModes } from './modes';

const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  globals: {
    viewport: {
      default: 'small mobile',
    },
  },
  chromatic: {
    modes: {
      mobile: allModes.s,
    },
  },

  tags: ['autodocs'],
};

export default parameters;
