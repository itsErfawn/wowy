import React from 'react'

function adminCategoriesPage() {
  return (
    <section className="content-main">
    <div className="content-header">
        <div>
            <h2 className="content-title card-title">دسته‌بندی‌ها</h2>
            <p>افزودن، ویرایش یا حذف یک دسته‌بندی</p>
        </div>
        <div>
            <input type="text" placeholder="جستجوی دسته‌بندی‌ها" className="form-control bg-white"/>
        </div>
    </div>
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-md-3">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="product_name" className="form-label">نام</label>
                            <input type="text" placeholder="اینجا تایپ کنید" className="form-control" id="product_name"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product_slug" className="form-label">نامک</label>
                            <input type="text" placeholder="اینجا تایپ کنید" className="form-control" id="product_slug"/>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">والد</label>
                            <select className="form-select">
                                <option>لباس‌ها</option>
                                <option>تی‌شرت‌ها</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">توضیحات</label>
                            <textarea placeholder="اینجا تایپ کنید" className="form-control"></textarea>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary">ایجاد دسته‌بندی</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-9">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""/>
                                        </div>
                                    </th>
                                    <th>شناسه</th>
                                    <th>نام</th>
                                    <th>توضیحات</th>
                                    <th>نامک</th>
                                    <th>ترتیب</th>
                                    <th className="text-end">عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""/>
                                        </div>
                                    </td>
                                    <td>21</td>
                                    <td><b>لباس‌های مردانه</b></td>
                                    <td>لباس‌های مردانه</td>
                                    <td>/men</td>
                                    <td>1</td>
                                    <td className="text-end">
                                        <div className="dropdown">
                                            <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                                <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                                <a className="dropdown-item text-danger" href="#">حذف</a>
                                            </div>
                                        </div> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""/>
                                        </div>
                                    </td>
                                    <td>2</td>
                                    <td><b>مد زنان</b></td>
                                    <td>مد برای زنان</td>
                                    <td>/women</td>
                                    <td>2</td>
                                    <td className="text-end">
                                        <div className="dropdown">
                                            <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                                <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                                <a className="dropdown-item text-danger" href="#">حذف</a>
                                            </div>
                                        </div> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""/>
                                        </div>
                                    </td>
                                    <td>3</td>
                                    <td><b>لباس‌های کودکان</b></td>
                                    <td>لباس برای کودکان</td>
                                    <td>/kids</td>
                                    <td>3</td>
                                    <td className="text-end">
                                        <div className="dropdown">
                                            <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                                <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                                <a className="dropdown-item text-danger" href="#">حذف</a>
                                            </div>
                                        </div> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><i className="material-icons md-subdirectory_arrow_left text-muted"></i></td>
                                    <td>4</td>
                                    <td><b>هدایای داغ</b></td>
                                    <td>هدایای داغ</td>
                                    <td>/gifts</td>
                                    <td>4</td>
                                    <td className="text-end">
                                        <div className="dropdown">
                                            <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                                <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                                <a className="dropdown-item text-danger" href="#">حذف</a>
                                            </div>
                                        </div> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><i className="material-icons md-subdirectory_arrow_left text-muted"></i></td>
                                    <td>5</td>
                                    <td><b>الکترونیک</b></td>
                                    <td>الکترونیک</td>
                                    <td>/electr</td>
                                    <td>5</td>
                                    <td className="text-end">
                                        <div className="dropdown">
                                            <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                                <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                                <a className="dropdown-item text-danger" href="#">حذف</a>
                                            </div>
                                        </div> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""/>
                                        </div>
                                    </td>
                                    <td>6</td>
                                    <td><b>لوازم جانبی</b></td>
                                    <td>لوازم جانبی</td>
                                    <td>/accessories</td>
                                    <td>6</td>
                                    <td className="text-end">
                                        <div className="dropdown">
                                            <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                                <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                                <a className="dropdown-item text-danger" href="#">حذف</a>
                                            </div>
                                        </div> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""/>
                                        </div>
                                    </td>
                                    <td>7</td>
                                    <td><b>جواهرات</b></td>
                                    <td>جواهرات</td>
                                    <td>/jewel</td>
                                    <td>7</td>
                                    <td className="text-end">
                                        <div className="dropdown">
                                            <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                                <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                                <a className="dropdown-item text-danger" href="#">حذف</a>
                                            </div>
                                        </div> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""/>
                                        </div>
                                    </td>
                                    <td>8</td>
                                    <td><b>دکوراسیون داخلی</b></td>
                                    <td>دکوراسیون داخلی</td>
                                    <td>/interior</td>
                                    <td>8</td>
                                    <td className="text-end">
                                        <div className="dropdown">
                                            <a href="#" data-bs-toggle="dropdown" className="btn btn-light rounded btn-sm font-sm"> <i className="material-icons md-more_horiz"></i> </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">مشاهده جزئیات</a>
                                                <a className="dropdown-item" href="#">ویرایش اطلاعات</a>
                                                <a className="dropdown-item text-danger" href="#">حذف</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
</section>
  )
}

export default adminCategoriesPage