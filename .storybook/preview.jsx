import React from "react";

import { ThemeDS } from "../src/components/ThemeDS/ThemeDS";
import { Box } from "../src/components/Box/Box";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <ThemeDS>
        <Box padding="b-32 t-24 x-24">
          <Story />
        </Box>
      </ThemeDS>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    layout: "fullscreen",
    status: {
      statuses: {
        //? add custom statuses.
      },
    },
  },
};

export default preview;