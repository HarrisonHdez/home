"use client";
import Image from "next/image";
import styles from "../app/page.module.css";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${styles.nav} animate__animated  animate__fadeInDown`}
      aria-label="Barra de navegacion principal"
    >
      <div className={`${styles.nav__content}  ${styles.container}`}>
        <Link
          tabIndex={0}
          href="#"
          role="link"
          className={styles.nav__logo}
          title="Clic para ir a Home"
          aria-label="Clic para ir a Home"
          onClick={() => {
            if (window.innerWidth < 992 && isOpen) {
              toggleMenu();
            }
          }}
        >
          <Image
            width={197}
            height={40}
            src="svg/logo.svg"
            alt="logo"
            priority={true}
            className={styles.nav__logo}
          />
        </Link>

        <div
          className={`${styles.nav__links} ${
            isOpen ? styles.mobile__menu : ""
          }`}
        >
          <Link
            tabIndex={0}
            href="#"
            role="link"
            to="contact"
            className={`${styles.nav__contact_mobile} `}
            aria-label="Clic para ir a Contacto"
            onClick={() => {
              if (window.innerWidth < 992) {
                toggleMenu();
              }
            }}
          >
            Book a Demo
          </Link>

          <Link
            tabIndex={0}
            href="#"
            role="link"
            className={styles.nav__link}
            title="click to go home"
            aria-label="click to go home"
            onClick={() => {
              if (window.innerWidth < 992) {
                toggleMenu();
              }
            }}
          >
            Home
          </Link>
          <Link
            tabIndex={0}
            href="#"
            role="link"
            to="about"
            className={styles.nav__link}
            title="click to go Build Your Team"
            aria-label="click to go Build Your Team"
            onClick={() => {
              if (window.innerWidth < 992) {
                toggleMenu();
              }
            }}
          >
            Build Your Team
          </Link>

          <Link
            tabIndex={0}
            href="#"
            role="link"
            to="services"
            className={styles.nav__link}
            title="click to go Get Hired"
            aria-label="click to go Get Hired"
            onClick={() => {
              if (window.innerWidth < 992) {
                toggleMenu();
              }
            }}
          >
            Get Hired
          </Link>

          <Link
            tabIndex={0}
            href="#"
            role="link"
            to="contact"
            className={`${styles.nav__link} ${styles.nav__link_demo} `}
            title="click to go Book a Demo"
            aria-label="click to go Book a Demo"
            onClick={() => {
              if (window.innerWidth < 992) {
                toggleMenu();
              }
            }}
          >
            Book a Demo
          </Link>
        </div>

        <button
          className={`iconburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir/Cerrar Menú"
        >
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
