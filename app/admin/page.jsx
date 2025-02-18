import React from 'react'

function adminHome() {
  return (
    <>
        


        <section className="content-main">
            <div className="content-header">
                <div>
                    <h2 className="content-title card-title">داشبورد</h2>
                    <p>تمامی اطلاعات کسب و کار شما در اینجا</p>
                </div>
                <div>
                    <a href="#" className="btn btn-primary"><i className="text-muted material-icons md-post_add"></i>ایجاد گزارش</a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-primary-light"><i className="text-primary material-icons md-monetization_on"></i></span>
                            <div className="text">
                                <h6 className="mb-1 card-title">درآمد</h6>
                                <span>۱۳,۴۵۶.۵ دلار</span>
                                <span className="text-sm">
                                    هزینه‌های حمل و نقل شامل نمی‌شود
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-success-light"><i className="text-success material-icons md-local_shipping"></i></span>
                            <div className="text">
                                <h6 className="mb-1 card-title">سفارشات</h6> <span>۵۳.۶۶۸</span>
                                <span className="text-sm">
                                    به جز سفارشات در حال حمل
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-warning-light"><i className="text-warning material-icons md-qr_code"></i></span>
                            <div className="text">
                                <h6 className="mb-1 card-title">محصولات</h6> <span>۹.۸۵۶</span>
                                <span className="text-sm">
                                    در ۱۹ دسته‌بندی
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-body mb-4">
                        <article className="icontext">
                            <span className="icon icon-sm rounded-circle bg-info-light"><i className="text-info material-icons md-shopping_basket"></i></span>
                            <div className="text">
                                <h6 className="mb-1 card-title">درآمد ماهانه</h6> <span>۶,۹۸۲ دلار</span>
                                <span className="text-sm">
                                    بر اساس زمان محلی شما.
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-8 col-lg-12">
                    <div className="card mb-4">
                        <article className="card-body">
                            <h5 className="card-title">آمار فروش</h5>
                            <canvas id="myChart" height="120px"></canvas>
                        </article>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="card mb-4">
                                <article className="card-body">
                                    <h5 className="card-title">اعضای جدید</h5>
                                    <div className="new-member-list">
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img src="/admin/imgs/people/avatar4.jpg" alt="" className="avatar"/>
                                                <div>
                                                    <h6>پاتریک آدامز</h6>
                                                    <p className="text-muted font-xs">
                                                        سانفرانسیسکو
                                                    </p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-xs"><i className="material-icons md-add"></i> افزودن</a>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img src="/admin/imgs/people/avatar2.jpg" alt="" className="avatar"/>
                                                <div>
                                                    <h6>دیلان اسپکتر</h6>
                                                    <p className="text-muted font-xs">
                                                        سانفرانسیسکو
                                                    </p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-xs"><i className="material-icons md-add"></i> افزودن</a>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="d-flex align-items-center">
                                                <img src="/admin/imgs/people/avatar3.jpg" alt="" className="avatar"/>
                                                <div>
                                                    <h6>توماس بیکر</h6>
                                                    <p className="text-muted font-xs">
                                                        سانفرانسیسکو
                                                    </p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-xs"><i className="material-icons md-add"></i> افزودن</a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="card mb-4">
                                <article className="card-body">
                                    <h5 className="card-title">فعالیت‌های اخیر</h5>
                                    <ul className="verti-timeline list-unstyled font-sm">
                                        <li className="event-list">
                                            <div className="event-timeline-dot">
                                                <i className="material-icons md-play_circle_outline font-xxl"></i>
                                            </div>
                                            <div className="media">
                                                <div className="me-3">
                                                    <h6><span>امروز</span> <i className="material-icons md-west text-brand ml-15 d-inline-block"></i></h6>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="event-list active">
                                            <div className="event-timeline-dot">
                                                <i className="material-icons md-play_circle_outline font-xxl animation-fade-right"></i>
                                            </div>
                                            <div className="media">
                                                <div className="me-3">
                                                    <h6><span>۱۷ مه</span> <i className="material-icons md-west text-brand ml-15 d-inline-block"></i></h6>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        دبیات نسچونت ولپتاتوم دیکتا رپرهندرایت
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="event-list">
                                            <div className="event-timeline-dot">
                                                <i className="material-icons md-play_circle_outline font-xxl"></i>
                                            </div>
                                            <div className="media">
                                                <div className="me-3">
                                                    <h6><span>۱۳ مه</span> <i className="material-icons md-west text-brand ml-15 d-inline-block"></i></h6>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        اکسوساموس ولپتاتیبوس ولپتاس.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="event-list">
                                            <div className="event-timeline-dot">
                                                <i className="material-icons md-play_circle_outline font-xxl"></i>
                                            </div>
                                            <div className="media">
                                                <div className="me-3">
                                                    <h6><span>۰۵ آوریل</span> <i className="material-icons md-west text-brand ml-15 d-inline-block"></i></h6>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        ات ورو ایوس ات اکسوساموس ات ایوستو اودیو دیگنیسی
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="event-list">
                                            <div className="event-timeline-dot">
                                                <i className="material-icons md-play_circle_outline font-xxl"></i>
                                            </div>
                                            <div className="media">
                                                <div className="me-3">
                                                    <h6><span>۲۶ مارس</span> <i className="material-icons md-west text-brand ml-15 d-inline-block"></i></h6>
                                                </div>
                                                <div className="media-body">
                                                    <div>
                                                        پاسخ به نیاز "فعالیت‌های داوطلبانه"
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-12">
                    <div className="card mb-4">
                        <article className="card-body">
                            <h5 className="card-title">درآمد بر اساس منطقه</h5>
                            <canvas id="myChart2" height="217"></canvas>
                        </article>
                    </div>
                    <div className="card mb-4">
                        <article className="card-body">
                            <h5 className="card-title">کانال بازاریابی</h5>
                            <span className="text-muted font-xs">فیسبوک</span>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width:"15%"}}>15%</div>
                            </div>
                            <span className="text-muted font-xs">اینستاگرام</span>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width:"65%"}}>65% </div>
                            </div>
                            <span className="text-muted font-xs">گوگل</span>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width:"51%"}}> 51% </div>
                            </div>
                            <span className="text-muted font-xs">توییتر</span>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width:"80%"}}> 80%</div>
                            </div>
                            <span className="text-muted font-xs">سایر</span>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width:"80%"}}> 80%</div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className="card mb-4">
                <header className="card-header">
                    <h4 className="card-title">آخرین سفارشات</h4>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
                            <div className="custom_select">
                                <select className="form-select select-nice">
                                    <option >همه دسته‌بندی‌ها</option>
                                    <option>لباس زنانه</option>
                                    <option>لباس مردانه</option>
                                    <option>تلفن همراه</option>
                                    <option>کامپیوتر و لوازم جانبی</option>
                                    <option>لوازم الکترونیکی مصرفی</option>
                                    <option>جواهرات و لوازم جانبی</option>
                                    <option>خانه و باغ</option>
                                    <option>چمدان و کیف</option>
                                    <option>کفش</option>
                                    <option>مادر و کودک</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <input type="date" defaultValue="02.05.2021" className="form-control"/>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="custom_select">
                                <select className="form-select select-nice">
                                    <option >وضعیت</option>
                                    <option>همه</option>
                                    <option>پرداخت شده</option>
                                    <option>برگشت وجه</option>
                                    <option>بازپرداخت</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="card-body">
                    <div className="table-responsive">
                        <div className="table-responsive">
                            <table className="table align-middle table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col" className="text-center">
                                            <div className="form-check align-middle">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck01"/>
                                                <label className="form-check-label" htmlFor="transactionCheck01"></label>
                                            </div>
                                        </th>
                                        <th className="align-middle" scope="col">شناسه سفارش</th>
                                        <th className="align-middle" scope="col">نام پرداخت کننده</th>
                                        <th className="align-middle" scope="col">تاریخ</th>
                                        <th className="align-middle" scope="col">مجموع</th>
                                        <th className="align-middle" scope="col">وضعیت پرداخت</th>
                                        <th className="align-middle" scope="col">روش پرداخت</th>
                                        <th className="align-middle" scope="col">مشاهده جزئیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck02"/>
                                                <label className="form-check-label" htmlFor="transactionCheck02"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2540</a> </td>
                                        <td>نیل متیوز</td>
                                        <td>
                                            07 اکتبر، 2021
                                        </td>
                                        <td>
                                            $400
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success">پرداخت شده</span>
                                        </td>
                                        <td>
                                            <i className="material-icons md-payment font-xxl text-muted mr-5"></i> مسترکارت
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> مشاهده جزئیات</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck03"/>
                                                <label className="form-check-label" htmlFor="transactionCheck03"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2541</a> </td>
                                        <td>جمال برنت</td>
                                        <td>
                                            07 اکتبر، 2021
                                        </td>
                                        <td>
                                            $380
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-danger">برگشت وجه</span>
                                        </td>
                                        <td>
                                            <i className="material-icons md-payment font-xxl text-muted mr-5"></i> ویزا
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> مشاهده جزئیات</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck04"/>
                                                <label className="form-check-label" htmlFor="transactionCheck04"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2542</a> </td>
                                        <td>خوان میچل</td>
                                        <td>
                                            06 اکتبر، 2021
                                        </td>
                                        <td>
                                            $384
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success">پرداخت شده</span>
                                        </td>
                                        <td>
                                            <i className="material-icons md-payment font-xxl text-muted mr-5"></i> پی پال
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> مشاهده جزئیات</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck05"/>
                                                <label className="form-check-label" htmlFor="transactionCheck05"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2543</a> </td>
                                        <td>بری دیک</td>
                                        <td>
                                            05 اکتبر، 2021
                                        </td>
                                        <td>
                                            $412
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success">پرداخت شده</span>
                                        </td>
                                        <td>
                                            <i className="material-icons md-payment font-xxl text-muted mr-5"></i> مسترکارت
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> مشاهده جزئیات</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck06"/>
                                                <label className="form-check-label" htmlFor="transactionCheck06"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2544</a> </td>
                                        <td>رونالد تیلور</td>
                                        <td>
                                            04 اکتبر، 2021
                                        </td>
                                        <td>
                                            $404
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-warning">بازپرداخت</span>
                                        </td>
                                        <td>
                                            <i className="material-icons md-payment font-xxl text-muted mr-5"></i> ویزا
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> مشاهده جزئیات</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="transactionCheck07"/>
                                                <label className="form-check-label" htmlFor="transactionCheck07"></label>
                                            </div>
                                        </td>
                                        <td><a href="#" className="fw-bold">#SK2545</a> </td>
                                        <td>جیکوب هانتر</td>
                                        <td>
                                            04 اکتبر، 2021
                                        </td>
                                        <td>
                                            $392
                                        </td>
                                        <td>
                                            <span className="badge badge-pill badge-soft-success">پرداخت شده</span>
                                        </td>
                                        <td>
                                            <i className="material-icons md-payment font-xxl text-muted mr-5"></i> پی پال
                                        </td>
                                        <td>
                                            <a href="#" className="btn btn-xs"> مشاهده جزئیات</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
        <footer className="main-footer font-xs">
            <div className="row pt-15">
                <div className="col-sm-6">
                </div>
                <div className="col-sm-6">
                    <div className="text-sm-end">
                        کلیه حقوق محفوظ است
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default adminHome