import { ComponentProps } from "react";
import styles from "./FileInput.module.css";
interface FileInputProps extends ComponentProps<"input"> {
  label: string;
  content: string;
}
export const FileInput = ({
  label,
  content,
  ...inputProps
}: FileInputProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <div className={styles.wrapper}>
        <input id={label} type="file" {...inputProps} />
        <label className={styles.content} htmlFor={label}>
          {content}
        </label>
      </div>
    </>
  );
};
