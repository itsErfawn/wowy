import Link from 'next/link'
import React from 'react'

function AdminCategoriesRow({category}) {
  return (
    <tr>
    <td className="text-center">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value=""/>
        </div>
    </td>
    <td>{category.id}</td>
    <td><b>{category.name}</b></td>
    <td>{category.description} </td>
    <td>/{category.slug}</td>
    <td className="text-end">
        <div className="dropdown">
            <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </Link>
            <div className="dropdown-menu">
                <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                <Link className="dropdown-item text-danger" href="#">حذف</Link>
            </div>
        </div> 
    </td>
</tr>
  )
}

export default AdminCategoriesRow