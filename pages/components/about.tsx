import styles from "../../styles/Intro.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { fr, en } from "../../public/translations";

export default function About() {
  const router = useRouter();
  const { locale } = router;

  const t: any = locale === "en" ? en : fr;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="about"
      className={styles.Container}
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <div className={styles.Large}>
        <h1> {t.About_Welcome} </h1>
        <h2> {t.About_Dev} </h2>
      </div>
      <div>
        <p>{t.About_Student}</p>
      </div>
      <div className={styles.Dev}>
        <section>
          <h4> {t.About_Lib} </h4>
          <div className={styles.Framework}>
            <i className="devicon-react-original-wordmark" />
            <i className="devicon-nextjs-original-wordmark" />
            <i className="devicon-express-original-wordmark" />
          </div>
        </section>
        <section>
          <h4> {t.About_Lang} </h4>
          <div className={styles.Languages}>
            <i className="devicon-typescript-plain" />
            <i className="devicon-java-plain-wordmark" />
            <i className="devicon-python-plain-wordmark" />
          </div>
        </section>
        <section>
          <h4> {t.About_Other} </h4>
          <div className={styles.Other}>
            <i className="devicon-git-plain-wordmark" />
            <i className="devicon-visualstudio-plain" />
            <i className="devicon-mysql-plain-wordmark" />
          </div>
        </section>
      </div>
    </div>
  );
}
