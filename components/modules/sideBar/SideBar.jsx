import Link from 'next/link'
import React from 'react'

function SideBar() {
  return (
    <aside className="navbar-aside" id="offcanvas_aside">
    <div className="aside-top">
        <Link href="/admin" className="brand-wrap">
            <img src="/admin/imgs/theme/logo.png" className="logo" alt="Wowy Dashboard"/>
        </Link>
        <div>
            <button className="btn btn-icon btn-aside-minimize"> <i className="text-muted material-icons md-menu_open"></i> </button>
        </div>
    </div>
    <nav>
        <ul className="menu-aside">
            <li className="menu-item active">
                <Link className="menu-link" href="/admin"> <i className="icon material-icons md-home"></i>
                    <span className="text">داشبورد</span>
                </Link>
            </li>
            <li className="menu-item has-submenu">
                <Link className="menu-link" href="page-products-list.html"> <i className="icon material-icons md-shopping_bag"></i>
                    <span className="text">فروشگاه</span>
                </Link>
                <div className="submenu">
                    <Link href="/admin/products">لیست محصولات</Link>
                    <Link href="/admin/products/add">افزودن محصول</Link>
                    <Link href="/admin/categories">دسته‌بندی‌ها</Link>
                    <Link href="/admin/orders">سفارشات </Link>
                </div>
            </li>
            <li className="menu-item has-submenu">
                <Link className="menu-link" href="#"> <i className="icon material-icons md-store"></i>
                    <span className="text">فروشندگان</span>
                </Link>
                <div className="submenu">
                    <Link href="/admin/sellers">لیست فروشندگان</Link>
                    <Link href="/admin/transactions">تراکنش </Link>
                </div>
            </li>
            <li className="menu-item">
                <Link className="menu-link" href="/admin/customers"> <i className="icon material-icons md-person"></i>
                    <span className="text">مشتریان</span>
                </Link>
            </li>
            <li className="menu-item">
                <Link className="menu-link" href="/admin/reviews"> <i className="icon material-icons md-comment"></i>
                    <span className="text">نظرات</span>
                </Link>
            </li>
            <li className="menu-item">
                <Link className="menu-link" href="/admin/brands"> <i className="icon material-icons md-stars"></i>
                    <span className="text">برندها</span> </Link>
            </li>
        </ul>
        <hr/>
        <ul className="menu-aside">
            <li className="menu-item ">
                <Link className="menu-link" href="/admin/profile"> <i className="icon material-icons md-settings"></i>
                    <span className="text">تنظیمات</span>
                </Link>
            </li>
        </ul>
        <br/>
        <br/>
    </nav>
</aside>
  )
}

export default SideBar