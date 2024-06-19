"use client";
import { useRouter } from "next/navigation";

export const useRefetch = () => {
  const router = useRouter();
  const refetch = () => {
    router.refresh();
  };
  return { refetch };
};
