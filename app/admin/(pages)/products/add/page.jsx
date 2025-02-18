import React from 'react'

function adminAddProductsPage() {
  return (
    <section className="content-main">
    <div className="row">
        <div className="col-12">
            <div className="content-header">
                <h2 className="content-title">افزودن محصول جدید</h2>
                <div>
                    <button className="btn btn-light rounded font-sm mr-5 text-body hover-up">ذخیره به عنوان پیش‌نویس</button>
                    <button className="btn btn-md rounded font-sm hover-up">انتشار</button>
                </div>
            </div>
        </div>
        <div className="col-lg-8">
            <div className="card mb-4">
                <div className="card-header">
                    <h4>اطلاعات پایه</h4>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="product_name" className="form-label">عنوان محصول</label>
                            <input type="text" placeholder="اینجا تایپ کنید" className="form-control" id="product_name"/>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">توضیحات کامل</label>
                            <textarea placeholder="اینجا تایپ کنید" className="form-control" rows="4"></textarea>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mb-4">
                                    <label className="form-label">قیمت عادی</label>
                                    <div className="row gx-2">
                                        <input placeholder="$" type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-4">
                                    <label className="form-label">قیمت تبلیغاتی</label>
                                    <input placeholder="$" type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label">واحد پول</label>
                                <select className="form-select">
                                    <option> USD </option>
                                    <option> EUR </option>
                                    <option> RUBL </option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">نرخ مالیات</label>
                            <input type="text" placeholder="%" className="form-control" id="product_name"/>
                        </div>
                        <label className="form-check mb-4">
                            <input className="form-check-input" type="checkbox" value=""/>
                            <span className="form-check-label"> ایجاد به عنوان قالب </span>
                        </label>
                    </form>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header">
                    <h4>حمل و نقل</h4>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <label htmlFor="product_name" className="form-label">عرض</label>
                                    <input type="text" placeholder="اینچ" className="form-control" id="product_name"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <label htmlFor="product_name" className="form-label">ارتفاع</label>
                                    <input type="text" placeholder="اینچ" className="form-control" id="product_name"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product_name" className="form-label">وزن</label>
                            <input type="text" placeholder="گرم" className="form-control" id="product_name"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product_name" className="form-label">هزینه‌های حمل و نقل</label>
                            <input type="text" placeholder="$" className="form-control" id="product_name"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card mb-4">
                <div className="card-header">
                    <h4>رسانه</h4>
                </div>
                <div className="card-body">
                    <div className="input-upload">
                        <img src="assets/imgs/theme/upload.svg" alt=""/>
                        <input className="form-control" type="file"/>
                    </div>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header">
                    <h4>سازماندهی</h4>
                </div>
                <div className="card-body">
                    <div className="row gx-2">
                        <div className="col-sm-6 mb-3">
                            <label className="form-label">دسته‌بندی</label>
                            <select className="form-select">
                                <option> خودروها </option>
                                <option> لوازم خانگی </option>
                                <option> الکترونیک </option>
                                <option> گوشی‌های هوشمند </option>
                                <option> لوازم ورزشی </option>
                                <option> نوزاد و اسباب‌بازی‌ها </option>
                            </select>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label className="form-label">زیر دسته‌بندی</label>
                            <select className="form-select">
                                <option> نیسان </option>
                                <option> هوندا </option>
                                <option> مرسدس </option>
                                <option> شورولت </option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product_name" className="form-label">برچسب‌ها</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default adminAddProductsPage