import Link from 'next/link'
import React from 'react'

function PopularCategory({category}) {
  return (
    <div className="card-1 border-radius-10 hover-up p-30">
    <figure className="mb-30 img-hover-scale overflow-hidden">
        <img src={category.image} alt={category.name}/>
    </figure>
    <h5><Link href={'/categories/'+category.slug}>{category.name}</Link></h5>
</div>
  )
}

export default PopularCategory