import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import  Button  from '../components/Button/';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'xs',
    },
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {

   children: 'Dowiedz się więcej',
    parameters: {
      viewport: {
        //👇 The viewports you want to use
        viewports: INITIAL_VIEWPORTS,
        //👇 Your own default viewport
        defaultViewport: 'iphone6',
      },
      chromatic: { viewports: [320, 390, 480, 768, 1024, 1366, 1536, 1920 ] },
    },
  },
};




