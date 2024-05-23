import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/shared/styles/globals.css";
import "@/shared/styles/reset.css";
import "@/shared/styles/vars.css";
import { Navbar } from "@/widgets";
import { Layout } from "@/shared/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Главная",
  description: "ЭЛЕКТРОННОЕ ОБЩЕЖИТИЕ ALIKHAN BOKEIKHAN UNIVERSITY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout navbar={<Navbar />}>{children}</Layout>
      </body>
    </html>
  );
}
