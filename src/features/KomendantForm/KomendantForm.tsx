"use client";
import { updateApplication } from "@/shared/api";
import { useRefetch, useRequest } from "@/shared/hooks";
import { Form, FileInput, Button, Success, Error } from "@/shared/ui";
import { useState, ChangeEvent } from "react";

export const KomendantForm = ({ id }: { id: string }) => {
  const { loading, setLoading, error, setError, success, setSuccess } =
    useRequest();
  const [contract, setContract] = useState<File | null>(null);
  const [rules, setRules] = useState<File | null>(null);
  const [statement, setStatement] = useState<File | null>(null);
  const { refetch } = useRefetch();
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    console.log({ direction: contract, certificate: rules });

    const data = new FormData();
    data.append("contract", contract ? contract : "");
    data.append("rules", rules ? rules : "");
    data.append("statement", statement ? statement : "");
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
        selected={contract?.name}
        label="Договор"
        content="Выберите файл"
        checked={!contract}
        onChange={(e) => {
          if (e.target.files) {
            setContract(e.target.files[0]);
          }
        }}
        accept=".pdf"
        required
      />
      <FileInput
        selected={statement?.name}
        label="Положение"
        content="Выберите файл"
        checked={!statement}
        onChange={(e) => {
          if (e.target.files) {
            setStatement(e.target.files[0]);
          }
        }}
        accept=".pdf"
        required
      />

      <FileInput
        selected={rules?.name}
        label="Правила проживания"
        content="Выберите файл"
        checked={!rules}
        onChange={(e) => {
          if (e.target.files) {
            setRules(e.target.files[0]);
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
