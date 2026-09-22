import { Icon } from "@iconify/react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface FaqListProps {
  children: ReactNode;
}

export const FaqList: React.FC<FaqListProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-[0.5rlh]">{children}</div>;
};

interface FaqItemProps extends ComponentPropsWithoutRef<"details"> {
  question: string;
  children: ReactNode;
}

export const FaqItem: React.FC<FaqItemProps> = ({
  question,
  children,
  ...htmlProps
}) => {
  return (
    <details
      className="bg-white rounded-2xl border-2 border-[#808080]"
      {...htmlProps}
    >
      <summary className="flex gap-x-4 px-4 py-[0.5rlh] hover:cursor-pointer">
        <h3 className="w-full text-20-700">{question}</h3>

        <Icon
          icon="material-symbols:keyboard-arrow-down-rounded"
          className="text-[2rem]"
        />
      </summary>

      <div className="px-4 py-[0.5rlh]">{children}</div>
    </details>
  );
};
