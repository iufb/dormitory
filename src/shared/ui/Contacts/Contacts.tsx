"use client";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { useTranslations } from "use-intl";
import { Typography } from "../Typography/Typography";
import styles from "./Contacts.module.css";
export const Contacts = () => {
  const t = useTranslations("contacts");
  return (
    <div className={styles.wrapper}>
      <Typography variant="subtitle">{t("titleOne")}</Typography>
      <div className={styles.contentWrapper}>
        {t
          .raw("values")
          .map(
            (
              { heading, name, tel, location }: Record<string, string>,
              idx: number
            ) => (
              <div key={idx} className={styles.container}>
                <h2>{heading}</h2>
                <span>{name}</span>
                <div className={styles.content}>
                  <BsFillTelephoneFill />
                  <a href={`tel:${idx == 2 ? tel.split(" ")[0] : tel}`}>
                    {tel}
                  </a>
                </div>
                <div className={styles.content}>
                  <FaLocationArrow />
                  <span>{location}</span>
                </div>
              </div>
            )
          )}
      </div>
      <Typography variant="subtitle">{t("titleTwo")}</Typography>
      <div className={styles.payment}>
        <div dangerouslySetInnerHTML={{ __html: t.raw("payment") }} />
      </div>
    </div>
  );
};
