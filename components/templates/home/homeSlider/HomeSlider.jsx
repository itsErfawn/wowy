"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function HomeSlider() {
  return (
    <section className="home-slider bg-grey-9 position-relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="hero-slider-1"
      >
        <SwiperSlide>
          <div className="single-hero-slider single-animation-wrap">
            <div className="container">
              <div className="row align-items-center slider-animated-1">
                <div className="col-lg-5 col-md-6">
                  <div className="hero-slider-content-2">
                    <h4 className="animated">پیشنهاد تعویض</h4>
                    <h2 className="animated fw-900">معاملات با ارزش فوق‌العاده</h2>
                    <h1 className="animated fw-900 text-brand">بر روی تمام محصولات</h1>
                    <p className="animated">با کوپن‌ها بیشتر صرفه‌جویی کنید و تا ۷۰٪ تخفیف بگیرید</p>
                    <a className="animated btn btn-default btn-rounded" href="shop-product-right.html"> هم‌اکنون خرید کنید <i className="fa fa-arrow-left"></i> </a>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="single-slider-img single-slider-img-1">
                    <img className="animated" src="/imgs/slider/slider-1.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-hero-slider single-animation-wrap">
            <div className="container">
              <div className="row align-items-center slider-animated-1">
                <div className="col-lg-5 col-md-6">
                  <div className="hero-slider-content-2">
                    <h4 className="animated">تبلیغات فناوری</h4>
                    <h2 className="animated fw-900">روندهای فناوری</h2>
                    <h1 className="animated fw-900 text-brand">مجموعه بزرگ</h1>
                    <p className="animated">با کوپن‌ها بیشتر صرفه‌جویی کنید و تا ۲۰٪ تخفیف بگیرید</p>
                    <a className="animated btn btn-default btn-rounded" href="shop-product-right.html"> هم‌اکنون کشف کنید <i className="fa fa-arrow-left"></i> </a>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="single-slider-img single-slider-img-1">
                    <img className="animated" src="/imgs/slider/slider-2.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-hero-slider single-animation-wrap">
            <div className="container">
              <div className="row align-items-center slider-animated-1">
                <div className="col-lg-5 col-md-6">
                  <div className="hero-slider-content-2">
                    <h4 className="animated">پیشنهاد آینده</h4>
                    <h2 className="animated fw-900">معاملات بزرگ از</h2>
                    <h1 className="animated fw-900 text-brand">تولیدکننده</h1>
                    <p className="animated">هدفون، لپ‌تاپ گیمینگ، کامپیوتر و بیشتر...</p>
                    <a className="animated btn btn-default btn-rounded" href="shop-product-right.html"> هم‌اکنون خرید کنید <i className="fa fa-arrow-left"></i> </a>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="single-slider-img single-slider-img-1">
                    <img className="animated" src="/imgs/slider/slider-3.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HomeSlider;
