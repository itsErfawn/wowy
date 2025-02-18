import React from 'react'

function adminSellersPage() {
  return (
    <section className="content-main">
    <div className="content-header">
        <h2 className="content-title">کارت‌های فروشندگان</h2>
        <div>
            <a href="#" className="btn btn-primary"><i className="material-icons md-plus"></i> ایجاد جدید</a>
        </div>
    </div>
    <div className="card mb-4">
        <header className="card-header">
            <div className="row gx-3">
                <div className="col-lg-4 col-md-6 me-auto">
                    <input type="text" placeholder="جستجو..." className="form-control"/>
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                    <select className="form-select">
                        <option>نمایش ۲۰</option>
                        <option>نمایش ۳۰</option>
                        <option>نمایش ۴۰</option>
                        <option>نمایش همه</option>
                    </select>
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                    <select className="form-select">
                        <option>وضعیت: همه</option>
                        <option>فقط فعال</option>
                        <option>غیرفعال</option>
                    </select>
                </div>
            </div>
        </header>
        <div className="card-body">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                <div className="col">
                    <div className="card card-user">
                        <div className="card-header">
                            <img className="img-md img-avatar" src="/admin/imgs/people/avatar1.jpg" alt="User pic"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title mt-50">مری ساندرا</h5>
                            <div className="card-text text-muted">
                                <p className="m-0">شناسه فروشنده: #409</p>
                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9af7fbe8e3a3aadaffe2fbf7eaf6ffb4f9f5f7">[email&#160;protected]</a></p>
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col">
                    <div className="card card-user">
                        <div className="card-header">
                            <img className="img-md img-avatar" src="/admin/imgs/people/avatar2.jpg" alt="User pic"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title mt-50">لزلی الکساندر</h5>
                            <div className="card-text text-muted">
                                <p className="m-0">شناسه فروشنده: #478</p>
                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="eb878e9887828eab8e938a869b878ec5888486">[email&#160;protected]</a></p>
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col">
                    <div className="card card-user">
                        <div className="card-header">
                            <img className="img-md img-avatar" src="/admin/imgs/people/avatar3.jpg" alt="User pic"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title mt-50">لزلی الکساندر</h5>
                            <div className="card-text text-muted">
                                <p className="m-0">شناسه فروشنده: #478</p>
                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="335f56405f5a5673564b525e435f561d505c5e">[email&#160;protected]</a></p>
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col">
                    <div className="card card-user">
                        <div className="card-header">
                            <img className="img-md img-avatar" src="/admin/imgs/people/avatar4.jpg" alt="User pic"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title mt-50">فلوید مایلز</h5>
                            <div className="card-text text-muted">
                                <p className="m-0">شناسه فروشنده: #171</p>
                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="87e1e2e3e8f5b6b5c7e2ffe6eaf7ebe2a9e4e8ea">[email&#160;protected]</a></p>
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col">
                    <div className="card card-user">
                        <div className="card-header">
                            <img className="img-md img-avatar" src="/admin/imgs/people/avatar1.jpg" alt="User pic"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title mt-50">جان الکساندر</h5>
                            <div className="card-text text-muted">
                                <p className="m-0">شناسه فروشنده: #987</p>
                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="751f1a1d1b35180c18141c195b161a18">[email&#160;protected]</a></p>
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col">
                    <div className="card card-user">
                        <div className="card-header">
                            <img className="img-md img-avatar" src="/admin/imgs/people/avatar3.jpg" alt="User pic"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title mt-50">آلبرت فلورس</h5>
                            <div className="card-text text-muted">
                                <p className="m-0">شناسه فروشنده: #478</p>
                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1e727b6d72777b5e7b667f736e727b307d7173">[email&#160;protected]</a></p>
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col">
                    <div className="card card-user">
                        <div className="card-header">
                            <img className="img-md img-avatar" src="/admin/imgs/people/avatar4.jpg" alt="User pic"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title mt-50">لزلی الکساندر</h5>
                            <div className="card-text text-muted">
                                <p className="m-0">شناسه فروشنده: #478</p>
                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="97fbf2e4fbfef2d7f2eff6fae7fbf2b9f4f8fa">[email&#160;protected]</a></p>
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col">
                    <div className="card card-user">
                        <div className="card-header">
                            <img className="img-md img-avatar" src="/admin/imgs/people/avatar1.jpg" alt="User pic"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title mt-50">مارکس آلبرتو</h5>
                            <div className="card-text text-muted">
                                <p className="m-0">شناسه فروشنده: #478</p>
                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5f333a2c33363a1f3a273e322f333a713c3032">[email&#160;protected]</a></p>
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div className="pagination-area mt-15 mb-50">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-start">
                <li className="page-item active"><a className="page-link" href="#">۰۱</a></li>
                <li className="page-item"><a className="page-link" href="#">۰۲</a></li>
                <li className="page-item"><a className="page-link" href="#">۰۳</a></li>
                <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">۱۶</a></li>
                <li className="page-item"><a className="page-link" href="#"><i className="material-icons md-chevron_left"></i></a></li>
            </ul>
        </nav>
    </div>
</section> 
  )
}

export default adminSellersPage