/** @type { import('@storybook/react-vite').Preview } */
const preview = {
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