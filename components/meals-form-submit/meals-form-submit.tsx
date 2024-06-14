"use client";

import { useMealsFormSubmit } from "./meals-form-submit.hook";

export function MealsFormSubmit() {
  const { pending } = useMealsFormSubmit();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
