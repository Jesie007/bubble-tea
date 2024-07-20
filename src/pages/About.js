import styles from "./About.module.css";
import PageNav from "../components/PageNav";

function About() {
  return (
    <div>
      <PageNav />
      <div className={styles.about}>
        <div className={styles.happiness}>
          <h2>Tea for happiness</h2>
          <p>
            Founded on a love for tea and a passion for bringing people
            together. Over the years, our commitment to quality and innovation
            has helped us grow, but our core values remain the same: we want to
            make you smile with every bubble tea.
          </p>
        </div>

        <div className={styles.quality}>
          <h2>Tea for quality</h2>
          <p>
            Our journey to quality begins with the careful selection of tea
            leaves and ingredients. We source premium tea from renowned
            plantations and work closely with trusted suppliers to ensure that
            every component of our bubble tea meets our stringent standards.
          </p>
        </div>
      </div>

      <footer className={styles.footer}>
        Copyright &copy; Jessie reserved
      </footer>
    </div>
  );
}

export default About;
