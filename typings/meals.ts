import { StaticImageData } from "next/image";

export type MealsProps = {
  title: string;
  slug: string;
  image: StaticImageData;
  summary: string;
  creator: string;
  id: string;
};
