import { cookies } from "next/headers";
import styles from "./LocaleChanger.module.css";
export const LocaleChanger = () => {
  const locale = cookies().get("locale");
  const selectedLocale = locale ? locale.value : "ru";
  return <div className={styles.wrapper}>{selectedLocale}</div>;
};
