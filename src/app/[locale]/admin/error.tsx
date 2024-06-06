"use client"; // Error components must be Client Components

import { Typography } from "@/shared/ui";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Typography variant="title">Что-то пошло не так!</Typography>
      <Link href={"/"}>
        <Typography variant="adminText">На главную</Typography>
      </Link>
    </div>
  );
}
