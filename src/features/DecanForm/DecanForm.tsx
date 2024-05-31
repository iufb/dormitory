import { Button, FileInput, Form } from "@/shared/ui";

export const DecanForm = () => {
  return (
    <Form>
      <FileInput label="Направление" content="Выберите файл" />
      <FileInput label="Справка о учебе" content="Выберите файл" />
      <Button variant="contained" size="md">
        Сохранить
      </Button>
    </Form>
  );
};
