import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";

import { MainHeaderBackground } from "./components/main-header-background";
import { NavigationLink } from "./components/navigation-link";
import styles from "./main-header.module.css";

export function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImage} alt="A plate with food on it" priority />
          Next Level Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavigationLink href="/meals">Meals</NavigationLink>
            </li>
            <li>
              <NavigationLink href="/community">
                Foodies Community
              </NavigationLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
