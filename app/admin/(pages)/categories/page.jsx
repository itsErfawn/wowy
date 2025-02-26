import adminBootstrap from '@/Bootstrap/admin-bootstrap'
import AdminCategoryPageComponent from '@/components/templates/adminCategory/AdminCategoryPageComponent'
import React from 'react'

async function adminCategoriesPage() {
    const category=await adminBootstrap.categories()
    
  return (
    <AdminCategoryPageComponent {...{category}}/>
  )
}

export default adminCategoriesPage