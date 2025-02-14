"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function BestSellers() {
  return (
    <section className="bg-grey-9 section-padding-60">
    <div className="container">
        <div className="heading-tab d-flex">
            <div className="heading-tab-left wow fadeIn animated">
                <h3 className="section-title mb-35">پرفروش‌های <span>ماهانه</span></h3>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 d-none d-lg-flex">
                <div className="banner-img style-2 wow fadeIn animated">
                    <img src="/imgs/banner/banner-9.jpg" alt=""/>
                    <div className="banner-text">
                        <span>منطقه بازی</span>
                        <h4>صرفه‌جویی ۱۷٪ در <br/>لپ‌تاپ ایسوس</h4>
                        <a href="shop-grid-right.html">همین حالا خرید کنید <i className="fa fa-arrow-left"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-9 col-md-12">
                <div className="tab-content wow fadeIn animated" id="myTabContent-1">
                    <div className="tab-pane fade show active" id="tab-one-1" role="tabpanel" aria-labelledby="tab-one-1">
                        <div className="carausel-4-columns-cover arrow-center position-relative">
                            <Swiper
                            spaceBetween={20}
                                breakpoints={{
                                    0:{
                                        slidesPerView:1
                                    },
                                    600:{
                                        slidesPerView:2
                                    },
                                    768:{
                                        slidesPerView:2.5
                                    },
                                    992:{
                                        slidesPerView:3.2
                                    },
                                    1200:{
                                        slidesPerView:4
                                    }
                                }}
                            >
                                <SwiperSlide>
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="/imgs/shop/product-2-1.jpg" alt=""/>
                                                <img className="hover-img" src="/imgs/shop/product-2-2.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="مشاهده سریع" className="action-btn small hover-up"><i className="far fa-search"></i></a>
                                            <a aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></a>
                                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">داغ</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">ساعت</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">بند چرمی ساعت</a></h2>
                                        <div className="rating-result" title="90%">
                                            <span>
                                                <span>۷۰٪</span>
                                            </span>
                                        </div>
                                        <div className="product-price">
                                            <span>۲۳۸,۰۰۰ تومان</span>
                                            <span className="old-price">۲۴۵,۰۰۰ تومان</span>
                                        </div>
                                        <div className="product-action-1 show">
                                            <a aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="/imgs/shop/product-2-1.jpg" alt=""/>
                                                <img className="hover-img" src="/imgs/shop/product-2-2.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="مشاهده سریع" className="action-btn small hover-up"><i className="far fa-search"></i></a>
                                            <a aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></a>
                                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">داغ</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">ساعت</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">بند چرمی ساعت</a></h2>
                                        <div className="rating-result" title="90%">
                                            <span>
                                                <span>۷۰٪</span>
                                            </span>
                                        </div>
                                        <div className="product-price">
                                            <span>۲۳۸,۰۰۰ تومان</span>
                                            <span className="old-price">۲۴۵,۰۰۰ تومان</span>
                                        </div>
                                        <div className="product-action-1 show">
                                            <a aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="/imgs/shop/product-2-1.jpg" alt=""/>
                                                <img className="hover-img" src="/imgs/shop/product-2-2.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="مشاهده سریع" className="action-btn small hover-up"><i className="far fa-search"></i></a>
                                            <a aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></a>
                                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">داغ</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">ساعت</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">بند چرمی ساعت</a></h2>
                                        <div className="rating-result" title="90%">
                                            <span>
                                                <span>۷۰٪</span>
                                            </span>
                                        </div>
                                        <div className="product-price">
                                            <span>۲۳۸,۰۰۰ تومان</span>
                                            <span className="old-price">۲۴۵,۰۰۰ تومان</span>
                                        </div>
                                        <div className="product-action-1 show">
                                            <a aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="/imgs/shop/product-2-1.jpg" alt=""/>
                                                <img className="hover-img" src="/imgs/shop/product-2-2.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="مشاهده سریع" className="action-btn small hover-up"><i className="far fa-search"></i></a>
                                            <a aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></a>
                                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">داغ</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">ساعت</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">بند چرمی ساعت</a></h2>
                                        <div className="rating-result" title="90%">
                                            <span>
                                                <span>۷۰٪</span>
                                            </span>
                                        </div>
                                        <div className="product-price">
                                            <span>۲۳۸,۰۰۰ تومان</span>
                                            <span className="old-price">۲۴۵,۰۰۰ تومان</span>
                                        </div>
                                        <div className="product-action-1 show">
                                            <a aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="product-cart-wrap mb-30">
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <a href="shop-product-right.html">
                                                <img className="default-img" src="/imgs/shop/product-2-1.jpg" alt=""/>
                                                <img className="hover-img" src="/imgs/shop/product-2-2.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="product-action-1">
                                            <a aria-label="مشاهده سریع" className="action-btn small hover-up"><i className="far fa-search"></i></a>
                                            <a aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></a>
                                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></a>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">داغ</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <a href="shop-grid-right.html">ساعت</a>
                                        </div>
                                        <h2><a href="shop-product-right.html">بند چرمی ساعت</a></h2>
                                        <div className="rating-result" title="90%">
                                            <span>
                                                <span>۷۰٪</span>
                                            </span>
                                        </div>
                                        <div className="product-price">
                                            <span>۲۳۸,۰۰۰ تومان</span>
                                            <span className="old-price">۲۴۵,۰۰۰ تومان</span>
                                        </div>
                                        <div className="product-action-1 show">
                                            <a aria-label="افزودن به سبد خرید" className="action-btn hover-up" href="shop-cart.html"><i className="far fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default BestSellers