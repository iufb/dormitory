import { ReactNode } from "react";
import styles from "./Layout.module.css";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography/Typography";
import clsx from "clsx";
interface LayoutProps {
  navbar: ReactNode;
  children: ReactNode;
}
export const Layout = ({ navbar, children }: LayoutProps) => {
  return (
    <section className={styles.layout}>
      {navbar}
      <main className={clsx(styles.main, styles["fade-in"])}>
        <div className={styles.bgWrapper} />
        {children}
      </main>
    </section>
  );
};
