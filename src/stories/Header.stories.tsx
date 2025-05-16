import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, fn, expect, createEvent, fireEvent } from 'storybook/test';
import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
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

// export const LoggedOut: Story = {};
