import { ComponentProps, ReactNode } from "react";
import styles from "./Form.module.css";
interface FormProps extends ComponentProps<"form"> {
  children: ReactNode;
}
export const Form = ({ children, ...props }: FormProps) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};
