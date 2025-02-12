import React from "react";
import classes from "./items.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
} from "@fortawesome/free-solid-svg-icons"; // Switching to solid icons for bed & bath as they are not available in regular set
import {
  faCalendar,
  faClock,
  faMoneyBillAlt,
} from "@fortawesome/free-regular-svg-icons";

const Modal = (props) => {
  return (
    <div className={classes.modalContainer}>
      <h1>Booking Details</h1>
      <div id="hello">
        <ul className={classes.listStyleNone}>
          <li className={classes.listItem}>
            <FontAwesomeIcon icon={faBed} className={classes.icon} /> Bedrooms {props.bedrooms}
          </li>
          <li className={classes.listItem}>
            <FontAwesomeIcon icon={faBath} className={classes.icon} /> Bathrooms {props.bathrooms}
          </li>
          <li className={classes.listItem}>
            <FontAwesomeIcon icon={faCalendar} className={classes.icon} /> Date {props.date}
          </li>
          <li className={classes.listItem}>
            <FontAwesomeIcon icon={faClock} className={classes.icon} /> Time {props.time}
          </li>
          <li className={`${classes.listItem} ${classes.total}`}>
            <FontAwesomeIcon icon={faMoneyBillAlt} className={classes.icon} /> Total ${props.totalPrice}
          </li>
        </ul>
        <div className={classes.payments}>
          <div className={classes.credit}></div>
          <div className={classes.cash}></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
