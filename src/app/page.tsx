import Image from "next/image";
import styles from "./page.module.css";
import { BgWrapper, Button, PageTransition, Typography } from "@/shared/ui";

export default function Home() {
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
          ЭЛЕКТРОННОЕ ОБЩЕЖИТИЕ <br /> ALIKHAN BOKEIKHAN UNIVERSITY
        </Typography>
      </section>
    </PageTransition>
  );
}
