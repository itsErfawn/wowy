import React from 'react'

function adminCustomerPage() {
  return (
    <section className="content-main">
    <div className="content-header">
        <h2 className="content-title">لیست فروشندگان</h2>
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
                <div className="col-lg-2 col-md-3 col-6">
                    <select className="form-select">
                        <option>وضعیت</option>
                        <option>فعال</option>
                        <option>غیرفعال</option>
                        <option>نمایش همه</option>
                    </select>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <select className="form-select">
                        <option>نمایش ۲۰</option>
                        <option>نمایش ۳۰</option>
                        <option>نمایش ۴۰</option>
                    </select>
                </div>
            </div>
        </header> 
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>فروشنده</th>
                            <th>ایمیل</th>
                            <th>وضعیت</th>
                            <th>ثبت شده</th>
                            <th className="text-end"> عملیات </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="40%">
                                <a href="#" className="itemside">
                                    <div className="left">
                                        <img src="/admin/imgs/people/avatar1.jpg" className="img-sm img-avatar" alt="Userpic"/>
                                    </div>
                                    <div className="info pl-3">
                                        <h6 className="mb-0 title">النور پنا</h6>
                                        <small className="text-muted">شناسه فروشنده: #439</small>
                                    </div>
                                </a>
                            </td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ec8980898d82839ededcdedcac89948d819c8089c28f8381">[email&#160;protected]</a></td>
                            <td><span className="badge rounded-pill alert-success">فعال</span></td>
                            <td>08.07.2020</td>
                            <td className="text-end">
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </td>
                        </tr>
                        <tr>
                            <td width="40%">
                                <a href="#" className="itemside">
                                    <div className="left">
                                        <img src="/admin/imgs/people/avatar2.jpg" className="img-sm img-avatar" alt="Userpic"/>
                                    </div>
                                    <div className="info pl-3">
                                        <h6 className="mb-0 title">مری مونا</h6>
                                        <small className="text-muted">شناسه فروشنده: #129</small>
                                    </div>
                                </a>
                            </td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b5d8dadbd4d9dcc6d4f5d0cdd4d8c5d9d09bd6dad8">[email&#160;protected]</a></td>
                            <td><span className="badge rounded-pill alert-success">فعال</span></td>
                            <td>11.07.2020</td>
                            <td className="text-end">
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </td>
                        </tr>
                        <tr>
                            <td width="40%">
                                <a href="#" className="itemside">
                                    <div className="left">
                                        <img src="/admin/imgs/people/avatar3.jpg" className="img-sm img-avatar" alt="Userpic"/>
                                    </div>
                                    <div className="info pl-3">
                                        <h6 className="mb-0 title">جاناتان ایو</h6>
                                        <small className="text-muted">شناسه فروشنده: #400</small>
                                    </div>
                                </a>
                            </td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d1bca3bbbeb9bf91b4a9b0bca1bdb4ffb2bebc">[email&#160;protected]</a></td>
                            <td><span className="badge rounded-pill alert-success">فعال</span></td>
                            <td>08.07.2020</td>
                            <td className="text-end">
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </td>
                        </tr>
                        <tr>
                            <td width="40%">
                                <a href="#" className="itemside">
                                    <div className="left">
                                        <img src="/admin/imgs/people/avatar4.jpg" className="img-sm img-avatar" alt="Userpic"/>
                                    </div>
                                    <div className="info pl-3">
                                        <h6 className="mb-0 title">النور پنا</h6>
                                        <small className="text-muted">شناسه فروشنده: #439</small>
                                    </div>
                                </a>
                            </td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e7828b8286898895d5d7d5d7a7829f868a978b82c984888a">[email&#160;protected]</a></td>
                            <td><span className="badge rounded-pill alert-danger">غیرفعال</span></td>
                            <td>08.07.2020</td>
                            <td className="text-end">
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </td>
                        </tr>
                        <tr>
                            <td width="40%">
                                <a href="#" className="itemside">
                                    <div className="left">
                                        <img src="/admin/imgs/people/avatar1.jpg" className="img-sm img-avatar" alt="Userpic"/>
                                    </div>
                                    <div className="info pl-3">
                                        <h6 className="mb-0 title">آلبرت پوشکین</h6>
                                        <small className="text-muted">شناسه فروشنده: #439</small>
                                    </div>
                                </a>
                            </td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f784989a92989992b79a8e9a969e9bd994989a">[email&#160;protected]</a></td>
                            <td><span className="badge rounded-pill alert-success">فعال</span></td>
                            <td>20.11.2019</td>
                            <td className="text-end">
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </td>
                        </tr>
                        <tr>
                            <td width="40%">
                                <a href="#" className="itemside">
                                    <div className="left">
                                        <img src="/admin/imgs/people/avatar2.jpg" className="img-sm img-avatar" alt="Userpic"/>
                                    </div>
                                    <div className="info pl-3">
                                        <h6 className="mb-0 title">الکساندرا پنا</h6>
                                        <small className="text-muted">شناسه فروشنده: #439</small>
                                    </div>
                                </a>
                            </td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a4c1c8c1c5cacbd696949694e4c1dcc5c9d4c8c18ac7cbc9">[email&#160;protected]</a></td>
                            <td><span className="badge rounded-pill alert-danger">غیرفعال</span></td>
                            <td>08.07.2020</td>
                            <td className="text-end">
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </td>
                        </tr>
                        <tr>
                            <td width="40%">
                                <a href="#" className="itemside">
                                    <div className="left">
                                        <img src="/admin/imgs/people/avatar3.jpg" className="img-sm img-avatar" alt="Userpic"/>
                                    </div>
                                    <div className="info pl-3">
                                        <h6 className="mb-0 title">النور پنا</h6>
                                        <small className="text-muted">شناسه فروشنده: #439</small>
                                    </div>
                                </a>
                            </td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="1d7871787c73726f2f2d2f2d5d78657c706d7178337e7270">[email&#160;protected]</a></td>
                            <td><span className="badge rounded-pill alert-danger">غیرفعال</span></td>
                            <td>08.07.2020</td>
                            <td className="text-end">
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </td>
                        </tr>
                        <tr>
                            <td width="40%">
                                <a href="#" className="itemside">
                                    <div className="left">
                                        <img src="/admin/imgs/people/avatar4.jpg" className="img-sm img-avatar" alt="Userpic"/>
                                    </div>
                                    <div className="info pl-3">
                                        <h6 className="mb-0 title">الکس پوشکینا</h6>
                                        <small className="text-muted">شناسه فروشنده: #439</small>
                                    </div>
                                </a>
                            </td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="254449405d654248444c490b4a5742">[email&#160;protected]</a></td>
                            <td><span className="badge rounded-pill alert-success">فعال</span></td>
                            <td>08.07.2020</td>
                            <td className="text-end">
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </td>
                        </tr>
                        <tr>
                            <td width="40%">
                                <a href="#" className="itemside">
                                    <div className="left">
                                        <img src="/admin/imgs/people/avatar1.jpg" className="img-sm img-avatar" alt="Userpic"/>
                                    </div>
                                    <div className="info pl-3">
                                        <h6 className="mb-0 title">النور پنا</h6>
                                        <small className="text-muted">شناسه فروشنده: #439</small>
                                    </div>
                                </a>
                            </td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="086d646d6966677a3a383a38486d70696578646d266b6765">[email&#160;protected]</a></td>
                            <td><span className="badge rounded-pill alert-success">فعال</span></td>
                            <td>08.07.2020</td>
                            <td className="text-end">
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </td>
                        </tr>
                        <tr>
                            <td width="40%">
                                <a href="#" className="itemside">
                                    <div className="left">
                                        <img src="/admin/imgs/people/avatar2.jpg" className="img-sm img-avatar" alt="Userpic"/>
                                    </div>
                                    <div className="info pl-3">
                                        <h6 className="mb-0 title">النور پنا</h6>
                                        <small className="text-muted">شناسه فروشنده: #439</small>
                                    </div>
                                </a>
                            </td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="43262f26222d2c317173717303263b222e332f266d202c2e">[email&#160;protected]</a></td>
                            <td><span className="badge rounded-pill alert-success">فعال</span></td>
                            <td>08.07.2020</td>
                            <td className="text-end">
                                <a href="#" className="btn btn-sm btn-brand rounded font-sm mt-15">مشاهده جزئیات</a>
                            </td>
                        </tr>
                    </tbody>
                </table> 
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

export default adminCustomerPage