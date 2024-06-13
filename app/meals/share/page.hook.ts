import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

export function useShareMeal() {
  async function shareMeal(formData: FormData) {
    "use server";

    const meal = {
      title: formData.get("title") as string,
      summary: formData.get("summary") as string,
      instructions: formData.get("instructions") as string,
      image: formData.get("image") as File,
      creator: formData.get("name") as string,
      creator_email: formData.get("email") as string,
    };

    await saveMeal(meal);
    redirect("/meals");
  }

  return {
    shareMeal,
  };
}
