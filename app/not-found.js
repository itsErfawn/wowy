import Link from 'next/link'
import React from 'react'
import './(pages)/main.css'
export const metadata = {
  title: "صفحه پیدا نشد!",
};
function notFound() {
  return (
    <div className="container my-5">
    <div className="row align-items-center height-100vh text-center">
        <div className="col-lg-8 m-auto">
            <p className="mb-50"><img src="/imgs/theme/404.png" alt="" className="hover-up"/></p>
            <h2 className="mb-30">صفحه پیدا نشد</h2>
            <p className="font-lg text-grey-700 mb-30">
                لینکی که کلیک کرده‌اید ممکن است خراب باشد یا صفحه حذف شده باشد.<br/>
                به <Link href="/"> <span> صفحه اصلی</span></Link> بروید یا <Link href="/contact"><span>با ما تماس بگیرید</span></Link> درباره مشکل
            </p>
            <form className="contact-form-style text-center" id="contact-form" action="#" method="post">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="input-style mb-20 hover-up">
                            <input name="name" placeholder="جستجو" type="text"/>
                        </div>
                    </div>
                </div>
                <Link className="btn btn-default submit-auto-width font-xs hover-up" href="/">بازگشت به صفحه اصلی</Link>
            </form>
        </div>
    </div>
</div>
  )
}

export default notFound