import Link from 'next/link'
import React from 'react'

function cartPage() {
  return (
    <>
            <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="index.html" rel="nofollow">خانه</Link>
                        <span></span> فروشگاه <span></span> سبد خرید شما
                    </div>
                </div>
            </div>
            <section className="mt-60 mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table shopping-summery text-center clean">
                                    <thead>
                                        <tr className="main-heading">
                                            <th scope="col">تصویر</th>
                                            <th scope="col">نام</th>
                                            <th scope="col">قیمت</th>
                                            <th scope="col">تعداد</th>
                                            <th scope="col">جمع جزء</th>
                                            <th scope="col">حذف</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="image product-thumbnail"><img src="/imgs/shop/product-1-2.jpg" alt="#"/></td>
                                            <td className="product-des product-name">
                                                <p className="product-name"><Link href="shop-product-right.html">تی‌شرت آستین کوتاه زنانه جی.کرو مرکنتایل</Link></p>
                                                <p className="font-xs">
                                                    مابوریوسام در یک تونو نسکیونگ<br/>
                                                    مگنداپیبوس متمایز.
                                                </p>
                                            </td>
                                            <td className="price" data-title="Price"><span>65,000 تومان</span></td>
                                            <td className="text-center" data-title="Stock">
                                                <div className="detail-qty border radius m-auto">
                                                    <Link href="#" className="qty-down"><i className="fa fa-caret-down" aria-hidden="true"></i></Link>
                                                    <span className="qty-val">1</span>
                                                    <Link href="#" className="qty-up"><i className="fa fa-caret-up" aria-hidden="true"></i></Link>
                                                </div>
                                            </td>
                                            <td className="text-right" data-title="Cart">
                                                <span>65,000 تومان</span>
                                            </td>
                                            <td className="action" data-title="Remove">
                                                <Link href="#" className="text-muted"><i className="fa fa-trash-alt"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="image"><img src="/imgs/shop/product-11-2.jpg" alt="#"/></td>
                                            <td className="product-des">
                                                <p className="product-name"><Link href="shop-product-right.html">تاپ زنانه آمازون اسنشیالز</Link></p>
                                                <p className="font-xs">
                                                    نشستن در عشق و علاقه به یادگیری,<br/>
                                                    بلکه عشق و علاقه به یادگیری و پیشرفت
                                                </p>
                                            </td>
                                            <td className="price" data-title="Price"><span>75,000 تومان</span></td>
                                            <td className="text-center" data-title="Stock">
                                                <div className="detail-qty border radius m-auto">
                                                    <Link href="#" className="qty-down"><i className="fa fa-caret-down" aria-hidden="true"></i></Link>
                                                    <span className="qty-val">2</span>
                                                    <Link href="#" className="qty-up"><i className="fa fa-caret-up" aria-hidden="true"></i></Link>
                                                </div>
                                            </td>
                                            <td className="text-right" data-title="Cart">
                                                <span>150,000 تومان</span>
                                            </td>
                                            <td className="action" data-title="Remove">
                                                <Link href="#" className="text-muted"><i className="fa fa-trash-alt"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="image"><img src="/imgs/shop/product-6-1.jpg" alt="#"/></td>
                                            <td className="product-des">
                                                <p className="product-name"><Link href="shop-product-right.html">برند آمازون - تی‌شرت زنانه دیلی ریتوال</Link></p>
                                                <p className="font-xs">
                                                    در جای خود و در جای خود الماس و در جای خود.<br/>
                                                    درست در جای خود در درد
                                                </p>
                                            </td>
                                            <td className="price" data-title="Price"><span>62,000 تومان</span></td>
                                            <td className="text-center" data-title="Stock">
                                                <div className="detail-qty border radius m-auto">
                                                    <Link href="#" className="qty-down"><i className="fa fa-caret-down" aria-hidden="true"></i></Link>
                                                    <span className="qty-val">1</span>
                                                    <Link href="#" className="qty-up"><i className="fa fa-caret-up" aria-hidden="true"></i></Link>
                                                </div>
                                            </td>
                                            <td className="text-right" data-title="Cart">
                                                <span>62,000 تومان</span>
                                            </td>
                                            <td className="action" data-title="Remove">
                                                <Link href="#" className="text-muted"><i className="fa fa-trash-alt"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="6" className="text-end">
                                                <Link href="#" className="text-muted"> <i className="fa fa-times-circle"></i> پاک کردن سبد خرید</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-action text-end">
                                <Link href={'/'} className="btn btn-rounded mr-10"><i className="far fa-retweet mr-5"></i>بروزرسانی سبد خرید</Link>
                                <Link href={'/'} className="btn btn-rounded"><i className="far fa-cart-plus mr-5"></i>ادامه خرید</Link>
                            </div>
                            <div className="divider center_icon mt-50 mb-50"><i className="fa fa-gem"></i></div>
                            <div className="row mb-50">
                                <div className="col-lg-6 col-md-12">
                                    <div className="heading_s1 mb-3">
                                        <h4>محاسبه هزینه حمل و نقل</h4>
                                    </div>
                                    <p className="mt-15 mb-30">نرخ ثابت: <span className="font-xl text-brand fw-900">۵٪</span></p>
                                    <form className="field_form shipping_calculator">
                                        <div className="form-row">
                                            <div className="form-group col-lg-12">
                                                <div className="custom_select">
                                                    <select className="form-control select-active">
                                                        <option value="">یک گزینه انتخاب کنید...</option>
                                                        <option value="AX">جزایر آلاند</option>
                                                        <option value="AF">افغانستان</option>
                                                        <option value="AL">آلبانی</option>
                                                        <option value="DZ">الجزایر</option>
                                                        <option value="AD">آندورا</option>
                                                        <option value="AO">آنگولا</option>
                                                        <option value="AI">آنگویلا</option>
                                                        <option value="AQ">جنوبگان</option>
                                                        <option value="AG">آنتیگوا و باربودا</option>
                                                        <option value="AR">آرژانتین</option>
                                                        <option value="AM">ارمنستان</option>
                                                        <option value="AW">آروبا</option>
                                                        <option value="AU">استرالیا</option>
                                                        <option value="AT">اتریش</option>
                                                        <option value="AZ">آذربایجان</option>
                                                        <option value="BS">باهاما</option>
                                                        <option value="BH">بحرین</option>
                                                        <option value="BD">بنگلادش</option>
                                                        <option value="BB">باربادوس</option>
                                                        <option value="BY">بلاروس</option>
                                                        <option value="PW">پالائو</option>
                                                        <option value="BE">بلژیک</option>
                                                        <option value="BZ">بلیز</option>
                                                        <option value="BJ">بنین</option>
                                                        <option value="BM">برمودا</option>
                                                        <option value="BT">بوتان</option>
                                                        <option value="BO">بولیوی</option>
                                                        <option value="BQ">بونیر، سنت یوستاتیوس و صبا</option>
                                                        <option value="BA">بوسنی و هرزگوین</option>
                                                        <option value="BW">بوتسوانا</option>
                                                        <option value="BV">جزیره بووه</option>
                                                        <option value="BR">برزیل</option>
                                                        <option value="IO">قلمرو اقیانوس هند بریتانیا</option>
                                                        <option value="VG">جزایر ویرجین بریتانیا</option>
                                                        <option value="BN">برونئی</option>
                                                        <option value="BG">بلغارستان</option>
                                                        <option value="BF">بورکینافاسو</option>
                                                        <option value="BI">بوروندی</option>
                                                        <option value="KH">کامبوج</option>
                                                        <option value="CM">کامرون</option>
                                                        <option value="CA">کانادا</option>
                                                        <option value="CV">کیپ ورد</option>
                                                        <option value="KY">جزایر کیمن</option>
                                                        <option value="CF">جمهوری آفریقای مرکزی</option>
                                                        <option value="TD">چاد</option>
                                                        <option value="CL">شیلی</option>
                                                        <option value="CN">چین</option>
                                                        <option value="CX">جزیره کریسمس</option>
                                                        <option value="CC">جزایر کوکوس (کیلینگ)</option>
                                                        <option value="CO">کلمبیا</option>
                                                        <option value="KM">کومور</option>
                                                        <option value="CG">کنگو (برازاویل)</option>
                                                        <option value="CD">کنگو (کینشاسا)</option>
                                                        <option value="CK">جزایر کوک</option>
                                                        <option value="CR">کاستاریکا</option>
                                                        <option value="HR">کرواسی</option>
                                                        <option value="CU">کوبا</option>
                                                        <option value="CW">کوراسائو</option>
                                                        <option value="CY">قبرس</option>
                                                        <option value="CZ">جمهوری چک</option>
                                                        <option value="DK">دانمارک</option>
                                                        <option value="DJ">جیبوتی</option>
                                                        <option value="DM">دومینیکا</option>
                                                        <option value="DO">جمهوری دومینیکن</option>
                                                        <option value="EC">اکوادور</option>
                                                        <option value="EG">مصر</option>
                                                        <option value="SV">السالوادور</option>
                                                        <option value="GQ">گینه استوایی</option>
                                                        <option value="ER">اریتره</option>
                                                        <option value="EE">استونی</option>
                                                        <option value="ET">اتیوپی</option>
                                                        <option value="FK">جزایر فالکلند</option>
                                                        <option value="FO">جزایر فارو</option>
                                                        <option value="FJ">فیجی</option>
                                                        <option value="FI">فنلاند</option>
                                                        <option value="FR">فرانسه</option>
                                                        <option value="GF">گویان فرانسه</option>
                                                        <option value="PF">پلی‌نزی فرانسه</option>
                                                        <option value="TF">سرزمین‌های جنوبی فرانسه</option>
                                                        <option value="GA">گابن</option>
                                                        <option value="GM">گامبیا</option>
                                                        <option value="GE">گرجستان</option>
                                                        <option value="DE">آلمان</option>
                                                        <option value="GH">غنا</option>
                                                        <option value="GI">جبل‌الطارق</option>
                                                        <option value="GR">یونان</option>
                                                        <option value="GL">گرینلند</option>
                                                        <option value="GD">گرنادا</option>
                                                        <option value="GP">گوادلوپ</option>
                                                        <option value="GT">گواتمالا</option>
                                                        <option value="GG">گرنزی</option>
                                                        <option value="GN">گینه</option>
                                                        <option value="GW">گینه بیسائو</option>
                                                        <option value="GY">گویان</option>
                                                        <option value="HT">هائیتی</option>
                                                        <option value="HM">جزیره هرد و جزایر مک‌دونالد</option>
                                                        <option value="HN">هندوراس</option>
                                                        <option value="HK">هنگ کنگ</option>
                                                        <option value="HU">مجارستان</option>
                                                        <option value="IS">ایسلند</option>
                                                        <option value="IN">هند</option>
                                                        <option value="ID">اندونزی</option>
                                                        <option value="IR">ایران</option>
                                                        <option value="IQ">عراق</option>
                                                        <option value="IM">جزیره من</option>
                                                        <option value="IL">اسرائیل</option>
                                                        <option value="IT">ایتالیا</option>
                                                        <option value="CI">ساحل عاج</option>
                                                        <option value="JM">جامائیکا</option>
                                                        <option value="JP">ژاپن</option>
                                                        <option value="JE">جرزی</option>
                                                        <option value="JO">اردن</option>
                                                        <option value="KZ">قزاقستان</option>
                                                        <option value="KE">کنیا</option>
                                                        <option value="KI">کیریباتی</option>
                                                        <option value="KW">کویت</option>
                                                        <option value="KG">قرقیزستان</option>
                                                        <option value="LA">لائوس</option>
                                                        <option value="LV">لتونی</option>
                                                        <option value="LB">لبنان</option>
                                                        <option value="LS">لسوتو</option>
                                                        <option value="LR">لیبریا</option>
                                                        <option value="LY">لیبی</option>
                                                        <option value="LI">لیختن‌اشتاین</option>
                                                        <option value="LT">لیتوانی</option>
                                                        <option value="LU">لوکزامبورگ</option>
                                                        <option value="MO">ماکائو، چین</option>
                                                        <option value="MK">مقدونیه</option>
                                                        <option value="MG">ماداگاسکار</option>
                                                        <option value="MW">مالاوی</option>
                                                        <option value="MY">مالزی</option>
                                                        <option value="MV">مالدیو</option>
                                                        <option value="ML">مالی</option>
                                                        <option value="MT">مالت</option>
                                                        <option value="MH">جزایر مارشال</option>
                                                        <option value="MQ">مارتینیک</option>
                                                        <option value="MR">موریتانی</option>
                                                        <option value="MU">موریس</option>
                                                        <option value="YT">مایوت</option>
                                                        <option value="MX">مکزیک</option>
                                                        <option value="FM">میکرونزی</option>
                                                        <option value="MD">مولداوی</option>
                                                        <option value="MC">موناکو</option>
                                                        <option value="MN">مغولستان</option>
                                                        <option value="ME">مونته‌نگرو</option>
                                                        <option value="MS">مونتسرات</option>
                                                        <option value="MA">مراکش</option>
                                                        <option value="MZ">موزامبیک</option>
                                                        <option value="MM">میانمار</option>
                                                        <option value="NA">نامیبیا</option>
                                                        <option value="NR">نائورو</option>
                                                        <option value="NP">نپال</option>
                                                        <option value="NL">هلند</option>
                                                        <option value="AN">آنتیل هلند</option>
                                                        <option value="NC">کالدونیای جدید</option>
                                                        <option value="NZ">نیوزیلند</option>
                                                        <option value="NI">نیکاراگوئه</option>
                                                        <option value="NE">نیجر</option>
                                                        <option value="NG">نیجریه</option>
                                                        <option value="NU">نیوئه</option>
                                                        <option value="NF">جزیره نورفولک</option>
                                                        <option value="KP">کره شمالی</option>
                                                        <option value="NO">نروژ</option>
                                                        <option value="OM">عمان</option>
                                                        <option value="PK">پاکستان</option>
                                                        <option value="PS">سرزمین فلسطین</option>
                                                        <option value="PA">پاناما</option>
                                                        <option value="PG">پاپوآ گینه نو</option>
                                                        <option value="PY">پاراگوئه</option>
                                                        <option value="PE">پرو</option>
                                                        <option value="PH">فیلیپین</option>
                                                        <option value="PN">پیت‌کرن</option>
                                                        <option value="PL">لهستان</option>
                                                        <option value="PT">پرتغال</option>
                                                        <option value="QA">قطر</option>
                                                        <option value="IE">جمهوری ایرلند</option>
                                                        <option value="RE">رئونیون</option>
                                                        <option value="RO">رومانی</option>
                                                        <option value="RU">روسیه</option>
                                                        <option value="RW">رواندا</option>
                                                        <option value="ST">سائوتومه و پرنسیپ</option>
                                                        <option value="BL">سن بارتلمی</option>
                                                        <option value="SH">سنت هلنا</option>
                                                        <option value="KN">سنت کیتس و نویس</option>
                                                        <option value="LC">سنت لوسیا</option>
                                                        <option value="SX">سنت مارتن (بخش هلندی)</option>
                                                        <option value="MF">سنت مارتن (بخش فرانسوی)</option>
                                                        <option value="PM">سن پیر و میکلون</option>
                                                        <option value="VC">سنت وینسنت و گرنادین‌ها</option>
                                                        <option value="SM">سان مارینو</option>
                                                        <option value="SA">عربستان سعودی</option>
                                                        <option value="SN">سنگال</option>
                                                        <option value="RS">صربستان</option>
                                                        <option value="SC">سیشل</option>
                                                        <option value="SL">سیرالئون</option>
                                                        <option value="SG">سنگاپور</option>
                                                        <option value="SK">اسلواکی</option>
                                                        <option value="SI">اسلوونی</option>
                                                        <option value="SB">جزایر سلیمان</option>
                                                        <option value="SO">سومالی</option>
                                                        <option value="ZA">آفریقای جنوبی</option>
                                                        <option value="GS">جزایر جورجیای جنوبی و ساندویچ جنوبی</option>
                                                        <option value="KR">کره جنوبی</option>
                                                        <option value="SS">سودان جنوبی</option>
                                                        <option value="ES">اسپانیا</option>
                                                        <option value="LK">سری‌لانکا</option>
                                                        <option value="SD">سودان</option>
                                                        <option value="SR">سورینام</option>
                                                        <option value="SJ">سوالبارد و یان ماین</option>
                                                        <option value="SZ">اسواتینی</option>
                                                        <option value="SE">سوئد</option>
                                                        <option value="CH">سوئیس</option>
                                                        <option value="SY">سوریه</option>
                                                        <option value="TW">تایوان</option>
                                                        <option value="TJ">تاجیکستان</option>
                                                        <option value="TZ">تانزانیا</option>
                                                        <option value="TH">تایلند</option>
                                                        <option value="TL">تیمور-لسته</option>
                                                        <option value="TG">توگو</option>
                                                        <option value="TK">توکلائو</option>
                                                        <option value="TO">تونگا</option>
                                                        <option value="TT">ترینیداد و توباگو</option>
                                                        <option value="TN">تونس</option>
                                                        <option value="TR">ترکیه</option>
                                                        <option value="TM">ترکمنستان</option>
                                                        <option value="TC">جزایر تورکس و کایکوس</option>
                                                        <option value="TV">تووالو</option>
                                                        <option value="UG">اوگاندا</option>
                                                        <option value="UA">اوکراین</option>
                                                        <option value="AE">امارات متحده عربی</option>
                                                        <option value="GB">بریتانیا (انگلستان)</option>
                                                        <option value="US">ایالات متحده آمریکا</option>
                                                        <option value="UY">اروگوئه</option>
                                                        <option value="UZ">ازبکستان</option>
                                                        <option value="VU">وانواتو</option>
                                                        <option value="VA">واتیکان</option>
                                                        <option value="VE">ونزوئلا</option>
                                                        <option value="VN">ویتنام</option>
                                                        <option value="WF">والیس و فوتونا</option>
                                                        <option value="EH">صحرای غربی</option>
                                                        <option value="WS">ساموآ</option>
                                                        <option value="YE">یمن</option>
                                                        <option value="ZM">زامبیا</option>
                                                        <option value="ZW">زیمبابوه</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row row">
                                            <div className="form-group col-lg-6">
                                                <input required="required" placeholder="استان / کشور" name="name" type="text"/>
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <input required="required" placeholder="کد پستی / زیپ" name="name" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-lg-12">
                                                <button className="btn btn-rounded btn-sm"><i className="far fa-retweet mr-5"></i>بروزرسانی</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="mb-30 mt-50">
                                        <div className="heading_s1 mb-3">
                                            <h4>اعمال کوپن</h4>
                                        </div>
                                        <div className="total-amount">
                                            <div className="left">
                                                <div className="coupon">
                                                    <form action="#" target="_blank">
                                                        <div className="form-row row justify-content-center">
                                                            <div className="form-group col-lg-6">
                                                                <input className="font-medium" name="Coupon" placeholder="کد تخفیف خود را وارد کنید"/>
                                                            </div>
                                                            <div className="form-group col-lg-6">
                                                                <button className="btn btn-rounded btn-sm"><i className="far fa-bookmark mr-5"></i>اعمال</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="border p-md-4 p-30 border-radius-10 cart-totals">
                                        <div className="heading_s1 mb-3">
                                            <h4>جمع کل سبد خرید</h4>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td className="cart_total_label">جمع جزء سبد خرید</td>
                                                        <td className="cart_total_amount"><span className="font-lg fw-900 text-brand">۲۴۰,۰۰۰ تومان</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cart_total_label">هزینه ارسال</td>
                                                        <td className="cart_total_amount"><i className="ti-gift mr-5"></i> ارسال رایگان</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cart_total_label">مجموع</td>
                                                        <td className="cart_total_amount">
                                                            <strong><span className="font-xl fw-900 text-brand">۲۴۰,۰۰۰ تومان</span></strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <Link href="#" className="btn btn-rounded"> <i className="fa fa-share-square mr-10"></i> ادامه به تسویه حساب</Link>
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

export default cartPage