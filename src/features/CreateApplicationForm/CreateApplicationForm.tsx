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
import { useState } from "react";
import { PatternFormat } from "react-number-format";
export const CreateApplicationForm = () => {
  const [student, setStudent] = useState("");
  return (
    <Form className={styles.form}>
      <Typography tag="h1" variant="subtitle">
        ОСТАВИТЬ ЗАЯВКУ НА ЗАСЕЛЕНИЕ В ОБЩЕЖИТИЕ ABU
      </Typography>
      <Input label="ФИО" inputSize="lg" type="text" />
      <Input label="Телефон" type="tel" inputSize="lg" />
      <Select<{ value: string; label: string }>
        label="Факультет"
        onSelect={() => {}}
        items={[
          { value: "Dorm", label: "Факультет" },
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
        onSelect={() => {}}
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
      <FileInput label="Удостоверение" content="Выберите файл" />
      <Button type="submit" variant="contained" size="lg">
        Отправить
      </Button>
    </Form>
  );
};
