import Link from 'next/link'
import React from 'react'

function shopPage() {
  return (
    <>
            <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/" rel="nofollow">خانه</Link>
                        <span></span> فروشگاه
                    </div>
                </div>
            </div>
            <section className="mt-60 mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop-product-fillter">
                                <div className="totall-product">
                                    <p>ما <strong className="text-brand">688</strong> کالا برای شما پیدا کردیم!</p>
                                </div>
                                <div className="sort-by-product-area">
                                    <div className="sort-by-cover mr-10">
                                        <div className="sort-by-product-wrap">
                                            <div className="sort-by">
                                                <span><i className="fa fa-th"></i>نمایش:</span>
                                            </div>
                                            <div className="sort-by-dropdown-wrap">
                                                <span> 50 <i className="far fa-angle-down"></i></span>
                                            </div>
                                        </div>
                                        <div className="sort-by-dropdown">
                                            <ul>
                                                <li><Link className="active" href="#">50</Link></li>
                                                <li><Link href="#">100</Link></li>
                                                <li><Link href="#">150</Link></li>
                                                <li><Link href="#">200</Link></li>
                                                <li><Link href="#">همه</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sort-by-cover">
                                        <div className="sort-by-product-wrap">
                                            <div className="sort-by">
                                                <span><i className="fa fa-sort-amount-down"></i>مرتب‌سازی بر اساس:</span>
                                            </div>
                                            <div className="sort-by-dropdown-wrap">
                                                <span> ویژه <i className="far fa-angle-down"></i></span>
                                            </div>
                                        </div>
                                        <div className="sort-by-dropdown">
                                            <ul>
                                                <li><Link className="active" href="#">ویژه</Link></li>
                                                <li><Link href="#">قیمت: از کم به زیاد</Link></li>
                                                <li><Link href="#">قیمت: از زیاد به کم</Link></li>
                                                <li><Link href="#">تاریخ انتشار</Link></li>
                                                <li><Link href="#">میانگین امتیاز</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row product-grid-3">
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-2-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-2-2.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">داغ</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">موسیقی</Link>
                                            </div>
                                            <h2><Link href="/products/product">هدفون اولترا باس</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>90%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>238,000 تومان</span>
                                                <span className="old-price">245,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-3-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-3-2.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">جدید</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">موسیقی</Link>
                                            </div>
                                            <h2><Link href="/products/product">بلندگوی هوشمند خانگی</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>50%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>138,000 تومان</span>
                                                <span className="old-price">255,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-7-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-7-2.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="best">پرفروش‌ترین</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">ساعت</Link>
                                            </div>
                                            <h2><Link href="/products/product">اپل واچ سری ۷</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>95%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>338,000 تومان</span>
                                                <span className="old-price">445,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-1-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-1-3.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="sale">حراج</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">موسیقی</Link>
                                            </div>
                                            <h2><Link href="/products/product">هدفون بلوتوثی با جعبه</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>70%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>123,000 تومان</span>
                                                <span className="old-price">235,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-4-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-3-4.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-30%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">بلندگو</Link>
                                            </div>
                                            <h2><Link href="/products/product">چیکی - بلندگوی بلوتوثی</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>70%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>28,000 تومان</span>
                                                <span className="old-price">45,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-5-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-5-3.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-22%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">دوربین</Link>
                                            </div>
                                            <h2><Link href="/products/product">دوربین هایک ویژن HK-35VS8</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>70%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>238,000 تومان</span>
                                                <span className="old-price">245,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-8-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-8-1.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">جدید</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">تلفن</Link>
                                            </div>
                                            <h2><Link href="/products/product">اپل آیفون ۱۳ پلاس</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>98%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>1275,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-11-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-11-2.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">لوازم جانبی</Link>
                                            </div>
                                            <h2><Link href="/products/product">بند ساعت چرمی</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>70%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>238,000 تومان</span>
                                                <span className="old-price">245,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-13-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-13-2.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">لوازم جانبی</Link>
                                            </div>
                                            <h2><Link href="/products/product">بند ساعت چرمی</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>70%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>238,000 تومان</span>
                                                <span className="old-price">245,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-3-3.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-3-2.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">داغ</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">موسیقی</Link>
                                            </div>
                                            <h2><Link href="/products/product">هدفون اولترا باس</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>90%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>238,000 تومان</span>
                                                <span className="old-price">245,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-2-4.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-2-3.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">جدید</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">موسیقی</Link>
                                            </div>
                                            <h2><Link href="/products/product">بلندگوی هوشمند خانگی</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>50%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>138,000 تومان</span>
                                                <span className="old-price">255,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/product">
                                                    <img className="default-img" src="/imgs/shop/product-7-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-7-1.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link>
                                                <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="best">پرفروش‌ترین</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="/products/product">ساعت</Link>
                                            </div>
                                            <h2><Link href="/products/product">اپل واچ سری ۷</Link></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>95%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>338,000 تومان</span>
                                                <span className="old-price">445,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--pagination--> */}
                            <div className="pagination-area mt-15 mb-md-5 mb-lg-0">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item active"><Link className="page-link" href="#">01</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">02</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">03</Link></li>
                                        <li className="page-item"><Link className="page-link dot" href="#">...</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">16</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" href="#"><i className="fa fa-angle-left"></i> </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default shopPage