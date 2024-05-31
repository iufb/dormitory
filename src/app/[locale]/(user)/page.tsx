import Image from "next/image";
import styles from "./page.module.css";
import { BgWrapper, Button, PageTransition, Typography } from "@/shared/ui";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <PageTransition>
      <BgWrapper blurred />
      <section className={styles.home}>
        <Image
          src={"/icons/logo.svg"}
          width={400}
          height={212}
          alt="logo"
          className={styles.logo}
        />
        <Typography tag="h1" variant="title" className={styles.headText}>
          {t("title")} ЭЛЕКТРОННОЕ ОБЩЕЖИТИЕ <br /> ALIKHAN BOKEIKHAN UNIVERSITY
        </Typography>
      </section>
    </PageTransition>
  );
}
