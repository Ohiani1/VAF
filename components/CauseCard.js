import Link from "next/link";
import styles from "./CauseCard.module.css";

export default function CauseCard({ cause }) {
  const pct = Math.round((cause.raised / cause.goal) * 100);

  return (
    <Link href={`/causes/${cause.slug}/`} className={styles.card}>
      <span className={styles.pct}>{pct}%</span>
      <h3>{cause.title}</h3>
      <p>{cause.summary}</p>

      <div className={styles.progressRow}>
        <div className="reach-bar">
          <div className="reach-bar__fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className={styles.figures}>
        <span><strong>${cause.raised.toLocaleString()}</strong> raised</span>
        <span>Goal ${cause.goal.toLocaleString()}</span>
      </div>

      <span className={styles.link}>Read the full story &rarr;</span>
    </Link>
  );
}
