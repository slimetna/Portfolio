import React from "react";
import { Chrono } from "react-chrono";
import styles from "../../styles/Timeline.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { fr, en } from "../../public/translations";

export default function Timeline() {
  const router = useRouter();
  const { locale } = router;

  const t: any = locale === "en" ? en : fr;

  useEffect(() => {
    AOS.init();
  }, []);

  const UPC = [
    {
      title: t.Background_2020_1,
      cardTitle: t.Background_2020_2,
      cardSubtitle: t.Background_2020_3,
      cardDetailedText: t.Background_2020_4,
    },
    {
      title: t.Background_2022_1,
      cardTitle: t.Background_2022_2,
      cardSubtitle: t.Background_2022_3,
      cardDetailedText: t.Background_2022_4,
    },
    {
      title: t.Background_2026_1,
      cardTitle: t.Background_2026_2,
      cardSubtitle: t.Background_2026_3,
      cardDetailedText: t.Background_2026_4,
    },
  ];

  const UPC2 = [
    {
      title: t.Background_2020_1,
      cardTitle: t.Background_2020_2,
      cardSubtitle: t.Background_2020_3,
      cardDetailedText: t.Background_2020_4,
    },
    {
      title: t.Background_2022_1,
      cardTitle: t.Background_2022_2,
      cardSubtitle: t.Background_2022_3,
      cardDetailedText: t.Background_2022_4,
    },
    {
      title: t.Background_2026_1,
      cardTitle: t.Background_2026_2,
      cardSubtitle: t.Background_2026_3,
      cardDetailedText: t.Background_2026_4,
    },
  ];

  return (
    <div
      className={styles.All}
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h1> .{t.Background} </h1>
      <div className={styles.Container}>
        <Chrono items={UPC} mode="HORIZONTAL" />
      </div>
      <div className={styles.Container2}>
        <Chrono items={UPC2} mode="VERTICAL" />
      </div>
    </div>
  );
}
