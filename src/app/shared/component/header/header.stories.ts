import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { HeaderComponent } from './header.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<HeaderComponent> = {
  title: 'Layout/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    appName: {control: 'select', options: ['inspection' , 'somme-en-espece']}
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const defautHeader: Story = {
  name: 'Header IP',
  args: {
    name: 'Thamer HMAIDI',
  },
};
