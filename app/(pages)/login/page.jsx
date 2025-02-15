import Link from 'next/link'
import React from 'react'

function loginPage() {
  return (
    <>
            <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="index.html" rel="nofollow">خانه</Link>
                        <span></span> صفحات <span></span> ورود / ثبت‌نام
                    </div>
                </div>
            </div>
            <section className="pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="login_wrap widget-taber-content p-30 background-white border-radius-10">
                                        <div className="padding_eight_all bg-white">
                                            <div className="heading_s1">
                                                <h3 className="mb-30">ورود</h3>
                                            </div>
                                            <form method="post">
                                                <div className="form-group">
                                                    <input type="text" required="" name="email" placeholder="ایمیل شما"/>
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="password" name="password" placeholder="رمز عبور"/>
                                                </div>
                                                <div className="login_footer form-group">
                                                    <div className="chek-form">
                                                        <div className="custome-checkbox">
                                                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value=""/>
                                                            <label className="form-check-label" htmlFor="exampleCheckbox1"><span>مرا به خاطر بسپار</span></label>
                                                        </div>
                                                    </div>
                                                    <Link className="text-muted" href="#">رمز عبور را فراموش کرده‌اید؟</Link>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-fill-out btn-block hover-up" name="login">ورود</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-6">
                                    <div className="login_wrap widget-taber-content p-30 background-white border-radius-5">
                                        <div className="padding_eight_all bg-white">
                                            <div className="heading_s1">
                                                <h3 className="mb-30">ایجاد حساب کاربری</h3>
                                            </div>
                                            <p className="mb-50 font-sm">اطلاعات شخصی شما برای پشتیبانی از تجربه شما در این وب‌سایت، مدیریت دسترسی به حساب کاربری شما و برای اهداف دیگر که در سیاست حفظ حریم خصوصی ما توضیح داده شده است، استفاده خواهد شد.</p>
                                            <form method="post">
                                                <div className="form-group">
                                                    <input type="text" required="" name="username" placeholder="نام کاربری"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" required="" name="email" placeholder="ایمیل"/>
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="password" name="password" placeholder="رمز عبور"/>
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="password" name="password" placeholder="تأیید رمز عبور"/>
                                                </div>
                                                <div className="login_footer form-group">
                                                    <div className="chek-form">
                                                        <div className="custome-checkbox">
                                                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" value=""/>
                                                            <label className="form-check-label" htmlFor="exampleCheckbox12"><span>با شرایط و سیاست‌ها موافقم.</span></label>
                                                        </div>
                                                    </div>
                                                    <Link href="page-privacy-policy.html"> <i className="far fa-clone mr-5 text-muted"></i> بیشتر بدانید</Link>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-fill-out btn-block hover-up" name="login">ارسال و ثبت‌نام</button>
                                                </div>
                                            </form>
                                            <div className="divider-text-center mt-15 mb-15">
                                                <span> یا</span>
                                            </div>
                                            <ul className="btn-login list_none text-center mb-15">
                                                <li>
                                                    <Link href="#" className="btn btn-facebook hover-up"><i className="fab fa-facebook-f mr-10"></i>فیس‌بوک</Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="btn btn-google hover-up"><i className="fab fa-google mr-10"></i>گوگل</Link>
                                                </li>
                                            </ul>
                                            <div className="text-muted text-center">قبلاً حساب کاربری دارید؟ <Link href="#">اکنون وارد شوید</Link></div>
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

export default loginPage