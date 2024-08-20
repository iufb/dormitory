"use client";
import { Button, Error, Modal, Success } from "@/shared/ui";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./DeleteApplication.module.css";
import { useRefetch, useRequest } from "@/shared/hooks";
import { deleteApplication } from "@/shared/api";
import { getCookie } from "cookies-next";
export const DeleteApplicationBtn = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const role = getCookie("role");
  const { loading, setLoading, error, setError, success, setSuccess } =
    useRequest();
  const { refetch } = useRefetch();
  const handleDelete = () => {
    setLoading(true);
    setError("");
    setSuccess("");
    if (role)
      deleteApplication(id, role.includes("decan") ? "decan" : role)
        .then(() => {
          setSuccess("Удалено");
          refetch(() => setOpen(false));
        })
        .catch((e) => {
          console.log(e);
          setError("Ошибка при удалении");
        })
        .finally(() => {
          setLoading(false);
        });
  };
  return (
    <>
      <Button size="md" variant="contained" onClick={() => setOpen(true)}>
        Удалить заявку
      </Button>
      {open && (
        <Modal
          className={styles.modal}
          closeIcon={
            <IoClose
              size={30}
              className={styles.closeIcon}
              onClick={() => setOpen(false)}
            />
          }
        >
          <h2>Вы уверены, что хотите удалить заявку?</h2>
          <Error>{error}</Error>
          <Success>{success}</Success>
          <Button
            disabled={loading}
            loading={loading}
            variant="contained"
            size="md"
            onClick={handleDelete}
          >
            Да
          </Button>
          <Button
            disabled={loading}
            onClick={() => setOpen(false)}
            variant="outlined"
            size="md"
          >
            Отменить
          </Button>
        </Modal>
      )}
    </>
  );
};
