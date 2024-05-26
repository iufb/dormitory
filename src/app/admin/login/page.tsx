import { Form } from "@/shared/ui";
import styles from "./page.module.css";
import { LoginForm } from "@/features";
export default function LoginPage() {
  return (
    <section className={styles.wrapper}>
      <LoginForm />
    </section>
  );
}
