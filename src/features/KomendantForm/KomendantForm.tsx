"use client";
import { updateApplication } from "@/shared/api";
import { useRefetch, useRequest } from "@/shared/hooks";
import { Button, Error, FileInput, Form, Success } from "@/shared/ui";
import { ChangeEvent, useState } from "react";

export const KomendantForm = ({
  id,
  close,
}: {
  id: string;
  close: () => void;
}) => {
  const { loading, setLoading, error, setError, success, setSuccess } =
    useRequest();
  const [contract, setContract] = useState<File | null>(null);
  const [statementAndRules, setStatementAndRules] = useState<File | null>(null);
  const { refetch } = useRefetch();
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    console.log({ direction: contract, certificate: statementAndRules });

    const data = new FormData();
    data.append("contract", contract ? contract : "");
    data.append(
      "statement_and_rules",
      statementAndRules ? statementAndRules : ""
    );
    data.append("status", "specialist");
    updateApplication("commandant", data, id)
      .then((data) => {
        console.log(data);
        setSuccess("Файлы успешно добавлены.");
        refetch();
        close();
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
        selected={statementAndRules?.name}
        label="Правила проживания и положение"
        content="Выберите файл"
        checked={!statementAndRules}
        onChange={(e) => {
          if (e.target.files) {
            setStatementAndRules(e.target.files[0]);
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
