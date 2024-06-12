"use client";
import { useIsMobile } from "@/shared/hooks/useMobileDevice";
import { DesktopNavbar } from "./desktop/DesktopNavbar";
import { MobileNavbar } from "./mobile/MobileNavbar";

export const Navbar = ({ mobile }: { mobile: boolean }) => {
  return mobile ? <MobileNavbar /> : <DesktopNavbar />;
};
