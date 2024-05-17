import { Input } from "@/shared/ui/Input/Input";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;
export const BaseInputLg: Story = {
  args: {
    label: "Email",
    inputSize: "lg",
  },
};
export const BaseInputMd: Story = {
  args: {
    label: "Email",
    inputSize: "md",
  },
};
