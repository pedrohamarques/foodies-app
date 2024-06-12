import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";

import styles from "./main-header.module.css";

export function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImage} alt="A plate with food on it" priority />
        Next Level Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
