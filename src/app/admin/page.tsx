import { Typography } from "@/shared/ui";
import styles from "./page.module.css";
import { StudentTable } from "@/widgets";

export default function AdminPanelPage() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Typography tag="h1" variant="whiteSubtitle">
          Панель управления - (роль)
        </Typography>
      </header>
      <StudentTable />
    </section>
  );
}
