"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import PopularCategory from '../popularCategory/PopularCategory';
function PopularCategories({categories}) {
  return (
    <section className="popular-categories bg-grey-9 section-padding-60">
    <div className="container wow fadeIn animated">
        <h3 className="section-title mb-30"><span>دسته‌بندی‌های</span> محبوب</h3>
        <div className="carausel-6-columns-cover position-relative">
            <Swiper 
            slidesPerView={6}
            spaceBetween={20}
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
                {
                    categories.map(category=>(
                        <SwiperSlide key={category.id}>
                        <PopularCategory key={category.id} {...{category}}/>
                    </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
</section>
  )
}

export default PopularCategories