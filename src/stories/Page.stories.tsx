import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;
export const LoggedOut: Story = {};

export const LoggedIn: Story = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
