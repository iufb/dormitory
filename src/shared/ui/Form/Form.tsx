import { ComponentProps, ReactNode } from "react";
import styles from "./Form.module.css";
import clsx from "clsx";
interface FormProps extends ComponentProps<"form"> {
  children: ReactNode;
}
export const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <form className={clsx(className, styles.form)} {...props}>
      {children}
    </form>
  );
};
