"use client";
import { useRouter } from "next/navigation";

export const useRefetch = () => {
  const router = useRouter();
  const refetch = (action: () => void) => {
    new Promise((resolve) => {
      resolve(router.refresh());
    }).then(() => {
      setTimeout(() => {
        action();
      }, 750);
    });
  };
  return { refetch };
};
