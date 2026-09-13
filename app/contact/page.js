"use client";

import { useState } from "react";
import styles from "./page.module.css";

const FORM_ENDPOINT = "https://formspree.io/f/mnpqkgkp";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "Message from thevaf.com",
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
                <strong>info@thevaf.com</strong>
              </div>
            </div>
          </div>

          {status === "sent" ? (
            <div className={styles.successBox}>
              <h3>Message sent</h3>
              <p>Thanks for reaching out — we&apos;ll get back to you as soon as we can.</p>
              <button className="btn btn-ghost" onClick={() => setStatus("idle")}>
                Send another message
              </button>
            </div>
          ) : (
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

              <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }} disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              {status === "error" && (
                <p className={styles.errorNote}>
                  Something went wrong sending that — please try again, or email us directly at info@thevaf.com.
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  );
}