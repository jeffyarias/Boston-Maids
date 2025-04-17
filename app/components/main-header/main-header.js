import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from '@/assets/cleaning-logo.svg';
import classes from './main-header.module.css';
import NavLink from "./nav-link";


export default function MainHeader() {

    return ( 
        <>
    <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Best cleaning of your life" priority />
        Next Level cleaning
        </Link>


        <nav className={classes.nav}>
       <ul>
      <li>
      <NavLink href="/bookings" className="">Booking</NavLink>
      </li>
      <li>
        <NavLink href="/services">
          Services Offer</NavLink>
      </li>
       
       </ul>


        </nav>
    </header>
    </>
    )
}