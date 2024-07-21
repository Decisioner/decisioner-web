import { Meta, StoryObj } from '@storybook/react';

import UnauthenticatedLayout from './UnauthenticatedLayout';

const meta: Meta<typeof UnauthenticatedLayout> = {
  title: 'shared/layouts/UnauthenticatedLayout',
  component: UnauthenticatedLayout,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof UnauthenticatedLayout>;

export const Default: Story = {
  args: {
    slogan: 'Welcome! Register to get access to all functionality',
    title: 'We need just a little information about you',
    subtitle: 'All this information is used to identify you in the system',
    children: 'Children',
  },
};
