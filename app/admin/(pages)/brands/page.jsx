import adminBootstrap from '@/Bootstrap/admin-bootstrap'
import AdminBrandPageComponent from '@/components/templates/adminBrand/AdminBrandPageComponent'
import React from 'react'

async function adminBrandsPage() {

const brands=await adminBootstrap.brands()
  return (<AdminBrandPageComponent {...{brands}} />)
}

export default adminBrandsPage