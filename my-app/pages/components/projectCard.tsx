import styles from "../../styles/ProjectCard.module.css";

export default function ProjectCard({ title, image, number }: any) {
  return (
    <div className={styles.All}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <img src={image} alt="" />
      <h1> {title} </h1>
    </div>
  );
}
