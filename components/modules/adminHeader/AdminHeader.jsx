import AdminHeaderControll from '@/components/templates/adminHeaderControll/AdminHeaderControll'
import Link from 'next/link'
import React from 'react'

function AdminHeader() {
  return (
    <header className="main-header navbar">
    <div className="col-search">
        <form className="searchform">
            <div className="input-group">
                <input list="search_terms" type="text" className="form-control" placeholder="عبارت جستجو"/>
                <button className="btn btn-light bg" type="button"> <i className="material-icons md-search"></i></button>
            </div>
        </form>
    </div>
    <div className="col-nav">
        <button className="btn btn-icon btn-mobile me-auto" data-trigger="#offcanvas_aside"> <i className="material-icons md-apps"></i> </button>
        <ul className="nav">
            <li className="nav-item">
                <Link href="#" className="requestfullscreen nav-link btn-icon"><i className="material-icons md-cast"></i></Link>
            </li>
            <AdminHeaderControll/>
        </ul>
    </div>
</header>
  )
}

export default AdminHeader