import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, within, waitFor, expect } from 'storybook/test';
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

export const LoggedOut: Story = {
  args: {
    onLogout: fn(),
    onCreateAccount: fn(),
    user: null,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await waitFor(() =>
      expect(
        canvas.queryByRole('button', { name: 'Log in' })
      ).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(
        canvas.queryByRole('button', { name: 'Sign up' })
      ).toBeInTheDocument()
    );
  },
};
