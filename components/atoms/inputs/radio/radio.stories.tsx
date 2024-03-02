import type { Meta, StoryObj } from "@storybook/react";

import { InputRadio } from "./radio";

const meta: Meta<typeof InputRadio> = {
  component: InputRadio,
  tags: ["autodocs"],
  title: "components/atoms/Input Radio",
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
type Story = StoryObj<typeof InputRadio>;

export const Primary: Story = {
  args: {
    status: "default",
    size: "sm",
  },
};
