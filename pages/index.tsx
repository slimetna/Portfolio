import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Timeline from "./components/timeline";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className={styles.All}>
      <div className={styles.Container}>
        <Navbar />
        <div id="About">
          <About />
        </div>
        <div id="Experience">
          <Timeline />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
