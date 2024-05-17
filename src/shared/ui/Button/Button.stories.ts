import { Button } from "@/shared/ui/Button/Button";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;
export const ContainedLg: Story = {
  args: {
    variant: "contained",
    children: "Button",
    size: "lg",
  },
};
export const ContainedMd: Story = {
  args: {
    variant: "contained",
    children: "Button",
    size: "md",
  },
};
export const ContainedSm: Story = {
  args: {
    variant: "contained",
    children: "Button",
    size: "sm",
    disabled: true,
  },
};

export const OutlinedLg: Story = {
  args: {
    variant: "outlined",
    children: "Button",
    size: "lg",
  },
};
export const OutlinedMd: Story = {
  args: {
    variant: "outlined",
    children: "Button",
    size: "md",
  },
};
export const OutlinedSm: Story = {
  args: {
    variant: "outlined",
    children: "Button",
    size: "sm",
  },
};
