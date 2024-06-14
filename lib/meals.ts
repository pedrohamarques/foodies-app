import fs from "node:fs";

import Database from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import { MealsProps, ShareMealProps } from "@/typings/meals";

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

export async function saveMeal(meal: ShareMealProps) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  const image = `/images/${fileName}`;

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  db.prepare(
    `INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `
  ).run({
    title: meal.title,
    summary: meal.summary,
    instructions,
    creator: meal.creator,
    creator_email: meal.creator_email,
    image,
    slug,
  });
}
