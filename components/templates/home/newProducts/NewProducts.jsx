"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

function NewProducts() {
  return (
    <section className="section-padding-60">
    <div className="container wow fadeIn animated">
        <h3 className="section-title style-1 mb-30">تازه‌واردها</h3>
        <div className="carausel-6-columns-cover arrow-center position-relative">
            <Swiper
            slidesPerView={6}
            spaceBetween={20}
            breakpoints={{
                0:{
                    slidesPerView:1
                },
                600:{
                    slidesPerView:2.5
                },
                768:{
                    slidesPerView:3.5
                },
                992:{
                    slidesPerView:4.5
                },
                1200:{
                    slidesPerView:6
                }
            }}
            >
                <SwiperSlide>
                <div className="product-cart-wrap small hover-up">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                                <img className="default-img" src="/imgs/shop/product-15-1.jpg" alt=""/>
                                <img className="hover-img" src="/imgs/shop/product-15-2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="product-action-1">
                            <a aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0"><i className="far fa-search"></i></a>
                            <a aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></a>
                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="sale">فروش</span>
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <h2><a href="shop-product-right.html">کنسول بازی دستی سونی</a></h2>
                        <div className="rating-result" title="90%">
                            <span> </span>
                        </div>
                        <div className="product-price">
                            <span>۲۱۵,۰۰۰ تومان</span>
                            <span className="old-price">۲۳۵,۰۰۰ تومان</span>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="product-cart-wrap small hover-up">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                                <img className="default-img" src="/imgs/shop/product-15-1.jpg" alt=""/>
                                <img className="hover-img" src="/imgs/shop/product-15-2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="product-action-1">
                            <a aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0"><i className="far fa-search"></i></a>
                            <a aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></a>
                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="sale">فروش</span>
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <h2><a href="shop-product-right.html">کنسول بازی دستی سونی</a></h2>
                        <div className="rating-result" title="90%">
                            <span> </span>
                        </div>
                        <div className="product-price">
                            <span>۲۱۵,۰۰۰ تومان</span>
                            <span className="old-price">۲۳۵,۰۰۰ تومان</span>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="product-cart-wrap small hover-up">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                                <img className="default-img" src="/imgs/shop/product-15-1.jpg" alt=""/>
                                <img className="hover-img" src="/imgs/shop/product-15-2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="product-action-1">
                            <a aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0"><i className="far fa-search"></i></a>
                            <a aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></a>
                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="sale">فروش</span>
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <h2><a href="shop-product-right.html">کنسول بازی دستی سونی</a></h2>
                        <div className="rating-result" title="90%">
                            <span> </span>
                        </div>
                        <div className="product-price">
                            <span>۲۱۵,۰۰۰ تومان</span>
                            <span className="old-price">۲۳۵,۰۰۰ تومان</span>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="product-cart-wrap small hover-up">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                                <img className="default-img" src="/imgs/shop/product-15-1.jpg" alt=""/>
                                <img className="hover-img" src="/imgs/shop/product-15-2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="product-action-1">
                            <a aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0"><i className="far fa-search"></i></a>
                            <a aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></a>
                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="sale">فروش</span>
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <h2><a href="shop-product-right.html">کنسول بازی دستی سونی</a></h2>
                        <div className="rating-result" title="90%">
                            <span> </span>
                        </div>
                        <div className="product-price">
                            <span>۲۱۵,۰۰۰ تومان</span>
                            <span className="old-price">۲۳۵,۰۰۰ تومان</span>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="product-cart-wrap small hover-up">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                                <img className="default-img" src="/imgs/shop/product-15-1.jpg" alt=""/>
                                <img className="hover-img" src="/imgs/shop/product-15-2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="product-action-1">
                            <a aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0"><i className="far fa-search"></i></a>
                            <a aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></a>
                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="sale">فروش</span>
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <h2><a href="shop-product-right.html">کنسول بازی دستی سونی</a></h2>
                        <div className="rating-result" title="90%">
                            <span> </span>
                        </div>
                        <div className="product-price">
                            <span>۲۱۵,۰۰۰ تومان</span>
                            <span className="old-price">۲۳۵,۰۰۰ تومان</span>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="product-cart-wrap small hover-up">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                                <img className="default-img" src="/imgs/shop/product-15-1.jpg" alt=""/>
                                <img className="hover-img" src="/imgs/shop/product-15-2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="product-action-1">
                            <a aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0"><i className="far fa-search"></i></a>
                            <a aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></a>
                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="sale">فروش</span>
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <h2><a href="shop-product-right.html">کنسول بازی دستی سونی</a></h2>
                        <div className="rating-result" title="90%">
                            <span> </span>
                        </div>
                        <div className="product-price">
                            <span>۲۱۵,۰۰۰ تومان</span>
                            <span className="old-price">۲۳۵,۰۰۰ تومان</span>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="product-cart-wrap small hover-up">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                                <img className="default-img" src="/imgs/shop/product-15-1.jpg" alt=""/>
                                <img className="hover-img" src="/imgs/shop/product-15-2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="product-action-1">
                            <a aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0"><i className="far fa-search"></i></a>
                            <a aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></a>
                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="sale">فروش</span>
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <h2><a href="shop-product-right.html">کنسول بازی دستی سونی</a></h2>
                        <div className="rating-result" title="90%">
                            <span> </span>
                        </div>
                        <div className="product-price">
                            <span>۲۱۵,۰۰۰ تومان</span>
                            <span className="old-price">۲۳۵,۰۰۰ تومان</span>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="product-cart-wrap small hover-up">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <a href="shop-product-right.html">
                                <img className="default-img" src="/imgs/shop/product-15-1.jpg" alt=""/>
                                <img className="hover-img" src="/imgs/shop/product-15-2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="product-action-1">
                            <a aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0"><i className="far fa-search"></i></a>
                            <a aria-label="افزودن به علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></a>
                            <a aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></a>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="sale">فروش</span>
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <h2><a href="shop-product-right.html">کنسول بازی دستی سونی</a></h2>
                        <div className="rating-result" title="90%">
                            <span> </span>
                        </div>
                        <div className="product-price">
                            <span>۲۱۵,۰۰۰ تومان</span>
                            <span className="old-price">۲۳۵,۰۰۰ تومان</span>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</section>
  )
}

export default NewProducts