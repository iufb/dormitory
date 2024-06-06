"use client";
import { updateApplication } from "@/shared/api";
import { useRequest, useRefetch } from "@/shared/hooks";
import { FileInput, Success, Button, Error, Form } from "@/shared/ui";
import { useState, ChangeEvent } from "react";

export const MedicForm = ({ id }: { id: string }) => {
  const { loading, setLoading, error, setError, success, setSuccess } =
    useRequest();
  const [medAdmission, setMedAdmission] = useState<File | null>(null);
  const { refetch } = useRefetch();
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const data = new FormData();
    data.append("med_admission", medAdmission ? medAdmission : "");
    data.append("status", "commandant");
    updateApplication("medic", data, id)
      .then((data) => {
        console.log(data);
        setSuccess("Файлы успешно добавлены.");
        setLoading(false);
        refetch();
      })
      .catch((e) => {
        setLoading(false);
        setError(`Oшибка, ${e.detail ? e.detail : "что-то пошло не так."}`);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FileInput
        selected={medAdmission?.name}
        label="Мед. допуск"
        content="Выберите файл"
        checked={!medAdmission}
        onChange={(e) => {
          if (e.target.files) {
            setMedAdmission(e.target.files[0]);
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
