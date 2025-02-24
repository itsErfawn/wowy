"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function StickyBar() {
const [isSticky, setIsSticky] = useState(false)
const [isOpen,setIsOpen]=useState(false)
useEffect(() => {
    const handleScroll = () => {
        setIsSticky(window.scrollY >= 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <div className={`header-bottom header-bottom-bg-color sticky-bar ${isSticky?'stick':''} gray-bg sticky-blue-bg`}>
    <div className="container">
        <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
                <Link href="index.html"><img src="/imgs/theme/logo-white.png" alt="logo"/></Link>
            </div>
            <div className="main-categori-wrap d-none d-lg-block">
                <Link className={`categori-button-active ${isOpen?'open':''}`} href="#" onClick={e=>{setIsOpen(!isOpen)}}> <span className="fa fa-list"></span> مرور دسته‌بندی‌ها <i className="down far fa-chevron-down"></i> <i className="up far fa-chevron-up"></i> </Link>
                <div className={`categori-dropdown-wrap categori-dropdown-active-large ${isOpen?'open':''}`}>
                    <ul>
                        <li className="has-children">
                            <Link href="shop-grid-right.html"><i className="wowy-font-dress"></i>لباس زنانه</Link>
                            <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-7">
                                        <ul className="d-lg-flex">
                                            <li className="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li><span className="submenu-title">داغ و پرطرفدار</span></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">پیراهن‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">بلوز و پیراهن‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">هودی و سویشرت‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">ست‌های زنانه</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">کت و بلیزرها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">بادی‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">تاپ و زیرپوش‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">کت و ژاکت‌ها</Link></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li><span className="submenu-title">پایین‌تنه</span></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">لگ‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">دامن‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">شلوارک‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">جین‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">شلوار و کاپری‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">ست‌های بیکینی</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">روپوش‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">لباس شنا</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-5">
                                        <div className="header-banner2">
                                            <img src="/imgs/banner/menu-banner-2.jpg" alt="menu_banner1"/>
                                            <div className="banne_info">
                                                <h6>۱۰٪ تخفیف</h6>
                                                <h4>جدیدترین‌ها</h4>
                                                <Link href="#">همین حالا خرید کنید</Link>
                                            </div>
                                        </div>
                                        <div className="header-banner2">
                                            <img src="/imgs/banner/menu-banner-3.jpg" alt="menu_banner2"/>
                                            <div className="banne_info">
                                                <h6>۱۵٪ تخفیف</h6>
                                                <h4>پیشنهادات داغ</h4>
                                                <Link href="#">همین حالا خرید کنید</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-children">
                            <Link href="shop-grid-right.html"><i className="wowy-font-tshirt"></i>لباس مردانه</Link>
                            <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-7">
                                        <ul className="d-lg-flex">
                                            <li className="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li><span className="submenu-title">کت‌ها و پالتوها</span></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">کت‌های پَر</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">کت‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">پارکاها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">پالتوهای چرم مصنوعی</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">ترنچ</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">پشم و ترکیبات</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">جلیقه‌ها و وست‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">پالتوهای چرمی</Link></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li><span className="submenu-title">کت و شلوارها و بلیزرها</span></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">بلیزرها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">کت‌های کت و شلوار</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">شلوارهای کت و شلوار</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">کت و شلوارها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">جلیقه‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">کت و شلوارهای سفارشی</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">روپوش‌ها</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-5">
                                        <div className="header-banner2">
                                            <img src="/imgs/banner/menu-banner-4.jpg" alt="menu_banner1"/>
                                            <div className="banne_info">
                                                <h6>۱۰٪ تخفیف</h6>
                                                <h4>جدیدترین‌ها</h4>
                                                <Link href="#">همین حالا خرید کنید</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-children">
                            <Link href="shop-grid-right.html"><i className="wowy-font-smartphone"></i> تلفن‌های همراه</Link>
                            <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-7">
                                        <ul className="d-lg-flex">
                                            <li className="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li><span className="submenu-title">داغ و پرطرفدار</span></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">تلفن‌های همراه</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">آیفون‌ها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">تلفن‌های بازسازی‌شده</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">تلفن همراه</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">قطعات تلفن همراه</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">کیف و قاب تلفن</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">تجهیزات ارتباطی</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">واکی تاکی</Link></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-col col-lg-6">
                                                <ul>
                                                    <li><span className="submenu-title">لوازم جانبی</span></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">محافظ صفحه</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">شارژرهای سیمی</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">شارژرهای بی‌سیم</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">شارژرهای خودرو</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">پاور بانک</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">بازوبندها</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">درپوش گرد و غبار</Link></li>
                                                    <li><Link className="dropdown-item nav-link nav_item" href="#">تقویت‌کننده‌های سیگنال</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-5">
                                        <div className="header-banner2">
                                            <img src="/imgs/banner/menu-banner-5.jpg" alt="menu_banner1"/>
                                            <div className="banne_info">
                                                <h6>۱۰٪ تخفیف</h6>
                                                <h4>جدیدترین‌ها</h4>
                                                <Link href="#">همین حالا خرید کنید</Link>
                                            </div>
                                        </div>
                                        <div className="header-banner2">
                                            <img src="/imgs/banner/menu-banner-6.jpg" alt="menu_banner2"/>
                                            <div className="banne_info">
                                                <h6>۱۵٪ تخفیف</h6>
                                                <h4>پیشنهادات داغ</h4>
                                                <Link href="#">همین حالا خرید کنید</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="shop-grid-right.html"><i className="wowy-font-desktop"></i>کامپیوتر و اداری</Link>
                        </li>
                        <li>
                            <Link href="shop-grid-right.html"><i className="wowy-font-cpu"></i>الکترونیک مصرفی</Link>
                        </li>
                        <li>
                            <Link href="shop-grid-right.html"><i className="wowy-font-diamond"></i>جواهرات و لوازم جانبی</Link>
                        </li>
                        <li>
                            <Link href="shop-grid-right.html"><i className="wowy-font-home"></i>خانه و باغ</Link>
                        </li>
                        <li>
                            <Link href="shop-grid-right.html"><i className="wowy-font-high-heels"></i>کفش</Link>
                        </li>
                        <li>
                            <Link href="shop-grid-right.html"><i className="wowy-font-teddy-bear"></i>مادر و کودک</Link>
                        </li>
                        <li>
                            <Link href="shop-grid-right.html"><i className="wowy-font-kite"></i>تفریحات بیرون از خانه</Link>
                        </li>
                        <li>
                            <ul className="more_slide_open" style={{display:"none"}}>
                                <li>
                                    <Link href="shop-grid-right.html"><i className="wowy-font-desktop"></i>زیبایی و سلامت</Link>
                                </li>
                                <li>
                                    <Link href="shop-grid-right.html"><i className="wowy-font-cpu"></i>کیف و کفش</Link>
                                </li>
                                <li>
                                    <Link href="shop-grid-right.html"><i className="wowy-font-diamond"></i>الکترونیک مصرفی</Link>
                                </li>
                                <li>
                                    <Link href="shop-grid-right.html"><i className="wowy-font-home"></i>خودرو و موتورسیکلت</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="more_categories">نمایش بیشتر...</div>
                </div>
            </div>
            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block main-menu-light-white hover-boder hover-boder-white">
                <nav>
                    <ul>
                        <li>
                            <Link href="/about">درباره ما</Link>
                        </li>
                        <li>
                            <Link href="/blogs">مقالات</Link>
                        </li>
                        <li><Link href="/purchase-guide">راهنمای خرید</Link></li>
                        <li><Link href="/privacy-policy">سیاست حفظ حریم خصوصی</Link></li>
                        <li><Link href="/terms">شرایط خدمات</Link></li>
                        <li>
                            <Link href="/contact">تماس با ما</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="hotline d-none d-lg-block">
                <p><i className="fa fa-phone-alt"></i><span>خط ویژه</span> ۱۹۰۰ - ۸۸۸</p>
            </div>
            <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                    <div className="header-action-icon-2">
                        <Link href="/wishlist">
                            <img alt="wowy" src="/imgs/theme/icons/icon-heart-white.svg"/>
                            <span className="pro-count white">4</span>
                        </Link>
                    </div>
                    <div className="header-action-icon-2">
                        <Link className="mini-cart-icon" href="/cart">
                            <img alt="wowy" src="/imgs/theme/icons/icon-cart-white.svg"/>
                            <span className="pro-count white">02</span>
                        </Link>
                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                            <ul>
                                <li>
                                    <div className="shopping-cart-img">
                                        <Link href="shop-product-right.html"><img alt="wowy" src="/imgs/shop/thumbnail-3.jpg"/></Link>
                                    </div>
                                    <div className="shopping-cart-title">
                                        <h4><Link href="shop-product-right.html">اپل واچ سری ۷</Link></h4>
                                        <h3><span>1 × </span>800,000 تومان</h3>
                                    </div>
                                    <div className="shopping-cart-delete">
                                        <Link href="#"><i className="far fa-times"></i></Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="shopping-cart-img">
                                        <Link href="shop-product-right.html"><img alt="wowy" src="/imgs/shop/thumbnail-4.jpg"/></Link>
                                    </div>
                                    <div className="shopping-cart-title">
                                        <h4><Link href="shop-product-right.html">مک‌بوک پرو ۲۰۲۲</Link></h4>
                                        <h3><span>1 × </span>3500,000 تومان</h3>
                                    </div>
                                    <div className="shopping-cart-delete">
                                        <Link href="#"><i className="far fa-times"></i></Link>
                                    </div>
                                </li>
                            </ul>
                            <div className="shopping-cart-footer">
                                <div className="shopping-cart-total">
                                    <h4>جمع کل <span>383,000 تومان</span></h4>
                                </div>
                                <div className="shopping-cart-button">
                                    <Link href="/cart"> سبد خرید</Link>
                                    <Link href="/checkout">تسویه</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-action-icon-2">
                        <Link href="/account">
                            <img alt="wowy" src="/imgs/theme/icons/icon-user-white.svg"/>
                        </Link>
                    </div>
                    <div className="header-action-icon-2 d-block d-lg-none">
                        <div className="burger-icon burger-icon-white">
                            <span className="burger-icon-top"></span>
                            <span className="burger-icon-mid"></span>
                            <span className="burger-icon-bottom"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default StickyBar