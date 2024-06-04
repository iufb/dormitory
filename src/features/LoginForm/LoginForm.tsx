"use client";
import { Button, Error, Form, Input, Typography } from "@/shared/ui";
import styles from "./LoginForm.module.css";
import { FormEvent, useState } from "react";
import { GetRole, LoginUser } from "@/shared/api";
import { cookies } from "next/headers";
import { useRequest } from "@/shared/hooks";
import { useParams, useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { locale } = useParams();
  const { error, setError, loading, setLoading } = useRequest();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setError("");
    setLoading(true);
    e.preventDefault();
    console.log(username, password);

    LoginUser({ username, password })
      .then((data) => {
        setCookie("token", data.token);
        GetRole(`Token ${data.token}`).then((data) => {
          setCookie("role", data.userprofile.role);
          router.push(`/${locale}/admin`);
        });

        setLoading(false);
      })
      .catch((e) => {
        setError("Oшибка при входе.");

        setLoading(false);
      });
  };
  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Typography tag="h1" variant="subtitle">
        Войдите
      </Typography>
      <Input
        label="Логин"
        inputSize="lg"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="Пароль"
        inputSize="lg"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Error>{error}</Error>}
      <Button
        disabled={loading}
        loading={loading}
        type="submit"
        variant="contained"
        size="lg"
      >
        Вход
      </Button>
    </Form>
  );
};
