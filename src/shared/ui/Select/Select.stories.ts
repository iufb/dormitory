import { Select } from "@/shared/ui/Select/Select";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select<{ value: string; label: string }>>;
export const BaseSelectLg: Story = {
  args: {
    label: "Общежитие",
    items: [
      { value: "Dorm", label: "Общежитие" },
      { value: "Hello", label: "Привет" },
      { value: "Hello", label: "Привет" },
      { value: "Hello", label: "Привет" },
      { value: "Hello", label: "Привет" },
      { value: "Hello", label: "Привет" },
      { value: "Hello", label: "Привет" },
      { value: "Hello", label: "Привет" },
      { value: "Hello", label: "Привет" },
      { value: "Hello", label: "Привет" },
      { value: "Hello", label: "Привет" },
    ],
    getValueString: (item) => item.label,
  },
};
