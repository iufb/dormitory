import { BgWrapper, Contacts } from "@/shared/ui";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("contacts.title"),
    description: t("contacts.desc"),
  };
}
export default function ContactsPage() {
  return (
    <>
      <BgWrapper />
      <Contacts />
    </>
  );
}
