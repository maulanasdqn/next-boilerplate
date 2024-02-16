import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./index";

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ["autodocs"],
  title: "components/atoms/Tag",
  argTypes: {
    variant: {
      options: ["error", "warning", "success", "info"],
      defaultValue: "success",
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    children: "Success Case",
    variant: "success",
  },
};
