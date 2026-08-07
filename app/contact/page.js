"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || "Message from vaf.org");
    window.location.href = `mailto:info@vaf.org?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <section className={styles.hero}>
        <div className="wrap">
          <span className="eyebrow">Get in touch</span>
          <h1>Questions, partnerships, or ways to help — we&apos;d like to hear from you.</h1>
          <p>
            Reach out directly, or send a message below and we&apos;ll get
            back to you as soon as we can.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.grid}`}>
          <div>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span>Address</span>
                <strong>10 Akinsemoyin Street, Surulere, Lagos, Nigeria</strong>
              </div>
              <div className={styles.infoItem}>
                <span>Phone</span>
                <strong>+234 (080) 332-3339</strong>
              </div>
              <div className={styles.infoItem}>
                <span>Email</span>
                <strong>info@vaf.org</strong>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input id="name" required value={form.name} onChange={update("name")} placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required value={form.email} onChange={update("email")} placeholder="you@example.com" />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <input id="subject" value={form.subject} onChange={update("subject")} placeholder="What's this about?" />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={6} required value={form.message} onChange={update("message")} placeholder="Tell us a bit more..." />
            </div>

            <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }}>
              Send message
            </button>

            {/* <p className={styles.note}>
              This opens your email app with the message pre-filled — the old
              site posted to a PHP script, which won&apos;t run on GitHub
              Pages. Swap this for a Formspree or Netlify Forms endpoint
              whenever you want submissions to land silently in an inbox
              without opening mail apps.
            </p> */}
          </form>
        </div>
      </section>
    </>
  );
}
