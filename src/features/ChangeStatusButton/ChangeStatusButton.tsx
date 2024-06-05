"use client";
import { updateApplicationStatus } from "@/shared/api";
import { useRefetch } from "@/shared/hooks";
import { Button } from "@/shared/ui";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

interface ChangeStatusButtonProps {
  id: number;
}
export const ChangeStatusButton = ({ id }: ChangeStatusButtonProps) => {
  const { refetch } = useRefetch();
  const role = getCookie("role");
  const handleClick = () => {
    if (role) {
      updateApplicationStatus(id, getStatus(role).value, role).then(() => {
        refetch();
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
    case "specialist":
      return { label: "Коменданту", value: "commandant" };
    default:
      return { label: "Деканату", value: "decan" };
  }
};
