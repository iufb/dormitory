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
import { useTranslations } from "next-intl";
interface CreateApplicationForm {
  so_name: string;
  name: string;
  iin_id: string;
  id_card: FileList;
}
export const CreateApplicationForm = () => {
  const [tel, setTel] = useState("");
  const [faculty, setFaculty] = useState("");
  const t = useTranslations("forms.createApplication");
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
        setSuccess(t("success"));
        setFaculty("");
        reset();
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        if ("iin_id" in e) {
          setError(t("errors.iin_id"));
        } else {
          setError(
            t("errors.base", {
              detail: `${e.detail ? e.detail : "что-то пошло не так."}`,
            }),
          );
        }
      });
  };
  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Typography tag="h1" variant="subtitle">
        {t("title")}
      </Typography>
      <Input
        {...register("so_name")}
        label={t("so_name")}
        inputSize="lg"
        type="text"
        required
      />
      <Input
        {...register("name")}
        label={t("name")}
        inputSize="lg"
        type="text"
        required
      />
      <PhoneMask value={tel} onChange={(e) => setTel(e.target.value)} />
      <Input
        {...register("iin_id", {
          required: t("validation.required"),
          validate: (value) => value.length === 12 || t("validation.length"),
        })}
        label={t("iin_id")}
        inputSize="lg"
        type="number"
      />
      <ErrorMessage
        errors={errors}
        name="iin_id"
        render={({ message }) => <Error>{message}</Error>}
      />
       <Select
        label={t("faculty")}
        onSelect={(item) => setFaculty(item)}
        items={faculties}
        getValueString={(item) => item}
      />
     <FileInput
        selected={watch("id_card") && watch("id_card")[0]?.name}
        {...register("id_card")}
        label={`${t("id_card")} (pdf)`}
        accept=".pdf"
        required
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
        {t("button")}
      </Button>
    </Form>
  );
};
