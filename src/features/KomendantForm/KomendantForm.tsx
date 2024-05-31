import { Form, FileInput, Button } from "@/shared/ui";

export const KomendantForm = () => {
  return (
    <Form>
      <FileInput label="Договор" content="Выберите файл" />
      <FileInput label="Правила проживания" content="Выберите файл" />
      <Button variant="contained" size="md">
        Сохранить
      </Button>
    </Form>
  );
};
