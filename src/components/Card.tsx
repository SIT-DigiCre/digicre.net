import type React from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface CardProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  variant?: "light" | "dark";
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "light",
  ...htmlProps
}) => {
  const bgClass = variant === "dark" ? "bg-[#e0e0e0]" : "bg-white";

  return (
    <section
      className={`${bgClass} rounded-2xl overflow-hidden shadow-[0_2px_8px_rgb(32_32_32/0.5)]`}
      {...htmlProps}
    >
      {children}
    </section>
  );
};

interface CardContainerProps {
  children: ReactNode;
}

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return (
    <div className="px-8 py-[2rlh] flex flex-col gap-y-[2rlh]">{children}</div>
  );
};

interface CardTextBoxProps {
  children: ReactNode;
  variant?: "light" | "dark";
}

export const CardTextBox: React.FC<CardTextBoxProps> = ({
  children,
  variant = "light",
}) => {
  const borderClass =
    variant === "dark" ? "border-digicre-black" : "border-digicre-skyblue";

  return (
    <div
      className={`flex flex-col items-start gap-y-[1rlh] pl-4 self-stretch border-l-4 ${borderClass}`}
    >
      {children}
    </div>
  );
};
