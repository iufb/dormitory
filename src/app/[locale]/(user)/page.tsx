import Image from "next/image";
import styles from "./page.module.css";
import { BgWrapper, Button, PageTransition, Typography } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { IoChevronDown } from "react-icons/io5";

export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations("mainPage");
  return (
    <PageTransition>
      <BgWrapper blurred />
      <section className={styles.wrapper}>
        <section className={styles.home}>
          <Image
            src={"/icons/logo.svg"}
            width={400}
            height={212}
            alt="logo"
            className={styles.logo}
          />
          <Typography tag="h1" variant="title" className={styles.headText}>
            {t.rich("title", { br: () => <br></br> })}
          </Typography>
          <IoChevronDown color="white" style={{ marginTop: 100 }} size={80} />
        </section>
        <section className={styles.info}>
          <div>
            <Image
              width={500}
              height={750}
              alt="Info"
              src={`/${params.locale}.jpeg`}
            />
          </div>
        </section>
      </section>
    </PageTransition>
  );
}
