import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent, fn, expect } from 'storybook/test';
import { Page } from './Page';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onClick: fn(),
    onLogin: fn(),
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;
// export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  args: {
    user: { name: 'Test User' },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.findByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();

    // const mockEvent = { preventDefault: fn() };
    userEvent.click(loginButton);
  },
};

// // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log out/i });
  // await userEvent.click(clickHyperlink);
};

export const Iphone14: Story = {
  globals: {
    viewport: { value: 'iphone14', isRotated: true },
  },
};
