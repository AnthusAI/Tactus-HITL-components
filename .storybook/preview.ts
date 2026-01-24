import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "tactus-hitl-theme",
        dark: "tactus-hitl-theme dark",
      },
      defaultTheme: "light",
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
