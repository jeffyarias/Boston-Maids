"use client";
import Image from "next/image";
import styles from "./Extras.module.css";
import fridge from "./images/kitchen.png";
import oven from "./images/gas-stove.png";
import truck from "./images/moving-truck.png";
import wiping from "./images/wiping.png";

const Extras = ({ onClick, extras }) => {
  return (
    <div className={styles.extrasIcons}>
      <div
        onClick={() => onClick("fridge")}
        className={extras.fridge ? styles.active : styles.desactive}
      >
        <Image
          src={fridge}
          alt="Fridge Cleaning"
          width={50}
          height={50}
          className={styles.img}
        />
        <p className={styles.title}>Inside the Fridge</p>
      </div>

      <div
        onClick={() => onClick("oven")}
        className={extras.oven ? styles.active : styles.desactive}
      >
        <Image
          src={oven}
          alt="Oven Cleaning"
          width={50}
          height={50}
          className={styles.img}
        />
        <p className={styles.title}>Inside the Oven</p>
      </div>

      <div
        onClick={() => onClick("move")}
        className={extras.move ? styles.active : styles.desactive}
      >
        <Image
          src={truck}
          alt="Move In/Out Cleaning"
          width={50}
          height={50}
          className={styles.img}
        />
        <p className={styles.title}>Move In/Out</p>
      </div>

      <div
        onClick={() => onClick("wall")}
        className={extras.wall ? styles.active : styles.desactive}
      >
        <Image
          src={wiping}
          alt="Wall Washing"
          width={50}
          height={50}
          className={styles.img}
        />
        <p className={styles.title}>Wall Washing</p>
      </div>
    </div>
  );
};

export default Extras;
