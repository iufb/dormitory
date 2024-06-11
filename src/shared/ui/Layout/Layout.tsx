import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Layout.module.css";
interface LayoutProps {
  navbar: ReactNode;
  localeChanger: ReactNode;
  children: ReactNode;
}
export const Layout = ({ navbar, localeChanger, children }: LayoutProps) => {
  return (
    <section className={styles.layout}>
      {navbar}
      <main className={clsx(styles.main, styles["fade-in"])}>
        {localeChanger}
        <div className={styles.bgWrapper} />
        {children}
      </main>
    </section>
  );
};
