"use client";
import { useOnClickOutside } from "@/shared/hooks";
import { Button, Modal } from "@/shared/ui";
import Link from "next/link";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import styles from "./OpenDetailsButton.module.css";
interface OpenDetailsButtonProps {
  id: number;
}
export function OpenDetailsButton({ id }: OpenDetailsButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FaEye className={styles.eye} onClick={() => setIsOpen(true)} />
      {isOpen && <DetailsModal id={id} onClose={() => setIsOpen(false)} />}
    </>
  );
}

interface DetailsModalProps {
  id: number;
  onClose: () => void;
}
const DetailsModal = ({ id, onClose }: DetailsModalProps) => {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, onClose);
  return createPortal(
    <Modal
      ref={modalRef}
      closeIcon={
        <IoMdClose size={25} onClick={onClose} className={styles.closeModal} />
      }
    >
      Modal {id}
    </Modal>,
    document.body,
  );
};
