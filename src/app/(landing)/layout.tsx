import Header from "@/components/layout/header";
import { ReactNode } from "react";

export default function LandingLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
