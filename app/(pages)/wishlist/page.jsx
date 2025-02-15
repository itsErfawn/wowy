import Link from 'next/link'
import React from 'react'

function wishlistPage() {
  return (
    <>
            <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="index.html" rel="nofollow">خانه</Link>
                        <span></span> فروشگاه <span></span> لیست علاقه‌مندی‌ها
                    </div>
                </div>
            </div>
            <section className="mt-60 mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table shopping-summery text-center">
                                    <thead>
                                        <tr className="main-heading">
                                            <th scope="col" colSpan="2">محصول</th>
                                            <th scope="col">قیمت</th>
                                            <th scope="col">وضعیت موجودی</th>
                                            <th scope="col">عملیات</th>
                                            <th scope="col">حذف</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="image product-thumbnail"><img src="/imgs/shop/product-1-2.jpg" alt="#"/></td>
                                            <td className="product-des product-name">
                                                <p className="product-name"><Link href="shop-product-right.html">تی‌شرت آستین کوتاه زنانه جی.کرو مرکنتایل</Link></p>
                                                <p className="font-xs">
                                                    ما بوریوسام در یک تانتو نسکیونگ اژت<br/>
                                                    دیستینگی مگنداپیبوس.
                                                </p>
                                            </td>
                                            <td className="price" data-title="Price"><span>65,000 تومان</span></td>
                                            <td className="text-center" data-title="Stock">
                                                <span className="color3 font-weight-bold">موجود در انبار</span>
                                            </td>
                                            <td className="text-right" data-title="Cart">
                                                <button className="btn btn-rounded btn-sm"><i className="far fa-shopping-bag mr-5"></i>افزودن به سبد خرید</button>
                                            </td>
                                            <td className="action" data-title="Remove">
                                                <Link href="#"><i className="fa fa-trash-alt"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="image"><img src="/imgs/shop/product-1-3.jpg" alt="#"/></td>
                                            <td className="product-des">
                                                <p className="product-name"><Link href="shop-product-right.html">تاپ زنانه آمازون اسنشیالز</Link></p>
                                                <p className="font-xs">
                                                    نشستن در ipsum amet clita نیست,<br/>
                                                    اما اَمَت سادیپسینگ و گوبِرگِرِن
                                                </p>
                                            </td>
                                            <td className="price" data-title="Price"><span>75,000 تومان</span></td>
                                            <td className="text-center" data-title="Stock">
                                                <span className="color3 font-weight-bold">موجود در انبار</span>
                                            </td>
                                            <td className="text-right" data-title="Cart">
                                                <button className="btn btn-rounded btn-sm"><i className="far fa-shopping-bag mr-5"></i>افزودن به سبد خرید</button>
                                            </td>
                                            <td className="action" data-title="Remove">
                                                <Link href="#"><i className="fa fa-trash-alt"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="image"><img src="/imgs/shop/product-2-1.jpg" alt="#"/></td>
                                            <td className="product-des">
                                                <p className="product-name"><Link href="shop-product-right.html">برند آمازون - تی‌شرت زنانه دیلی ریتوال</Link></p>
                                                <p className="font-xs">
                                                    دردی که در آن است و دردی که در آن است.<br/>
                                                    فقط دردی که در آن است
                                                </p>
                                            </td>
                                            <td className="price" data-title="Price"><span>62,000 تومان</span></td>
                                            <td className="text-center" data-title="Stock">
                                                <span className="text-danger font-weight-bold">ناموجود</span>
                                            </td>
                                            <td className="text-right" data-title="Cart">
                                                <button className="btn btn-rounded btn-sm btn-secondary"><i className="far fa-envelope mr-5"></i>تماس با ما</button>
                                            </td>
                                            <td className="action" data-title="Remove">
                                                <Link href="#"><i className="fa fa-trash-alt"></i></Link>
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

export default wishlistPage