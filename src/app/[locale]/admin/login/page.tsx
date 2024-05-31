import { Form } from "@/shared/ui";
import styles from "./page.module.css";
import { LoginForm } from "@/features";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function LoginPage({ params }: { params: { locale: string } }) {
  const user = cookies().get("user");
  if (user) redirect(`/${params.locale}/admin`);

  return (
    <section className={styles.wrapper}>
      <LoginForm />
    </section>
  );
}
