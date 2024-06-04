import { Typography } from "@/shared/ui";
import styles from "./page.module.css";
import { StudentTable } from "@/widgets";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Application, getApplicationsByRole } from "@/shared/api";
async function getApplications(): Promise<Application[] | null> {
  const role = cookies().get("role")?.value.toLowerCase();
  const token = cookies().get("token")?.value;

  if (role && token) {
    const res = await getApplicationsByRole(role, token)
      .then((data) => {
        console.log(data);

        return data;
      })
      .catch((e) => {
        console.log(e);

        throw new Error(`Failed to fetch data `);
      });
    return res;
  }
  return null;
}

export default async function AdminPanelPage({
  params,
}: {
  params: { locale: string };
}) {
  const token = cookies().get("token");
  if (!token) redirect(`/${params.locale}/admin/login`);
  const role = cookies().get("role")?.value;
  const applications = await getApplications();
  console.log(applications);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Typography tag="h1" variant="whiteSubtitle">
          Панель управления - {role}
        </Typography>
      </header>
      <StudentTable applications={applications} />
    </section>
  );
}
