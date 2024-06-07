import { CreateApplicationForm } from "@/features";
import { BgWrapper, PageTransition } from "@/shared/ui";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("createApplication.title"),
    description: t("createApplication.desc"),
  };
}
export default function Submitting() {
  return (
    <PageTransition>
      <BgWrapper />
      <CreateApplicationForm />
    </PageTransition>
  );
}
