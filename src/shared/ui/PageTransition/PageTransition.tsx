import { ReactNode } from "react";
import styles from "./PageTransition.module.css";
interface PageTransitionProps {
  children: ReactNode;
}
export const PageTransition = ({ children }: PageTransitionProps) => {
  return <section className={styles.fadeIn}>{children}</section>;
};
