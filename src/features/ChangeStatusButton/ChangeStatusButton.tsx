"use client";
import { updateApplicationStatus } from "@/shared/api";
import { useRefetch } from "@/shared/hooks";
import { Button } from "@/shared/ui";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

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
  const handleClick = () => {
    if (role) {
      updateApplicationStatus(id, getStatus(role).value, role).then(() => {
        refetch();
        onClose();
      });
    }
  };
  return (
    <Button variant="contained" size="sm" onClick={handleClick}>
      Вернуть {role && getStatus(role).label}
    </Button>
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
