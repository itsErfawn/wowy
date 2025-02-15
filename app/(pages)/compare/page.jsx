import Link from 'next/link'
import React from 'react'

function comparePage() {
  return (
    <>
            <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="index.html" rel="nofollow">خانه</Link>
                        <span></span> فروشگاه <span></span> مقایسه
                    </div>
                </div>
            </div>
            <section className="mt-60 mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table text-center">
                                    <tbody>
                                        <tr className="pr_image">
                                            <td className="text-muted font-md fw-600">پیش‌نمایش</td>
                                            <td className="row_img"><img src="/imgs/shop/product-3-3.jpg" alt="compare-img"/></td>
                                            <td className="row_img"><img src="/imgs/shop/product-3-1.jpg" alt="compare-img"/></td>
                                            <td className="row_img"><img src="/imgs/shop/product-4-1.jpg" alt="compare-img"/></td>
                                        </tr>
                                        <tr className="pr_title">
                                            <td className="text-muted font-md fw-600">نام</td>
                                            <td className="product_name">
                                                <h5><Link href="shop-product-full.html">تی‌شرت زنانه آستین کوتاه جی.کرو مرکانتایل</Link></h5>
                                            </td>
                                            <td className="product_name">
                                                <h5><Link href="shop-product-full.html">تاپ زنانه آمازون اسنشیالز</Link></h5>
                                            </td>
                                            <td className="product_name">
                                                <h5><Link href="shop-product-full.html">تی‌شرت زنانه برند آمازون - دیلی ریتوال</Link></h5>
                                            </td>
                                        </tr>
                                        <tr className="pr_price">
                                            <td className="text-muted font-md fw-600">قیمت</td>
                                            <td className="product_price"><span className="price">۴۵,۰۰۰ تومان</span></td>
                                            <td className="product_price"><span className="price">۵۵,۰۰۰ تومان</span></td>
                                            <td className="product_price"><span className="price">۶۸,۰۰۰ تومان</span></td>
                                        </tr>
                                        <tr className="pr_rating">
                                            <td className="text-muted font-md fw-600">امتیاز</td>
                                            <td>
                                                <div className="rating_wrap">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{width:"90%"}}></div>
                                                    </div>
                                                    <span className="rating_num">(۱۲۱)</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="rating_wrap">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{width:"90%"}}></div>
                                                    </div>
                                                    <span className="rating_num">(۳۵)</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="rating_wrap">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{width:"90%"}}></div>
                                                    </div>
                                                    <span className="rating_num">(۱۲۵)</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="description">
                                            <td className="text-muted font-md fw-600">توضیحات</td>
                                            <td className="row_text font-xs">
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                                </p>
                                            </td>
                                            <td className="row_text font-xs">
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                                </p>
                                            </td>
                                            <td className="row_text font-xs">
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                                </p>
                                            </td>
                                        </tr>
                                        <tr className="pr_color">
                                            <td className="text-muted font-md fw-600">رنگ</td>
                                            <td className="row_color">
                                                <ul className="list-filter color-filter">
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
                                            </td>
                                            <td className="row_color">
                                                <ul className="list-filter color-filter">
                                                    <li>
                                                        <Link href="#" data-color="Red"><span className="product-color-red"></span></Link>
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
                                            </td>
                                            <td className="row_color">
                                                <ul className="list-filter color-filter">
                                                    <li>
                                                        <Link href="#" data-color="Red"><span className="product-color-red"></span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" data-color="Yellow"><span className="product-color-yellow"></span></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#" data-color="Orange"><span className="product-color-orange"></span></Link>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="pr_size">
                                            <td className="text-muted font-md fw-600">اندازه‌های موجود</td>
                                            <td className="row_size">
                                                <ul className="list-filter size-filter mt-15 font-small">
                                                    <li><Link href="#">S</Link></li>
                                                    <li><Link href="#">M</Link></li>
                                                    <li><Link href="#">L</Link></li>
                                                    <li><Link href="#">XL</Link></li>
                                                    <li><Link href="#">XXL</Link></li>
                                                </ul>
                                            </td>
                                            <td className="row_size">
                                                <ul className="list-filter size-filter mt-15 font-small">
                                                    <li><Link href="#">S</Link></li>
                                                    <li><Link href="#">XL</Link></li>
                                                    <li><Link href="#">XXL</Link></li>
                                                </ul>
                                            </td>
                                            <td className="row_size">
                                                <ul className="list-filter size-filter mt-15 font-small">
                                                    <li><Link href="#">M</Link></li>
                                                    <li><Link href="#">L</Link></li>
                                                    <li><Link href="#">XL</Link></li>
                                                    <li><Link href="#">XXL</Link></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="pr_stock">
                                            <td className="text-muted font-md fw-600">وضعیت موجودی</td>
                                            <td className="row_stock"><span>موجود</span></td>
                                            <td className="row_stock"><span className="text-danger font-weight-bold">ناموجود</span></td>
                                            <td className="row_stock"><span>موجود</span></td>
                                        </tr>
                                        <tr className="pr_weight">
                                            <td className="text-muted font-md fw-600">وزن</td>
                                            <td className="row_weight">۳۲۰ گرم</td>
                                            <td className="row_weight">۳۷۰ گرم</td>
                                            <td className="row_weight">۳۸۰ گرم</td>
                                        </tr>
                                        <tr className="pr_dimensions">
                                            <td className="text-muted font-md fw-600">ابعاد</td>
                                            <td className="row_dimensions">N/A</td>
                                            <td className="row_dimensions">N/A</td>
                                            <td className="row_dimensions">N/A</td>
                                        </tr>
                                        <tr className="pr_add_to_cart">
                                            <td className="text-muted font-md fw-600">خرید</td>
                                            <td className="row_btn">
                                                <button className="btn btn-rounded btn-sm"><i className="far fa-shopping-bag mr-5"></i>افزودن به سبد خرید</button>
                                            </td>
                                            <td className="row_btn">
                                                <button className="btn btn-rounded btn-sm btn-secondary"><i className="far fa-envelope mr-5"></i>تماس با ما</button>
                                            </td>
                                            <td className="row_btn">
                                                <button className="btn btn-rounded btn-sm"><i className="far fa-shopping-bag mr-5"></i>افزودن به سبد خرید</button>
                                            </td>
                                        </tr>
                                        <tr className="pr_remove text-muted">
                                            <td className="text-muted font-md fw-600"></td>
                                            <td className="row_remove">
                                                <Link href="#"><i className="fa fa-trash-alt mr-5"></i><span>حذف</span> </Link>
                                            </td>
                                            <td className="row_remove">
                                                <Link href="#"><i className="fa fa-trash-alt mr-5"></i><span>حذف</span> </Link>
                                            </td>
                                            <td className="row_remove">
                                                <Link href="#"><i className="fa fa-trash-alt mr-5"></i><span>حذف</span> </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default comparePage