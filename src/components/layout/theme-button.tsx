"use client";

import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" && <SunIcon className="size-4" />}
      {theme === "dark" && <MoonIcon className="size-4" />}
    </Button>
  );
}
