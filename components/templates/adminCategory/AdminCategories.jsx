import AdminCategoriesRow from '@/components/modules/adminCategory/AdminCategoriesRow'
import React from 'react'

function AdminCategories({categories,setCategories}) {
  return (
    <div className="col-md-9">
    <div className="table-responsive">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className="text-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value=""/>
                        </div>
                    </th>
                    <th>شناسه</th>
                    <th>نام</th>
                    <th>توضیحات</th>
                    <th>نامک</th>
                    <th className="text-end">عملیات</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories.map(cat=>(
                        <AdminCategoriesRow key={cat.id} {...{category:cat,setCategories}}/>
                    ))
                }

            </tbody>
        </table>
    </div>
</div>
  )
}

export default AdminCategories