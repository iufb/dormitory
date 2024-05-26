import { CreateApplicationForm } from "@/features";
import { BgWrapper, PageTransition } from "@/shared/ui";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Application",
};
export default function Submitting() {
  return (
    <PageTransition>
      <BgWrapper />
      <CreateApplicationForm />
    </PageTransition>
  );
}
