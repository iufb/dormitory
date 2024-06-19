"use client";
import { updateApplication } from "@/shared/api";
import { useRefetch, useRequest } from "@/shared/hooks";
import { Button, Error, FileInput, Form, Success } from "@/shared/ui";
import { ChangeEvent, useState } from "react";
interface DecanFormProps {
  id: string;
  close: () => void;
}
export const DecanForm = ({ id, close }: DecanFormProps) => {
  const { loading, setLoading, error, setError, success, setSuccess } =
    useRequest();
  const [direction, setDirection] = useState<File | null>(null);
  const [certificate, setCertificate] = useState<File | null>(null);
  const { refetch } = useRefetch();
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    console.log({ direction, certificate });

    const data = new FormData();
    data.append("direction", direction ? direction : "");
    data.append("certificate", certificate ? certificate : "");
    data.append("status", "medic");
    updateApplication("decan", data, id)
      .then((data) => {
        console.log(data);
        setSuccess("Файлы успешно добавлены.");
        setLoading(false);
        refetch(close);
      })
      .catch((e) => {
        setLoading(false);
        setError(`Oшибка, ${e.detail ? e.detail : "что-то пошло не так."}`);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FileInput
        selected={direction?.name}
        label="Направление"
        checked={!direction}
        onChange={(e) => {
          if (e.target.files) {
            setDirection(e.target.files[0]);
          }
        }}
        accept=".pdf"
        required
      />
      <FileInput
        selected={certificate?.name}
        label="Справка о месте учебы"
        checked={!certificate}
        onChange={(e) => {
          if (e.target.files) {
            setCertificate(e.target.files[0]);
          }
        }}
        accept=".pdf"
        required
      />
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
      <Button
        disabled={loading}
        loading={loading}
        variant="contained"
        size="md"
      >
        Сохранить
      </Button>
    </Form>
  );
};
