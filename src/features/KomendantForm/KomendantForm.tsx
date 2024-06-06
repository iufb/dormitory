"use client";
import { updateApplication } from "@/shared/api";
import { useRefetch, useRequest } from "@/shared/hooks";
import { Form, FileInput, Button, Success, Error } from "@/shared/ui";
import { useState, ChangeEvent } from "react";

export const KomendantForm = ({ id }: { id: string }) => {
  const { loading, setLoading, error, setError, success, setSuccess } =
    useRequest();
  const [kOne, setKOne] = useState<File | null>(null);
  const [kTwo, setKTwo] = useState<File | null>(null);
  const { refetch } = useRefetch();
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    console.log({ direction: kOne, certificate: kTwo });

    const data = new FormData();
    data.append("k_one", kOne ? kOne : "");
    data.append("k_two", kTwo ? kTwo : "");
    data.append("status", "specialist");
    updateApplication("commandant", data, id)
      .then((data) => {
        console.log(data);
        setSuccess("Файлы успешно добавлены.");
        refetch();
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(`Oшибка, ${e.detail ? e.detail : "что-то пошло не так."}`);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FileInput
        label="Договор"
        content="Выберите файл"
        checked={!kOne}
        onChange={(e) => {
          if (e.target.files) {
            setKOne(e.target.files[0]);
          }
        }}
        accept=".pdf"
        required
      />
      <FileInput
        label="Правила проживания"
        content="Выберите файл"
        checked={!kTwo}
        onChange={(e) => {
          if (e.target.files) {
            setKTwo(e.target.files[0]);
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
