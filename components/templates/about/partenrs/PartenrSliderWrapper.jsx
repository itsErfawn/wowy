"use client"
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
function PartenrSliderWrapper() {
  return (
    <section id="clients" className="pt-50 pb-50 bg-brand-muted bg-grey-9">
    <div className=" mb-30">
        <div className=" text-center">
            <h6 className="mt-0 mb-5 text-uppercase font-sm text-brand wow fadeIn animated">مورد اعتماد بیش از ۵۰.۰۰۰ کاربر</h6>
            <h2 className="mb-5 text-grey-1 wow fadeIn animated">شرکای ما</h2>
            <p className="w-50 m-auto font-sm text-grey-3 wow fadeIn animated">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</p>
        </div>
    </div>
    <div className="container">
        <div className="carausel-6-columns-cover arrow-center position-relative wow fadeIn animated">
            <Swiper
            breakpoints={{
                0:{
                    slidesPerView:1.6
                },
                600:{
                    slidesPerView:3.5
                },
                768:{
                    slidesPerView:4.5
                },
                992:{
                    slidesPerView:5
                },
                1200:{
                    slidesPerView:6
                }
            }}
            >
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-1.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-1.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-1.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-1.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-1.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-1.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-1.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-1.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-1.png" alt=""/>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</section>
  )
}

export default PartenrSliderWrapper