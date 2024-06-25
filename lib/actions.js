"use server";
import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/dist/server/api-utils";
function isInValidText(text) {
  return !text || text.trim() === "";
}
export async function shareMeal(prevState,formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("title"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    isInValidText(meal.title) ||
    isInValidText(meal.summary) ||
    isInValidText(meal.instructions) ||
    isInValidText(meal.creator) ||
    isInValidText(meal.creator_email)||!meal.creator_email.includes("@")||
    !meal.image||meal.image.size===0
  ){
    return {message:"Invalid input"}
  }

    await saveMeal(meal);
    revalidatePath("/meals");
    redirect("/meals")
}
