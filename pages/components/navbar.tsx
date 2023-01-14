import styles from "../../styles/Navbar.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { fr, en } from "./translations";

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;

  const t: any = locale === "en" ? en : fr;

  const toggleLanguage = () => {
    switch (locale) {
      case "en":
        router.push("/", "/", { locale: "fr" });
        break;
      case "fr":
        router.push("/", "/", { locale: "en" });
        break;
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "end",
    });
  };

  return (
    <nav className={styles.Navbar} data-aos="zoom-in" data-aos-duration="1500">
      <div className={styles.Logo}>
        <img src="../img/logo.png" alt="" />
      </div>
      <div className={styles.Link}>
        <ul>
          <li onClick={() => scrollToElement("About")}>
            <span> 01. </span> {t.Nav_01}
          </li>
          <li onClick={() => scrollToElement("Experience")}>
            <span> 02. </span> {t.Nav_02}
          </li>
          <li onClick={() => scrollToElement("Projects")}>
            <span> 03. </span> {t.Nav_03}
          </li>
          <li onClick={() => scrollToElement("Contact")}>
            <span> 04. </span> {t.Nav_04}
          </li>
          <button onClick={toggleLanguage}>FR/EN</button>
          <a href="./CV.pdf" download="CV Slim OURLISSENE">
            <button> {t.Nav_05} </button>
          </a>
        </ul>
      </div>
    </nav>
  );
}
