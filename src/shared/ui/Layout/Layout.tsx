import { ReactNode } from "react";
import styles from "./Layout.module.css";
import Image from "next/image";
interface LayoutProps {
  navbar: ReactNode;
  children: ReactNode;
}
export const Layout = ({ navbar, children }: LayoutProps) => {
  return (
    <section>
      {navbar}
      <main className={styles.main}>
        <div className={styles.bgWrapper} />
        {children}
      </main>
    </section>
  );
};
