'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Brands() {
  return (
    <section className="section-padding-60">
    <div className="container">
        <h3 className="section-title style-1 mb-30 wow fadeIn animated">برندهای ویژه</h3>
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
                    <img className="img-grey-hover" src="/imgs/banner/brand-6.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-6.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-6.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-6.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-6.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-6.png" alt=""/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-logo">
                    <img className="img-grey-hover" src="/imgs/banner/brand-6.png" alt=""/>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</section>
  )
}

export default Brands