"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navigation-link.module.css";

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavigationLink({ children, href }: NavigationLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? ` ${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
}
