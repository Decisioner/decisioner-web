import type { Preview, StoryFn } from '@storybook/react';

import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../src/core/theme';

import '../src/core/theme/styles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const withMuiTheme = (Story: StoryFn) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];
export default preview;
