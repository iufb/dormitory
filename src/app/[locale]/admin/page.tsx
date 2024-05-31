import { Typography } from "@/shared/ui";
import styles from "./page.module.css";
import { StudentTable } from "@/widgets";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminPanelPage({
  params,
}: {
  params: { locale: string };
}) {
  const user = cookies().get("user");
  if (!user) redirect(`/${params.locale}/admin/login`);

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
