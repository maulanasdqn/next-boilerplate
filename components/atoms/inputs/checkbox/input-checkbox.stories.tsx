import type { Meta, StoryObj } from "@storybook/react";

import { InputCheckbox } from "./index";

const meta: Meta<typeof InputCheckbox> = {
  component: InputCheckbox,
  tags: ["autodocs"],
  title: "components/atoms/Input Checkbox",
  argTypes: {
    status: {
      options: ["default", "error", "warning", "success"],
      defaultValue: "default",
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      defaultValue: "sm",
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputCheckbox>;

export const Primary: Story = {
  args: {
    status: "default",
    size: "sm",
  },
};
