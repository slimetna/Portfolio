import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "../../styles/Contact.module.css";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { fr, en } from "../../public/translations";

export default function Contact() {
  const router = useRouter();
  const { locale } = router;

  const t: any = locale === "en" ? en : fr;

  useEffect(() => {
    AOS.init();
  }, []);

  const USER_ID = "3N_RJOXts67rrdzEi";
  const SERVICE_ID = "service_kgshbwc";
  const TEMPLATE_ID = "template_hrwcnye";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Your message has been sent",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    );
    e.target.reset();
  };

  return (
    <div
      className={styles.All}
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h1> .CONTACT </h1>
      <div className={styles.FormDiv}>
        <div className={styles.Link}>
          <a
            href="https://www.linkedin.com/in/slim-ourlissene-25493b252/"
            target="_blank"
          >
            <button> LINKEDIN </button>
          </a>
          <a href="https://www.github.com/slimetna" target="_blank">
            <button> GITHUB </button>
          </a>
          <a href="mailto:ourlis_s@etna-alternance.net">
            <button> E-MAIL </button>
          </a>
        </div>
        <form action="" className={styles.Form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t.Contact_1}
            name="from_name"
            required
          />

          <input
            type="email"
            placeholder={t.Contact_2}
            name="from_email"
            required
          />
          <textarea placeholder={t.Contact_3} name="message" required />
          <button> {t.Contact_4} </button>
        </form>
      </div>
    </div>
  );
}
