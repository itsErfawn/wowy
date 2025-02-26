import React from 'react'
import AdminBrandItem from './AdminBrandItem'

function AdminBrands({brands}) {
  return (
    <div className="card-body">
    <div className="row gx-3">
        {brands.brands.map(brand=>(
            <AdminBrandItem {...{brand}} key={brand.id} />
        ))}
    </div>
</div>
  )
}

export default AdminBrands