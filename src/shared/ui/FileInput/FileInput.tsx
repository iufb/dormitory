import { ComponentProps, ForwardedRef, forwardRef } from "react";
import styles from "./FileInput.module.css";
import { useTranslations } from "next-intl";
interface FileInputProps extends ComponentProps<"input"> {
  label: string;
  selected?: string;
}
export const FileInput = forwardRef(
  (
    { label, selected, ...inputProps }: FileInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const t = useTranslations("fileInput");
    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
        <span className={styles.selected}>{selected}</span>
        <div className={styles.wrapper}>
          <input ref={ref} id={label} type="file" {...inputProps} />
          <label className={styles.content} htmlFor={label}>
            {t("label")}
          </label>
        </div>
      </div>
    );
  },
);
FileInput.displayName = "FileInput";
