import { ReactNode } from "react";
import styles from "./Error.module.css";
interface ErrorProps {
  children: ReactNode;
}
export const Error = ({ children }: ErrorProps) => {
  return <span className={styles.error}>{children}</span>;
};
