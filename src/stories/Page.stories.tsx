import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent, fn, expect } from 'storybook/test';
import { Page } from './Page';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onClick: fn(),
    onLogin: fn(),
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggingIn: Story = {
  args: {
    user: { name: 'Test User' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.findByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    userEvent.click(loginButton);
  },
};

export const LoggingOut: Story = {
  play: async ({ canvasElement, context }) => {
    await LoggingIn.play(context);
    const canvas = within(canvasElement);
    const logoutButton = await canvas.findByRole('button', {
      name: /Log Out/i,
    });
    await expect(logoutButton).toBeInTheDocument();
  },
};

export const Iphone14: Story = {
  globals: {
    viewport: { value: 'iphone14', isRotated: true },
  },
};
