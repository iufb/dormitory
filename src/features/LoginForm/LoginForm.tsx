import { Button, Form, Input, Typography } from "@/shared/ui";
import styles from "./LoginForm.module.css";
export const LoginForm = () => {
  return (
    <Form className={styles.form}>
      <Typography tag="h1" variant="subtitle">
        Войдите
      </Typography>
      <Input label="Логин" inputSize="lg" type="text" />
      <Input label="Пароль" inputSize="lg" type="password" />
      <Button type="submit" variant="contained" size="lg">
        Вход
      </Button>
    </Form>
  );
};
