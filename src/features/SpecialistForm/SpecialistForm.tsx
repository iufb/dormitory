"use client";
import { updateApplication } from "@/shared/api";
import { useRefetch, useRequest } from "@/shared/hooks";
import { Button, Error, Form, Select, Success } from "@/shared/ui";
import { ChangeEvent, useState } from "react";

export const SpecialistForm = ({
  id,
  close,
}: {
  id: string;
  close: () => void;
}) => {
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
    data.append("status", "end");
    updateApplication("specialist", data, id)
      .then((data) => {
        console.log(data);
        setSuccess("Статус изменен.");
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
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
      <Button
        disabled={loading}
        loading={loading}
        variant="contained"
        size="md"
      >
        Отметить заполнение
      </Button>
    </Form>
  );
};
