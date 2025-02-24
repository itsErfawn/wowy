import AdminCategoryPageComponent from '@/components/templates/adminCategory/AdminCategoryPageComponent'
import CategoriesModel from '@/models/categories/categories'
import React from 'react'

async function adminCategoriesPage() {
    const model=await new CategoriesModel();
    const category=await model.getAll()
    
    
  return (
    <AdminCategoryPageComponent {...{category}}/>
  )
}

export default adminCategoriesPage