'use server'

import { saveMeal } from "./meals"

export async function shareMeal(formData){
    'use server'
    const meal={
      title:formData.get('title'),
      image :formData.get('image'),
      summary :formData.get('title'),
      instructions :formData.get('instructions'),
      creator :formData.get('name'),
      creator_email :formData.get('email'),
      
    }
   await saveMeal(meal)
  }