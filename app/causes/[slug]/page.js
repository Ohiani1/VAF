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

  const pct = Math.round((cause.raised / cause.goal) * 100);
  const others = causes.filter((c) => c.slug !== cause.slug);

  return (
    <>
      <section className={styles.hero}>
        <div className="wrap">
          <a href="/causes/" className={styles.backLink}>&larr; All causes</a>
          <span className="eyebrow">Active cause</span>
          <h1>{cause.title}</h1>

          <div className={styles.progressCard}>
            <div className={styles.progressTop}>
              <span><strong>${cause.raised.toLocaleString()}</strong> raised</span>
              <span>{pct}% of ${cause.goal.toLocaleString()} goal</span>
            </div>
            <div className="reach-bar">
              <div className="reach-bar__fill" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className={styles.body}>
            {cause.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a href="/contact/" className="btn btn-primary">Support this cause</a>
          </div>
        </div>
      </section>

      <section className="section section-tight" style={{ background: "var(--paper-dim)" }}>
        <div className="wrap">
          <span className="eyebrow">Other causes</span>
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
