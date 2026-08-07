import { notFound } from "next/navigation";
import styles from "./page.module.css";
import CauseCard from "../../../components/CauseCard";
import { causes, getCause } from "../../../data/causes";

export function generateStaticParams() {
  return causes.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const cause = getCause(params.slug);
  if (!cause) return {};
  return { title: `${cause.title} | Violet AbdulKadir Foundation` };
}

export default function CauseDetail({ params }) {
  const cause = getCause(params.slug);
  if (!cause) notFound();

  const others = causes.filter((c) => c.slug !== cause.slug);

  return (
    <>
      <section className={styles.hero}>
        <div className="wrap">
          <a href="/causes/" className={styles.backLink}>&larr; All programs</a>
          <span className="eyebrow">Active program</span>
          <h1>{cause.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.splitGrid}`}>
          <div className={styles.imageCol}>
            <img src={cause.image} alt="" className={styles.detailImage} />
          </div>
          <div className={styles.body}>
            {cause.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {!cause.signup && (
              <a href="/contact/" className="btn btn-primary">Get involved</a>
            )}
          </div>
        </div>
      </section>

      {cause.signup && (
        <section className="section section-tight" style={{ background: "var(--ink)", color: "var(--paper)" }}>
          <div className={`wrap ${styles.signupGrid}`}>
            <div>
              <span className="eyebrow" style={{ color: "#ff6b76" }}>Registration is open</span>
              <h2 className={styles.signupHeading}>{cause.signup.label}</h2>
              <p className={styles.signupCopy}>
                Scan the QR code or use the link below to apply for the current
                cohort. Slots are limited.
              </p>
              <a
                href={cause.signup.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Sign up now
              </a>
              {/* <div className={styles.signupUrl}>{cause.signup.url}</div> */}
            </div>
            <div className={styles.qrWrap}>
              <img src={cause.signup.qr} alt="QR code to sign up for the E1X Academy cohort" />
            </div>
          </div>
        </section>
      )}

      <section className="section section-tight" style={{ background: "var(--paper-dim)" }}>
        <div className="wrap">
          <span className="eyebrow">Other programs</span>
          <div className={styles.otherGrid} style={{ marginTop: 32 }}>
            {others.map((c) => (
              <CauseCard key={c.slug} cause={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
