import Link from 'next/link'
import React from 'react'

export default function MealPage() {
  return (
    <main>
      <h1>This is Meal Pages</h1>
      <Link href={"/meals/share"}>go to share page</Link>

      <Link href={"meals/Meal_1"}>Meal 1</Link>
      <Link href={"meals/Meal_2"}>Meal 2</Link>
      <Link href={"meals/meal_3"}>Meal 3</Link>

    </main>
  )
}
