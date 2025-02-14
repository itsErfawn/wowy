import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
    <header className="header-area header-height-2">
    <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
            <div className="header-wrap header-space-between">
                <div className="logo logo-width-1">
                    <Link href="/"><img src="/imgs/theme/logo-default.png" alt="logo"/></Link>
                </div>
                <div className="search-style-2">
                    <form action="#">
                        <select className="select-active">
                            <option>همه دسته‌بندی‌ها</option>
                            <option>لباس زنانه</option>
                            <option>لباس مردانه</option>
                            <option>تلفن همراه</option>
                            <option>کامپیوتر و اداری</option>
                            <option>لوازم الکترونیکی مصرفی</option>
                            <option>جواهرات و لوازم جانبی</option>
                            <option>خانه و باغ</option>
                            <option>چمدان و کیف</option>
                            <option>کفش</option>
                            <option>مادر و کودک</option>
                        </select>
                        <input type="text" placeholder="جستجو برای کالاها…" />
                        <button type="submit"><i className="far fa-search"></i></button>
                    </form>
                </div>
                <div className="header-action-right">
                    <div className="header-action-2">
                        <div className="header-action-icon-2">
                            <Link href="/wishlist">
                                <img className="svgInject" alt="wowy" src="/imgs/theme/icons/icon-heart.svg" />
                                <span className="pro-count blue">4</span>
                            </Link>
                        </div>
                        <div className="header-action-icon-2">
                            <Link className="mini-cart-icon" href="/cart">
                                <img alt="wowy" src="/imgs/theme/icons/icon-cart.svg" />
                                <span className="pro-count blue">2</span>
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
                                            <Link href="shop-product-right.html"><img alt="wowy" src="/imgs/shop/thumbnail-1.jpg"/></Link>
                                        </div>
                                        <div className="shopping-cart-title">
                                            <h4><Link href="shop-product-right.html">مک‌بوک پرو ۲۰۲۲</Link></h4>
                                            <h3><span>1 × </span>3200,000 تومان</h3>
                                        </div>
                                        <div className="shopping-cart-delete">
                                            <Link href="#"><i className="far fa-times"></i></Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="shopping-cart-footer">
                                    <div className="shopping-cart-total">
                                        <h4>جمع کل <span>۴۰۰۰,۰۰۰ تومان</span></h4>
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
                                <img alt="wowy" src="/imgs/theme/icons/icon-user.svg"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header-bottom header-bottom-bg-color sticky-bar gray-bg sticky-blue-bg">
        <div className="container">
            <div className="header-wrap header-space-between position-relative">
                <div className="logo logo-width-1 d-block d-lg-none">
                    <Link href="index.html"><img src="/imgs/theme/logo-white.png" alt="logo"/></Link>
                </div>
                <div className="main-categori-wrap d-none d-lg-block">
                    <Link className="categori-button-active" href="#"> <span className="fa fa-list"></span> مرور دسته‌بندی‌ها <i className="down far fa-chevron-down"></i> <i className="up far fa-chevron-up"></i> </Link>
                    <div className="categori-dropdown-wrap categori-dropdown-active-large">
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
</header>
<div className="mobile-header-active mobile-header-wrapper-style">
            <div className="mobile-header-wrapper-inner">
                <div className="mobile-header-top">
                    <div className="mobile-header-logo">
                        <Link href={'/'} ><img src="/imgs/theme/logo-default.png" alt="logo"/></Link>
                    </div>
                    <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                        <button className="close-style search-close">
                            <i className="icon-top"></i>
                            <i className="icon-bottom"></i>
                        </button>
                    </div>
                </div>
                <div className="mobile-header-content-area">
                    <div className="mobile-search search-style-3 mobile-header-border">
                        <form action="#">
                            <input type="text" placeholder="جستجو…"/>
                            <button type="submit"><i className="far fa-search"></i></button>
                        </form>
                    </div>
                    <div className="mobile-menu-wrap mobile-header-border">
                        <div className="main-categori-wrap mobile-header-border">
                            <Link className="categori-button-active-2" href="#"> <span className="far fa-bars"></span> مرور دسته‌بندی‌ها <i className="down far fa-chevron-down"></i> </Link>
                            <div className="categori-dropdown-wrap categori-dropdown-active-small">
                                <ul>
                                    <li>
                                        <Link href="shop-grid-right.html"><i className="wowy-font-dress"></i>لباس زنانه</Link>
                                    </li>
                                    <li>
                                        <Link href="shop-grid-right.html"><i className="wowy-font-tshirt"></i>لباس مردانه</Link>
                                    </li>
                                    <li>
                                        <Link href="shop-grid-right.html"><i className="wowy-font-smartphone"></i>تلفن همراه</Link>
                                    </li>
                                    <li>
                                        <Link href="shop-grid-right.html"><i className="wowy-font-desktop"></i>کامپیوتر و اداری</Link>
                                    </li>
                                    <li>
                                        <Link href="shop-grid-right.html"><i className="wowy-font-cpu"></i>لوازم الکترونیکی مصرفی</Link>
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
                                </ul>
                            </div>
                        </div>
                        {/* <!-- mobile menu start --> */}
                        <nav>
                            <ul className="mobile-menu">
                                <li className=""><Link href={'/blog'}>وبلاگ</Link></li>
                                <li><Link href="/about">درباره ما</Link></li>
                                <li><Link href="/contact">تماس</Link></li>
                                <li><Link href="/account">حساب من</Link></li>
                                <li><Link href="/purchase-guide">راهنمای خرید</Link></li>
                                <li><Link href="/privacy-policy">سیاست حفظ حریم خصوصی</Link></li>
                                <li><Link href="/terms">شرایط خدمات</Link></li>
                            </ul>
                        </nav>
                        {/* <!-- mobile menu end --> */}
                    </div>
                    <div className="mobile-social-icon">
                        <Link className="facebook" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                            </svg>
                        </Link>
                        <Link className="twitter" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                        </Link>
                        <Link className="tumblr" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1 .8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5 .9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"></path>
                            </svg>
                        </Link>
                        <Link className="instagram" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header