"use client";
import { DesktopNavbar } from "./desktop/DesktopNavbar";
import { MobileNavbar } from "./mobile/MobileNavbar";
import { useEffect, useState } from "react";

type Link = {
  icon: string;
  label: string;
  path: string;
};
export const links: Link[] = [
  { icon: "/icons/home.svg", label: "Главная", path: "/" },
  { icon: "/icons/rules.svg", label: "Положение", path: "/rules" },
  {
    icon: "/icons/submitting.svg",
    label: "Подача заявления",
    path: "/submitting",
  },
  { icon: "/icons/status.svg", label: "Статус заявления", path: "/status" },
];
export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const resize = () => {
      setIsMobile((prev) => {
        if (!prev && window.innerWidth > 500) {
          return false;
        } else {
          return true;
        }
      });
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};
