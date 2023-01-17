import styles from "../../styles/Projects.module.css";
import ProjectCard from "./projectCard";
import DetailsProject from "./detailsProject";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { fr, en } from "../../public/translations";

export default function Projects() {
  const [popUp, setPopUp] = useState(false);

  const router = useRouter();
  const { locale } = router;

  const t: any = locale === "en" ? en : fr;

  useEffect(() => {
    AOS.init();
  }, []);

  const defaultProject = {
    title: "HYRULE CASTLE",
    image: "https://i.imgur.com/2AuZzhv.jpg",
    description: "",
  };

  const [Project, setProject] = useState(defaultProject);

  const projects = [
    {
      title: t.Project_1_1,
      image: "https://i.imgur.com/2AuZzhv.jpg",
      description: t.Project_1_2,
    },
    {
      title: t.Project_2_1,
      image: "./img/MyWebsite.png",
      description: t.Project_2_2,
    },
    {
      title: t.Project_3_1,
      image: "https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/",
      description: t.Project_3_2,
    },
    {
      title: t.Project_4_1,
      image: "./img/CodeCamp1.png",
      description: t.Project_4_2,
    },
  ];

  return (
    <div className={styles.All} data-aos="fade-up">
      <h1 className={styles.Title}> .{t.Project} </h1>
      <DetailsProject
        title={Project?.title}
        image={Project?.image}
        description={Project?.description}
        isOpen={popUp}
        setIsOpen={setPopUp}
      />
      <div className={styles.Container}>
        {projects.map((project: any, index: any) => (
          <div
            key={index}
            onClick={function (event: any) {
              setPopUp(true);
              setProject(project);
            }}
            data-aos="flip-left"
            data-aos-anchor-placement="top-bottom"
            >
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
