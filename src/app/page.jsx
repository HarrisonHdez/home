import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className={styles.home}>
        <Navbar />
        <div className={`${styles.home__content} ${styles.container}`}>
          <div className={styles.home__text}>
            <h1
              className={`${styles.home__title} animate__animated animate__fadeIn`}
            >
              <span>Build your team abroad and level-up</span>{" "}
              <span className={styles.home__span}>your business</span>{" "}
            </h1>

            <p
              className={`${styles.home__subtitle} animate__animated animate__fadeIn`}
            >
              Unlock the full potential of your business with our pre-vetted
              talent pool and advanced tech solutions
            </p>

            <div className={styles.home__buttons}>
              <Link
                tabIndex={0}
                href="#"
                role="link"
                className={`${styles.home__link_demo} animate__animated animate__fadeIn`}
                title="Clic para ir a About"
                aria-label="Book a Demo"
              >
                Book a Demo
              </Link>
              <Link
                tabIndex={0}
                href="#"
                role="link"
                className={`${styles.home__button} animate__animated animate__fadeIn`}
                title="Clic para ir a About"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className={styles.home__image}>
            <Image
              data-aos="fade-up"
              ata-aos-delay="300"
              data-aos-duration="1000"
              width={500}
              height={500}
              src="/image/team.jpg"
              alt="team"
              className="animate__animated animate__fadeIn"
              priority={true}
            />
          </div>
        </div>
      </header>
    </main>
  );
}
