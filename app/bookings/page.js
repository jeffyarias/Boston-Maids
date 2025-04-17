//import Sticky from "../components/Sticky/Sticky";
import BookingForm from "../components/booking-form/page";
import Input from "../components/input";
//import styles from '.././components/booking-form/booking.module.css'

const bookingPage = () => {

 return (
<>
{/* <div className={styles.container}>
        <Sticky date={this.state.date} time={this.state.time} total={total} />

        <div className={styles.box1}>
          <div className={styles.formstyle10}>
          </div>
          </div>
          </div> */}
  <BookingForm />
 
  {/* <Input label="Email: " id="email" name="email" /> */}
  </>
 )

}


export default bookingPage;