import Image from "next/image";
import styles from "./page.module.css";
import { BgWrapper, Button, PageTransition, Typography } from "@/shared/ui";

import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";
import { useTranslations } from "next-intl";
import { IoChevronDown } from "react-icons/io5";
const useIsMobileDevice = () => {
  if (typeof process === "undefined") {
    throw new Error(
      "[Server method] you are importing a server-only module outside of server",
    );
  }

  const { get } = headers();
  const ua = get("user-agent");

  const device = new UAParser(ua || "").getDevice();

  return device.type === "mobile";
};
export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations("mainPage");

  const mobile = useIsMobileDevice();
  console.log(mobile);

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
          <IoChevronDown color="white" style={{ marginTop: 90 }} size={80} />
        </section>
        <section className={styles.info}>
          <div>
            <Image
              className={styles.infoImage}
              width={500}
              height={750}
              alt="Info"
              src={`/${mobile ? "mobile-" : ""}${params.locale}.png`}
            />
          </div>
        </section>
      </section>
    </PageTransition>
  );
}
