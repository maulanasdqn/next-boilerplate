import type { Meta, StoryObj } from "@storybook/react";

import { InputTextArea } from "./index";

const meta: Meta<typeof InputTextArea> = {
  component: InputTextArea,
  tags: ["autodocs"],
  title: "components/atoms/Text Area",
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
type Story = StoryObj<typeof InputTextArea>;

export const Primary: Story = {
  args: {
    status: "default",
    size: "sm",
  },
};
