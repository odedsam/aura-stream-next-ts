"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import { DesktopHeader, MobileHeader } from "./partials/Header";

export function AppHeader() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
