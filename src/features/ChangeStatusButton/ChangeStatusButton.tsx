"use client";
import { updateApplicationStatus } from "@/shared/api";
import { useRefetch, useRequest } from "@/shared/hooks";
import { Button, Error, Success } from "@/shared/ui";
import { getCookie } from "cookies-next";

interface ChangeStatusButtonProps {
  id: string;
  onClose: () => void;
}
export const ChangeStatusButton = ({
  id,
  onClose,
}: ChangeStatusButtonProps) => {
  const { refetch } = useRefetch();
  const role = getCookie("role");
  const { loading, setLoading, error, setError, success, setSuccess } =
    useRequest();
  const handleClick = () => {
    setLoading(true);
    setError("");
    setSuccess("");
    if (role) {
      updateApplicationStatus(id, getStatus(role).value, role)
        .then(() => {
          setLoading(false);
          refetch(onClose);
          setSuccess("Документы вернуты");
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
          setError("Oшибка");
        });
    }
  };
  return (
    <>
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
      <Button
        loading={loading}
        disabled={loading}
        variant="contained"
        size="sm"
        onClick={handleClick}
      >
        Вернуть {role && getStatus(role).label}
      </Button>
    </>
  );
};
const getStatus = (role: string) => {
  switch (role) {
    case "medic":
      return { label: "Деканату", value: "decan" };
    case "specialist":
      return { label: "Коменданту", value: "commandant" };
    default:
      return { label: "Медику", value: "medic" };
  }
};
