import React from 'react'

function transactionsPage() {
  return (
    <section className="content-main">
    <div className="content-header">
        <h2 className="content-title">تراکنش‌ها</h2>
    </div>
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-lg-9">
                    <header className="border-bottom mb-4 pb-4">
                        <div className="row">
                            <div className="col-lg-5 col-6 me-auto">
                                <input type="text" placeholder="جستجو..." className="form-control"/>
                            </div>
                            <div className="col-lg-2 col-6">
                                <select className="form-select">
                                    <option>روش</option>
                                    <option>مستر کارت</option>
                                    <option>ویزا کارت</option>
                                    <option>پی‌پال</option>
                                </select>
                            </div>
                        </div>
                    </header> 
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>شناسه تراکنش</th>
                                    <th>پرداخت شده</th>
                                    <th>روش</th>
                                    <th>تاریخ</th>
                                    <th className="text-end">عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>#456667</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/1.png" alt="پرداخت"/>
                                            <span className="text text-muted">امریکن اکسپرس</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#134768</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/2.png" alt="پرداخت"/>
                                            <span className="text text-muted">مستر کارت</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#134768</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/3.png" alt="پرداخت"/>
                                            <span className="text text-muted">پی‌پال</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#134768</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/4.png" alt="پرداخت"/>
                                            <span className="text text-muted">ویزا</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#887780</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/4.png" alt="پرداخت"/>
                                            <span className="text text-muted">ویزا</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#344556</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/4.png" alt="پرداخت"/>
                                            <span className="text text-muted">ویزا</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#134768</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/2.png" alt="پرداخت"/>
                                            <span className="text text-muted">مستر کارت</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#134768</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/2.png" alt="پرداخت"/>
                                            <span className="text text-muted">مستر کارت</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#998784</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/3.png" alt="پرداخت"/>
                                            <span className="text text-muted">پی‌پال</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#556667</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/3.png" alt="پرداخت"/>
                                            <span className="text text-muted">پی‌پال</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#098989</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/3.png" alt="پرداخت"/>
                                            <span className="text text-muted">پی‌پال</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>#134768</b></td>
                                    <td>294,000 تومان</td>
                                    <td>
                                        <div className="icontext">
                                            <img className="icon border" src="/admin/imgs/card-brands/4.png" alt="پرداخت"/>
                                            <span className="text text-muted">ویزا</span>
                                        </div>
                                    </td>
                                    <td>16.12.2020, 14:21</td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-sm btn-light font-sm rounded">جزئیات</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
                <aside className="col-lg-3">
                    <div className="box bg-light" style={{minHeight:"80%"}}>
                        <h6 className="mt-15">جزئیات تراکنش</h6>
                        <hr/>
                        <h6 className="mb-0">تامین کننده:</h6>
                        <p>تمپلیت‌مانت</p><br/>
                        <h6 className="mb-0">تاریخ:</h6>
                        <p>19 دسامبر 2020</p><br/>
                        <h6 className="mb-0">آدرس صورتحساب</h6>
                        <p>هاوایی، شایلو، 1901 تورنریج سیر، 81063</p><br/>
                        <h6 className="mb-0">شناسه مالیات بر ارزش افزوده:</h6>
                        <p>54741654160</p><br/>
                        <h6 className="mb-0">ایمیل:</h6>
                        <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="582b2d2828372a2c183d20393528343d763b3735">[ایمیل&#160;محافظت‌شده]</a></p><br/>
                        <h6 className="mb-0">محصول خریداری شده:</h6><br/>
                        <p>
                            <a href="#"> آدیداس ایر جردن <i className="icons material-icons md-launch"></i> </a>
                            <br/>
                            <a href="#"> محصول عالی <i className="icons material-icons md-launch"></i> </a>
                        </p>
                        <br/>
                        <p>پرداخت: پی‌پال</p>
                        <p className="h4">457,014 تومان</p>
                        <hr/>
                        <a className="btn btn-light" href="#"> دانلود رسید </a>
                    </div>
                </aside>
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

export default transactionsPage