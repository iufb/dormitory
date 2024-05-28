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
  const [student, setStudent] = useState("");
  const [tel, setTel] = useState("");
  const [fac, setFac] = useState("");
  const [dor, setDor] = useState("");
  const [udo, setUdo] = useState<File | null>(null);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("student", student);
    data.append("tel", tel);
    data.append("fac", fac);
    data.append("dor", dor);
    data.append("udo", udo ? udo : "");
    CreateApplication(data).then(() => {
      setStudent("");
      setTel("");
      setUdo(null);
    });
  };
  return (
    <Form className={styles.form} onSubmit={onSubmit}>
      <Typography tag="h1" variant="subtitle">
        ОСТАВИТЬ ЗАЯВКУ НА ЗАСЕЛЕНИЕ В ОБЩЕЖИТИЕ ABU
      </Typography>
      <Input
        value={student}
        onChange={(e) => setStudent(e.target.value)}
        label="ФИО"
        inputSize="lg"
        type="text"
      />
      <Input
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        label="Телефон"
        type="tel"
        inputSize="lg"
      />
      <Select<{ value: string; label: string }>
        label="Факультет"
        onSelect={(item) => {
          setFac(item.value);
        }}
        items={[
          { value: "FAC", label: "Факультет" },
          { value: "Hello", label: "Привет" },
          { value: "Hello", label: "Привет" },
          { value: "Hello", label: "Привет" },
          { value: "Hello", label: "Привет" },
          { value: "Hello", label: "Привет" },
        ]}
        getValueString={(item) => item.label}
      />
      <Select
        label="Общежитие"
        onSelect={(item) => {
          setDor(item.value);
        }}
        items={[
          { value: "Dorm", label: "Общежитие" },
          { value: "Hello", label: "Привет" },
          { value: "Hello", label: "Привет" },
          { value: "Hello", label: "Привет" },
          { value: "Hello", label: "Привет" },
          { value: "Hello", label: "Привет" },
        ]}
        getValueString={(item) => item.label}
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
        disabled={!student && !tel && !udo}
      >
        Отправить
      </Button>
    </Form>
  );
};
