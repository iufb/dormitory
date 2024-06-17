import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Poppins } from "next/font/google";
const popins = Poppins({ subsets: ["latin"], weight: "400" });
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={popins.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
