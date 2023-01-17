import styles from "../../styles/DetailsProject.module.css";
import { AiFillCloseCircle, AiFillGithub } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DetailsProject({
  title,
  image,
  description,
  link,
  isOpen,
  setIsOpen,
}: any) {
  useEffect(() => {
    AOS.init();
  }, []);

  return isOpen ? (
    <div className={styles.All}>
      <div className={styles.Container} data-aos="zoom-in">
        <button onClick={() => setIsOpen(false)}>
          {" "}
          <AiFillCloseCircle size={200} />{" "}
        </button>
        <img src={image} alt="" />
        <div className={styles.Info}>
        <h1> {title} </h1>
        <a href={link} target="_blank"><AiFillGithub size={30} /></a>
        </div>
        <p>{description}</p>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
