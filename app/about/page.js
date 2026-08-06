import styles from "./page.module.css";
import ReachMark from "../../components/ReachMark";

export const metadata = {
  title: "About | Violet AbdulKadir Foundation",
};

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className="wrap">
          <span className="eyebrow">About us</span>
          <h1>Built around one idea: opportunity should be reachable, not inherited.</h1>
          <p>
            The Violet AbdulKadir Foundation (VAF) is a Lagos-based
            organisation working to close the gap between potential and
            opportunity for youths and women across our community.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`wrap ${styles.storyGrid}`}>
          <div>
            <h2>Our mission</h2>
          </div>
          <div className={styles.storyBody}>
            <p>
              Our mission is to empower youths and women through education,
              economic opportunities, and specialised training — to provide a
              better standard of living and enable them to maximise their
              full potential.
            </p>
            <p>
              We believe lasting change happens close to the ground: through
              consistent programs, direct relationships, and support that
              meets people where they are, not where a spreadsheet assumes
              they should be.
            </p>

            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Education first</h3>
                <p>Skills and knowledge that outlast any single donation cycle.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Economic access</h3>
                <p>Real pathways to income, not one-off handouts.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Community-led</h3>
                <p>Programs shaped by the people who use them, in Surulere and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.markStrip}>
        <ReachMark />
      </div>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">What we do</span>
          <div className={styles.storyGrid} style={{ marginTop: 32 }}>
            <div>
              <h2>Empower Women</h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 15.5, lineHeight: 1.7 }}>
                Educate women and help women better their life and standard
                of living.
              </p>
            </div>
            <div className={styles.storyBody}>
              <p>
                From vocational training to mentorship circles, our work with
                women is built to be practical: skills that translate
                directly into income, and a community that keeps showing up
                after the workshop ends.
              </p>
            </div>
          </div>

          <div className={styles.storyGrid} style={{ marginTop: 56 }}>
            <div>
              <h2>Empower Youth</h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 15.5, lineHeight: 1.7 }}>
                We guide and foster an environment and education to help
                the youth.
              </p>
            </div>
            <div className={styles.storyBody}>
              <p>
                Young people don&apos;t need to be told what&apos;s possible —
                they need the structure and access to go get it. Our youth
                programs focus on mentorship, foundational education, and
                exposure to real economic opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
