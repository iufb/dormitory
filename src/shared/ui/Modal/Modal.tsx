import { ForwardedRef, ReactNode, forwardRef } from "react";
import styles from "./Modal.module.css";
interface ModalProps {
  children: ReactNode;
  closeIcon: ReactNode;
}
export const Modal = forwardRef(
  ({ children, closeIcon }: ModalProps, ref: ForwardedRef<HTMLElement>) => {
    return (
      <section className={styles.wrapper}>
        <section ref={ref} className={styles.modal}>
          {closeIcon}
          {children}
        </section>
      </section>
    );
  },
);
Modal.displayName = "Modal";
