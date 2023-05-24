import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import  PageTitle  from '../components/Typography/PageTitle';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PageTitle> = {
  title: 'Typography/PageTitle',
  component: PageTitle,
  parameters: {
    backgrounds: {
      default: 'Dark',
      values: [
        {
          name: 'Dark',
          value: '#323234',
        },
      ],
    },
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'xs',
    },
    chromatic: { viewports: [320, 390, 480, 768, 1024, 1366, 1536, 1920 ] },
  }
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {

   children: 'Jagodne – satysfakcja i sukces mierzone w m2',
    parameters: {
      viewport: {
        //👇 The viewports you want to use
        viewports: INITIAL_VIEWPORTS,
        //👇 Your own default viewport
        defaultViewport: 'iphone6',
      },
    },
  },
};




