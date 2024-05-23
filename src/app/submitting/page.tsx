import { CreateApplicationForm } from "@/features";
import { BgWrapper, PageTransition } from "@/shared/ui";

export default function Submitting() {
  return (
    <PageTransition>
      <BgWrapper />
      <CreateApplicationForm />
    </PageTransition>
  );
}
