import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    onLogout: fn(),
    user: { name: 'Test User' },
    onCreateAccount: fn(),
  },
};
