"use client";
import {
  Button,
  Error,
  FileInput,
  Form,
  Input,
  PhoneMask,
  Select,
  Success,
  Typography,
} from "@/shared/ui";
import styles from "./CreateApplicationForm.module.css";
import { FormEvent, FormEventHandler, useState } from "react";
import { CreateApplication } from "@/shared/api";
import { useRequest } from "@/shared/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { PatternFormat } from "react-number-format";
import { faculties } from "@/shared/contants";
interface CreateApplicationForm {
  so_name: string;
  name: string;
  iin_id: string;
  id_card: FileList;
}
export const CreateApplicationForm = () => {
  const [tel, setTel] = useState("");
  const [faculty, setFaculty] = useState("");
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<CreateApplicationForm>({ mode: "onBlur" });

  const { loading, setLoading, error, setError, success, setSuccess } =
    useRequest();
  const onSubmit: SubmitHandler<CreateApplicationForm> = (data) => {
    setLoading(true);
    setError("");
    setSuccess("");
    const uploadData = {
      ...data,
      id_card: data.id_card[0],
      facultet: faculty,
      tel,
      status: "decan",
    };
    const formData = new FormData();
    Object.keys(uploadData).forEach((key) =>
      formData.append(key, uploadData[key as keyof typeof uploadData]),
    );
    console.log(uploadData);

    CreateApplication(formData)
      .then(() => {
        setSuccess("Заявка создана.");
        setFaculty("");
        reset();
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e, "EROERO");

        if ("iin_id" in e) {
          setError(`Oшибка, заявка с таким ИИН уже существует.`);
        } else {
          setError(`Oшибка, ${e.detail ? e.detail : "что-то пошло не так."}`);
        }
      });
  };
  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Typography tag="h1" variant="subtitle">
        ОСТАВИТЬ ЗАЯВКУ НА ЗАСЕЛЕНИЕ В ОБЩЕЖИТИЕ ABU
      </Typography>
      <Input
        {...register("so_name")}
        label="Фaмилия"
        inputSize="lg"
        type="text"
        required
      />
      <Input
        {...register("name")}
        label="Имя"
        inputSize="lg"
        type="text"
        required
      />
      <PhoneMask value={tel} onChange={(e) => setTel(e.target.value)} />
      <Input
        {...register("iin_id", {
          required: "Обязательное поле",
          validate: (value) =>
            value.length === 12 || "Длина должна быть равна 12",
        })}
        label="ИИН"
        inputSize="lg"
        type="number"
      />
      <ErrorMessage
        errors={errors}
        name="iin_id"
        render={({ message }) => <Error>{message}</Error>}
      />
      <FileInput
        selected={watch("id_card") && watch("id_card")[0]?.name}
        {...register("id_card")}
        label="Удостоверение (pdf)"
        content="Выберите файл"
        accept=".pdf"
        required
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
        disabled={!tel || !faculty}
      >
        Отправить
      </Button>
    </Form>
  );
};
