"use client";
import { useRouter } from "next/navigation";

export const useRefetch = () => {
  const router = useRouter();
  const refetch = () => {
    setTimeout(() => {
      router.refresh();
    }, 1500);
  };
  return { refetch };
};
