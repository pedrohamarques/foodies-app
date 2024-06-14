import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";

import styles from "./page.module.css";

type MealsDetailsParams = {
  params: {
    mealSlug: string;
  };
};

export async function generateMetadata({ params }: MealsDetailsParams) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal?.title,
    description: meal?.summary,
  };
}

export default function MealDetails({ params }: MealsDetailsParams) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  if (meal?.instructions) {
    meal.instructions = meal?.instructions.replace(/\n/g, "<br />");
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image
            fill
            src={meal?.image ? meal.image : ""}
            alt="Image of a dish"
          />
        </div>
        <div className={styles.headerText}>
          <h1>{meal?.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto: ${meal?.creator_email}`}>{meal?.creator}</a>
          </p>
          <p className={styles.summary}>{meal?.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal?.instructions ? meal.instructions : "",
          }}
        ></p>
      </main>
    </>
  );
}
