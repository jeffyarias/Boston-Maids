'use client';

import styles from './booking.module.css';
import Sticky from '../Sticky/Sticky';
import Extras from '../Extras/Extras';



const BookingForm = () => {
 return (
    <div className={styles.container}>
    {/* <Sticky date={this.state.date} time={this.state.time} total={total} /> */}

    <div className={styles.box1}>
      <div className={styles.formstyle10}>
        <h1>
          Booking Information
          <span>Enter Information for the best cleaning of you life</span>
        </h1>
        <form>
          <div className={styles.section}>
            <span>1</span>First Name &amp; Address
          </div>
          <div className={styles.innerwrap}>
            <label>
              Your Full Name{" "}
              <input
                id="name"
                //onChange={this.formHandler}
                type="text"
                name="name"
               // value={this.state.name}
              />
            </label>
            <label id="textarea">
              Address{" "}
              <textarea
                //onChange={this.formHandler}
                name="address"
                //value={this.state.address}
              ></textarea>
            </label>
          </div>

          <div className={styles.section}>
            <span>2</span>Email &amp; Phone
          </div>
          <div className={styles.innerwrap}>
            <label>
              Email Address{" "}
              <input
                //onChange={this.formHandler}
                type="email"
                name="email"
                //value={this.state.email}
              />
            </label>
            <label>
              Phone Number{" "}
              <input
                //onChange={this.formHandler}
                type="text"
                name="phone"
               // value={this.state.phone}
              />
            </label>
          </div>

          <div className={styles.section}>
            <span>3</span>Bathrooms & Bedrooms
          </div>
          <div className={styles.innerwrap}>
            <label htmlFor="button">Bedrooms</label>
            <div className={styles.btns}>
              <button
                className={styles.btn}
                //onClick={this.decrementBedrooms}
                type="button"
              >
                -
              </button>
              <button
                className={styles.btntext}
                type="button"
                disabled
                id="bedrooms"
              >
                {/* {this.state.bedrooms} Bedrooms */}
              </button>
              <button
                className={styles.btn}
                //onClick={this.incrementBedrooms}
                type="button"
              >
                +
              </button>
            </div>
            <label htmlFor="button">Bathrooms</label>
            <div className={styles.btns}>
              <button
                className={styles.btn}
                //onClick={this.decrementBathrooms}
                type="button"
              >
                -
              </button>
              <button
                className={styles.btntext}
                type="button"
                disabled
                id="bathrooms"
              >
                {/* {this.state.bathrooms} Bathrooms */}
              </button>
              <button
                className={styles.btn}
                //onClick={this.incrementBathrooms}
                type="button"
              >
                +
              </button>
            </div>
          </div>

          {/* <span>3</span>Bedrooms & Bathrooms
            <div className={styles.innerwrap}>
            <label>
              Bedrooms
              <input className={styles.input}
                id="bedrooms"
                //onChange={this.formHandler}
                onClick={bedRommsHandler}
                type="number"
                name="bedRooms"
                min="0"
                max="8"
                autoComplete="false"
                defaultValue="0"
              />{" "}
            </label>
            <label>
              Bathrooms{" "}
              <input className={styles.input}
                id="bathrooms"
               // onChange={this.formHandler}
                onClick={bathRoomshandler}
                type="number"
                name="bathRooms"
                min="0"
                max="8"
                autoComplete="false"
                defaultValue="0"
              />{" "}
            </label>
            
            
          </div>
           */}

          <div className={styles.section}>
            <span>4</span>Extras
          </div>
          <div className={styles.innerwrap}>
            <Extras
              //onclick={this.changeExtras}
              // classFridge={fridgeClass}
              // classOven={ovenClass}
              // classMove={moveClass}
              // classWall={wallClass}
            />
          </div>

          <div className={styles.section}>
            <span>5</span>Date & Time
          </div>
          <div className={styles.innerwrap}>
            <div className={styles.datetime}>
              <div id="datepicker" className={styles.date}>
                <label>Choose a Date </label>
                 {/* <DatePicker
                //   selected={this.state.startDate}
                //   onChange={this.handleChange}
                  //onClick={this.formHandler}
                  //onClick={this.hideKeyb}
                />
              </div> */}
              <div className={styles.time}>
                <label htmlFor="Choose a Time">Choose A Time</label>

                {/* <TimePicker
                  id="time"
                  showSecond={false}
                  defaultValue={now}
                  className="xxx"
                  onChange={this.onchange}
                  format={format}
                  use12Hours
                  inputReadOnly
                /> */}
              </div>
            </div>
          </div>
          
         
         <div className={styles.buttonsection}>
            
            {/* <StripeCheckout
              preventDefault
              amount={total * 100}
              label="Credit Card"
              name="Boston Maids"
              email=""
              token={handlerToken}
              //token={ (token) =>{axios.post('/api/stripe', token)}}

              stripeKey={"pk_test_yBMj0cqYIXUsXeJ0lnVBil1T"}
            /> */}

            <button className={styles.buttom} >
              Cash Payment
            </button>
            <span className="privacy-policy">
              <input id="mycheck" type="checkbox" name="checkbox" />
              You agree to our Terms and Policy.
            </span>
          </div>
          </div>
        </form>
      </div>
   </div>
   </div>


 )


}

export default BookingForm;