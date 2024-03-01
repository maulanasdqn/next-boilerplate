import type { Meta, StoryObj } from "@storybook/react";

import { InputText } from "./index";

const meta: Meta<typeof InputText> = {
  component: InputText,
  tags: ["autodocs"],
  title: "components/atoms/Input Text",
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
type Story = StoryObj<typeof InputText>;

export const Primary: Story = {
  args: {
    status: "default",
    size: "sm",
  },
};
