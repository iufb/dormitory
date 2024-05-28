import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/widgets";
import { Layout } from "@/shared/ui";

export const metadata: Metadata = {
  title: "Главная",
  description: "ЭЛЕКТРОННОЕ ОБЩЕЖИТИЕ ALIKHAN BOKEIKHAN UNIVERSITY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout navbar={<Navbar />}>{children}</Layout>;
}