import Link from 'next/link'
import React from 'react'

function adminReviewPage() {
  return (
    <section className="content-main">
    <div className="content-header">
        <div>
            <h2 className="content-title card-title">نظرات</h2>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</p>
        </div>
        <div>
            <input type="text" placeholder="جستجو بر اساس نام" className="form-control bg-white"/>
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
                            <th>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </th>
                            <th>#شناسه</th>
                            <th>محصول</th>
                            <th>نام</th>
                            <th>امتیاز</th>
                            <th>تاریخ</th>
                            <th className="text-end">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>23</td>
                            <td><b>لباس مینی آبی</b></td>
                            <td>دِوون لین</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"60%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>10.03.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>24</td>
                            <td><b>کیف زنانه مد</b></td>
                            <td>گای هاوکینز</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"80%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>04.12.2019</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>25</td>
                            <td><b>کفش ورزشی ایر جردن 1</b></td>
                            <td>ساوانا نگوین</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"90%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>25.05.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>26</td>
                            <td><b>سامسونگ گلکسی S20</b></td>
                            <td>کریستین واتسون</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"90%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>01.06.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>27</td>
                            <td><b>مک‌بوک پرو 16 اینچ (2020)</b></td>
                            <td>جین کوپر</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"100%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>13.03.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>28</td>
                            <td><b>صندلی بازی، فقط تحویل حضوری</b></td>
                            <td>کورتنی هنری</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"100%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>21.02.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>29</td>
                            <td><b>کیف کوچ تبی 26</b></td>
                            <td>رالف ادواردز</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"90%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>23.03.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>30</td>
                            <td><b>وان‌پلاس 7 پرو GM1910 256GB</b></td>
                            <td>کورتنی هنری</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"70%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>20.02.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>31</td>
                            <td><b>پهپاد DJI Mavic Pro 2</b></td>
                            <td>ترزا وب</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"20%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>10.03.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>32</td>
                            <td><b>مبل هایمر میلر (وضعیت عالی)</b></td>
                            <td>دارل استوارد</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"80%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>10.04.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>33</td>
                            <td><b>دل XPS 13 9380، 13.3" 4K UHD (3840X2160)</b></td>
                            <td>لزلی الکساندر</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"50%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>25.05.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>34</td>
                            <td><b>کیف زنانه مد</b></td>
                            <td>استر هاوارد</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"100%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>07.04.2020</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                </div>
                            </td>
                            <td>35</td>
                            <td><b>مدل آیپد پرو ۲۰۱۷</b></td>
                            <td>ساوانا نگوین</td>
                            <td>
                                <ul className="rating-stars">
                                    <li style={{width:"100%"}} className="stars-active">
                                        <img src="/admin/imgs/icons/stars-active.svg" alt="ستاره‌ها"/>
                                    </li>
                                    <li>
                                        <img src="/admin/imgs/icons/starts-disable.svg" alt="ستاره‌ها"/>
                                    </li>
                                </ul>
                            </td>
                            <td>10.10.2019</td>
                            <td className="text-end d-flex justify-content-end">
                                <Link href="#" className="btn btn-md rounded font-sm">جزئیات</Link>
                                <div className="dropdown">
                                    <Link href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm mx-2"> <i className="material-icons md-more_horiz"></i> </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="#">مشاهده جزئیات</Link>
                                        <Link className="dropdown-item" href="#">ویرایش اطلاعات</Link>
                                        <Link className="dropdown-item text-danger" href="#">حذف</Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div className="pagination-area mt-30 mb-50">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-start">
                <li className="page-item active"><Link className="page-link" href="#">01</Link></li>
                <li className="page-item"><Link className="page-link" href="#">02</Link></li>
                <li className="page-item"><Link className="page-link" href="#">03</Link></li>
                <li className="page-item"><Link className="page-link dot" href="#">...</Link></li>
                <li className="page-item"><Link className="page-link" href="#">16</Link></li>
                <li className="page-item"><Link className="page-link" href="#"><i className="material-icons md-chevron_left"></i></Link></li>
            </ul>
        </nav>
    </div>
</section>
  )
}

export default adminReviewPage