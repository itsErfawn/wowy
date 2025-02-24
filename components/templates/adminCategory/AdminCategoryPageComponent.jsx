"use client"
import React, { useState } from 'react'
import AdminCategoryForm from './AdminCategoryForm'
import AdminCategories from './AdminCategories'

function AdminCategoryPageComponent({category}) {
    const [categories,setCategories]=useState(category)
  return (
    <section className="content-main">
    <div className="content-header">
        <div>
            <h2 className="content-title card-title">دسته‌بندی‌ها</h2>
            <p>افزودن، ویرایش یا حذف یک دسته‌بندی</p>
        </div>
        <div>
            <input type="text" placeholder="جستجوی دسته‌بندی‌ها" className="form-control bg-white"/>
        </div>
    </div>
    <div className="card">
        <div className="card-body">
            <div className="row">
                <AdminCategoryForm {...{setCategories,categories}} />
                <AdminCategories {...{categories}}/>
            </div> 
        </div> 
    </div>
</section>
  )
}

export default AdminCategoryPageComponent