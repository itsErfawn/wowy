import Link from 'next/link'
import React from 'react'

function checkoutPage() {
  return (
    <>
            <div className="page-header breadcrumb-wrap">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="index.html" rel="nofollow">خانه</Link>
                        <span></span> فروشگاه <span></span> تسویه حساب
                    </div>
                </div>
            </div>
            <section className="mt-60 mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="toggle_info">
                                <span><i className="far fa-user mr-5"></i><span className="text-muted">قبلاً حساب کاربری ساخته‌اید؟</span> <Link href="#loginform" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">برای ورود اینجا کلیک کنید</Link></span>
                            </div>
                            <div className="panel-collapse collapse login_form" id="loginform">
                                <div className="panel-body">
                                    <p className="mb-30 font-sm">اگر قبلاً از ما خرید کرده‌اید، لطفاً جزئیات خود را در زیر وارد کنید. اگر مشتری جدید هستید، لطفاً به بخش صورتحساب و حمل و نقل بروید.</p>
                                    <form method="post">
                                        <div className="form-group">
                                            <input type="text" name="email" placeholder="نام کاربری یا ایمیل"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" placeholder="رمز عبور"/>
                                        </div>
                                        <div className="login_footer form-group">
                                            <div className="chek-form">
                                                <div className="custome-checkbox">
                                                    <input className="form-check-input" type="checkbox" name="checkbox" id="remember" defaultValue=""/>
                                                    <label className="form-check-label" htmlFor="remember"><span>مرا به خاطر بسپار</span></label>
                                                </div>
                                            </div>
                                            <Link href="#">رمز عبور را فراموش کرده‌اید؟</Link>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-md btn-rounded" name="login">ورود</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="toggle_info">
                                <span><i className="far fa-gem mr-5"></i><span className="text-muted">کد تخفیف دارید؟</span> <Link href="#coupon" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">برای وارد کردن کد اینجا کلیک کنید</Link></span>
                            </div>
                            <div className="panel-collapse collapse coupon_form" id="coupon">
                                <div className="panel-body">
                                    <p className="mb-30 font-sm">اگر کد تخفیف دارید، لطفاً آن را در زیر وارد کنید.</p>
                                    <form method="post">
                                        <div className="form-group">
                                            <input type="text" placeholder="کد تخفیف را وارد کنید..."/>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-rounded btn-md" name="login">اعمال کد تخفیف</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="divider mt-50 mb-50"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-25">
                                <h4>جزئیات صورتحساب</h4>
                            </div>
                            <form method="post">
                                <div className="form-group">
                                    <input type="text" required="" name="fname" placeholder="نام *"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" required="" name="lname" placeholder="نام خانوادگی *"/>
                                </div>
                                <div className="form-group">
                                    <input required="" type="text" name="cname" placeholder="نام شرکت"/>
                                </div>
                                <div className="form-group">
                                    <div className="custom_select">
                                        <select className="form-control select-active">
                                            <option defaultValue="">یک گزینه را انتخاب کنید...</option>
                                            <option defaultValue="AX">جزایر آلاند</option>
                                            <option defaultValue="AF">افغانستان</option>
                                            <option defaultValue="AL">آلبانی</option>
                                            <option defaultValue="DZ">الجزایر</option>
                                            <option defaultValue="AD">آندورا</option>
                                            <option defaultValue="AO">آنگولا</option>
                                            <option defaultValue="AI">آنگویلا</option>
                                            <option defaultValue="AQ">جنوبگان</option>
                                            <option defaultValue="AG">آنتیگوا و باربودا</option>
                                            <option defaultValue="AR">آرژانتین</option>
                                            <option defaultValue="AM">ارمنستان</option>
                                            <option defaultValue="AW">آروبا</option>
                                            <option defaultValue="AU">استرالیا</option>
                                            <option defaultValue="AT">اتریش</option>
                                            <option defaultValue="AZ">آذربایجان</option>
                                            <option defaultValue="BS">باهاما</option>
                                            <option defaultValue="BH">بحرین</option>
                                            <option defaultValue="BD">بنگلادش</option>
                                            <option defaultValue="BB">باربادوس</option>
                                            <option defaultValue="BY">بلاروس</option>
                                            <option defaultValue="PW">پالائو</option>
                                            <option defaultValue="BE">بلژیک</option>
                                            <option defaultValue="BZ">بلیز</option>
                                            <option defaultValue="BJ">بنین</option>
                                            <option defaultValue="BM">برمودا</option>
                                            <option defaultValue="BT">بوتان</option>
                                            <option defaultValue="BO">بولیوی</option>
                                            <option defaultValue="BQ">بونیر، سنت یوستاتیوس و صبا</option>
                                            <option defaultValue="BA">بوسنی و هرزگوین</option>
                                            <option defaultValue="BW">بوتسوانا</option>
                                            <option defaultValue="BV">جزیره بووه</option>
                                            <option defaultValue="BR">برزیل</option>
                                            <option defaultValue="IO">قلمرو بریتانیا در اقیانوس هند</option>
                                            <option defaultValue="VG">جزایر ویرجین بریتانیا</option>
                                            <option defaultValue="BN">برونئی</option>
                                            <option defaultValue="BG">بلغارستان</option>
                                            <option defaultValue="BF">بورکینافاسو</option>
                                            <option defaultValue="BI">بوروندی</option>
                                            <option defaultValue="KH">کامبوج</option>
                                            <option defaultValue="CM">کامرون</option>
                                            <option defaultValue="CA">کانادا</option>
                                            <option defaultValue="CV">کیپ ورد</option>
                                            <option defaultValue="KY">جزایر کیمن</option>
                                            <option defaultValue="CF">جمهوری آفریقای مرکزی</option>
                                            <option defaultValue="TD">چاد</option>
                                            <option defaultValue="CL">شیلی</option>
                                            <option defaultValue="CN">چین</option>
                                            <option defaultValue="CX">جزیره کریسمس</option>
                                            <option defaultValue="CC">جزایر کوکوس (کیلینگ)</option>
                                            <option defaultValue="CO">کلمبیا</option>
                                            <option defaultValue="KM">کومور</option>
                                            <option defaultValue="CG">کنگو (برازاویل)</option>
                                            <option defaultValue="CD">کنگو (کینشاسا)</option>
                                            <option defaultValue="CK">جزایر کوک</option>
                                            <option defaultValue="CR">کاستاریکا</option>
                                            <option defaultValue="HR">کرواسی</option>
                                            <option defaultValue="CU">کوبا</option>
                                            <option defaultValue="CW">کوراسائو</option>
                                            <option defaultValue="CY">قبرس</option>
                                            <option defaultValue="CZ">جمهوری چک</option>
                                            <option defaultValue="DK">دانمارک</option>
                                            <option defaultValue="DJ">جیبوتی</option>
                                            <option defaultValue="DM">دومینیکا</option>
                                            <option defaultValue="DO">جمهوری دومینیکن</option>
                                            <option defaultValue="EC">اکوادور</option>
                                            <option defaultValue="EG">مصر</option>
                                            <option defaultValue="SV">السالوادور</option>
                                            <option defaultValue="GQ">گینه استوایی</option>
                                            <option defaultValue="ER">اریتره</option>
                                            <option defaultValue="EE">استونی</option>
                                            <option defaultValue="ET">اتیوپی</option>
                                            <option defaultValue="FK">جزایر فالکلند</option>
                                            <option defaultValue="FO">جزایر فارو</option>
                                            <option defaultValue="FJ">فیجی</option>
                                            <option defaultValue="FI">فنلاند</option>
                                            <option defaultValue="FR">فرانسه</option>
                                            <option defaultValue="GF">گویان فرانسه</option>
                                            <option defaultValue="PF">پلی‌نزی فرانسه</option>
                                            <option defaultValue="TF">سرزمین‌های جنوبی فرانسه</option>
                                            <option defaultValue="GA">گابن</option>
                                            <option defaultValue="GM">گامبیا</option>
                                            <option defaultValue="GE">گرجستان</option>
                                            <option defaultValue="DE">آلمان</option>
                                            <option defaultValue="GH">غنا</option>
                                            <option defaultValue="GI">جبل‌الطارق</option>
                                            <option defaultValue="GR">یونان</option>
                                            <option defaultValue="GL">گرینلند</option>
                                            <option defaultValue="GD">گرنادا</option>
                                            <option defaultValue="GP">گوادلوپ</option>
                                            <option defaultValue="GT">گواتمالا</option>
                                            <option defaultValue="GG">گرنزی</option>
                                            <option defaultValue="GN">گینه</option>
                                            <option defaultValue="GW">گینه بیسائو</option>
                                            <option defaultValue="GY">گویان</option>
                                            <option defaultValue="HT">هائیتی</option>
                                            <option defaultValue="HM">جزیره هرد و جزایر مک‌دونالد</option>
                                            <option defaultValue="HN">هندوراس</option>
                                            <option defaultValue="HK">هنگ کنگ</option>
                                            <option defaultValue="HU">مجارستان</option>
                                            <option defaultValue="IS">ایسلند</option>
                                            <option defaultValue="IN">هند</option>
                                            <option defaultValue="ID">اندونزی</option>
                                            <option defaultValue="IR">ایران</option>
                                            <option defaultValue="IQ">عراق</option>
                                            <option defaultValue="IM">جزیره من</option>
                                            <option defaultValue="IL">اسرائیل</option>
                                            <option defaultValue="IT">ایتالیا</option>
                                            <option defaultValue="CI">ساحل عاج</option>
                                            <option defaultValue="JM">جامائیکا</option>
                                            <option defaultValue="JP">ژاپن</option>
                                            <option defaultValue="JE">جرزی</option>
                                            <option defaultValue="JO">اردن</option>
                                            <option defaultValue="KZ">قزاقستان</option>
                                            <option defaultValue="KE">کنیا</option>
                                            <option defaultValue="KI">کیریباتی</option>
                                            <option defaultValue="KW">کویت</option>
                                            <option defaultValue="KG">قرقیزستان</option>
                                            <option defaultValue="LA">لائوس</option>
                                            <option defaultValue="LV">لتونی</option>
                                            <option defaultValue="LB">لبنان</option>
                                            <option defaultValue="LS">لسوتو</option>
                                            <option defaultValue="LR">لیبریا</option>
                                            <option defaultValue="LY">لیبی</option>
                                            <option defaultValue="LI">لیختن‌اشتاین</option>
                                            <option defaultValue="LT">لیتوانی</option>
                                            <option defaultValue="LU">لوکزامبورگ</option>
                                            <option defaultValue="MO">ماکائو</option>
                                            <option defaultValue="MK">مقدونیه</option>
                                            <option defaultValue="MG">ماداگاسکار</option>
                                            <option defaultValue="MW">مالاوی</option>
                                            <option defaultValue="MY">مالزی</option>
                                            <option defaultValue="MV">مالدیو</option>
                                            <option defaultValue="ML">مالی</option>
                                            <option defaultValue="MT">مالت</option>
                                            <option defaultValue="MH">جزایر مارشال</option>
                                            <option defaultValue="MQ">مارتینیک</option>
                                            <option defaultValue="MR">موریتانی</option>
                                            <option defaultValue="MU">موریس</option>
                                            <option defaultValue="YT">مایوت</option>
                                            <option defaultValue="MX">مکزیک</option>
                                            <option defaultValue="FM">میکرونزی</option>
                                            <option defaultValue="MD">مولداوی</option>
                                            <option defaultValue="MC">موناکو</option>
                                            <option defaultValue="MN">مغولستان</option>
                                            <option defaultValue="ME">مونته‌نگرو</option>
                                            <option defaultValue="MS">مونتسرات</option>
                                            <option defaultValue="MA">مراکش</option>
                                            <option defaultValue="MZ">موزامبیک</option>
                                            <option defaultValue="MM">میانمار</option>
                                            <option defaultValue="NA">نامیبیا</option>
                                            <option defaultValue="NR">نائورو</option>
                                            <option defaultValue="NP">نپال</option>
                                            <option defaultValue="NL">هلند</option>
                                            <option defaultValue="AN">آنتیل هلند</option>
                                            <option defaultValue="NC">کالدونیای جدید</option>
                                            <option defaultValue="NZ">نیوزیلند</option>
                                            <option defaultValue="NI">نیکاراگوئه</option>
                                            <option defaultValue="NE">نیجر</option>
                                            <option defaultValue="NG">نیجریه</option>
                                            <option defaultValue="NU">نیوئه</option>
                                            <option defaultValue="NF">جزیره نورفک</option>
                                            <option defaultValue="KP">کره شمالی</option>
                                            <option defaultValue="NO">نروژ</option>
                                            <option defaultValue="OM">عمان</option>
                                            <option defaultValue="PK">پاکستان</option>
                                            <option defaultValue="PS">سرزمین‌های فلسطینی</option>
                                            <option defaultValue="PA">پاناما</option>
                                            <option defaultValue="PG">پاپوآ گینه نو</option>
                                            <option defaultValue="PY">پاراگوئه</option>
                                            <option defaultValue="PE">پرو</option>
                                            <option defaultValue="PH">فیلیپین</option>
                                            <option defaultValue="PN">پیت‌کرن</option>
                                            <option defaultValue="PL">لهستان</option>
                                            <option defaultValue="PT">پرتغال</option>
                                            <option defaultValue="QA">قطر</option>
                                            <option defaultValue="IE">جمهوری ایرلند</option>
                                            <option defaultValue="RE">رئونیون</option>
                                            <option defaultValue="RO">رومانی</option>
                                            <option defaultValue="RU">روسیه</option>
                                            <option defaultValue="RW">رواندا</option>
                                            <option defaultValue="ST">سائوتومه و پرنسیپ</option>
                                            <option defaultValue="BL">سن بارتلمی</option>
                                            <option defaultValue="SH">سنت هلنا</option>
                                            <option defaultValue="KN">سنت کیتس و نویس</option>
                                            <option defaultValue="LC">سنت لوسیا</option>
                                            <option defaultValue="SX">سنت مارتن (بخش هلندی)</option>
                                            <option defaultValue="MF">سنت مارتن (بخش فرانسوی)</option>
                                            <option defaultValue="PM">سن پیر و میکلون</option>
                                            <option defaultValue="VC">سنت وینسنت و گرنادین‌ها</option>
                                            <option defaultValue="SM">سان مارینو</option>
                                            <option defaultValue="SA">عربستان سعودی</option>
                                            <option defaultValue="SN">سنگال</option>
                                            <option defaultValue="RS">صربستان</option>
                                            <option defaultValue="SC">سیشل</option>
                                            <option defaultValue="SL">سیرالئون</option>
                                            <option defaultValue="SG">سنگاپور</option>
                                            <option defaultValue="SK">اسلواکی</option>
                                            <option defaultValue="SI">اسلوونی</option>
                                            <option defaultValue="SB">جزایر سلیمان</option>
                                            <option defaultValue="SO">سومالی</option>
                                            <option defaultValue="ZA">آفریقای جنوبی</option>
                                            <option defaultValue="GS">جزایر جورجیای جنوبی و ساندویچ جنوبی</option>
                                            <option defaultValue="KR">کره جنوبی</option>
                                            <option defaultValue="SS">سودان جنوبی</option>
                                            <option defaultValue="ES">اسپانیا</option>
                                            <option defaultValue="LK">سری‌لانکا</option>
                                            <option defaultValue="SD">سودان</option>
                                            <option defaultValue="SR">سورینام</option>
                                            <option defaultValue="SJ">سوالبارد و یان ماین</option>
                                            <option defaultValue="SZ">اسواتینی</option>
                                            <option defaultValue="SE">سوئد</option>
                                            <option defaultValue="CH">سوئیس</option>
                                            <option defaultValue="SY">سوریه</option>
                                            <option defaultValue="TW">تایوان</option>
                                            <option defaultValue="TJ">تاجیکستان</option>
                                            <option defaultValue="TZ">تانزانیا</option>
                                            <option defaultValue="TH">تایلند</option>
                                            <option defaultValue="TL">تیمور-لسته</option>
                                            <option defaultValue="TG">توگو</option>
                                            <option defaultValue="TK">توکلائو</option>
                                            <option defaultValue="TO">تونگا</option>
                                            <option defaultValue="TT">ترینیداد و توباگو</option>
                                            <option defaultValue="TN">تونس</option>
                                            <option defaultValue="TR">ترکیه</option>
                                            <option defaultValue="TM">ترکمنستان</option>
                                            <option defaultValue="TC">جزایر تورکس و کایکوس</option>
                                            <option defaultValue="TV">تووالو</option>
                                            <option defaultValue="UG">اوگاندا</option>
                                            <option defaultValue="UA">اوکراین</option>
                                            <option defaultValue="AE">امارات متحده عربی</option>
                                            <option defaultValue="GB">بریتانیا (انگلستان)</option>
                                            <option defaultValue="US">ایالات متحده آمریکا</option>
                                            <option defaultValue="UY">اروگوئه</option>
                                            <option defaultValue="UZ">ازبکستان</option>
                                            <option defaultValue="VU">وانواتو</option>
                                            <option defaultValue="VA">واتیکان</option>
                                            <option defaultValue="VE">ونزوئلا</option>
                                            <option defaultValue="VN">ویتنام</option>
                                            <option defaultValue="WF">والیس و فوتونا</option>
                                            <option defaultValue="EH">صحرای غربی</option>
                                            <option defaultValue="WS">ساموآ</option>
                                            <option defaultValue="YE">یمن</option>
                                            <option defaultValue="ZM">زامبیا</option>
                                            <option defaultValue="ZW">زیمبابوه</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="billing_address" required="" placeholder="آدرس *"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="billing_address2" required="" placeholder="آدرس خط ۲"/>
                                </div>
                                <div className="form-group">
                                    <input required="" type="text" name="city" placeholder="شهر / شهرک *"/>
                                </div>
                                <div className="form-group">
                                    <input required="" type="text" name="state" placeholder="استان / شهرستان *"/>
                                </div>
                                <div className="form-group">
                                    <input required="" type="text" name="zipcode" placeholder="کد پستی / زیپ *"/>
                                </div>
                                <div className="form-group">
                                    <input required="" type="text" name="phone" placeholder="تلفن *"/>
                                </div>
                                <div className="form-group">
                                    <input required="" type="text" name="email" placeholder="آدرس ایمیل *"/>
                                </div>
                                <div className="form-group">
                                    <div className="checkbox">
                                        <div className="custome-checkbox">
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="createaccount"/>
                                            <label className="form-check-label label_info" data-bs-toggle="collapse" href="#collapsePassword" data-target="#collapsePassword" aria-controls="collapsePassword" htmlFor="createaccount"><span>ایجاد حساب کاربری؟</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div id="collapsePassword" className="form-group create-account collapse in">
                                    <input required="" type="password" placeholder="رمز عبور" name="password"/>
                                </div>
                                <div className="ship_detail">
                                    <div className="form-group">
                                        <div className="chek-form">
                                            <div className="custome-checkbox">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id="differentaddress"/>
                                                <label className="form-check-label label_info" data-bs-toggle="collapse" data-target="#collapseAddress" href="#collapseAddress" aria-controls="collapseAddress" htmlFor="differentaddress"><span>ارسال به آدرس دیگر؟</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="collapseAddress" className="different_address collapse in">
                                        <div className="form-group">
                                            <input type="text" required="" name="fname" placeholder="نام *"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" required="" name="lname" placeholder="نام خانوادگی *"/>
                                        </div>
                                        <div className="form-group">
                                            <input required="" type="text" name="cname" placeholder="نام شرکت"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom_select">
                                                <select className="form-control select-active">
                                                    <option defaultValue="">یک گزینه را انتخاب کنید...</option>
                                                    <option defaultValue="AX">جزایر آلاند</option>
                                                    <option defaultValue="AF">افغانستان</option>
                                                    <option defaultValue="AL">آلبانی</option>
                                                    <option defaultValue="DZ">الجزایر</option>
                                                    <option defaultValue="AD">آندورا</option>
                                                    <option defaultValue="AO">آنگولا</option>
                                                    <option defaultValue="AI">آنگویلا</option>
                                                    <option defaultValue="AQ">جنوبگان</option>
                                                    <option defaultValue="AG">آنتیگوا و باربودا</option>
                                                    <option defaultValue="AR">آرژانتین</option>
                                                    <option defaultValue="AM">ارمنستان</option>
                                                    <option defaultValue="AW">آروبا</option>
                                                    <option defaultValue="AU">استرالیا</option>
                                                    <option defaultValue="AT">اتریش</option>
                                                    <option defaultValue="AZ">آذربایجان</option>
                                                    <option defaultValue="BS">باهاما</option>
                                                    <option defaultValue="BH">بحرین</option>
                                                    <option defaultValue="BD">بنگلادش</option>
                                                    <option defaultValue="BB">باربادوس</option>
                                                    <option defaultValue="BY">بلاروس</option>
                                                    <option defaultValue="PW">پالائو</option>
                                                    <option defaultValue="BE">بلژیک</option>
                                                    <option defaultValue="BZ">بلیز</option>
                                                    <option defaultValue="BJ">بنین</option>
                                                    <option defaultValue="BM">برمودا</option>
                                                    <option defaultValue="BT">بوتان</option>
                                                    <option defaultValue="BO">بولیوی</option>
                                                    <option defaultValue="BQ">بونیر، سنت یوستیشس و سابا</option>
                                                    <option defaultValue="BA">بوسنی و هرزگوین</option>
                                                    <option defaultValue="BW">بوتسوانا</option>
                                                    <option defaultValue="BV">جزیره بووه</option>
                                                    <option defaultValue="BR">برزیل</option>
                                                    <option defaultValue="IO">قلمرو بریتانیا در اقیانوس هند</option>
                                                    <option defaultValue="VG">جزایر ویرجین بریتانیا</option>
                                                    <option defaultValue="BN">برونئی</option>
                                                    <option defaultValue="BG">بلغارستان</option>
                                                    <option defaultValue="BF">بورکینافاسو</option>
                                                    <option defaultValue="BI">بوروندی</option>
                                                    <option defaultValue="KH">کامبوج</option>
                                                    <option defaultValue="CM">کامرون</option>
                                                    <option defaultValue="CA">کانادا</option>
                                                    <option defaultValue="CV">کیپ ورد</option>
                                                    <option defaultValue="KY">جزایر کیمن</option>
                                                    <option defaultValue="CF">جمهوری آفریقای مرکزی</option>
                                                    <option defaultValue="TD">چاد</option>
                                                    <option defaultValue="CL">شیلی</option>
                                                    <option defaultValue="CN">چین</option>
                                                    <option defaultValue="CX">جزیره کریسمس</option>
                                                    <option defaultValue="CC">جزایر کوکوس (کیلینگ)</option>
                                                    <option defaultValue="CO">کلمبیا</option>
                                                    <option defaultValue="KM">کومور</option>
                                                    <option defaultValue="CG">کنگو (برازاویل)</option>
                                                    <option defaultValue="CD">کنگو (کینشاسا)</option>
                                                    <option defaultValue="CK">جزایر کوک</option>
                                                    <option defaultValue="CR">کاستاریکا</option>
                                                    <option defaultValue="HR">کرواسی</option>
                                                    <option defaultValue="CU">کوبا</option>
                                                    <option defaultValue="CW">کوراسائو</option>
                                                    <option defaultValue="CY">قبرس</option>
                                                    <option defaultValue="CZ">جمهوری چک</option>
                                                    <option defaultValue="DK">دانمارک</option>
                                                    <option defaultValue="DJ">جیبوتی</option>
                                                    <option defaultValue="DM">دومینیکا</option>
                                                    <option defaultValue="DO">جمهوری دومینیکن</option>
                                                    <option defaultValue="EC">اکوادور</option>
                                                    <option defaultValue="EG">مصر</option>
                                                    <option defaultValue="SV">السالوادور</option>
                                                    <option defaultValue="GQ">گینه استوایی</option>
                                                    <option defaultValue="ER">اریتره</option>
                                                    <option defaultValue="EE">استونی</option>
                                                    <option defaultValue="ET">اتیوپی</option>
                                                    <option defaultValue="FK">جزایر فالکلند</option>
                                                    <option defaultValue="FO">جزایر فارو</option>
                                                    <option defaultValue="FJ">فیجی</option>
                                                    <option defaultValue="FI">فنلاند</option>
                                                    <option defaultValue="FR">فرانسه</option>
                                                    <option defaultValue="GF">گویان فرانسه</option>
                                                    <option defaultValue="PF">پلی‌نزی فرانسه</option>
                                                    <option defaultValue="TF">سرزمین‌های جنوبی فرانسه</option>
                                                    <option defaultValue="GA">گابن</option>
                                                    <option defaultValue="GM">گامبیا</option>
                                                    <option defaultValue="GE">گرجستان</option>
                                                    <option defaultValue="DE">آلمان</option>
                                                    <option defaultValue="GH">غنا</option>
                                                    <option defaultValue="GI">جبل‌الطارق</option>
                                                    <option defaultValue="GR">یونان</option>
                                                    <option defaultValue="GL">گرینلند</option>
                                                    <option defaultValue="GD">گرنادا</option>
                                                    <option defaultValue="GP">گوادلوپ</option>
                                                    <option defaultValue="GT">گواتمالا</option>
                                                    <option defaultValue="GG">گرنزی</option>
                                                    <option defaultValue="GN">گینه</option>
                                                    <option defaultValue="GW">گینه بیسائو</option>
                                                    <option defaultValue="GY">گویان</option>
                                                    <option defaultValue="HT">هائیتی</option>
                                                    <option defaultValue="HM">جزیره هرد و جزایر مک‌دونالد</option>
                                                    <option defaultValue="HN">هندوراس</option>
                                                    <option defaultValue="HK">هنگ کنگ</option>
                                                    <option defaultValue="HU">مجارستان</option>
                                                    <option defaultValue="IS">ایسلند</option>
                                                    <option defaultValue="IN">هند</option>
                                                    <option defaultValue="ID">اندونزی</option>
                                                    <option defaultValue="IR">ایران</option>
                                                    <option defaultValue="IQ">عراق</option>
                                                    <option defaultValue="IM">جزیره من</option>
                                                    <option defaultValue="IL">اسرائیل</option>
                                                    <option defaultValue="IT">ایتالیا</option>
                                                    <option defaultValue="CI">ساحل عاج</option>
                                                    <option defaultValue="JM">جامائیکا</option>
                                                    <option defaultValue="JP">ژاپن</option>
                                                    <option defaultValue="JE">جرزی</option>
                                                    <option defaultValue="JO">اردن</option>
                                                    <option defaultValue="KZ">قزاقستان</option>
                                                    <option defaultValue="KE">کنیا</option>
                                                    <option defaultValue="KI">کیریباتی</option>
                                                    <option defaultValue="KW">کویت</option>
                                                    <option defaultValue="KG">قرقیزستان</option>
                                                    <option defaultValue="LA">لائوس</option>
                                                    <option defaultValue="LV">لتونی</option>
                                                    <option defaultValue="LB">لبنان</option>
                                                    <option defaultValue="LS">لسوتو</option>
                                                    <option defaultValue="LR">لیبریا</option>
                                                    <option defaultValue="LY">لیبی</option>
                                                    <option defaultValue="LI">لیختن‌اشتاین</option>
                                                    <option defaultValue="LT">لیتوانی</option>
                                                    <option defaultValue="LU">لوکزامبورگ</option>
                                                    <option defaultValue="MO">ماکائو</option>
                                                    <option defaultValue="MK">مقدونیه</option>
                                                    <option defaultValue="MG">ماداگاسکار</option>
                                                    <option defaultValue="MW">مالاوی</option>
                                                    <option defaultValue="MY">مالزی</option>
                                                    <option defaultValue="MV">مالدیو</option>
                                                    <option defaultValue="ML">مالی</option>
                                                    <option defaultValue="MT">مالت</option>
                                                    <option defaultValue="MH">جزایر مارشال</option>
                                                    <option defaultValue="MQ">مارتینیک</option>
                                                    <option defaultValue="MR">موریتانی</option>
                                                    <option defaultValue="MU">موریس</option>
                                                    <option defaultValue="YT">مایوت</option>
                                                    <option defaultValue="MX">مکزیک</option>
                                                    <option defaultValue="FM">میکرونزی</option>
                                                    <option defaultValue="MD">مولداوی</option>
                                                    <option defaultValue="MC">موناکو</option>
                                                    <option defaultValue="MN">مغولستان</option>
                                                    <option defaultValue="ME">مونته‌نگرو</option>
                                                    <option defaultValue="MS">مونتسرات</option>
                                                    <option defaultValue="MA">مراکش</option>
                                                    <option defaultValue="MZ">موزامبیک</option>
                                                    <option defaultValue="MM">میانمار</option>
                                                    <option defaultValue="NA">نامیبیا</option>
                                                    <option defaultValue="NR">نائورو</option>
                                                    <option defaultValue="NP">نپال</option>
                                                    <option defaultValue="NL">هلند</option>
                                                    <option defaultValue="AN">آنتیل هلند</option>
                                                    <option defaultValue="NC">کالدونیای جدید</option>
                                                    <option defaultValue="NZ">نیوزیلند</option>
                                                    <option defaultValue="NI">نیکاراگوئه</option>
                                                    <option defaultValue="NE">نیجر</option>
                                                    <option defaultValue="NG">نیجریه</option>
                                                    <option defaultValue="NU">نیوئه</option>
                                                    <option defaultValue="NF">جزیره نورفولک</option>
                                                    <option defaultValue="KP">کره شمالی</option>
                                                    <option defaultValue="NO">نروژ</option>
                                                    <option defaultValue="OM">عمان</option>
                                                    <option defaultValue="PK">پاکستان</option>
                                                    <option defaultValue="PS">سرزمین‌های فلسطینی</option>
                                                    <option defaultValue="PA">پاناما</option>
                                                    <option defaultValue="PG">پاپوآ گینه نو</option>
                                                    <option defaultValue="PY">پاراگوئه</option>
                                                    <option defaultValue="PE">پرو</option>
                                                    <option defaultValue="PH">فیلیپین</option>
                                                    <option defaultValue="PN">پیت‌کرن</option>
                                                    <option defaultValue="PL">لهستان</option>
                                                    <option defaultValue="PT">پرتغال</option>
                                                    <option defaultValue="QA">قطر</option>
                                                    <option defaultValue="IE">جمهوری ایرلند</option>
                                                    <option defaultValue="RE">رئونیون</option>
                                                    <option defaultValue="RO">رومانی</option>
                                                    <option defaultValue="RU">روسیه</option>
                                                    <option defaultValue="RW">رواندا</option>
                                                    <option defaultValue="ST">سائوتومه و پرنسیپ</option>
                                                    <option defaultValue="BL">سن بارتلمی</option>
                                                    <option defaultValue="SH">سنت هلنا</option>
                                                    <option defaultValue="KN">سنت کیتس و نویس</option>
                                                    <option defaultValue="LC">سنت لوسیا</option>
                                                    <option defaultValue="SX">سنت مارتن (بخش هلندی)</option>
                                                    <option defaultValue="MF">سنت مارتن (بخش فرانسوی)</option>
                                                    <option defaultValue="PM">سن پیر و میکلون</option>
                                                    <option defaultValue="VC">سنت وینسنت و گرنادین‌ها</option>
                                                    <option defaultValue="SM">سان مارینو</option>
                                                    <option defaultValue="SA">عربستان سعودی</option>
                                                    <option defaultValue="SN">سنگال</option>
                                                    <option defaultValue="RS">صربستان</option>
                                                    <option defaultValue="SC">سیشل</option>
                                                    <option defaultValue="SL">سیرالئون</option>
                                                    <option defaultValue="SG">سنگاپور</option>
                                                    <option defaultValue="SK">اسلواکی</option>
                                                    <option defaultValue="SI">اسلوونی</option>
                                                    <option defaultValue="SB">جزایر سلیمان</option>
                                                    <option defaultValue="SO">سومالی</option>
                                                    <option defaultValue="ZA">آفریقای جنوبی</option>
                                                    <option defaultValue="GS">جزایر جورجیای جنوبی و ساندویچ جنوبی</option>
                                                    <option defaultValue="KR">کره جنوبی</option>
                                                    <option defaultValue="SS">سودان جنوبی</option>
                                                    <option defaultValue="ES">اسپانیا</option>
                                                    <option defaultValue="LK">سری‌لانکا</option>
                                                    <option defaultValue="SD">سودان</option>
                                                    <option defaultValue="SR">سورینام</option>
                                                    <option defaultValue="SJ">سوالبارد و یان ماین</option>
                                                    <option defaultValue="SZ">سوازیلند</option>
                                                    <option defaultValue="SE">سوئد</option>
                                                    <option defaultValue="CH">سوئیس</option>
                                                    <option defaultValue="SY">سوریه</option>
                                                    <option defaultValue="TW">تایوان</option>
                                                    <option defaultValue="TJ">تاجیکستان</option>
                                                    <option defaultValue="TZ">تانزانیا</option>
                                                    <option defaultValue="TH">تایلند</option>
                                                    <option defaultValue="TL">تیمور-لسته</option>
                                                    <option defaultValue="TG">توگو</option>
                                                    <option defaultValue="TK">توکلائو</option>
                                                    <option defaultValue="TO">تونگا</option>
                                                    <option defaultValue="TT">ترینیداد و توباگو</option>
                                                    <option defaultValue="TN">تونس</option>
                                                    <option defaultValue="TR">ترکیه</option>
                                                    <option defaultValue="TM">ترکمنستان</option>
                                                    <option defaultValue="TC">جزایر تورکس و کایکوس</option>
                                                    <option defaultValue="TV">تووالو</option>
                                                    <option defaultValue="UG">اوگاندا</option>
                                                    <option defaultValue="UA">اوکراین</option>
                                                    <option defaultValue="AE">امارات متحده عربی</option>
                                                    <option defaultValue="GB">بریتانیا (UK)</option>
                                                    <option defaultValue="US">ایالات متحده آمریکا (US)</option>
                                                    <option defaultValue="UY">اروگوئه</option>
                                                    <option defaultValue="UZ">ازبکستان</option>
                                                    <option defaultValue="VU">وانواتو</option>
                                                    <option defaultValue="VA">واتیکان</option>
                                                    <option defaultValue="VE">ونزوئلا</option>
                                                    <option defaultValue="VN">ویتنام</option>
                                                    <option defaultValue="WF">والیس و فوتونا</option>
                                                    <option defaultValue="EH">صحرای غربی</option>
                                                    <option defaultValue="WS">ساموآی غربی</option>
                                                    <option defaultValue="YE">یمن</option>
                                                    <option defaultValue="ZM">زامبیا</option>
                                                    <option defaultValue="ZW">زیمبابوه</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="billing_address" required="" placeholder="آدرس *"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="billing_address2" required="" placeholder="آدرس خط ۲"/>
                                        </div>
                                        <div className="form-group">
                                            <input required="" type="text" name="city" placeholder="شهر / شهرک *"/>
                                        </div>
                                        <div className="form-group">
                                            <input required="" type="text" name="state" placeholder="استان / شهرستان *"/>
                                        </div>
                                        <div className="form-group">
                                            <input required="" type="text" name="zipcode" placeholder="کد پستی / زیپ *"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-20">
                                    <h5>اطلاعات اضافی</h5>
                                </div>
                                <div className="form-group mb-30">
                                    <textarea rows="5" placeholder="یادداشت سفارش"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="order_review">
                                <div className="mb-20">
                                    <h4>سفارشات شما</h4>
                                </div>
                                <div className="table-responsive order_table text-center">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">محصول</th>
                                                <th>جمع کل</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="image product-thumbnail"><img src="/imgs/shop/product-1-2.jpg" alt="#"/></td>
                                                <td><Link href="shop-product-full.html">Yidarton زنانه تابستانی آبی</Link> <span className="product-qty">x 2</span></td>
                                                <td>۱۸۰,۰۰۰ تومان</td>
                                            </tr>
                                            <tr>
                                                <td className="image product-thumbnail"><img src="/imgs/shop/product-1-2.jpg" alt="#"/></td>
                                                <td><Link href="shop-product-full.html">LDB MOON زنانه تابستانی</Link> <span className="product-qty">x 1</span></td>
                                                <td>۶۵,۰۰۰ تومان</td>
                                            </tr>
                                            <tr>
                                                <td className="image product-thumbnail"><img src="/imgs/shop/product-1-2.jpg" alt="#"/></td>
                                                <td><i className="ti-check-box font-small text-muted mr-10"></i><Link href="shop-product-full.html">زنانه آستین کوتاه گشاد</Link> <span className="product-qty">x 1</span></td>
                                                <td>۳۵,۰۰۰ تومان</td>
                                            </tr>
                                            <tr>
                                                <th>جمع جزء</th>
                                                <td className="product-subtotal" colSpan="2">۲۸۰,۰۰۰ تومان</td>
                                            </tr>
                                            <tr>
                                                <th>حمل و نقل</th>
                                                <td colSpan="2"><em>حمل و نقل رایگان</em></td>
                                            </tr>
                                            <tr>
                                                <th>جمع کل</th>
                                                <td colSpan="2" className="product-subtotal"><span className="font-xl text-brand fw-900">۲۸۰,۰۰۰ تومان</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                <div className="payment_method">
                                    <div className="mb-25">
                                        <h5>پرداخت</h5>
                                    </div>
                                    <div className="payment_option">
                                        <div className="custome-radio">
                                            <input className="form-check-input" required="" type="radio" name="payment_option" id="exampleRadios3" />
                                            <label className="form-check-label" htmlFor="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">انتقال مستقیم بانکی</label>
                                            <div className="form-group collapse in" id="bankTranfer">
                                                <p className="text-muted mt-5">انواع مختلفی از متن‌های لورم ایپسوم موجود است، اما اکثریت دچار تغییر شده‌اند.</p>
                                            </div>
                                        </div>
                                        <div className="custome-radio">
                                            <input className="form-check-input" required="" type="radio" name="payment_option" id="exampleRadios4" />
                                            <label className="form-check-label" htmlFor="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">پرداخت با چک</label>
                                            <div className="form-group collapse in" id="checkPayment">
                                                <p className="text-muted mt-5">لطفاً چک خود را به نام فروشگاه، خیابان فروشگاه، شهر فروشگاه، استان/شهرستان فروشگاه، کدپستی فروشگاه ارسال کنید.</p>
                                            </div>
                                        </div>
                                        <div className="custome-radio">
                                            <input className="form-check-input" required="" type="radio" name="payment_option" id="exampleRadios5" />
                                            <label className="form-check-label" htmlFor="exampleRadios5" data-bs-toggle="collapse" data-target="#paypal" aria-controls="paypal">پی‌پال</label>
                                            <div className="form-group collapse in" id="paypal">
                                                <p className="text-muted mt-5">از طریق پی‌پال پرداخت کنید؛ اگر حساب پی‌پال ندارید، می‌توانید با کارت اعتباری خود پرداخت کنید.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href="#" className="btn btn-fill-out btn-block mt-30">ثبت سفارش</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default checkoutPage