import AdminsModel from '@/models/admins/Admins'
import Link from 'next/link'
import React from 'react'

async function AdminHeaderControll() {
    const adminInfo=await AdminsModel.getSelf()
  return (
    <li className="dropdown nav-item">
    <Link className="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="dropdownAccount" aria-expanded="false"> <img className="img-xs rounded-circle" src={adminInfo.image} alt="User"/></Link>
    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownAccount">
        <Link className="dropdown-item" href="/admin/profile"><i className="material-icons md-perm_identity"></i>ویرایش پروفایل</Link>
        <Link className="dropdown-item" href="/admin/orders"><i className="material-icons md-receipt"></i>سفارشات</Link>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item text-danger" href="#"><i className="material-icons md-exit_to_app"></i>خروج</Link>
    </div>
</li>
  )
}

export default AdminHeaderControll