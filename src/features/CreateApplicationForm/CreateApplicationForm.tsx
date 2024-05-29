"use client";
import {
  Button,
  FileInput,
  Form,
  Input,
  Select,
  Typography,
} from "@/shared/ui";
import styles from "./CreateApplicationForm.module.css";
import { FormEvent, FormEventHandler, useState } from "react";
import { CreateApplication } from "@/shared/api";
export const CreateApplicationForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [iin, setIin] = useState("");
  const [udo, setUdo] = useState<File | null>(null);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("so_name", surname);
    data.append("iin_id", iin);
    data.append("id_card", udo ? udo : "");
    CreateApplication(data).then(() => {
      setName("");
      setIin("");
      setSurname("");
      setUdo(null);
    });
  };
  return (
    <Form className={styles.form} onSubmit={onSubmit}>
      <Typography tag="h1" variant="subtitle">
        ОСТАВИТЬ ЗАЯВКУ НА ЗАСЕЛЕНИЕ В ОБЩЕЖИТИЕ ABU
      </Typography>
      <Input
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        label="Фaмилия"
        inputSize="lg"
        type="text"
      />
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Имя"
        inputSize="lg"
        type="text"
      />
      <Input
        value={iin}
        onChange={(e) => setIin(e.target.value)}
        label="ИИН"
        inputSize="lg"
        type="text"
      />
      <FileInput
        checked={!udo}
        onChange={(e) => {
          if (e.target.files) {
            setUdo(e.target.files[0]);
          }
        }}
        label="Удостоверение"
        content="Выберите файл"
        accept=".pdf"
        required
      />
      <Button
        type="submit"
        variant="contained"
        size="lg"
        disabled={!name && !surname && !udo}
      >
        Отправить
      </Button>
    </Form>
  );
};
