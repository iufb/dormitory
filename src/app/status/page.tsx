import { CheckApplicationForm } from "@/features";
import { BgWrapper, PageTransition } from "@/shared/ui";

export default function Status() {
  return (
    <PageTransition>
      <BgWrapper />
      <CheckApplicationForm />
    </PageTransition>
  );
}
