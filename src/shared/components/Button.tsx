import { ReactNode } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export function Button({
  type = "button",
  disabled,
  onClick,
  children,
  className,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
