import styles from "../../styles/DetailsProject.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DetailsProject({
  title,
  image,
  description,
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
        <h1> {title} </h1>
        <p>{description}</p>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
