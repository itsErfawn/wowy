import Link from 'next/link'
import React from 'react'

function adminBrandsPage() {
  return (
    <section className="content-main">
    <div className="content-header">
        <div>
            <h2 className="content-title card-title">برند</h2>
            <p>مدیریت برند و فروشنده</p>
        </div>
        <div>
            <Link href="#" className="btn btn-primary"><i className="text-muted material-icons md-post_add"></i>افزودن برند جدید</Link>
        </div>
    </div>
    <div className="card mb-4">
        <header className="card-header">
            <div className="row gx-3">
                <div className="col-lg-4 mb-lg-0 mb-15 me-auto">
                    <input type="text" placeholder="جستجو..." className="form-control"/>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="custom_select">
                        <select className="form-select select-nice">
                            <option >دسته‌بندی‌ها</option>
                            <option>تکنولوژی</option>
                            <option>مد</option>
                            <option>دکوراسیون منزل</option>
                            <option>سلامتی</option>
                            <option>سفر</option>
                            <option>خودرو</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <input type="date" className="form-control" name=""/>
                </div>
            </div>
        </header>
        <div className="card-body">
            <div className="row gx-3">
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-1.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">کاردینال</h6>
                            <Link href="#"> ۳۹۸ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-2.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">بردفلای</h6>
                            <Link href="#"> ۱۳ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-3.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">کوکوریکو</h6>
                            <Link href="#"> ۱۳ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-4.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">یوگی‌لیست</h6>
                            <Link href="#"> ۸۷ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-5.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">آسری</h6>
                            <Link href="#"> ۱۰ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-6.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">شیواکین</h6>
                            <Link href="#"> ۳۹۸ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-7.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">آسرا</h6>
                            <Link href="#"> ۳۹۸ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-8.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">لایون الکترونیکس</h6>
                            <Link href="#"> ۳۹۸ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-9.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">توهند</h6>
                            <Link href="#"> ۳۹۸ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-10.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">کیائومین</h6>
                            <Link href="#"> ۳۹۸ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-11.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title m-0">نوکین</h6>
                            <Link href="#"> ۳۹۸ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-12.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title م-0">نام شرکت</h6>
                            <Link href="#"> ۱۳ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-13.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title م-0">نام شرکت</h6>
                            <Link href="#"> ۳۹۸ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-14.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title م-0">نام شرکت</h6>
                            <Link href="#"> ۱۳ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-15.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title م-0">نام شرکت</h6>
                            <Link href="#"> ۳۹۸ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-16.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title م-0">نام شرکت</h6>
                            <Link href="#"> ۱۳ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-17.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title م-0">نام شرکت</h6>
                            <Link href="#"> ۱۳ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                    <figure className="card border-1">
                        <div className="card-header bg-white text-center">
                            <img height="76" src="/admin/imgs/brands/brand-18.jpg" className="img-fluid" alt="لوگو"/>
                        </div>
                        <figcaption className="card-body text-center">
                            <h6 className="card-title م-0">نام شرکت</h6>
                            <Link href="#"> ۱۳ آیتم </Link>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div> 
</section> 
  )
}

export default adminBrandsPage