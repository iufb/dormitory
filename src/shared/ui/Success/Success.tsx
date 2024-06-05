import { ReactNode } from "react";
import styles from "./Success.module.css";
interface SuccessProps {
  children: ReactNode;
}
export const Success = ({ children }: SuccessProps) => {
  return <span className={styles.success}>{children}</span>;
};
