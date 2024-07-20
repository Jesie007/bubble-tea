import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>Introduce our new smoothie</h1>
        <p>Healthy and savourable</p>
      </section>
    </main>
  );
}

export default Homepage;
