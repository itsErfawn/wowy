"use client"
import pushAlert from '@/libs/alert/Alert'
import Link from 'next/link'
import React from 'react'

function AdminCategoriesRow({category,setCategories}) {
    async function deleteHandler(params) {
        const status=await pushAlert({text:"آیا از ادامه روند اطمینان دارید؟",confirmButtonText:"بله",cancelButtonText:"خیر",submitClass:"btn btn-primary btn_sbumit"})
        if(!status){
            return
        }
        const res=await fetch(`/api/categories?id=${category.id}`,{method:"DELETE"})
        const data=await res.json()
        console.log(data);
        if(data.error){
            await pushAlert({title:"خطا",text:data.error,confirmButtonText:"فهمیدم",icon:"error"})
            return
        }
        await pushAlert({title:"موفق",text:data.success,confirmButtonText:"فهمیدم",icon:"success"})
        const res2=await fetch('/api/categories')
        const {categories:data2}=await res2.json()
        setCategories(data2)
    }
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
                <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                <Link className="dropdown-item text-danger" href="#" onClick={deleteHandler} >حذف</Link>
            </div>
        </div> 
    </td>
</tr>
  )
}

export default AdminCategoriesRow