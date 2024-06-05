import clsx from "clsx";
import styles from "./Typography.module.css";
type TypographyVariant =
  | "title"
  | "subtitle"
  | "whiteSubtitle"
  | "adminTitle"
  | "adminSubtitle"
  | "adminText";
type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p";
export type TypographyProps<Tag extends TypographyTag> =
  React.ComponentProps<Tag> & {
    variant: TypographyVariant;
    tag?: TypographyTag;
    children: React.ReactNode;
  };

export const Typography = <Tag extends TypographyTag = "div">({
  variant,
  tag = "div",
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component
      className={clsx(
        {
          title: styles.title,
          subtitle: styles.subtitle,
          whiteSubtitle: styles.whiteSubtitle,
          adminTitle: styles.adminTitle,
          adminSubtitle: styles.adminSubtitle,
          adminText: styles.adminText,
        }[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
