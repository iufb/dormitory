import { ForwardedRef, ReactNode, forwardRef } from "react";
import styles from "./Modal.module.css";
import clsx from "clsx";
interface ModalProps {
  children: ReactNode;
  closeIcon: ReactNode;
  className?: string;
}
export const Modal = forwardRef(
  (
    { children, className, closeIcon }: ModalProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    return (
      <section className={styles.wrapper}>
        <section ref={ref} className={clsx(styles.modal, className)}>
          {closeIcon}
          {children}
        </section>
      </section>
    );
  },
);
Modal.displayName = "Modal";
