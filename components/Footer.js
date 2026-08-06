import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.about}>
          <img src="/images/vaf-logo.jpg" alt="Violet AbdulKadir Foundation" className={styles.logo} />
          <p>
            Join us on our journey to create a world where youths and women
            have easy access to economic opportunities.
          </p>
        </div>

        <div>
          <h4>Navigate</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/causes/">Our Work</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className={styles.contactList}>
            <li>10 Akinsemoyin Street, Surulere, Lagos, Nigeria</li>
            <li>+234 (080) 332-3339</li>
            <li>info@vaf.org</li>
          </ul>
        </div>
      </div>

      <div className={`wrap ${styles.bottom}`}>
        <span>&copy; {new Date().getFullYear()} Violet AbdulKadir Foundation. All rights reserved.</span>
      </div>
    </footer>
  );
}
