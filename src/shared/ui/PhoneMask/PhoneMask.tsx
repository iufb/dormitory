import { ChangeEventHandler } from "react";
import { PatternFormat } from "react-number-format";
import styles from "./PhoneMask.module.css";
interface PhoneMaskProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const PhoneMask = ({ value, onChange }: PhoneMaskProps) => {
  return (
    <PatternFormat
      className={styles.input}
      value={value}
      onChange={onChange}
      format="+7 (7##) ### ## ##"
      allowEmptyFormatting
      required
    />
  );
};
