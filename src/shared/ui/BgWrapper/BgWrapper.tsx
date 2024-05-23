import styles from "./BgWrapper.module.css";
interface BgWrapperProps {
  blurred?: boolean;
}
export const BgWrapper = ({ blurred }: BgWrapperProps) => {
  return (
    <div
      className={styles.bgWrapper}
      style={{
        backgroundImage: `url(${blurred ? "/blur-bg.png" : "/bg.png"})`,
      }}
    />
  );
};
