import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import  Paragraph  from '../components/Typography/Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
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
  }
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  args: {

   children: 'Specjalizujemy się w projektowaniu i wykonawstwie nowoczesnych obiektów budowlanych.',
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




