import Logo from "../common/logo";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { BookOpenTextIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between rounded-xl border bg-popover/60 px-4 py-2 shadow-md shadow-primary/20 backdrop-blur">
      <div className="flex items-center space-x-2">
        <Logo className="size-8" />
        <h1 className="font-bold text-secondary-foreground">DeepSynth</h1>
      </div>
      <div className="flex space-x-2">
        <nav className="flex space-x-2">
          <Button
            variant={"link"}
            asChild>
            <Link
              href={"https://github.com/DeepSynth-HQ"}
              target="_blank"
              className="text-foreground">
              <GitHubLogoIcon className="size-4" />
              Github
            </Link>
          </Button>
          <Button
            variant={"link"}
            asChild>
            <Link
              href={"https://docs.deepsynth.org"}
              target="_blank"
              className="text-foreground">
              <BookOpenTextIcon className="size-4" />
              Docs
            </Link>
          </Button>
        </nav>
        <Link href={"/conversation"}>
          <Button>Launch App</Button>
        </Link>
      </div>
    </header>
  );
}
