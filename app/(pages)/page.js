import bootStrap from '@/Bootstrap/bootstrap'
import BestSellers from '@/components/templates/home/bestSellers/BestSellers'
import Brands from '@/components/templates/home/brands/Brands'
import HomeSlider from '@/components/templates/home/homeSlider/HomeSlider'
import NewProducts from '@/components/templates/home/newProducts/NewProducts'
import PopularCategories from '@/components/templates/home/popularCategories/PopularCategories'
import Link from 'next/link'
import React from 'react'

async function Home() {
    const data= await bootStrap.home()
  return (
    <>
            <HomeSlider/>
            <section className="featured section-padding-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-md-3 mb-lg-0">
                            <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
                                <div className="banner-icon">
                                    <img src="/imgs/theme/icons/icon-truck.svg" alt=""/>
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">ارسال رایگان</h3>
                                    <p>سفارش‌های ۵۰ دلار یا بیشتر</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-md-3">
                            <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
                                <div className="banner-icon">
                                    <img src="/imgs/theme/icons/icon-purchase.svg" alt=""/>
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">بازگشت رایگان</h3>
                                    <p>در عرض ۳۰ روز</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
                                <div className="banner-icon">
                                    <img src="/imgs/theme/icons/icon-bag.svg" alt=""/>
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">۲۰٪ تخفیف برای ۱ کالا</h3>
                                    <p>هنگام ثبت‌نام</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="banner-left-icon d-flex align-items-center wow fadeIn animated mb-sm-0">
                                <div className="banner-icon">
                                    <img src="/imgs/theme/icons/icon-operator.svg" alt=""/>
                                </div>
                                <div className="banner-text">
                                    <h3 className="icon-box-title">مرکز پشتیبانی</h3>
                                    <p>خدمات شگفت‌انگیز ۲۴/۷</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PopularCategories {...{categories:data.categories}} />
            <section className="banners pt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="banner-img wow fadeIn animated">
                                <img className="border-radius-10" src="/imgs/banner/banner-1.png" alt=""/>
                                <div className="banner-text">
                                    <span>پیشنهاد هوشمند</span>
                                    <h4>20% تخفیف برای <br/>آیفون 12</h4>
                                    <Link href="shop-grid-right.html">همین حالا خرید کنید <i className="fa fa-arrow-left"></i></Link >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="banner-img wow fadeIn animated">
                                <img className="border-radius-10" src="/imgs/banner/banner-2.png" alt=""/>
                                <div className="banner-text">
                                    <span>تخفیف ویژه</span>
                                    <h4>مجموعه دوربین‌های <br/>عالی</h4>
                                    <Link href="shop-grid-right.html">همین حالا خرید کنید <i className="fa fa-arrow-left"></i></Link >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-md-none d-lg-flex">
                            <div className="banner-img wow fadeIn animated mb-sm-0">
                                <img className="border-radius-10" src="/imgs/banner/banner-3.png" alt=""/>
                                <div className="banner-text">
                                    <span>جدیدترین‌ها</span>
                                    <h4>خرید امروز <br/>تخفیف‌ها و پیشنهادات</h4>
                                    <Link href="shop-grid-right.html">همین حالا خرید کنید <i className="fa fa-arrow-left"></i></Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-tabs pt-40 pb-30 wow fadeIn animated">
                <div className="container">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">ویژه</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="nav-tab-two" data-bs-toggle="tab" data-bs-target="#tab-two" type="button" role="tab" aria-controls="tab-two" aria-selected="false">محبوب</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="nav-tab-three" data-bs-toggle="tab" data-bs-target="#tab-three" type="button" role="tab" aria-controls="tab-three" aria-selected="false">جدید اضافه شده</button>
                        </li>
                    </ul>
                    {/* <!--End nav-tabs--> */}
                    <div className="tab-content wow fadeIn animated" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                            <div className="row product-grid-4">
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-2-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-2-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">داغ</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">موسیقی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">هدفون اولترا باس</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-3-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-3-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">جدید</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">موسیقی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">بلندگوی هوشمند خانگی</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-7-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-7-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="best">پرفروش‌ترین</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">ساعت</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">اپل واچ سری ۷</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-1-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-1-3.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="sale">فروش</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">موسیقی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">هدفون بلوتوثی باکس</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-4-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-3-4.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-30%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">بلندگو</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">بلندگوی بلوتوثی چیکی</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-5-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-5-3.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-22%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">دوربین</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">دوربین هایک ویژن HK-35VS8</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-8-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-8-1.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">جدید</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">تلفن</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">اپل آیفون ۱۳ پلاس</Link ></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>98%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>1275,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-11-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-11-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">لوازم جانبی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">بند ساعت چرمی</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End product-grid-4--> */}
                        </div>
                        {/* <!--En tab one (ویژه)--> */}
                        <div className="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                            <div className="row product-grid-4">
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-3-3.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-3-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">داغ</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">موسیقی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">هدفون اولترا باس</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-2-4.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-2-3.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">جدید</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">موسیقی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">بلندگوی هوشمند خانگی</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-7-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-7-1.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="best">پرفروش</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">ساعت</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">اپل واچ سری ۷</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-1-3.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-1-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="sale">حراج</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">موسیقی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">هدفون بلوتوثی باکس</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-3-4.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-4-1.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-30%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">بلندگو</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">بلندگوی بلوتوثی چیکی</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-9-1.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-9-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" href={'/'} className="action-btn hover-up"><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-22%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">دوربین</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">دوربین هایک ویژن HK-35VS8</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-10-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-12-1.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">جدید</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">تلفن</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">اپل آیفون ۱۳ پلاس</Link ></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>98%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>1275,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-7-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-7-1.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">لوازم جانبی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">بند ساعت چرمی</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End product-grid-4--> */}
                        </div>
                        {/* <!--En tab two (Popular)--> */}
                        <div className="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="tab-three">
                            <div className="row product-grid-4">
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="default-img" src="/imgs/shop/product-15-2.jpg" alt=""/>
                                                    <img className="hover-img" src="/imgs/shop/product-15-1.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">داغ</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">موسیقی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">هدفون بیس قوی</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="hover-img" src="/imgs/shop/product-13-1.jpg" alt=""/>
                                                    <img className="default-img" src="/imgs/shop/product-13-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">جدید</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">موسیقی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">بلندگوی هوشمند خانگی</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="hover-img" src="/imgs/shop/product-14-1.jpg" alt=""/>
                                                    <img className="default-img" src="/imgs/shop/product-14-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="best">پرفروش</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">ساعت</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">اپل واچ سری ۷</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="hover-img" src="/imgs/shop/product-4-3.jpg" alt=""/>
                                                    <img className="default-img" src="/imgs/shop/product-4-4.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="sale">حراج</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">موسیقی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">هدفون بلوتوثی باکس</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="hover-img" src="/imgs/shop/product-5-4.jpg" alt=""/>
                                                    <img className="default-img" src="/imgs/shop/product-6-1.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-30%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">بلندگو</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">چیکی - بلندگوی بلوتوثی</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="hover-img" src="/imgs/shop/product-6-2.jpg" alt=""/>
                                                    <img className="default-img" src="/imgs/shop/product-5-1.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">-22%</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">دوربین</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">دوربین هایک ویژن HK-35VS8</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="hover-img" src="/imgs/shop/product-10-1.jpg" alt=""/>
                                                    <img className="default-img" src="/imgs/shop/product-10-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="new">جدید</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">تلفن</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">اپل آیفون ۱۳ پلاس</Link ></h2>
                                            <div className="rating-result" title="90%">
                                                <span>
                                                    <span>98%</span>
                                                </span>
                                            </div>
                                            <div className="product-price">
                                                <span>1275,000 تومان</span>
                                            </div>
                                            <div className="product-action-1 show">
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <Link href="/products/محصول">
                                                    <img className="hover-img" src="/imgs/shop/product-2-1.jpg" alt=""/>
                                                    <img className="default-img" src="/imgs/shop/product-2-2.jpg" alt=""/>
                                                </Link >
                                            </div>
                                            <div className="product-action-1">
                                                <Link aria-label="مشاهده سریع" className="action-btn hover-up" href={'/'}><i className="far fa-search"></i></Link >
                                                <Link aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link >
                                                <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link >
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <Link href="shop-grid-right.html">لوازم جانبی</Link >
                                            </div>
                                            <h2><Link href="/products/محصول">بند ساعت چرمی</Link ></h2>
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
                                                <Link aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End product-grid-4--> */}
                        </div>
                        {/* <!--En tab three (New added)--> */}
                    </div>
                    {/* <!--End tab-content--> */}
                </div>
            </section>
            <section className="banner-2">
                <div className="container">
                    <div className="banner-img banner-big wow fadeIn animated f-none">
                        <img src="/imgs/banner/banner-4.png" alt=""/>
                        <div className="banner-text">
                            <h4 className="mb-15 mt-40 text-white">خدمات تعمیرات</h4>
                            <h2 className="fw-600 mb-20 text-white">ما یک ارائه دهنده خدمات مجاز اپل هستیم</h2>
                            <Link href="shop-grid-right.html" className="btn">بیشتر بدانید <i className="fa fa-arrow-left"></i></Link >
                        </div>
                    </div>
                </div>
            </section>
            <NewProducts/>
            <section className="deals">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 deal-co">
                            <div className="deal wow fadeIn animated mb-md-4 mb-sm-4 mb-lg-0" style={{backgroundImage:"url('/imgs/banner/menu-banner-7.jpg')"}}>
                                <div className="deal-top">
                                    <h2 className="text-brand">پیشنهاد ویژه روز</h2>
                                    <h5>محدودیت در تعداد</h5>
                                </div>
                                <div className="deal-content">
                                    <h6 className="product-title"><Link href="/products/محصول">هدفون هوشمند با طراحی مدرن جدید</Link ></h6>
                                    <div className="product-price"><span className="new-price">۱۳۹,۰۰۰ تومان</span><span className="old-price">۱۶۰.۹۹</span></div>
                                </div>
                                <div className="deal-bottom">
                                    <p>عجله کنید! پیشنهاد به پایان می‌رسد در:</p>
                                    <div className="deals-countdown" data-countdown="2025/03/25 00:00:00"></div>
                                    <Link href="shop-grid-right.html" className="btn hover-up">همین حالا خرید کنید <i className="fa fa-arrow-left"></i></Link >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 deal-co">
                            <div className="deal wow fadeIn animated" style={{backgroundImage:"url('/imgs/banner/menu-banner-8.jpg')"}}>
                                <div className="deal-top">
                                    <h2 className="text-success">گجت‌ها و لوازم جانبی</h2>
                                    <h5>کامپیوتر و لپ‌تاپ</h5>
                                </div>
                                <div className="deal-content">
                                    <h6 className="product-title"><Link href="/products/محصول">هدفون‌های داخل گوش اپل با ریموت و میکروفون</Link ></h6>
                                    <div className="product-price"><span className="new-price">۱۷۸,۰۰۰ تومان</span><span className="old-price">۲۵۶.۹۹</span></div>
                                </div>
                                <div className="deal-bottom">
                                    <p>عجله کنید! پیشنهاد به پایان می‌رسد در:</p>
                                    <div className="deals-countdown" data-countdown="2026/03/25 00:00:00"></div>
                                    <Link href="shop-grid-right.html" className="btn hover-up">همین حالا خرید کنید <i className="fa fa-arrow-left"></i></Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Brands/>
            <BestSellers/>
            <section className="section-padding-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="section-title style-1 mb-30 wow fadeIn animated">اخبار و روندها</h3>
                            <div className="post-list mb-4 mb-lg-0">
                                <article className="wow fadeIn animated">
                                    <div className="d-md-flex d-block">
                                        <div className="post-thumb d-flex mr-15 border-radius-10">
                                            <Link className="color-white" href="single.html">
                                                <img className="border-radius-10" src="/imgs/blog/blog-2.jpg" alt=""/>
                                            </Link >
                                        </div>
                                        <div className="post-content">
                                            <div className="entry-meta mb-5 mt-10">
                                                <Link className="entry-meta meta-2" href="category.html"><span className="post-in text-danger font-x-small text-uppercase">فناوری</span></Link >
                                            </div>
                                            <h4 className="post-title mb-25 text-limit-2-row">
                                                <Link href="blog-details.html">گزارش می‌گوید کوالکام در حال توسعه کنسولی شبیه به نینتندو سوئیچ است</Link >
                                            </h4>
                                            <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                                                <div>
                                                    <span className="post-on"> <i className="far fa-clock"></i> 14 آوریل 2024</span>
                                                    <span className="hit-count has-dot">12 میلیون بازدید</span>
                                                </div>
                                                <Link href="blog-post-right.html">بیشتر بخوانید <i className="fa fa-arrow-left font-xxs ml-5"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="wow fadeIn animated">
                                    <div className="d-md-flex d-block">
                                        <div className="post-thumb d-flex mr-15 border-radius-10">
                                            <Link className="color-white" href="single.html">
                                                <img className="border-radius-10" src="/imgs/blog/blog-1.jpg" alt=""/>
                                            </Link >
                                        </div>
                                        <div className="post-content">
                                            <div className="entry-meta mb-5 mt-10">
                                                <Link className="entry-meta meta-2" href="category.html"><span className="post-in text-info font-x-small text-uppercase">مخابرات</span></Link >
                                            </div>
                                            <h4 className="post-title mb-25 text-limit-2-row">
                                                <Link href="blog-details.html">حتی ویروس کرونا نمی‌تواند حرکت جهانی 5G را متوقف کند</Link >
                                            </h4>
                                            <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                                                <div>
                                                    <span className="post-on"> <i className="far fa-clock"></i> 14 آوریل 2024</span>
                                                    <span className="hit-count has-dot">12 میلیون بازدید</span>
                                                </div>
                                                <Link href="blog-post-right.html">بیشتر بخوانید <i className="fa fa-arrow-left font-xxs ml-5"></i></Link >
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="banner-img banner-1 wow fadeIn animated">
                                        <img className="border-radius-10" src="/imgs/banner/banner-5.jpg" alt=""/>
                                        <div className="banner-text">
                                            <span>منطقه بازی</span>
                                            <h4>17% تخفیف بر روی <br/>لپ‌تاپ ایسوس</h4>
                                            <Link href="shop-grid-right.html">همین حالا خرید کنید <i className="fa fa-arrow-left"></i></Link >
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="banner-img mb-15 wow fadeIn animated">
                                        <img className="border-radius-10" src="/imgs/banner/banner-6.jpg" alt=""/>
                                        <div className="banner-text">
                                            <span>پیشنهاد هوشمند</span>
                                            <h4>20% تخفیف بر روی <br/>آیفون 12</h4>
                                            <Link href="shop-grid-right.html">همین حالا خرید کنید <i className="fa fa-arrow-left"></i></Link >
                                        </div>
                                    </div>
                                    <div className="banner-img banner-2 wow fadeIn animated">
                                        <img className="border-radius-10" src="/imgs/banner/banner-7.jpg" alt=""/>
                                        <div className="banner-text">
                                            <span>پیشنهاد هوشمند</span>
                                            <h4>20% تخفیف بر روی <br/>آیفون 12</h4>
                                            <Link href="shop-grid-right.html">همین حالا خرید کنید <i className="fa fa-arrow-left"></i></Link >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-60">
                <div className="container">
                    <div className="banner-bg wow fadeIn animated" style={{backgroundImage:"url('/imgs/banner/banner-8.jpg')"}}>
                        <div className="banner-content">
                            <h5 className="text-grey-4 mb-15">خریدهای امروز</h5>
                            <h3 className="fw-600">ذخیره‌سازی تخصصی برای گردشگری</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
                            <div className="banner-img wow fadeIn animated mb-md-4 mb-lg-0">
                                <img className="border-radius-10" src="/imgs/banner/banner-10.jpg" alt=""/>
                                <div className="banner-text">
                                    <span>منطقه موسیقی</span>
                                    <h4>17% تخفیف بر روی <br/>هدفون</h4>
                                    <Link href="shop-grid-right.html">همین حالا خرید کنید <i className="fa fa-arrow-left"></i></Link >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
                            <h4 className="section-title style-1 mb-30 wow fadeIn animated">تخفیف‌ها و پیشنهادات ویژه</h4>
                            <div className="product-list-small wow fadeIn animated">
                                <article className="row align-items-center">
                                    <figure className="col-md-3 mb-0">
                                        <Link href="/products/محصول"><img src="/imgs/shop/thumbnail-3.jpg" alt=""/></Link >
                                    </figure>
                                    <div className="col-md-9 pl-0">
                                        <h4 className="title-small">
                                            <Link href="/products/محصول">جهان به ویراستاران متوسط توجه می‌کند</Link >
                                        </h4>
                                        <div className="product-price">
                                            <span>238,000 تومان</span>
                                            <span className="old-price">245,000 تومان</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-3 mb-0">
                                        <Link href="/products/محصول"><img src="/imgs/shop/thumbnail-4.jpg" alt=""/></Link >
                                    </figure>
                                    <div className="col-md-9 pl-0">
                                        <h4 className="title-small">
                                            <Link href="/products/محصول">جهان به ویراستاران متوسط توجه می‌کند</Link >
                                        </h4>
                                        <div className="product-price">
                                            <span>238,000 تومان</span>
                                            <span className="old-price">245,000 تومان</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-3 mb-0">
                                        <Link href="/products/محصول"><img src="/imgs/shop/thumbnail-5.jpg" alt=""/></Link >
                                    </figure>
                                    <div className="col-md-9 pl-0">
                                        <h4 className="title-small">
                                            <Link href="/products/محصول">جهان به ویراستاران متوسط توجه می‌کند</Link >
                                        </h4>
                                        <div className="product-price">
                                            <span>238,000 تومان</span>
                                            <span className="old-price">245,000 تومان</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
                            <h4 className="section-title style-1 mb-30 wow fadeIn animated">پرفروش‌ترین‌ها</h4>
                            <div className="product-list-small wow fadeIn animated">
                                <article className="row align-items-center">
                                    <figure className="col-md-3 mb-0">
                                        <Link href="/products/محصول"><img src="/imgs/shop/thumbnail-6.jpg" alt=""/></Link >
                                    </figure>
                                    <div className="col-md-9 pl-0">
                                        <h4 className="title-small">
                                            <Link href="/products/محصول">جهان به ویراستاران متوسط توجه می‌کند</Link >
                                        </h4>
                                        <div className="product-price">
                                            <span>238,000 تومان</span>
                                            <span className="old-price">245,000 تومان</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-3 mb-0">
                                        <Link href="/products/محصول"><img src="/imgs/shop/thumbnail-7.jpg" alt=""/></Link >
                                    </figure>
                                    <div className="col-md-9 pl-0">
                                        <h4 className="title-small">
                                            <Link href="/products/محصول">جهان به ویراستاران متوسط توجه می‌کند</Link >
                                        </h4>
                                        <div className="product-price">
                                            <span>238,000 تومان</span>
                                            <span className="old-price">245,000 تومان</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-3 mb-0">
                                        <Link href="/products/محصول"><img src="/imgs/shop/thumbnail-8.jpg" alt=""/></Link >
                                    </figure>
                                    <div className="col-md-9 pl-0">
                                        <h4 className="title-small">
                                            <Link href="/products/محصول">جهان به ویراستاران متوسط توجه می‌کند</Link >
                                        </h4>
                                        <div className="product-price">
                                            <span>238,000 تومان</span>
                                            <span className="old-price">245,000 تومان</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="section-title style-1 mb-30 wow fadeIn animated">جدیدترین‌ها</h4>
                            <div className="product-list-small wow fadeIn animated">
                                <article className="row align-items-center">
                                    <figure className="col-md-3 mb-0">
                                        <Link href="/products/محصول"><img src="/imgs/shop/thumbnail-9.jpg" alt=""/></Link >
                                    </figure>
                                    <div className="col-md-9 pl-0">
                                        <h4 className="title-small">
                                            <Link href="/products/محصول">جهان به ویراستاران متوسط توجه می‌کند</Link >
                                        </h4>
                                        <div className="product-price">
                                            <span>238,000 تومان</span>
                                            <span className="old-price">245,000 تومان</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-3 mb-0">
                                        <Link href="/products/محصول"><img src="/imgs/shop/thumbnail-1.jpg" alt=""/></Link >
                                    </figure>
                                    <div className="col-md-9 pl-0">
                                        <h4 className="title-small">
                                            <Link href="/products/محصول">جهان به ویراستاران متوسط توجه می‌کند</Link >
                                        </h4>
                                        <div className="product-price">
                                            <span>238,000 تومان</span>
                                            <span className="old-price">245,000 تومان</span>
                                        </div>
                                    </div>
                                </article>
                                <article className="row align-items-center">
                                    <figure className="col-md-3 mb-0">
                                        <Link href="/products/محصول"><img src="/imgs/shop/thumbnail-2.jpg" alt=""/></Link >
                                    </figure>
                                    <div className="col-md-9 pl-0">
                                        <h4 className="title-small">
                                            <Link href="/products/محصول">جهان به ویراستاران متوسط توجه می‌کند</Link >
                                        </h4>
                                        <div className="product-price">
                                            <span>238,000 تومان</span>
                                            <span className="old-price">245,000 تومان</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Home