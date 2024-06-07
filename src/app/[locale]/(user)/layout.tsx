import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/widgets";
import { Layout } from "@/shared/ui";
import { LocaleChanger } from "@/features";
import { getTranslations } from "next-intl/server";

// export const metadata = () => {
//   return {
//     title: "Главная",
//     description: "ЭЛЕКТРОННОЕ ОБЩЕЖИТИЕ ALIKHAN BOKEIKHAN UNIVERSITY",
//   };
// };
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("home.title"),
    description: t("home.desc"),
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout navbar={<Navbar />} localeChanger={<LocaleChanger />}>
      {children}
    </Layout>
  );
}
