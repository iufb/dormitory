"use client";
import { useRequest } from "@/shared/hooks";
import {
  Button,
  FileInput,
  Form,
  Input,
  Select,
  Typography,
} from "@/shared/ui";
import { useState } from "react";

export const CheckApplicationForm = () => {
  const [id, setId] = useState("");
  const { error, setError, success, setSuccess, loading, setLoading } =
    useRequest();
  return (
    <Form>
      <Typography tag="h1" variant="subtitle">
        Проверить статус заявления
      </Typography>
      <Input
        label="Номер заявления"
        inputSize="lg"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
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
