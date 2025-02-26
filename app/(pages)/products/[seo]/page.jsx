import Link from 'next/link'
import React from 'react'

function productPage() {
  return (
    <>
                <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="index.html" rel="nofollow">خانه</Link>
                        <span></span> هدفون <span></span> بیس قوی HD450
                    </div>
                </div>
            </div>
            <section className="mt-60 mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-detail accordion-detail">
                                <div className="row mb-50">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-gallery" dir="ltr">
                                            <span className="zoom-icon"><i className="fa fa-search-plus"></i></span>
                                            <div className="product-image-slider">
                                                <figure className="border-radius-10">
                                                    <img src="/imgs/shop/product-2-1.jpg" alt="تصویر محصول"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-info">
                                            <h2 className="title-detail">هدفون بیس قوی HD450</h2>
                                            <div className="product-detail-rating">
                                                <div className="pro-details-brand">
                                                    <span> برندها: <Link href="shop-grid-right.html">بوت‌استرپ</Link></span>
                                                </div>
                                                <div className="product-rate-cover text-end">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{width:"90%"}}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (25 نظر)</span>
                                                </div>
                                            </div>
                                            <div className="clearfix product-price-cover">
                                                <div className="product-price primary-color float-left">
                                                    <ins><span className="text-brand">120,000 تومان</span></ins>
                                                    <ins><span className="old-price font-md ml-15">200,000 تومان</span></ins>
                                                    <span className="save-price font-md color3 ml-15">25% تخفیف</span>
                                                </div>
                                            </div>
                                            <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                                            <div className="short-desc mb-30">
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                                </p>
                                            </div>
                                            <div className="product_sort_info font-xs mb-30">
                                                <ul>
                                                    <li className="mb-10"><i className="far fa-hourglass mr-5 text-brand"></i> 1 سال گارانتی برند الجزیره</li>
                                                    <li className="mb-10"><i className="far fa-paper-plane mr-5 text-brand"></i> 30 روز سیاست بازگشت</li>
                                                    <li><i className="far fa-address-card mr-5 text-brand"></i> پرداخت در محل موجود است</li>
                                                </ul>
                                            </div>
                                            <div className="attr-detail attr-color mb-15">
                                                <strong className="mr-10">رنگ</strong>
                                                <ul className="list-filter color-filter">
                                                    <li>
                                                        <Link href="#" data-color="Red"><span className="product-color-red"></span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" data-color="Yellow"><span className="product-color-yellow"></span></Link>
                                                    </li>
                                                    <li className="active">
                                                        <Link href="#" data-color="White"><span className="product-color-white"></span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" data-color="Orange"><span className="product-color-orange"></span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" data-color="Cyan"><span className="product-color-cyan"></span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" data-color="Green"><span className="product-color-green"></span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" data-color="Purple"><span className="product-color-purple"></span></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="attr-detail attr-size">
                                                <strong className="mr-10">اندازه</strong>
                                                <ul className="list-filter size-filter font-small">
                                                    <li><Link href="#">S</Link></li>
                                                    <li className="active"><Link href="#">M</Link></li>
                                                    <li><Link href="#">L</Link></li>
                                                    <li><Link href="#">XL</Link></li>
                                                    <li><Link href="#">XXL</Link></li>
                                                </ul>
                                            </div>
                                            <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                            <div className="detail-extralink">
                                                <div className="detail-qty border radius">
                                                    <Link href="#" className="qty-down"><i className="fa fa-caret-down" aria-hidden="true"></i></Link>
                                                    <span className="qty-val">1</span>
                                                    <Link href="#" className="qty-up"><i className="fa fa-caret-up" aria-hidden="true"></i></Link>
                                                </div>
                                                <div className="product-extra-link2">
                                                    <button type="submit" className="button button-add-to-cart">افزودن به سبد خرید</button>
                                                    <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn hover-up" href="shop-wishlist.html"><i className="far fa-heart"></i></Link>
                                                    <Link aria-label="مقایسه" className="action-btn hover-up" href="shop-compare.html"><i className="far fa-exchange-alt"></i></Link>
                                                </div>
                                            </div>
                                            <ul className="product-meta font-xs color-grey mt-50">
                                                <li className="mb-5">شناسه محصول: <Link href="#">FWM15VKT</Link></li>
                                                <li className="mb-5">برچسب‌ها: <Link href="#" rel="tag">لباس</Link>, <Link href="#" rel="tag">زنانه</Link>, <Link href="#" rel="tag">پیراهن</Link></li>
                                                <li>موجودی:<span className="in-stock text-success ml-5">8 عدد موجود در انبار</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-10 m-auto entry-main-content">
                                        <h3 className="section-title style-1 mb-30">توضیحات</h3>
                                        <div className="description mb-50">
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </p>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </p>
                                            <ul className="product-more-infor mt-30">
                                                <li><span>نوع بسته‌بندی</span> بطری</li>
                                                <li><span>رنگ</span> سبز، صورتی، آبی پودری، بنفش</li>
                                                <li><span>مقدار در هر بسته</span> 100 میلی‌لیتر</li>
                                                <li><span>الکل اتیلیک</span> 70%</li>
                                                <li><span>تعداد در یک کارتن</span> 1 عدد</li>
                                            </ul>
                                            <hr className="wp-block-separator is-style-dots" />
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </p>
                                            <h4 className="mt-30">بسته‌بندی و تحویل</h4>
                                            <hr className="wp-block-separator is-style-wide" />
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </p>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            </p>
                                        </div>
                                        <h3 className="section-title style-1 mb-30">اطلاعات بیشتر</h3>
                                        <table className="font-md mb-30">
                                            <tbody>
                                                <tr className="stand-up">
                                                    <th>ایستاده</th>
                                                    <td>
                                                        <p>35″L x 24″W x 37-45″H (از جلو به عقب چرخ)</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-wo-wheels">
                                                    <th>تا شده (بدون چرخ)</th>
                                                    <td>
                                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-w-wheels">
                                                    <th>تا شده (با چرخ)</th>
                                                    <td>
                                                        <p>32.5″L x 24″W x 18.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>عبور از در</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="frame">
                                                    <th>قاب</th>
                                                    <td>
                                                        <p>آلومینیوم</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-wo-wheels">
                                                    <th>وزن (بدون چرخ)</th>
                                                    <td>
                                                        <p>20 پوند</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-capacity">
                                                    <th>ظرفیت وزن</th>
                                                    <td>
                                                        <p>60 پوند</p>
                                                    </td>
                                                </tr>
                                                <tr className="width">
                                                    <th>عرض</th>
                                                    <td>
                                                        <p>24″</p>
                                                    </td>
                                                </tr>
                                                <tr className="handle-height-ground-to-handle">
                                                    <th>ارتفاع دسته (از زمین تا دسته)</th>
                                                    <td>
                                                        <p>37-45″</p>
                                                    </td>
                                                </tr>
                                                <tr className="wheels">
                                                    <th>چرخ‌ها</th>
                                                    <td>
                                                        <p>12″ هوا / پهن با شیارهای صاف</p>
                                                    </td>
                                                </tr>
                                                <tr className="seat-back-height">
                                                    <th>ارتفاع پشتی صندلی</th>
                                                    <td>
                                                        <p>21.5″</p>
                                                    </td>
                                                </tr>
                                                <tr className="head-room-inside-canopy">
                                                    <th>فضای سر (داخل سایبان)</th>
                                                    <td>
                                                        <p>25″</p>
                                                    </td>
                                                </tr>
                                                <tr className="pa_color">
                                                    <th>رنگ</th>
                                                    <td>
                                                        <p>مشکی، آبی، قرمز، سفید</p>
                                                    </td>
                                                </tr>
                                                <tr className="pa_size">
                                                    <th>اندازه</th>
                                                    <td>
                                                        <p>M, S</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="single-social-share clearfix mt-50 mb-15">
                                            <p className="mb-15 mt-30 font-sm"><i className="fa fa-share-alt mr-5"></i> اشتراک‌گذاری</p>
                                            <div className="mobile-social-icon wow fadeIn mb-sm-5 mb-md-0 animated">
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
                                        <Link className="mail-to-friend font-sm color-grey" href="#"><i className="far fa-envelope"></i> ایمیل به یک دوست</Link>
                                        <h3 className="section-title style-1 mb-30 mt-30">نظرات (3)</h3>
                                        <div className="comments-area">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <h4 className="mb-30">سوالات و پاسخ‌های مشتریان</h4>
                                                    <div className="comment-list">
                                                        <div className="single-comment justify-content-between d-flex">
                                                            <div className="user justify-content-between d-flex">
                                                                <div className="thumb text-center">
                                                                    <img src="/imgs/page/avatar-6.jpg" alt=""/>
                                                                    <h6><Link href="#">جکی چان</Link></h6>
                                                                    <p className="font-xxs">از سال 2012</p>
                                                                </div>
                                                                <div className="desc">
                                                                    <div className="product-rate d-inline-block">
                                                                        <div className="product-rating" style={{width:"90%"}}></div>
                                                                    </div>
                                                                    <p>ممنون از ارسال سریع از لهستان فقط 3 روز.</p>
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="d-flex align-items-center">
                                                                            <p className="font-xs mr-30">4 دسامبر 2020 در 3:12 بعد از ظهر</p>
                                                                            <Link href="#" className="text-brand">پاسخ <i className="fa fa-arrow-left font-xs"></i> </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="single-comment justify-content-between d-flex">
                                                            <div className="user justify-content-between d-flex">
                                                                <div className="thumb text-center">
                                                                    <img src="/imgs/page/avatar-7.jpg" alt=""/>
                                                                    <h6><Link href="#">آنا رزی</Link></h6>
                                                                    <p className="font-xxs">از سال 2008</p>
                                                                </div>
                                                                <div className="desc">
                                                                    <div className="product-rate d-inline-block">
                                                                        <div className="product-rating" style={{width:"90%"}}></div>
                                                                    </div>
                                                                    <p>قیمت پایین عالی و کارکرد خوب.</p>
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="d-flex align-items-center">
                                                                            <p className="font-xs mr-30">4 دسامبر 2020 در 3:12 بعد از ظهر</p>
                                                                            <Link href="#" className="text-brand">پاسخ <i className="fa fa-arrow-left font-xs"></i> </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="single-comment justify-content-between d-flex">
                                                            <div className="user justify-content-between d-flex">
                                                                <div className="thumb text-center">
                                                                    <img src="/imgs/page/avatar-8.jpg" alt=""/>
                                                                    <h6><Link href="#">استیون کنی</Link></h6>
                                                                    <p className="font-xxs">از سال 2010</p>
                                                                </div>
                                                                <div className="desc">
                                                                    <div className="product-rate d-inline-block">
                                                                        <div className="product-rating" style={{width:"90%"}}></div>
                                                                    </div>
                                                                    <p>اصیل و زیبا، این هدفون‌ها را بیشتر از آنچه انتظار داشتم دوست دارم</p>
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="d-flex align-items-center">
                                                                            <p className="font-xs mr-30">4 دسامبر 2020 در 3:12 بعد از ظهر</p>
                                                                            <Link href="#" className="text-brand">پاسخ <i className="fa fa-arrow-left font-xs"></i> </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <h4 className="mb-30">نظرات مشتریان</h4>
                                                    <div className="d-flex mb-30">
                                                        <div className="product-rate d-inline-block mr-15">
                                                            <div className="product-rating" style={{width:"90%"}}></div>
                                                        </div>
                                                        <h6>4.8 از 5</h6>
                                                    </div>
                                                    <div className="progress">
                                                        <span>5 ستاره</span>
                                                        <div className="progress-bar" role="progressbar" style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                                    </div>
                                                    <div className="progress">
                                                        <span>4 ستاره</span>
                                                        <div className="progress-bar" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                                    </div>
                                                    <div className="progress">
                                                        <span>3 ستاره</span>
                                                        <div className="progress-bar" role="progressbar" style={{width:"45%"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                                    </div>
                                                    <div className="progress">
                                                        <span>2 ستاره</span>
                                                        <div className="progress-bar" role="progressbar" style={{width:"65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                                                    </div>
                                                    <div className="progress mb-30">
                                                        <span>1 ستاره</span>
                                                        <div className="progress-bar" role="progressbar" style={{width:"85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                                    </div>
                                                    <Link href="#" className="font-xs text-muted">چگونه امتیازات محاسبه می‌شوند؟</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-form">
                                            <h4 className="mb-15">افزودن نظر</h4>
                                            <div className="product-rate d-inline-block mb-30"></div>
                                            <div className="row">
                                                <div className="col-lg-8 col-md-12">
                                                    <form className="form-contact comment_form" action="#" id="commentForm">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="نظر خود را بنویسید"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <input className="form-control" name="name" id="name" type="text" placeholder="نام"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <input className="form-control" name="email" id="email" type="email" placeholder="ایمیل"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <input className="form-control" name="website" id="website" type="text" placeholder="وب‌سایت"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <button type="submit" className="button button-contactForm">ارسال نظر</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-60">
                                    <div className="col-12">
                                        <h3 className="section-title style-1 mb-30">محصولات مرتبط</h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                            <div className="product-cart-wrap small hover-up">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <Link href="shop-product-right.html" tabIndex="0">
                                                            <img className="default-img" src="/imgs/shop/product-2-1.jpg" alt=""/>
                                                            <img className="hover-img" src="/imgs/shop/product-2-2.jpg" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <Link aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0" href={'/'}><i className="far fa-search"></i></Link>
                                                        <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></Link>
                                                        <Link aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></Link>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">داغ</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <h2><Link href="shop-product-right.html" tabIndex="0">هدفون اولترا باس</Link></h2>
                                                    <div className="rating-result" title="90%">
                                                        <span> </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>238,000 تومان</span>
                                                        <span className="old-price">245,000 تومان</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                            <div className="product-cart-wrap small hover-up">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <Link href="shop-product-right.html" tabIndex="0">
                                                            <img className="default-img" src="/imgs/shop/product-3-1.jpg" alt=""/>
                                                            <img className="hover-img" src="/imgs/shop/product-4-2.jpg" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <Link aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0" href={'/'}><i className="far fa-search"></i></Link>
                                                        <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></Link>
                                                        <Link aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></Link>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="sale">-12%</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <h2><Link href="shop-product-right.html" tabIndex="0">بلندگوی بلوتوث هوشمند</Link></h2>
                                                    <div className="rating-result" title="90%">
                                                        <span> </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>138,000 تومان</span>
                                                        <span className="old-price">145,000 تومان</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                            <div className="product-cart-wrap small hover-up">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <Link href="shop-product-right.html" tabIndex="0">
                                                            <img className="default-img" src="/imgs/shop/product-4-1.jpg" alt=""/>
                                                            <img className="hover-img" src="/imgs/shop/product-4-2.jpg" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <Link aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0" href={'/'}><i className="far fa-search"></i></Link>
                                                        <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></Link>
                                                        <Link aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></Link>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="new">جدید</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <h2><Link href="shop-product-right.html" tabIndex="0">هوم اسپیک 12UEA گوگل</Link></h2>
                                                    <div className="rating-result" title="90%">
                                                        <span> </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>738,000 تومان</span>
                                                        <span className="old-price">1245,000 تومان</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                            <div className="product-cart-wrap small hover-up">
                                                <div className="product-img-action-wrap">
                                                    <div className="product-img product-img-zoom">
                                                        <Link href="shop-product-right.html" tabIndex="0">
                                                            <img className="default-img" src="/imgs/shop/product-5-1.jpg" alt=""/>
                                                            <img className="hover-img" src="/imgs/shop/product-5-2.jpg" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="product-action-1">
                                                        <Link aria-label="مشاهده سریع" className="action-btn small hover-up" tabIndex="0" href={'/'}><i className="far fa-search"></i></Link>
                                                        <Link aria-label="افزودن به لیست علاقه‌مندی‌ها" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex="0"><i className="far fa-heart"></i></Link>
                                                        <Link aria-label="مقایسه" className="action-btn small hover-up" href="shop-compare.html" tabIndex="0"><i className="far fa-exchange-alt"></i></Link>
                                                    </div>
                                                    <div className="product-badges product-badges-position product-badges-mrg">
                                                        <span className="hot">داغ</span>
                                                    </div>
                                                </div>
                                                <div className="product-content-wrap">
                                                    <h2><Link href="shop-product-right.html" tabIndex="0">دوربین دادوا 4K 2024EF</Link></h2>
                                                    <div className="rating-result" title="90%">
                                                        <span> </span>
                                                    </div>
                                                    <div className="product-price">
                                                        <span>89.8 </span>
                                                        <span className="old-price">98,000 تومان</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-img banner-big wow fadeIn f-none animated mt-50">
                                    <img className="border-radius-10" src="/imgs/banner/banner-4.png" alt=""/>
                                    <div className="banner-text">
                                        <h4 className="mb-15 mt-40 text-white">خدمات تعمیرات</h4>
                                        <h2 className="fw-600 mb-20 text-white">ما یک ارائه دهنده خدمات مجاز اپل هستیم</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default productPage