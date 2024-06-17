"use client";
import { checkApplicationStatus } from "@/shared/api";
import { useRequest } from "@/shared/hooks";
import { Button, Error, Form, Input, Success, Typography } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";

export const CheckApplicationForm = () => {
  const [id, setId] = useState("");
  const t = useTranslations("forms.checkApplication");
  const { error, setError, success, setSuccess, loading, setLoading } =
    useRequest();
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    checkApplicationStatus(+id)
      .then((data) => {
        setLoading(false);
        setSuccess(t(`success.${data.status}`));
      })
      .catch((e) => {
        setLoading(false);
        if (e.message == "notFound") {
          setError(t("errors.notFound"));
        } else {
          console.log(e);
          setError(t(`${"errors.base"} ${e}`));
        }
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Typography tag="h1" variant="subtitle">
        {t("title")}
      </Typography>
      <Input
        label={t("iin_id")}
        inputSize="lg"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
      <Button
        type="submit"
        loading={loading}
        disabled={loading}
        variant="contained"
        size="lg"
      >
        {t("button")}
      </Button>
    </Form>
  );
};
