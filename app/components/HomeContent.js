import styles from "./HomeContent.module.css"; // Importing the CSS Module

const HomeContent = () => {
  return (
    <div className={styles.homeContent}>
      {/* Hero Section (Main CTA) */}
      <section className={styles.heroSection}>
        <h1>NextLevel Cleaning – Professional & Reliable Service</h1>
        <p>Affordable, top-rated home & office cleaning services in your area.</p>
        <a href="/book" className={styles.ctaButton}>Get a Free Quote</a>
      </section>

      {/* Services Overview */}
      <section id="services" className={styles.servicesSection}>
        <h2>Our Services</h2>
        <p>We offer top-notch cleaning solutions for homes, offices, and rental properties.</p>
        <ul>
          <li>🏠 Residential Cleaning – Keep your home fresh and tidy.</li>
          <li>🏢 Office & Commercial Cleaning – Maintain a clean workspace.</li>
          <li>🚪 Move-In & Move-Out Cleaning – Perfect for transitions.</li>
          <li>🛏️ Airbnb & Rental Cleaning – Impress your guests every time.</li>
        </ul>
      </section>

      {/* Booking Section (CTA) */}
      <section id="book" className={styles.bookingSection}>
        <h2>Book Your Cleaning Today!</h2>
        <p>Let us handle the cleaning while you enjoy your time. Click below to schedule now!</p>
        <a href="/booking" className={styles.ctaButton}>Book Now</a>
      </section>
    </div>
  );
};

export default HomeContent;
