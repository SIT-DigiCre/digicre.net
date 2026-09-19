import { Icon } from "@iconify/react";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type React from "react";
import type { ReactNode } from "react";

interface LinkButtonProps extends LinkProps {
  children: ReactNode;
  variant?: "light" | "dark";
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  variant = "light",
  ...htmlProps
}) => {
  const isExternalLink = !htmlProps.href.toString().startsWith("/");
  const bgClass = variant === "dark" ? "bg-[#404040]" : "bg-white";
  const colorClass = variant === "dark" ? "text-white" : "text-digicre-black";

  return (
    <Link
      href={htmlProps.href}
      className={`${bgClass} ${colorClass} border-2 border-[#808080]  px-4 py-[0.5rlh] flex gap-x-4 rounded-2xl items-center`}
      {...(isExternalLink && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      <span className={"w-full text-20-700"}>{children}</span>

      <Icon
        icon={
          isExternalLink
            ? "material-symbols:open-in-new-rounded"
            : "material-symbols:chevron-right-rounded"
        }
        className="text-[2rem]"
      />
    </Link>
  );
};
