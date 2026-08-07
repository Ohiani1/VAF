import styles from "./page.module.css";
import CauseCard from "../components/CauseCard";
import ReachMark from "../components/ReachMark";
import HeroCarousel from "../components/HeroCarousel";
import { causes } from "../data/causes";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">Get started today</span>
            <h1>
              Help empower <em>youths</em> and <em>women</em> to reach further.
            </h1>
            <p>
              The Violet AbdulKadir Foundation works across Lagos to open doors
              through education, economic opportunity, and hands-on training —
              so every young person and every woman has room to grow.
            </p>
            <div className={styles.heroActions}>
              <a href="/about/" className="btn btn-primary">Learn our story</a>
              <a href="/causes/" className="btn btn-ghost">See our work</a>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <strong>3</strong>
                <span>Active programs</span>
              </div>
              <div className={styles.heroStat}>
                <strong>Lagos</strong>
                <span>Based &amp; growing</span>
              </div>
              <div className={styles.heroStat}>
                <strong>100%</strong>
                <span>Community-led</span>
              </div>
            </div>
          </div>

          <div className={styles.heroPhoto}>
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="wrap">
          <span className="eyebrow">What we do</span>
          <div className={styles.workGrid}>
            <div className={styles.workCard}>
              <span className={styles.workIndex}>Program A</span>
              <h3>Empower Women</h3>
              <p>
                We educate women and help them better their lives and standard
                of living — through skills training, mentorship, and access to
                the tools that make independence possible.
              </p>
            </div>
            <div className={styles.workCard}>
              <span className={styles.workIndex}>Program B</span>
              <h3>Empower Youth</h3>
              <p>
                We guide and foster an environment and education that helps
                young people build real, lasting pathways — not just short-term
                fixes.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section">
        <div className="wrap">
          <div className={styles.causesHead}>
            <div>
              <span className="eyebrow">In the field</span>
              <h2 style={{ marginTop: 14, fontSize: "2.2rem" }}>
                What we&apos;re working on right now
              </h2>
            </div>
            <a href="/causes/" className="btn btn-ghost">View all programs</a>
          </div>

          <div className={styles.causesGrid}>
            {causes.map((c) => (
              <CauseCard key={c.slug} cause={c} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.missionBand}>
        <div className="wrap">
          <span className="eyebrow">Our mission</span>
          <p className={styles.missionQuote}>
            To empower youths and women through education, economic
            opportunities, and specialised training — providing a{" "}
            <em>better standard of living</em> and helping them reach their
            full potential.
          </p>
        </div>
        <div className={styles.missionMark}>
          <ReachMark />
        </div>
      </section>      

      <section className={styles.ctaBand}>
        <div className="wrap">
          <span className="eyebrow">Join us</span>
          <h2>Your support reaches further than you think.</h2>
          <div className={styles.ctaActions}>
            <a href="/contact/" className="btn btn-dark">Get in touch</a>
            <a href="/causes/" className="btn btn-ghost-light">Explore our work</a>
          </div>
        </div>
      </section>
      
    </>
  );
}

