"use client";
import { Application, checkApplicationStatus } from "@/shared/api";
import { useRequest } from "@/shared/hooks";
import {
  Button,
  Error,
  FileInput,
  Form,
  Input,
  Select,
  Success,
  Typography,
} from "@/shared/ui";
import { ChangeEvent, useState } from "react";

export const CheckApplicationForm = () => {
  const [id, setId] = useState("");
  const { error, setError, success, setSuccess, loading, setLoading } =
    useRequest();
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    checkApplicationStatus(+id)
      .then((data) => {
        setLoading(false);
        setSuccess(parseApplicationStatus(data));
      })
      .catch((e) => {
        setLoading(false);
        setError("Ошибка. Попробуйте позже.");
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Typography tag="h1" variant="subtitle">
        Проверить статус заявления
      </Typography>
      <Input
        label="ИИН"
        inputSize="lg"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      {error && <Error>{error}</Error>}
      {success && <Success>На рассмотрении {success}</Success>}
      <Button
        type="submit"
        loading={loading}
        disabled={loading}
        variant="contained"
        size="lg"
      >
        Отправить
      </Button>
    </Form>
  );
};

const parseApplicationStatus = (application: Application) => {
  switch (application.status) {
    case "decan":
      return "у деканата";
    case "commandant":
      return "у коменданта";
    case "specialist":
      return "у специалиста по работе с молодежью";
    default:
      return "";
  }
};
