import React from 'react'

export default function MealDetail({params}) {
    console.log(params)
  return (
    <div>
      <h6>This is detail page</h6>
      <p>{params.slug}</p>
    </div>
  )
}
