import Database from "better-sqlite3";

import { MealsProps } from "@/typings/meals";

const db = Database("meals.db");

export async function getMeals() {
  // for educational purposes, because it does not have to be async
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare<MealsProps[], MealsProps>("SELECT * FROM meals").all();
}

export function getMeal(slug: string) {
  return db
    .prepare<MealsProps["slug"], MealsProps>(
      "SELECT * FROM meals WHERE slug = ?"
    )
    .get(slug);
}
