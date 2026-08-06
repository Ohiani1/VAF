import styles from "./page.module.css";
import CauseCard from "../../components/CauseCard";
import { causes } from "../../data/causes";

export const metadata = {
  title: "Our Work | Violet AbdulKadir Foundation",
};

export default function Causes() {
  return (
    <>
      <section className={styles.hero}>
        <div className="wrap">
          <span className="eyebrow">Our work</span>
          <h1>Every fund here is a person, not a percentage.</h1>
          <p>
            These are the causes we&apos;re actively raising for right now.
            Progress is tracked openly — here&apos;s exactly where things stand.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.grid}`}>
          {causes.map((c) => (
            <CauseCard key={c.slug} cause={c} />
          ))}
        </div>
      </section>
    </>
  );
}
