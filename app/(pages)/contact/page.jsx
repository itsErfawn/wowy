import Link from 'next/link'
import React from 'react'

function contactPage() {
  return (
    <>
            <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="index.html" rel="nofollow">خانه</Link>
                        <span></span> صفحات <span></span> تماس با ما
                    </div>
                </div>
            </div>
            <section className="hero-2">
                <div className="hero-content">
                    <div className="container">
                        <div className="text-center">
                            <h4 className="text-brand mb-20">تماس بگیرید</h4>
                            <h1 className="mb-30 wow fadeIn animated font-xxl fw-900">بیایید درباره <br/>ایده <span className="text-style-1">شما</span> صحبت کنیم</h1>
                            <p className="w-50 m-auto mb-50 wow fadeIn animated">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            </p>
                            <p className="wow fadeIn animated">
                                <Link className="btn btn-brand btn-lg font-weight-bold text-white border-radius-5 btn-shadow-brand hover-up" href="page-about.html">درباره ما</Link>
                                <Link className="btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand bg-white text-hover-white ml-15 border-radius-5 btn-shadow-brand hover-up" href={'/'}>مرکز پشتیبانی</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-border pt-50 pb-50">
                <div className="container">
                    <div id="map-panes" className="leaflet-map mb-50"></div>
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <h4 className="mb-15 text-muted">دفتر وویی</h4>
                            205 خیابان میشیگان شمالی، سوئیت 810<br/>
                            شیکاگو، 60601، ایالات متحده<br/>
                            <abbr title="Phone">تلفن:</abbr> (123) 456-7890<br/>
                            <abbr title="Email">ایمیل: </abbr><Link href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a7c4c8c9d3c6c4d3e7f0c8d0de89c4c8ca">[ایمیل&#160;محافظت‌شده]</Link><br/>
                            <Link href={'/'} className="btn btn-outline btn-sm btn-brand-outline font-weight-bold text-brand bg-white text-hover-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i className="fa fa-map text-muted mr-15"></i>مشاهده نقشه</Link>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <h4 className="mb-15 text-muted">استودیو وویی</h4>
                            205 خیابان میشیگان شمالی، سوئیت 810<br/>
                            شیکاگو، 60601، ایالات متحده/<br/>
                            <abbr title="Phone">تلفن:</abbr> (123) 456-7890<br/>
                            <abbr title="Email">ایمیل: </abbr><Link href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="debdb1b0aabfbdaa9e89b1a9a7f0bdb1b3">[ایمیل&#160;محافظت‌شده]</Link><br/>
                            <Link href={'/'} className="btn btn-outline btn-sm btn-brand-outline font-weight-bold text-brand bg-white text-hover-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i className="fa fa-map text-muted mr-15"></i>مشاهده نقشه</Link>
                        </div>
                        <div className="col-md-4">
                            <h4 className="mb-15 text-muted">فروشگاه وویی</h4>
                            205 خیابان میشیگان شمالی، سوئیت 810<br/>
                            شیکاگو، 60601، ایالات متحده<br/>
                            <abbr title="Phone">تلفن:</abbr> (123) 456-7890<br/>
                            <abbr title="Email">ایمیل: </abbr><Link href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9af9f5f4eefbf9eedacdf5ede3b4f9f5f7">[ایمیل&#160;محافظت‌شده]</Link><br/>
                            <Link href={'/'} className="btn btn-outline btn-sm btn-brand-outline font-weight-bold text-brand bg-white text-hover-white mt-20 border-radius-5 btn-shadow-brand hover-up"> <i className="fa fa-map text-muted mr-15"></i> مشاهده نقشه</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-50 pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 m-auto">
                            <div className="contact-from-area padding-20-row-col wow tmFadeInUp">
                                <h3 className="mb-10 text-center">برای ما پیام بگذارید</h3>
                                <p className="text-muted mb-30 text-center font-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم.</p>
                                <form className="contact-form-style text-center" id="contact-form" action="#" method="post">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-style mb-20">
                                                <input name="name" placeholder="نام" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-style mb-20">
                                                <input name="email" placeholder="ایمیل شما" type="email"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-style mb-20">
                                                <input name="telephone" placeholder="تلفن شما" type="tel"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="input-style mb-20">
                                                <input name="subject" placeholder="موضوع" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="textarea-style mb-30">
                                                <textarea name="message" placeholder="پیام"></textarea>
                                            </div>
                                            <button className="submit submit-auto-width" type="submit">ارسال پیام</button>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-messege"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default contactPage