import React from 'react'

function AdminOrderPage() {
  return (
    <section className="content-main">
    <div className="content-header">
        <div>
            <h2 className="content-title card-title">لیست سفارشات</h2>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</p>
        </div>
        <div>
            <input type="text" placeholder="جستجوی شناسه سفارش" className="form-control bg-white"/>
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
                        <option>وضعیت</option>
                        <option>فعال</option>
                        <option>غیرفعال</option>
                        <option>نمایش همه</option>
                    </select>
                </div>
                <div className="col-lg-2 col-6 col-md-3">
                    <select className="form-select">
                        <option>نمایش 20</option>
                        <option>نمایش 30</option>
                        <option>نمایش 40</option>
                    </select>
                </div>
            </div>
        </header>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#شناسه</th>
                            <th scope="col">نام</th>
                            <th scope="col">ایمیل</th>
                            <th scope="col">مجموع</th>
                            <th scope="col">وضعیت</th>
                            <th scope="col">تاریخ</th>
                            <th scope="col" className="text-end">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0901</td>
                            <td><b>ماروین مک‌کینی</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ed808c9f9b8483ad88958c809d8188c38e8280">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>9.00</td>
                            <td><span className="badge rounded-pill alert-warning">در انتظار</span></td>
                            <td>03.12.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>2323</td>
                            <td><b>لزلی الکساندر</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7b171e0817121e3b1e031a160b171e55181416">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>46.61</td>
                            <td><span className="badge rounded-pill alert-warning">در انتظار</span></td>
                            <td>21.02.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>1233</td>
                            <td><b>استر هاوارد</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2a4f595e424f586a4f524b475a464f04494547">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>12.00</td>
                            <td><span className="badge rounded-pill alert-danger">لغو شده</span></td>
                            <td>03.07.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>1233</td>
                            <td><b>استر هاوارد</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="395c4a4d515c4b795c41585449555c175a5654">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>12.00</td>
                            <td><span className="badge rounded-pill alert-danger">لغو شده</span></td>
                            <td>03.07.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>2323</td>
                            <td><b>جنی ویلسون</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ff5faf1f1e6dffae7fef2eff3fab1fcf0f2">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>589.99</td>
                            <td><span className="badge rounded-pill alert-success">دریافت شده</span></td>
                            <td>22.05.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>2112</td>
                            <td><b>ماروین مک‌کینی</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6d000c1f1b04032d08150c001d0108430e0200">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>16.58</td>
                            <td><span className="badge rounded-pill alert-success">دریافت شده</span></td>
                            <td>23.04.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>7897</td>
                            <td><b>آلبرت فلورس</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="42232e2027303602273a232f322e276c212d2f">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>10.00</td>
                            <td><span className="badge rounded-pill alert-success">دریافت شده</span></td>
                            <td>13.03.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>2323</td>
                            <td><b>وید وارن</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4b3c2a2f2e0b2e332a263b272e65282426">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>105.55</td>
                            <td><span className="badge rounded-pill alert-success">دریافت شده</span></td>
                            <td>23.09.2019</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>2324</td>
                            <td><b>جین کوپر</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ddb7bcb3b89db8a5bcb0adb1b8f3beb2b0">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>710.68</td>
                            <td><span className="badge rounded-pill alert-success">دریافت شده</span></td>
                            <td>28.04.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>2325</td>
                            <td><b>ساوانا نگوین</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="30435146515e5e5158705548515d405c551e535f5d">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>710.68</td>
                            <td><span className="badge rounded-pill alert-success">دریافت شده</span></td>
                            <td>23.03.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>2326</td>
                            <td><b>گای هاوکینز</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ef9ebe7defbe6fff3eef2fbb0fdf1f3">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>767.50</td>
                            <td><span className="badge rounded-pill alert-success">دریافت شده</span></td>
                            <td>28.04.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>2327</td>
                            <td><b>دارل استوارد</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a4c0c5d6d6c1c8e4c1dcc5c9d4c8c18ac7cbc9">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>406.27</td>
                            <td><span className="badge rounded-pill alert-success">دریافت شده</span></td>
                            <td>14.07.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>2328</td>
                            <td><b>جین کوپر</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="85efe4ebe0c5e0fde4e8f5e9e0abe6eae8">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>601.13</td>
                            <td><span className="badge rounded-pill alert-success">دریافت شده</span></td>
                            <td>18.03.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>2329</td>
                            <td><b>دارلین رابرتسون</b></td>
                            <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="254140574c404b4065405d44485549400b464a48">[ایمیل&#160;محافظت‌شده]</a></td>
                            <td>948.55</td>
                            <td><span className="badge rounded-pill alert-success">دریافت شده</span></td>
                            <td>03.07.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <a href="#" className="btn btn-md rounded font-sm">جزئیات</a>
                                <div className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                        <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                        <a className="dropdown-item text-danger" href="#">حذف</a>
                                    </div>
                                </div> 
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

export default AdminOrderPage