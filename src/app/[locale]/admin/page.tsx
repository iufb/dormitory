import { Application, getApplicationsByRole } from "@/shared/api";
import { faculties } from "@/shared/contants";
import { Typography } from "@/shared/ui";
import { StudentTable } from "@/widgets";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import { StudentTableTabs } from "@/widgets/StudentTable/StudentTable";
const filterByDecan = (applications: Application[], role: string) => {
  return applications.filter((app) => {
    if (role == "decanlegal") {
      return app.facultet === faculties[0];
    }
    if (role == "decanit") {
      return app.facultet === faculties[1];
    }
    return app.facultet === faculties[2];
  });
};
export async function getApplications(
  role: string | undefined,
): Promise<Application[] | null> {
  const token = cookies().get("token")?.value;

  if (role && token) {
    const res = await getApplicationsByRole(
      role.startsWith("decan") ? "decan" : role,
      token,
    )
      .then((data) => {
        if (role.startsWith("decan")) {
          return filterByDecan(data, role);
        } else {
          return data;
        }
      })
      .catch((e) => {
        console.log(e);
        throw new Error(`Failed to fetch data`);
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
  const applications = await getApplications(role?.toLowerCase());
  const endApplications = await getApplications("end");
  console.log(applications);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Typography tag="h1" variant="whiteSubtitle">
          Панель управления - {role && getRoleLabel(role)}
        </Typography>
      </header>
      {applications && applications.length > 0 ? (
        role == "specialist" ? (
          <StudentTableTabs
            normalApplications={applications}
            endApplications={endApplications ?? []}
          />
        ) : (
          <StudentTable applications={applications} />
        )
      ) : (
        <Typography variant="subtitle">Нет заявок</Typography>
      )}
    </section>
  );
}
const getRoleLabel = (role: string) => {
  if (role.toLowerCase().startsWith("decan")) return "Деканат";
  switch (role) {
    case "medic":
      return "Медик";
    case "commandant":
      return "Комендант";
    case "specialist":
      return "Специалист по работе с молодежью";
    default:
      return "Роль не найдена";
  }
};
