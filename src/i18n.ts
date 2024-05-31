import { NextIntlClientProvider } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const locales = { kz: "kz", ru: "ru" };
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  //
  const cookie = cookies().get("locale");
  let locale = locales.ru;
  if (cookie) {
    locale = cookie.value;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
