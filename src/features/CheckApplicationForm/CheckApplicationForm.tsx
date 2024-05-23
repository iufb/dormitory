import {
  Button,
  FileInput,
  Form,
  Input,
  Select,
  Typography,
} from "@/shared/ui";

export const CheckApplicationForm = () => {
  return (
    <Form>
      <Typography tag="h1" variant="subtitle">
        Проверить статус заявления
      </Typography>
      <Input label="Номер заявления" inputSize="lg" type="text" />
      <Button type="submit" variant="contained" size="lg">
        Отправить
      </Button>
    </Form>
  );
};
