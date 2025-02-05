import { Button } from "../ui/button";
import ThemeButton from "./theme-button";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { BookOpenTextIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between rounded-xl border bg-popover/30 px-4 py-2 shadow-md shadow-primary/20 backdrop-blur">
      <h1 className="font-bold">DeepSynth Agent</h1>
      <div className="flex space-x-2">
        <nav className="flex space-x-2">
          {/* <Button
            variant={"link"}
            className="text-white">
            <GitHubLogoIcon className="size-4" />
            Github
          </Button> */}
          <Button
            variant={"link"}
            asChild>
            <Link
              href={"#"}
              target="_blank"
              className="text-foreground">
              <BookOpenTextIcon className="size-4" />
              Docs
            </Link>
          </Button>
        </nav>
        <ThemeButton />
        <Link href={"/conversation"}>
          <Button>Launch App</Button>
        </Link>
      </div>
    </header>
  );
}
