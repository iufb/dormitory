"use client";
import { useEffect, useState } from "react";
import { DesktopNavbar } from "./desktop/DesktopNavbar";
import { MobileNavbar } from "./mobile/MobileNavbar";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};
