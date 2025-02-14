import React from 'react'

function Footer() {
  return (
    <footer className="main">
    <section className="newsletter bg-brand p-30 text-white wow fadeIn animated">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-md-3 mb-lg-0">
                    <div className="row align-items-center">
                        <div className="col flex-horizontal-center">
                            <img className="icon-email" src="/imgs/theme/icons/icon-email.svg" alt=""/>
                            <h4 className="font-size-20 mb-0 ml-3">عضویت در خبرنامه</h4>
                        </div>
                        <div className="col my-4 my-md-0">
                            <h5 className="font-size-15 ml-4 mb-0">...و دریافت <strong>کوپن ۲۵ دلاری برای اولین خرید.</strong></h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    {/* <!-- Subscribe Form --> */}
                    <form className="form-subcriber d-flex wow fadeIn animated">
                        <input type="email" className="form-control bg-white font-small" placeholder="ایمیل خود را وارد کنید"/>
                        <button className="btn bg-dark text-white" type="submit">اشتراک</button>
                    </form>
                    {/* <!-- End Subscribe Form --> */}
                </div>
            </div>
        </div>
    </section>
    <section className="section-padding-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="widget-about font-md mb-md-5 mb-lg-0">
                        <div className="logo logo-width-1 wow fadeIn animated">
                            <a href="index.html"><img src="/imgs/theme/logo-default.png" alt="logo"/></a>
                        </div>
                        <h4 className="mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated">تماس</h4>
                        <p className="wow fadeIn animated"><strong>آدرس: </strong>خیابان ولینگتون ۵۶۲، خیابان ۳۲، سان فرانسیسکو</p>
                        <p className="wow fadeIn animated"><strong>تلفن: </strong>+01 2222 365 /(+91) 01 2345 6789</p>
                        <p className="wow fadeIn animated"><strong>ساعات کاری: </strong>10:00 - 18:00, دوشنبه - شنبه</p>
                        <h4 className="mb-10 mt-20 fw-600 text-grey-4 wow fadeIn animated">ما را دنبال کنید</h4>
                        <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0">
                            <a className="facebook" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                                </svg>
                            </a>
                            <a className="twitter" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                </svg>
                            </a>
                            <a className="tumblr" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1 .8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5 .9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"></path>
                                </svg>
                            </a>
                            <a className="instagram" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3">
                    <h5 className="widget-title mb-30 wow fadeIn animated">درباره ما</h5>
                    <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">اطلاعات تحویل</a></li>
                        <li><a href="#">سیاست حفظ حریم خصوصی</a></li>
                        <li><a href="#">شرایط و ضوابط</a></li>
                        <li><a href="#">تماس با ما</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-3">
                    <h5 className="widget-title mb-30 wow fadeIn animated">حساب من</h5>
                    <ul className="footer-list wow fadeIn animated">
                        <li><a href="#">ورود</a></li>
                        <li><a href="#">مشاهده سبد خرید</a></li>
                        <li><a href="#">لیست علاقه‌مندی‌های من</a></li>
                        <li><a href="#">پیگیری سفارش من</a></li>
                        <li><a href="#">کمک</a></li>
                        <li><a href="#">سفارش</a></li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h5 className="widget-title mb-30 wow fadeIn animated">دانلود اپلیکیشن ما</h5>
                    <div className="row">
                        <div className="col-md-8 col-lg-12">
                            <p className="wow fadeIn animated">از اپ استور یا گوگل پلی</p>
                            <div className="download-app wow fadeIn animated">
                                <a href="#" className="hover-up mb-sm-4"><img src="/imgs/theme/app-store.jpg" alt=""/></a>
                                <a href="#" className="hover-up"><img src="/imgs/theme/google-play.jpg" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-12">
                            <p className="mb-20 wow fadeIn animated mt-md-3">درگاه‌های پرداخت امن</p>
                            <img className="wow fadeIn animated" src="/imgs/theme/payment-method.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="container pb-20 wow fadeIn animated">
        <div className="row">
            <div className="col-12 mb-20">
                <div className="footer-bottom"></div>
            </div>
            <div className="col-lg-6">
                <p className="float-md-left font-sm text-muted mb-0">&copy; 2024, <strong className="text-brand">Wowy</strong> - قالب HTML فروشگاهی</p>
            </div>
            <div className="col-lg-6">
                <p className="text-lg-end text-start font-sm text-muted mb-0">طراحی شده توسط محمد عموئی. کلیه حقوق محفوظ است.</p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer