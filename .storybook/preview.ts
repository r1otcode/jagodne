import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../app/globals.css';


const customViewports = {
  xs: {
    name: "XS",
    styles: {
        width: "320px",
      height: "568px",
    }
  },
    sm: {
    name: "SM",
    styles: {
        width: "390px",
        height: "834px",

    }
    },
    md: {
    name: "MD",
    styles: {
        width: "480px",
        height: "854px",
    }
    },
    lg: {
    name: "LG",
    styles: {
          width: "768px",
            height: "1024px",
    }
    },
    xl: {
    name: "XL",
    styles: {
        width: "1024px",
        height: "600px",
    }
    },
    "2xl": {
    name: "2XL",
    styles: {
        width: "1366px",
        height: "720px",
    }
    },
    "3xl": {
    name: "3XL",
    styles: {
        width: "1536px",
        height: "864px",
    }
    },
    "4xl": {
    name: "4XL",
    styles: {
        width: "1920px",
        height: "1080px",
    }
    }

}

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
