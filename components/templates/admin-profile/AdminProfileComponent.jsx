"use client"
import pushAlert from '@/libs/alert/Alert'
import Link from 'next/link'
import React from 'react'

function AdminProfileComponent({adminData}) {
    const logoutHandler=async()=>{
        pushAlert({title:"خروج",text:"میخواهید ادامه دهید؟",cancelButtonText:"خیر",confirmButtonText:"بله",submitClass:"btn btn-primary btn_sbumit",icon:"warning"})
    }
  return (
    <section className="content-main">
    <div className="content-header">
        <h2 className="content-title">تنظیمات پروفایل</h2>
    </div>
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-lg-12">
                    <section className="content-body p-xl-2">
                        <form>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="row gx-3">
                                        <div className="col-6 mb-3">
                                            <label className="form-label">نام</label>
                                            <input className="form-control" defaultValue={adminData.name} type="text" placeholder="اینجا تایپ کنید"/>
                                        </div> 
                                        <div className="col-6 mb-3">
                                            <label className="form-label">نام خانوادگی</label>
                                            <input className="form-control" type="text" placeholder="اینجا تایپ کنید" defaultValue={adminData.family} />
                                        </div> 
                                        <div className="col-lg-6 mb-3">
                                            <label className="form-label">ایمیل</label>
                                            <input className="form-control" type="email" placeholder="example@mail.com" defaultValue={adminData.email}/>
                                        </div> 
                                        <div className="col-lg-6 mb-3">
                                            <label className="form-label">تلفن</label>
                                            <input className="form-control" type="tel" placeholder="+1234567890" defaultValue={adminData.phone} />
                                        </div> 
                                    </div> 
                                </div> 
                                <aside className="col-lg-4">
                                    <figure className="text-lg-center">
                                        <img className="img-lg mb-3 img-avatar" src={adminData.image} alt="عکس کاربر"/>
                                        <figcaption>
                                            <Link className="btn btn-light rounded font-md" href="#">
                                                <i className="icons material-icons md-backup font-md"></i> بارگذاری
                                            </Link>
                                        </figcaption>
                                    </figure>
                                </aside> 
                            </div> 
                            <br/>
                            <button className="btn btn-primary" type="submit">ذخیره تغییرات</button>
                        </form>
                        <hr className="my-5"/>
                        <div className="row" style={{maxWidth:"920px"}}>
                            <div className="col-md">
                                <article className="box mb-3 bg-light">
                                    <Link className="btn float-end btn-light btn-sm rounded font-md" href="#">تغییر</Link>
                                    <h6>رمز عبور</h6>
                                    <small className="text-muted d-block" style={{width:"70%"}}>می‌توانید رمز عبور خود را با کلیک کردن اینجا تغییر دهید یا بازنشانی کنید</small>
                                </article>
                            </div> 
                            <div className="col-md">
                                <article className="box mb-3 bg-light">
                                    <button className="btn float-end btn-light rounded btn-sm font-md" onClick={logoutHandler} >غیرفعال کردن</button>
                                    <h6>حذف حساب</h6>
                                    <small className="text-muted d-block" style={{width:"70%"}}>پس از حذف حساب خود، بازگشتی وجود ندارد.</small>
                                </article>
                            </div> 
                        </div> 
                    </section> 
                </div> 
            </div> 
        </div> 
    </div> 
</section>
  )
}

export default AdminProfileComponent