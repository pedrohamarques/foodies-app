import { Suspense } from "react";
import Link from "next/link";

import { MealsGrid } from "@/components/meals-grid";
import { Loading } from "@/components/loading";

import { getMeals } from "@/lib/meals";

export const metadata: Metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

import styles from "./page.module.css";
import { Metadata } from "next";

async function MealsFetch() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <MealsFetch />
        </Suspense>
      </main>
    </>
  );
}
