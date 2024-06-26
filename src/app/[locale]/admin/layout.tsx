import { Layout } from "@/shared/ui";
import { Navbar } from "@/widgets";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Aдмин",
  description: "Aдмин панель",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
