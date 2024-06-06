import { ComponentProps, ForwardedRef, forwardRef } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";
import { Error } from "@/shared/ui/Error/Error";
type InputSize = "lg" | "md";
interface InputProps extends ComponentProps<"input"> {
  label: string;
  inputSize: InputSize;
}
export const Input = forwardRef(
  (
    { type = "text", label, inputSize, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={styles.wrapper}>
        <input
          ref={ref}
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
  },
);
Input.displayName = "Input";
