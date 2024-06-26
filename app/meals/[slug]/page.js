
import React from 'react'
import classes from "./page.module.css"
import Image from 'next/image'
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';
export default function MealDetail({params}) {
  const slug=params.slug;
  const meal=getMeal(slug);
  if(!meal){
    notFound();
  }
  meal.instructions=meal.instructions.replace(/\n/g,"<br/>")
  console.log(meal)
  return (
 <>
 <header className={classes.header}>
  <div className={classes.image}>
    <Image src={`https://bucketofdophatdat.s3.ap-southeast-2.amazonaws.com/${meal.image}`} alt={meal.title} fill ></Image>
   
  </div>
  <div className={classes.headerText}>
    <h1>{meal.title}</h1>
    <p className={classes.creator}>
      by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
    </p>
    <p className={classes.summary}>{meal.summary}</p>
  </div>
 </header>
 <main>
  <p className={classes.instructions} dangerouslySetInnerHTML={{
    __html:meal.instructions
  }}></p>
 </main>
 </>
  )
}
