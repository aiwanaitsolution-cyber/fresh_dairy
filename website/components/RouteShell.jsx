"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionEffects from "@/components/MotionEffects";

export default function RouteShell({ children }) {
  const pathname = usePathname();
  const isProductSurface = pathname.startsWith("/customer") || pathname.startsWith("/admin");
  return (
    <>
      {!isProductSurface && <Header />}
      {!isProductSurface && <MotionEffects />}
      <main id="main">{children}</main>
      {!isProductSurface && <Footer />}
    </>
  );
}
