import DeepSynthWhiteIcon from "@/assets/svgs/deepsynth-white.svg";
import { cn } from "@/libs/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

export default function Logo({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <Image
      src={DeepSynthWhiteIcon}
      alt=""
      className={cn("aspect-square", className)}
      {...props}
    />
  );
}
