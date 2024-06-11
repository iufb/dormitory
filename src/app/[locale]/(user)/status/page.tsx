import { CheckApplicationForm } from "@/features";
import { BgWrapper } from "@/shared/ui";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("checkApplication.title"),
    description: t("checkApplication.desc"),
  };
}
export default function Status() {
  return (
    <>
      <BgWrapper />
      <CheckApplicationForm />
    </>
  );
}
