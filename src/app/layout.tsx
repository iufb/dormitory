import "@/shared/styles/globals.css";
import "@/shared/styles/reset.css";
import "@/shared/styles/vars.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children} </body>
    </html>
  );
}
