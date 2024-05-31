import "@/shared/styles/globals.css";
import "@/shared/styles/reset.css";
import "@/shared/styles/vars.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
