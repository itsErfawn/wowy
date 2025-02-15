import Link from 'next/link'
import React from 'react'

function accountPage() {
  return (
    <>
            <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="index.html" rel="nofollow">خانه</Link>
                        <span></span> صفحات <span></span> حساب کاربری
                    </div>
                </div>
            </div>
            <section className="pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="dashboard-menu">
                                        <ul className="nav flex-column" role="tablist">
                                            <li className="nav-item">
                                                <Link className="nav-link active" id="dashboard-tab" data-bs-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="false"><i className="fa fa-atom mr-15"></i>داشبورد</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="orders-tab" data-bs-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false"><i className="fa fa-shopping-basket mr-15"></i>سفارشات</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="track-orders-tab" data-bs-toggle="tab" href="#track-orders" role="tab" aria-controls="track-orders" aria-selected="false"><i className="fa fa-paper-plane mr-15"></i>پیگیری سفارش</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="address-tab" data-bs-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="true"><i className="fa fa-map-marked mr-15"></i>آدرس من</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" id="account-detail-tab" data-bs-toggle="tab" href="#account-detail" role="tab" aria-controls="account-detail" aria-selected="true"><i className="fa fa-user-edit mr-15"></i>جزئیات حساب کاربری</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="page-login-register.html"><i className="fa fa-lock mr-15"></i>خروج</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="tab-content dashboard-content">
                                        <div className="tab-pane fade active show" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0">سلام رایان!</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p>
                                                        از داشبورد حساب کاربری خود می‌توانید به راحتی <Link href="#">سفارشات اخیر</Link> خود را بررسی و مشاهده کنید، <Link href="#">آدرس‌های حمل و نقل و صورتحساب</Link> خود را مدیریت کنید و
                                                        <Link href="#">رمز عبور و جزئیات حساب کاربری خود را ویرایش کنید.</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0">سفارشات شما</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>سفارش</th>
                                                                    <th>تاریخ</th>
                                                                    <th>وضعیت</th>
                                                                    <th>مجموع</th>
                                                                    <th>اقدامات</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>#1357</td>
                                                                    <td>مارس 45, 2020</td>
                                                                    <td>در حال پردازش</td>
                                                                    <td>125.00 برای 2 آیتم</td>
                                                                    <td><Link href="#" className="btn-small d-block">مشاهده</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>#2468</td>
                                                                    <td>ژوئن 29, 2020</td>
                                                                    <td>تکمیل شده</td>
                                                                    <td>364.00 برای 5 آیتم</td>
                                                                    <td><Link href="#" className="btn-small d-block">مشاهده</Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>#2366</td>
                                                                    <td>اوت 02, 2020</td>
                                                                    <td>تکمیل شده</td>
                                                                    <td>280.00 برای 3 آیتم</td>
                                                                    <td><Link href="#" className="btn-small d-block">مشاهده</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="track-orders" role="tabpanel" aria-labelledby="track-orders-tab">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5 className="mb-0">پیگیری سفارشات</h5>
                                                </div>
                                                <div className="card-body contact-from-area">
                                                    <p>برای پیگیری سفارش خود، لطفاً شناسه سفارش خود را در کادر زیر وارد کرده و دکمه "پیگیری" را فشار دهید. این شناسه در رسید شما و در ایمیل تأییدیه‌ای که دریافت کرده‌اید، موجود است.</p>
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <form className="contact-form-style mt-30 mb-50" action="#" method="post">
                                                                <div className="input-style mb-20">
                                                                    <label>شناسه سفارش</label>
                                                                    <input name="order-id" placeholder="در ایمیل تأیید سفارش شما یافت می‌شود" type="text" className="square"/>
                                                                </div>
                                                                <div className="input-style mb-20">
                                                                    <label>ایمیل صورتحساب</label>
                                                                    <input name="billing-email" placeholder="ایمیلی که در هنگام پرداخت استفاده کرده‌اید" type="email" className="square"/>
                                                                </div>
                                                                <button className="submit submit-auto-width" type="submit">پیگیری</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="card mb-3 mb-lg-0">
                                                        <div className="card-header">
                                                            <h5 className="mb-0">آدرس صورتحساب</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <address>
                                                                3522 Interstate<br/>
                                                                75 Business Spur,<br/>
                                                                Sault Ste. <br/>Marie, MI 49783
                                                            </address>
                                                            <p>نیویورک</p>
                                                            <Link href="#" className="btn-small">ویرایش</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h5 className="mb-0">آدرس حمل و نقل</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <address>
                                                                4299 Express Lane<br/>
                                                                Sarasota, <br/>FL 34249 USA <br/>تلفن: 1.941.227.4444
                                                            </address>
                                                            <p>ساراسوتا</p>
                                                            <Link href="#" className="btn-small">ویرایش</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="account-detail" role="tabpanel" aria-labelledby="account-detail-tab">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>جزئیات حساب کاربری</h5>
                                                </div>
                                                <div className="card-body">
                                                    <p>قبلاً حساب کاربری دارید؟ <Link href="page-login-register.html">به جای آن وارد شوید!</Link></p>
                                                    <form method="post" name="enq">
                                                        <div className="row">
                                                            <div className="form-group col-md-6">
                                                                <label>نام <span className="required">*</span></label>
                                                                <input required="" className="form-control square" name="name" type="text"/>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label>نام خانوادگی <span className="required">*</span></label>
                                                                <input required="" className="form-control square" name="phone"/>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label>نام نمایشی <span className="required">*</span></label>
                                                                <input required="" className="form-control square" name="dname" type="text"/>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label>آدرس ایمیل <span className="required">*</span></label>
                                                                <input required="" className="form-control square" name="email" type="email"/>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label>رمز عبور فعلی <span className="required">*</span></label>
                                                                <input required="" className="form-control square" name="password" type="password"/>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label>رمز عبور جدید <span className="required">*</span></label>
                                                                <input required="" className="form-control square" name="npassword" type="password"/>
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label>تأیید رمز عبور <span className="required">*</span></label>
                                                                <input required="" className="form-control square" name="cpassword" type="password"/>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <button type="submit" className="btn btn-fill-out submit" name="submit" value="Submit">ذخیره</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default accountPage