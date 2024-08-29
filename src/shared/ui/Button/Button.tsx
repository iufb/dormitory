import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import { Loader } from "@/shared/ui/Loader/Loader";
type ButtonVariant = "contained" | "outlined";
type ButtonSize = "lg" | "md" | "sm";
interface ButtonProps extends ComponentProps<"button"> {
  variant: ButtonVariant;
  size: ButtonSize;
  children: ReactNode;
  loading?: boolean;
}
export const Button = ({
  loading,
  variant,
  className,
  size,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        { contained: styles.contained, outlined: styles.outlined }[variant],
        { lg: styles.lg, md: styles.md, sm: styles.sm }[size],
        className,
      )}
      {...props}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};
