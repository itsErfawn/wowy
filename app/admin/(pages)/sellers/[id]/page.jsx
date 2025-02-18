import React from 'react'

function adminSellerInfo() {
  return (
    <section className="content-main">
    <div className="content-header">
        <a href="javascript:history.back()"><i className="material-icons md-arrow_back"></i> بازگشت </a>
    </div>
    <div className="card mb-4">
        <div className="card-header bg-primary" style={{height:"150px"}}>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-xl col-lg flex-grow-0" style={{flexBasis:"230px"}}>
                    <div className="img-thumbnail shadow w-100 bg-white position-relative text-center" style={{height:"190px",width:"200px",marginTop:"-120px"}}>
                        <img src="/admin/imgs/brands/brand-3.jpg" className="center-xy img-fluid" alt="لوگوی برند"/>
                    </div>
                </div>
                <div className="col-xl col-lg">
                    <h3>فروشگاه ورزشی کوکوریکو</h3>
                    <p>3891 رانچویو درایو، ریچاردسون، کالیفرنیا 62639</p>
                </div>
                <div className="col-xl-4 text-md-end">
                    <select className="form-select w-auto d-inline-block">
                        <option>اقدامات</option>
                        <option>غیرفعال کردن فروشگاه</option>
                        <option>تحلیل</option>
                        <option>چیزی</option>
                    </select>
                    <a href="#" className="btn btn-primary"> مشاهده زنده <i className="material-icons md-launch"></i> </a>
                </div>
            </div> 
            <hr className="my-4"/>
            <div className="row g-4">
                <div className="col-md-12 col-lg-4 col-xl-2">
                    <article className="box">
                        <p className="mb-0 text-muted">فروش کل:</p>
                        <h5 className="text-success">238</h5>
                        <p className="mb-0 text-muted">درآمد:</p>
                        <h5 className="text-success mb-0">2380</h5>
                    </article>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <h6>تماس‌ها</h6>
                    <p>
                        مدیر: جروم بل <br/>
                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="71181f171e311409101c011d145f121e1c">[ایمیل&#160;محافظت‌شده]</a> <br/>
                        (229) 555-0109, (808) 555-0111
                    </p>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <h6>آدرس</h6>
                    <p>
                        کشور: کالیفرنیا <br/>
                        آدرس: رانچویو درایو، ریچاردسون <br/>
                        کد پستی: 62639
                    </p>
                </div>
                <div className="col-sm-6 col-xl-4 text-xl-end">
                    <map className="mapbox position-relative d-inline-block">
                        <img src="/admin/imgs/misc/map.jpg" className="rounded2" height="120" alt="نقشه"/>
                        <span className="map-pin" style={{top:"50px",left:"100px"}}></span>
                        <button className="btn btn-sm btn-brand position-absolute bottom-0 end-0 mb-15 mr-15 font-xs"> بزرگ </button>
                    </map>
                </div>
            </div>
        </div> 
    </div>
    <div className="card mb-4">
        <div className="card-body">
            <h5 className="card-title">محصولات فروشنده</h5>
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/1.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/2.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/3.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">شلوارک جین مدل جدید</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/4.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">کیف مسافرتی XL</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/5.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/6.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/7.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/8.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">اپل ایرپاد CB-133</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/9.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/10.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/11.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">شلوارک جین مدل جدید</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/12.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">کیف مسافرتی XL</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/1.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/2.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/3.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">شلوارک جین مدل جدید</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/4.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">کیف مسافرتی XL</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/5.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/6.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/7.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/8.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">اپل ایرپاد CB-133</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/9.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/10.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">نام محصول</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/11.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">شلوارک جین مدل جدید</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src="/admin/imgs/items/12.jpg" alt="محصول"/> </a>
                        <div className="info-wrap">
                            <a href="#" className="title">کیف مسافرتی XL</a>
                            <div className="price mt-1">179,000 تومان</div> 
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
    <div className="pagination-area mt-30 mb-50">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-start">
                <li className="page-item active"><a className="page-link" href="#">01</a></li>
                <li className="page-item"><a className="page-link" href="#">02</a></li>
                <li className="page-item"><a className="page-link" href="#">03</a></li>
                <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">16</a></li>
                <li className="page-item"><a className="page-link" href="#"><i className="material-icons md-chevron_left"></i></a></li>
            </ul>
        </nav>
    </div>
</section>
  )
}

export default adminSellerInfo