import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, fn, expect } from '@storybook/test';
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
  // play: async ({ args, canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const loginButton = await canvas.findByRole('button', { name: /Log in/i });
  //   await expect(loginButton).toBeInTheDocument();

  //   // const mockEvent = { preventDefault: fn() };
  //   userEvent.click(loginButton);
  //   await expect(args.onLogin).toHaveBeenCalled();
  //   // expect(mockEvent.preventDefault).toBeCalled();
  //   // const clickHyperlink = createEvent.click(loginButton);
  //   // const isPrevented = fireEvent(loginButton, clickHyperlink);
  //   // expect(clickHyperlink.defaultPrevented).toBe(true);
  //   // expect(isPrevented).toBe(false);
  //   // await userEvent.click(clickHyperlink);
  // },
};

// // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// LoggedIn.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('button', { name: /Log out/i });
//   const clickHyperlink = createEvent.click(loginButton);
//   fireEvent(loginButton, clickHyperlink);
//   // await userEvent.click(clickHyperlink);
// };
