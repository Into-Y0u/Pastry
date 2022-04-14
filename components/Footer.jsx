import styles  from "../styles/Footer.module.css";
import Image from "next/dist/client/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src = "/img/bg2.gif" alt="" objectFit="cover" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURENT</h1>
          <p className={styles.text}>
            1234 poka pok Street .
            <br/> Kolkata ,  85022
            <br/> (123) 234-879134
          </p>
          <p className={styles.text}>
            1234 poka pok Street .
            <br/> Kolkata ,  85022
            <br/> (123) 234-879134
          </p>
          <p className={styles.text}>
            1234 poka pok Street .
            <br/>Kolkata ,  85022
            <br/> (123) 234-879134
          </p>
          <p className={styles.text}>
            1234 poka pok Street .
            <br/> Kolkata ,  85022
            <br/> (123) 234-879134
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br/> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATUREDAY - SUNDAY
            <br/> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

