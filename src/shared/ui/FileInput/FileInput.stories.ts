import { FileInput } from "@/shared/ui/FileInput/FileInput";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof FileInput> = {
  component: FileInput,
};

export default meta;
type Story = StoryObj<typeof FileInput>;
export const BaseFileInputLg: Story = {
  args: {
    label: "Удостоверение",
    content: "Выберите файл",
  },
};
