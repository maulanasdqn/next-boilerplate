import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  title: "components/atoms/Button",
  argTypes: {
    variant: {
      options: ["primary", "secondary", "error", "warning", "success", "info"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    variantType: {
      options: ["solid", "outline"],
      defaultValue: "solid",
      control: { type: "radio" },
    },
    state: {
      options: ["default", "loading"],
      defaultValue: "default",
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Button Primary",
    state: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    children: "Button Secondary",
    state: "default",
  },
};
