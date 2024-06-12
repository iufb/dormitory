import clsx from "clsx";
import { ReactNode, Suspense } from "react";
import styles from "./Layout.module.css";
interface LayoutProps {
  navbar: ReactNode;
  localeChanger: ReactNode;
  children: ReactNode;
}
export const Layout = ({ navbar, localeChanger, children }: LayoutProps) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <section className={styles.layout}>
        {navbar}
        <div className={styles.locale}>{localeChanger}</div>
        <main className={clsx(styles.main, styles["fade-in"])}>{children}</main>
      </section>
    </Suspense>
  );
};
