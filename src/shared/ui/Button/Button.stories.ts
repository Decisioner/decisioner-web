import { Meta, StoryObj } from '@storybook/react/*';

import Button from './Button';
import { ButtonColor } from './Button.props';

const meta: Meta<typeof Button> = {
  title: 'shared/ui/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Gray: Story = {
  args: {
    children: 'Button',
    color: ButtonColor.GRAY,
  },
};

export const Red: Story = {
  args: {
    children: 'Button',
    color: ButtonColor.RED,
  },
};

export const RedOutline: Story = {
  args: {
    children: 'Button',
    color: ButtonColor.RED,
    variant: 'outlined',
  },
};

export const Green: Story = {
  args: {
    children: 'Button',
    color: ButtonColor.GREEN,
  },
};
