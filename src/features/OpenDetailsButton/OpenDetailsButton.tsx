"use client";
import { useOnClickOutside } from "@/shared/hooks";
import { Button, Modal, Typography } from "@/shared/ui";
import Link from "next/link";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import styles from "./OpenDetailsButton.module.css";
import { Application } from "@/shared/api";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { ChangeStatusButton, DecanForm, KomendantForm } from "@/features";
import { appendFile } from "fs";
interface OpenDetailsButtonProps {
  application: Application;
}
export function OpenDetailsButton({ application }: OpenDetailsButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FaEye className={styles.eye} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <DetailsModal
          application={application}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

interface DetailsModalProps {
  application: Application;
  onClose: () => void;
}
const DetailsModal = ({ application, onClose }: DetailsModalProps) => {
  const modalRef = useRef(null);

  const role = getCookie("role")?.toLowerCase();
  useOnClickOutside(modalRef, onClose);
  return createPortal(
    <Modal
      ref={modalRef}
      closeIcon={
        <IoMdClose size={25} onClick={onClose} className={styles.closeModal} />
      }
    >
      <div className={styles.content}>
        {role && (
          <ContentLeft
            role={role}
            application={application}
            onClose={onClose}
          />
        )}
        {role && role !== "specialist" && (
          <div className={styles.right}>
            <Typography variant="adminTitle">Добавить</Typography>
            {getFormByRole(role, application)}
          </div>
        )}
      </div>
    </Modal>,
    document.body,
  );
};
const getFormByRole = (role: string, application: Application) => {
  switch (role) {
    case "decan":
      return <DecanForm id={application.iin_id} />;
    case "commandant":
      return <KomendantForm id={application.iin_id} />;
    default:
      return <></>;
  }
};
const ContentLeft = ({
  application,
  role,
  onClose,
}: {
  application: Application;
  role: string;
  onClose: () => void;
}) => {
  return (
    <div className={styles.left}>
      <Typography variant="adminTitle">Данные</Typography>
      <Typography variant="adminSubtitle">ФИО</Typography>
      <Typography variant="adminText">
        {application.so_name} {application.name}
      </Typography>
      <Typography variant="adminSubtitle">Телефон</Typography>
      <Typography variant="adminText">{application.tel}</Typography>
      <Typography variant="adminSubtitle">Общежитие</Typography>
      <Typography variant="adminText">{application.obshezhitie}</Typography>
      <Typography variant="adminSubtitle">Факультет</Typography>
      <Typography variant="adminText">{application.facultet}</Typography>
      <Typography variant="adminSubtitle">Удостоверение</Typography>
      <a className={styles.link} href={application.id_card} target="_blank">
        Открыть
      </a>
      {role === "specialist" && (
        <>
          <Typography variant="adminSubtitle">Направление</Typography>
          <a
            className={styles.link}
            href={application.direction}
            target="_blank"
          >
            Открыть
          </a>
          <Typography variant="adminSubtitle">Справка о учебе</Typography>
          <a
            className={styles.link}
            href={application.certificate}
            target="_blank"
          >
            Открыть
          </a>
          <Typography variant="adminSubtitle">Договор</Typography>
          <a className={styles.link} href={application.k_one} target="_blank">
            Открыть
          </a>
          <Typography variant="adminSubtitle">Правила проживания</Typography>
          <a className={styles.link} href={application.k_two} target="_blank">
            Открыть
          </a>
        </>
      )}
      {role !== "decan" && (
        <ChangeStatusButton onClose={onClose} id={application.iin_id} />
      )}
    </div>
  );
};
