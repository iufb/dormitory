import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import styles from "./Contacts.module.css";
export const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <BsFillTelephoneFill size={16} color="white" />
        <a href="tel:+7 777 123 12 12">+7 777 123 12 12</a>
      </div>
      <div className={styles.content}>
        <FaLocationArrow size={16} color="white" />
        <span>Ул. Абая 31</span>
      </div>
    </div>
  );
};
