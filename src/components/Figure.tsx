import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface FigureListProps {
  children: ReactNode;
}

export const FigureList: React.FC<FigureListProps> = ({ children }) => {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-[0.5rlh]">
      {children}
    </ul>
  );
};

interface FigureItemProps extends ComponentPropsWithoutRef<"li"> {
  image: string;
  title: string;
  href?: string;
}

export const FigureItem: React.FC<FigureItemProps> = ({
  image,
  title,
  href,
  ...htmlProps
}) => {
  if (href) {
    return (
      <li {...htmlProps}>
        <figure className="relative border-2 border-[#808080] rounded-2xl overflow-hidden">
          <Link href={href}>
            <Image
              src={image}
              alt=""
              width={320}
              height={320}
              className="aspect-square w-full object-cover"
            />

            <figcaption className="absolute bottom-0 left-0 right-0 bg-[rgb(32_32_32/50%)] text-white px-4 py-[0.5rlh] flex gap-x-4 items-center">
              <span className={"w-full text-20-700"}>{title}</span>

              <Icon
                icon="material-symbols:chevron-right-rounded"
                className="text-[2rem]"
              />
            </figcaption>
          </Link>
        </figure>
      </li>
    );
  }

  return (
    <li {...htmlProps}>
      <figure className="relative border-2 border-[#808080] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt=""
          width={320}
          height={320}
          className="aspect-square w-full object-cover"
        />

        <figcaption className="absolute bottom-0 left-0 right-0 bg-[rgb(32_32_32/50%)] text-white px-4 py-[0.5rlh] flex gap-x-4 items-center">
          <span className={"w-full text-20-700"}>{title}</span>
        </figcaption>
      </figure>
    </li>
  );
};
