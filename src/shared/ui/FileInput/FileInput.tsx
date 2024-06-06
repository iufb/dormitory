import { ComponentProps, ForwardedRef, forwardRef } from "react";
import styles from "./FileInput.module.css";
interface FileInputProps extends ComponentProps<"input"> {
  label: string;
  content: string;
}
export const FileInput = forwardRef(
  (
    { label, content, ...inputProps }: FileInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
        <div className={styles.wrapper}>
          <input ref={ref} id={label} type="file" {...inputProps} />
          <label className={styles.content} htmlFor={label}>
            {content}
          </label>
        </div>
      </div>
    );
  },
);
FileInput.displayName = "FileInput";
