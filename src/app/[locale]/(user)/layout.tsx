import { LocaleChanger } from "@/features";
import { Layout } from "@/shared/ui";
import { Navbar } from "@/widgets";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { headers } from "next/headers";
import { Children, cloneElement, isValidElement } from "react";
import { UAParser } from "ua-parser-js";

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
  const mobile = useIsMobileDevice();

  return (
    <Layout
      navbar={<Navbar mobile={mobile} />}
      localeChanger={<LocaleChanger />}
    >
      {children}
    </Layout>
  );
}

const useIsMobileDevice = () => {
  if (typeof process === "undefined") {
    throw new Error(
      "[Server method] you are importing a server-only module outside of server",
    );
  }

  const { get } = headers();
  const ua = get("user-agent");

  const device = new UAParser(ua || "").getDevice();

  return device.type === "mobile";
};
