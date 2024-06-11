import { PageTransition, BgWrapper } from "@/shared/ui";
import { Rules as RulesView } from "@/widgets/";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("rules.title"),
    description: t("rules.desc"),
  };
}
export default function Rules() {
  return (
    <>
      <BgWrapper />
      <RulesView />
    </>
  );
}
