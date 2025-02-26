import Link from 'next/link'
import React from 'react'

function AdminBrandItem({brand}) {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
            <figure className="card border-1">
                <div className="card-header bg-white text-center">
                    <img height="76" src={brand.image} className="img-fluid" alt="لوگو"/>
                </div>
                <figcaption className="card-body text-center">
                    <h6 className="card-title m-0">{brand.name}</h6>
                    <Link href="#"> ۳۹۸ آیتم </Link>
                </figcaption>
            </figure>
        </div>
  )
}

export default AdminBrandItem