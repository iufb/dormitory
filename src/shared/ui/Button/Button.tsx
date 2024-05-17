import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
type ButtonVariant = "contained" | "outlined";
type ButtonSize = "lg" | "md" | "sm";
interface ButtonProps extends ComponentProps<"button"> {
  variant: ButtonVariant;
  size: ButtonSize;
  children: ReactNode;
}
export const Button = ({ variant, size, children, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        { contained: styles.contained, outlined: styles.outlined }[variant],
        { lg: styles.lg, md: styles.md, sm: styles.sm }[size],
      )}
      {...props}
    >
      {children}
    </button>
  );
};
