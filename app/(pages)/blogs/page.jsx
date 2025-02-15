import Link from 'next/link'
import React from 'react'

function blogPage() {
  return (
    <>
            <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="index.html" rel="nofollow">خانه</Link>
                        <span></span> وبلاگ <span></span> موبایل
                    </div>
                </div>
            </div>
            <section className="mt-60 mb-60">
                <div className="container custom">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="single-header mb-80">
                                <h1 className="font-xxl text-brand">وبلاگ ما</h1>
                                <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                                    <span className="post-by">۳۲ زیرمجموعه</span>
                                    <span className="post-on has-dot">۱۰۲۰ هزار مقاله</span>
                                    <span className="time-reading has-dot">۴۸۰ نویسنده</span>
                                    <span className="hit-count has-dot">۲۹ میلیون بازدید</span>
                                </div>
                            </div>
                            <div className="loop-grid pr-30">
                                <div className="row">
                                    <div className="col-12">
                                        <article className="first-post mb-30 wow fadeIn animated hover-up">
                                            <div className="img-hover-slide position-relative overflow-hidden">
                                                <span className="top-right-icon bg-dark"><i className="far fa-bookmark"></i></span>
                                                <div className="post-thumb img-hover-scale">
                                                    <Link href="blog-post-right.html">
                                                        <img src="/imgs/blog/blog-1.jpg" alt=""/>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-meta meta-1 mb-30">
                                                    <Link className="entry-meta meta-0" href="blog-category-grid.html"><span className="post-in background4 text-brand font-xs">تلفن همراه</span></Link>
                                                    <div className="font-sm">
                                                        <span><span className="mr-10 text-muted"><i className="fa fa-eye" aria-hidden="true"></i></span>۲۳ هزار</span>
                                                        <span className="ml-30"><span className="mr-10 text-muted"><i className="fa fa-comment" aria-hidden="true"></i></span>۱۷ هزار</span>
                                                        <span className="ml-30"><span className="mr-10 text-muted"><i className="fa fa-share-alt" aria-hidden="true"></i></span>۱۸ هزار</span>
                                                    </div>
                                                </div>
                                                <h2 className="post-title mb-20">
                                                    <Link href="blog-post-right.html">استروئید کم‌هزینه اولین دارویی است که نشان داده شده مرگ و میر ویروس را کاهش می‌دهد، مطالعه می‌گوید</Link>
                                                </h2>
                                                <p className="post-exerpt font-medium text-muted mb-30">
                                                    این افراد به من حسادت می‌کنند که سبک زندگی‌ای دارم که آنها ندارند، اما حقیقت این است که گاهی اوقات من به سبک زندگی آنها حسادت می‌کنم. در حال تلاش برای فروش یک خانه چند میلیون دلاری هستم.
                                                </p>
                                                <div className="mb-20 entry-meta meta-2">
                                                    <div className="font-xs">
                                                        <span className="post-by">توسط <Link href="blog-category-grid.html">آزیمتو</Link></span>
                                                        <span className="post-on">۱۲/۰۷/۲۰۲۴ ۰۹:۳۵ EST</span>
                                                        <span className="time-reading">۸ دقیقه خواندن</span>
                                                        <p className="font-xs mt-5">به‌روزرسانی شده در ۱۸/۰۸/۲۰۲۴ ۰۷:۱۲ EST</p>
                                                    </div>
                                                    <div className="float-right">
                                                        <Link href="blog-post-right.html" className="read-more"><span className="mr-10"><i className="fa fa-thumbtack" aria-hidden="true"></i></span>اخبار داغ</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="wow fadeIn animated hover-up mb-30">
                                            <div className="post-thumb img-hover-scale">
                                                <Link href="blog-post-right.html">
                                                    <img src="/imgs/blog/blog-2.jpg" alt=""/>
                                                </Link>
                                                <div className="entry-meta">
                                                    <Link className="entry-meta meta-2" href="blog-category-grid.html">سیاست</Link>
                                                </div>
                                            </div>
                                            <div className="entry-content-2">
                                                <h3 className="post-title mb-15">
                                                    <Link href="blog-post-right.html">مدعیان روی صفحه نمایش بازیگر نیستند</Link>
                                                </h3>
                                                <p className="post-exerpt mb-30">این افراد به من حسادت می‌کنند که سبک زندگی‌ای دارم که آنها ندارند، اما حقیقت این است که گاهی اوقات من به سبک زندگی آنها حسادت می‌کنم. در حال تلاش برای فروش یک خانه چند میلیون دلاری هستم.</p>
                                                <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on"> <i className="far fa-clock"></i> ۲۵ آوریل ۲۰۲۴</span>
                                                        <span className="hit-count has-dot">۱۲۶ هزار بازدید</span>
                                                    </div>
                                                    <Link href="blog-post-right.html" className="text-brand">بیشتر بخوانید <i className="fa fa-arrow-left fw-300 text-brand ml-5"></i></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="wow fadeIn animated hover-up mb-30">
                                            <div className="post-thumb img-hover-scale">
                                                <Link href="blog-post-right.html">
                                                    <img src="/imgs/blog/blog-8.jpg" alt=""/>
                                                </Link>
                                                <div className="entry-meta">
                                                    <Link className="entry-meta meta-2" href="blog-category-grid.html">جهانی</Link>
                                                </div>
                                            </div>
                                            <div className="entry-content-2">
                                                <h3 className="post-title mb-15">
                                                    <Link href="blog-post-right.html">ویژگی‌های ضروری موسیقی بسیار موفق</Link>
                                                </h3>
                                                <p className="post-exerpt mb-30">فارغ‌التحصیلی از یک شتاب‌دهنده یا انکوباتور برتر می‌تواند به اندازه یک دیپلم دانشگاهی نخبه برای یک بنیان‌گذار استارتاپ تعیین‌کننده باشد. برنامه‌های فشرده، که...</p>
                                                <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on"> <i className="far fa-clock"></i> ۲۵ آوریل ۲۰۲۴</span>
                                                        <span className="hit-count has-dot">۱۲۶ هزار بازدید</span>
                                                    </div>
                                                    <Link href="blog-post-right.html" className="text-brand">بیشتر بخوانید <i className="fa fa-arrow-left fw-300 text-brand ml-5"></i></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="wow fadeIn animated hover-up mb-30">
                                            <div className="post-thumb img-hover-scale">
                                                <Link href="blog-post-right.html">
                                                    <img src="/imgs/blog/blog-3.jpg" alt=""/>
                                                </Link>
                                                <div className="entry-meta">
                                                    <Link className="entry-meta meta-2" href="blog-category-grid.html">ورزش</Link>
                                                </div>
                                            </div>
                                            <div className="entry-content-2">
                                                <h3 className="post-title mb-15">
                                                    <Link href="blog-post-right.html">۹ چیزی که درباره تراشیدن سرم دوست دارم</Link>
                                                </h3>
                                                <p className="post-exerpt mb-30">در جوایز امی، نمایش‌های تلویزیونی نوشته شده توسط افراد رنگین‌پوست نسبت به نمایش‌های ارائه شده توسط خالقان سفیدپوست پیشرفت کردند، در حالی که نمایش‌های تلویزیونی نوشته شده...</p>
                                                <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on"> <i className="far fa-clock"></i> ۲۵ آوریل ۲۰۲۴</span>
                                                        <span className="hit-count has-dot">۱۲۶ هزار بازدید</span>
                                                    </div>
                                                    <Link href="blog-post-right.html" className="text-brand">بیشتر بخوانید <i className="fa fa-arrow-left fw-300 text-brand ml-5"></i></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="wow fadeIn animated hover-up mb-30">
                                            <div className="post-thumb img-hover-scale">
                                                <Link href="blog-post-right.html">
                                                    <img src="/imgs/blog/blog-4.jpg" alt=""/>
                                                </Link>
                                                <div className="entry-meta">
                                                    <Link className="entry-meta meta-2" href="blog-category-grid.html">فناوری</Link>
                                                </div>
                                            </div>
                                            <div className="entry-content-2">
                                                <h3 className="post-title mb-15">
                                                    <Link href="blog-post-right.html">چرا کار تیمی واقعاً رویا را به واقعیت تبدیل می‌کند</Link>
                                                </h3>
                                                <p className="post-exerpt mb-30">ما در دنیایی زندگی می‌کنیم که در آن اختلال و پویایی حاکم است و کسب‌وکارها باید آماده باشند تا با تغییرات غیرقابل پیش‌بینی که با آن همراه است سازگار شوند.</p>
                                                <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on"> <i className="far fa-clock"></i> ۲۵ آوریل ۲۰۲۴</span>
                                                        <span className="hit-count has-dot">۱۲۶ هزار بازدید</span>
                                                    </div>
                                                    <Link href="blog-post-right.html" className="text-brand">بیشتر بخوانید <i className="fa fa-arrow-left fw-300 text-brand ml-5"></i></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="wow fadeIn animated hover-up mb-30">
                                            <div className="post-thumb img-hover-scale">
                                                <Link href="blog-post-right.html">
                                                    <img src="/imgs/blog/blog-5.jpg" alt=""/>
                                                </Link>
                                                <div className="entry-meta">
                                                    <Link className="entry-meta meta-2" href="blog-category-grid.html">ساعت</Link>
                                                </div>
                                            </div>
                                            <div className="entry-content-2">
                                                <h3 className="post-title mb-15">
                                                    <Link href="blog-post-right.html">جهان به افراد متوسط توجه می‌کند</Link>
                                                </h3>
                                                <p className="post-exerpt mb-30">این افراد به من حسادت می‌کنند که سبک زندگی‌ای دارم که آنها ندارند، اما حقیقت این است که گاهی اوقات من به سبک زندگی آنها حسادت می‌کنم. در حال تلاش برای فروش یک خانه چند میلیون دلاری هستم.</p>
                                                <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on"> <i className="far fa-clock"></i> ۲۵ آوریل ۲۰۲۴</span>
                                                        <span className="hit-count has-dot">۱۲۶ هزار بازدید</span>
                                                    </div>
                                                    <Link href="blog-post-right.html" className="text-brand">بیشتر بخوانید <i className="fa fa-arrow-left fw-300 text-brand ml-5"></i></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6">
                                        <article className="wow fadeIn animated hover-up mb-30">
                                            <div className="post-thumb img-hover-scale">
                                                <Link href="blog-post-right.html">
                                                    <img src="/imgs/blog/blog-9.jpg" alt=""/>
                                                </Link>
                                                <div className="entry-meta">
                                                    <Link className="entry-meta meta-2" href="blog-category-grid.html">سیاست</Link>
                                                </div>
                                            </div>
                                            <div className="entry-content-2">
                                                <h3 className="post-title mb-15">
                                                    <Link href="blog-post-right.html">ویژگی‌های ضروری موسیقی بسیار موفق</Link>
                                                </h3>
                                                <p className="post-exerpt mb-30">فارغ‌التحصیلی از یک شتاب‌دهنده یا انکوباتور برتر می‌تواند به اندازه یک دیپلم دانشگاهی نخبه برای یک بنیان‌گذار استارتاپ تعیین‌کننده باشد. برنامه‌های فشرده، که...</p>
                                                <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                                                    <div>
                                                        <span className="post-on"> <i className="far fa-clock"></i> ۲۵ آوریل ۲۰۲۴</span>
                                                        <span className="hit-count has-dot">۱۲۶ هزار بازدید</span>
                                                    </div>
                                                    <Link href="blog-post-right.html" className="text-brand">بیشتر بخوانید <i className="fa fa-arrow-left fw-300 text-brand ml-5"></i></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            {/* <!--post-grid--> */}
                            <div className="pagination-area mt-15 mb-md-5 mb-lg-0">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item active"><Link className="page-link" href="#">۰۱</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">۰۲</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">۰۳</Link></li>
                                        <li className="page-item"><Link className="page-link dot" href="#">...</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">۱۶</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" href="#"><i className="fa fa-angle-left"></i> </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3 primary-sidebar sticky-sidebar">
                            <div className="widget-area">
                                <div className="sidebar-widget widget_search mb-50">
                                    <div className="widget-header position-relative mb-20 pb-10">
                                        <h5 className="widget-title">جستجو</h5>
                                    </div>
                                    <div className="search-form">
                                        <form action="#">
                                            <input type="text" placeholder="جستجو…"/>
                                            <button type="submit"><i className="far fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                {/* <!--Widget categories--> */}
                                <div className="sidebar-widget widget_categories mb-50">
                                    <div className="widget-header position-relative mb-20 pb-10">
                                        <h5 className="widget-title">دسته‌بندی‌ها</h5>
                                    </div>
                                    <div className="post-block-list post-module-1 post-module-5">
                                        <ul>
                                            <li className="cat-item cat-item-2"><Link href="blog-category-list.html">زیبایی</Link> (۳)</li>
                                            <li className="cat-item cat-item-3"><Link href="blog-category-list.html">کتاب</Link> (۶)</li>
                                            <li className="cat-item cat-item-4"><Link href="blog-category-list.html">طراحی</Link> (۴)</li>
                                            <li className="cat-item cat-item-5"><Link href="blog-category-list.html">مد</Link> (۳)</li>
                                            <li className="cat-item cat-item-6"><Link href="blog-category-list.html">سبک زندگی</Link> (۶)</li>
                                            <li className="cat-item cat-item-7"><Link href="blog-category-list.html">سفر</Link> (۲)</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!--Widget social--> */}
                                <div className="sidebar-widget widget-social-network mb-50">
                                    <div className="widget-header position-relative mb-20 pb-10">
                                        <h5 className="widget-title">ما را دنبال کنید</h5>
                                    </div>
                                    <div className="social-network">
                                        <div className="follow-us d-flex align-items-center">
                                            <Link className="follow-us-facebook clearfix mr-5 mb-10" href="#" target="_blank">
                                                <div className="social-icon">
                                                    <span className="mr-5 line-right">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span className="social-name">فیسبوک</span>
                                                <span className="social-count count">۶۵</span><span className="social-count">K</span>
                                            </Link>
                                            <Link className="follow-us-twitter clearfix ml-5 mb-10" href="#" target="_blank">
                                                <span className="social-icon">
                                                    <span className="mr-5 line-right">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span className="social-name">توییتر</span>
                                                <span className="social-count count">۷۵</span><span className="social-count">K</span>
                                            </Link>
                                        </div>
                                        <div className="follow-us d-flex align-items-center">
                                            <Link className="follow-us-instagram clearfix mr-5" href="#" target="_blank">
                                                <div className="social-icon">
                                                    <span className="mr-5 line-right">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span className="social-name">اینستاگرام</span>
                                                <span className="social-count count">۳۲</span><span className="social-count">K</span>
                                            </Link>
                                            <Link className="follow-us-youtube clearfix ml-5" href="#" target="_blank">
                                                <div className="social-icon">
                                                    <span className="mr-5 line-right">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span className="social-name">یوتیوب</span>
                                                <span className="social-count count">۲۸</span><span className="social-count">K</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--ویجت آخرین پست‌ها سبک ۱--> */}
                                <div className="sidebar-widget widget_alitheme_lastpost mb-50">
                                    <div className="widget-header position-relative mb-20 pb-10">
                                        <h5 className="widget-title">آخرین پست‌ها</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                                <Link href="blog-details.html">
                                                    <img src="/imgs/blog/blog-1.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row">مدعیان روی صفحه نمایش بازیگر نیستند</h6>
                                                <h6 className="post-title mb-10 text-limit-2-row">مدعیان روی صفحه نمایش بازیگر نیستند</h6>
                                                <div className="entry-meta meta-1 font-xxs color-grey">
                                                    <span className="post-on">۲۵ آوریل</span>
                                                    <span className="hit-count has-dot">۱۲۶هزار بازدید</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                                <Link href="blog-details.html">
                                                    <img src="/imgs/blog/blog-2.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row">۶ راه برای بهبود فوری طراحی رابط کاربری شما.</h6>
                                                <div className="entry-meta meta-1 font-xxs color-grey mt-10">
                                                    <span className="post-on">۲۵ آوریل</span>
                                                    <span className="hit-count has-dot">۱۲۶هزار بازدید</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                                <Link href="blog-details.html">
                                                    <img src="/imgs/blog/blog-3.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row">همکاری واتر با راگ و بون برای مصرف</h6>
                                                <div className="entry-meta meta-1 font-xxs color-grey">
                                                    <span className="post-on">۲۵ آوریل</span>
                                                    <span className="hit-count has-dot">۱۲۶هزار بازدید</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                                <Link href="blog-details.html">
                                                    <img src="/imgs/blog/blog-4.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row">این ضرر چندان تعجب‌آور نیست</h6>
                                                <div className="entry-meta meta-1 font-xxs color-grey mt-10">
                                                    <span className="post-on">۲۵ آوریل</span>
                                                    <span className="hit-count has-dot">۱۲۶هزار بازدید</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 sm-grid-content">
                                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                                <Link href="blog-details.html">
                                                    <img src="/imgs/blog/blog-5.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row">ما حق داریم یک دعوای کوچک راه بیندازیم، بونانزا</h6>
                                                <div className="entry-meta meta-1 font-xxs color-grey mt-10">
                                                    <span className="post-on">۲۵ آوریل</span>
                                                    <span className="hit-count has-dot">۱۲۶هزار بازدید</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 sm-grid-content">
                                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                                <Link href="blog-details.html">
                                                    <img src="/imgs/blog/blog-6.jpg" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row">آزمون ورودی من روی یک کتاب کبریت بود</h6>
                                                <div className="entry-meta meta-1 font-xxs color-grey mt-10">
                                                    <span className="post-on">۲۵ آوریل</span>
                                                    <span className="hit-count has-dot">۱۲۶هزار بازدید</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--ویجت برچسب‌ها--> */}
                                <div className="sidebar-widget widget_tags mb-50">
                                    <div className="widget-header position-relative mb-20 pb-10">
                                        <h5 className="widget-title">برچسب‌های محبوب</h5>
                                    </div>
                                    <div className="tagcloud">
                                        <Link className="tag-cloud-link" href="blog-category-grid.html">زیبا</Link>
                                        <Link className="tag-cloud-link" href="blog-category-grid.html">نیویورک</Link>
                                        <Link className="tag-cloud-link" href="blog-category-grid.html">خنده‌دار</Link>
                                        <Link className="tag-cloud-link" href="blog-category-grid.html">صمیمی</Link>
                                        <Link className="tag-cloud-link" href="blog-category-grid.html">دوست‌داشتنی</Link>
                                        <Link className="tag-cloud-link" href="blog-category-grid.html">سفر</Link>
                                        <Link className="tag-cloud-link" href="blog-category-grid.html">مبارزه</Link>
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

export default blogPage