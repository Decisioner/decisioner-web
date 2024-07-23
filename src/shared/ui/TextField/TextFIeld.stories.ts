import { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'shared/ui/TextField',
  tags: ['autodocs'],
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    placeholder: 'Error',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Disabled',
    disabled: true,
  },
};
