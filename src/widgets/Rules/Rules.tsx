import { getTranslations } from "next-intl/server";
import styles from "./Rules.module.css";
export const Rules = async () => {
  const t = await getTranslations("rules");
  return (
    <section className={styles.wrapper}>
      <div dangerouslySetInnerHTML={{ __html: t.raw("content") }} />
    </section>
  );
};
