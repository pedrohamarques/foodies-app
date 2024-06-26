import { StaticImageData } from "next/image";

export type MealsProps = {
  title: string;
  slug: string;
  image: StaticImageData;
  summary: string;
  creator: string;
  id: string;
  creator_email: string;
  instructions: string;
};

export type ShareMealProps = Omit<MealsProps, "slug" | "image" | "id"> & {
  image: File;
  id?: string;
};
