import { MealsProps } from "@/typings/meals";

import { MealItem } from "./components/meal-item";

import styles from "./meals-grid.module.css";

type MealsGridProps = {
  meals: MealsProps[];
};

export function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
