import { Form } from "@/shared/ui/Form/Form";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;
export const BaseFormLg: Story = {
  args: {
    children: "Hello",
  },
};
