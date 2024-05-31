import { CheckApplicationForm } from "@/features";
import { BgWrapper, PageTransition } from "@/shared/ui";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Status",
};
export default function Status() {
  return (
    <PageTransition>
      <BgWrapper />
      <CheckApplicationForm />
    </PageTransition>
  );
}
