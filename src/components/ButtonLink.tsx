// src/components/ButtonLink.tsx

import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "focus:ring-offset-3 relative inline-flex h-fit w-fit rounded-full border border-white bg-white px-4 py-2 text-black hover:text-white outline-none ring-blue-900 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-black after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-black hover:bg-white hover:bg-opacity-15 focus:ring-2 after hover size-10",
        "after:scale-110",
        "hover:animate-bounce", // Add this class for horizontal animation
      )}
      {...restProps}
    />
  );
}