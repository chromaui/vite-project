import type { Meta, StoryObj } from '@storybook/react';
import { within, fn, expect, createEvent, fireEvent } from '@storybook/test';
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
  args: {},
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.findByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    const clickHyperlink = createEvent.click(loginButton);
    const isPrevented = fireEvent(loginButton, clickHyperlink);
    await expect(args.onLogin).toHaveBeenCalled();
    expect(isPrevented).toBe(true);
  },
};

export const LoggedOut: Story = {};
