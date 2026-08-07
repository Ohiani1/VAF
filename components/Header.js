"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/causes/", label: "Our Work" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={`wrap ${styles.topBarInner}`}>
          <span>+234 (080) 332-3339</span>
          <span className={styles.dot} />
          <span>info@vaf.org</span>
        </div>
      </div>
      <div className={`wrap ${styles.mainBar}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img src="/images/vaf-trimmed.png" alt="Violet AbdulKadir Foundation" />
        </Link>

        <nav className={styles.nav} data-open={open}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          {/* <Link href="/contact/" className={`btn btn-primary ${styles.cta}`} onClick={() => setOpen(false)}>
            Donate
          </Link> */}
        </nav>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
