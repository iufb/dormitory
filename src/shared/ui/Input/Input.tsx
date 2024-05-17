import { ComponentProps } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";
type InputSize = "lg" | "md";
interface InputProps extends ComponentProps<"input"> {
  label: string;
  inputSize: InputSize;
}
export const Input = ({
  type = "text",
  label,
  inputSize,
  ...props
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={clsx(
          styles.input,
          { lg: styles.lg, md: styles.md }[inputSize],
        )}
        placeholder=" "
        type={type}
        id={label}
        {...props}
      />
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};
