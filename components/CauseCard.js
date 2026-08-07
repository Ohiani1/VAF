import Link from "next/link";
import styles from "./CauseCard.module.css";

export default function CauseCard({ cause }) {
  return (
    <Link href={`/causes/${cause.slug}/`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={cause.image} alt="" className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3>{cause.title}</h3>
        <p>{cause.summary}</p>
        <span className={styles.link}>Read the full story &rarr;</span>
      </div>
    </Link>
  );
}
