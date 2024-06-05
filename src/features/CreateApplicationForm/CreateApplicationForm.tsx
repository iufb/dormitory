"use client";
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
import styles from "./CreateApplicationForm.module.css";
import { FormEvent, FormEventHandler, useState } from "react";
import { CreateApplication } from "@/shared/api";
import { useRequest } from "@/shared/hooks";
const dormitories = ["Общежитие 1", "Общежитие 2"];
const faculties = ["Факультет 1", "Факультет 2"];
export const CreateApplicationForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [iin, setIin] = useState("");
  const [dormitory, setDormitory] = useState("");
  const [faculty, setFaculty] = useState("");
  const [udo, setUdo] = useState<File | null>(null);
  const { loading, setLoading, error, setError, success, setSuccess } =
    useRequest();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    console.log({ name, surname, iin, dormitory, faculty, udo });

    const data = new FormData();
    data.append("name", name);
    data.append("so_name", surname);
    data.append("iin_id", iin);
    data.append("facultet", faculty);
    data.append("obshezhitie", dormitory);
    data.append("tel", phone);
    data.append("id_card", udo ? udo : "");
    data.append("status", "decan");
    CreateApplication(data)
      .then(() => {
        setSuccess("Заявка создана.");
        setName("");
        setIin("");
        setSurname("");
        setFaculty("");
        setPhone("");
        setDormitory("");
        setUdo(null);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(`Oшибка, ${e.detail ? e.detail : "что-то пошло не так."}`);
      });
  };
  const isDisabled = () => {
    if (name == "") return true;
    if (!surname) return true;
    if (!iin) return true;
    if (!dormitory) return true;
    if (!faculty) return true;
    if (!udo) return true;
    return false;
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
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        label="Телефон"
        inputSize="lg"
        type="text"
      />

      <Input
        value={iin}
        onChange={(e) => setIin(e.target.value)}
        label="ИИН"
        inputSize="lg"
        type="number"
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
      <Select
        label="Общежитие"
        onSelect={(item) => setDormitory(item)}
        items={dormitories}
        getValueString={(item) => item}
      />
      <Select
        label="Факультет"
        onSelect={(item) => setFaculty(item)}
        items={faculties}
        getValueString={(item) => item}
      />

      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
      <Button
        type="submit"
        variant="contained"
        loading={loading}
        size="lg"
        disabled={isDisabled()}
      >
        Отправить
      </Button>
    </Form>
  );
};
