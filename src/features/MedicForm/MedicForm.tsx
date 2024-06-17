"use client";
import { updateApplication } from "@/shared/api";
import { useRefetch, useRequest } from "@/shared/hooks";
import { Button, Error, Form, Select, Success } from "@/shared/ui";
import { ChangeEvent, useState } from "react";

export const MedicForm = ({ id }: { id: string }) => {
  const { loading, setLoading, error, setError, success, setSuccess } =
    useRequest();
  const [medAdmission, setMedAdmission] = useState<string>("");
  const { refetch } = useRefetch();
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const data = new FormData();
    data.append("med_admission", medAdmission === "Да" ? "true" : "false");
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
      <Select
        label="Одобрен медиком"
        items={["Да", "Нет"]}
        selected={medAdmission}
        onSelect={(item) => setMedAdmission(item)}
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
