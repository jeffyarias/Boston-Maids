import React from 'react';
import styles from "../booking-form/booking.module.css"

const sticky =(props)=> {

return(
    <div className={styles.sticky} >
  <p>Date {props.date}</p>
<p>Time {props.time}</p>
<p>Tota $ {props.total}</p>

    </div>
);

}

export default sticky;