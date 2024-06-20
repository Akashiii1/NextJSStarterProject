import Link from 'next/link'
import React from 'react'
import classes from "./page.module.css"
import MealsGrid from '../components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
export default async function MealPage() {
   const meals=await getMeals();
  return (
   <>
   <header className={classes.header}>
    <h1>Delicous meals, created <span className={classes.highlight}>by you</span></h1>
    <p>Choose your favorite receipe and cook it yourself. It is easy and fun !</p>
    <p className={classes.cta}>
      <Link href={"meals/share"}>Share Your Favorite Receipe</Link>

    </p>
   </header>
   <main className={classes.main}>
    <MealsGrid meals={meals}></MealsGrid>
   </main>
   </>
  )
}
