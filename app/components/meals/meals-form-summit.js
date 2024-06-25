'use client'
import React from 'react'
import {useFormStatus } from "react-dom";
export default function MealsFormSummit() {
    const {pending}=useFormStatus();
  return (
    <button disabled={pending} type="submit">{pending?"Submitting...":"Share Meal"}</button>
  )
}
