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
          <h1>Real programs, running in real neighbourhoods.</h1>
          <p>
            From craft training to tech education to emergency relief — here&apos;s
            what VAF is actively doing across Lagos right now.
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
