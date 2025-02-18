import React from 'react'

function adminProductPage() {
  return (
    <section className="content-main">
    <div className="content-header">
        <div>
            <h2 className="content-title card-title">لیست محصولات</h2>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</p>
        </div>
        <div>
            <a href="#" className="btn btn-light rounded font-md">صادر کردن</a>
            <a href="#" className="btn btn-light rounded  font-md">وارد کردن</a>
            <a href="#" className="btn btn-primary btn-sm rounded">ایجاد جدید</a>
        </div>
    </div>
    <div className="card mb-4">
        <header className="card-header">
            <div className="row align-items-center">
                <div className="col col-check flex-grow-0">
                    <div className="form-check ms-2">
                        <input className="form-check-input" type="checkbox" defaultValue=""/>
                    </div>
                </div>
                <div className="col-md-3 col-12 me-auto mb-md-0 mb-3">
                    <select className="form-select">
                        <option >همه دسته بندی ها</option>
                        <option>الکترونیک</option>
                        <option>پوشاک</option>
                        <option>خودرو</option>
                    </select>
                </div>
                <div className="col-md-2 col-6">
                    <input type="date" defaultValue="02.05.2021" className="form-control"/>
                </div>
                <div className="col-md-2 col-6">
                    <select className="form-select">
                        <option >وضعیت</option>
                        <option>فعال</option>
                        <option>غیرفعال</option>
                        <option>نمایش همه</option>
                    </select>
                </div>
            </div>
        </header> 
        <div className="card-body">
            <article className="itemlist">
                <div className="row align-items-center">
                    <div className="col col-check flex-grow-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                        <a className="itemside" href="#">
                            <div className="left">
                                <img src="/admin/imgs/items/1.jpg" className="img-sm img-thumbnail" alt="Item"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-0">تی شرت مردانه سایز متوسط</h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price"> <span>34.50</span> </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                        <span className="badge rounded-pill alert-success">فعال</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                        <span>02.11.2021</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                        <a href="#" className="btn btn-sm font-sm rounded btn-brand">
                            <i className="material-icons md-edit"></i> ویرایش
                        </a>
                        <a href="#" className="btn btn-sm font-sm btn-light rounded">
                            <i className="material-icons md-delete_forever"></i> حذف
                        </a>
                    </div>
                </div> 
            </article> 
            <article className="itemlist">
                <div className="row align-items-center">
                    <div className="col col-check flex-grow-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                        <a className="itemside" href="#">
                            <div className="left">
                                <img src="/admin/imgs/items/2.jpg" className="img-sm img-thumbnail" alt="Item"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-0">ژاکت هودی هلیونیک</h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price"> <span>990.99</span> </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                        <span className="badge rounded-pill alert-success">فعال</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                        <span>02.11.2021</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                        <a href="#" className="btn btn-sm font-sm rounded btn-brand">
                            <i className="material-icons md-edit"></i> ویرایش
                        </a>
                        <a href="#" className="btn btn-sm font-sm btn-light rounded">
                            <i className="material-icons md-delete_forever"></i> حذف
                        </a>
                    </div>
                </div> 
            </article> 
            <article className="itemlist">
                <div className="row align-items-center">
                    <div className="col col-check flex-grow-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                        <a className="itemside" href="#">
                            <div className="left">
                                <img src="/admin/imgs/items/3.jpg" className="img-sm img-thumbnail" alt="Item"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-0">لباس کوتاه توری با چرم مصنوعی</h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price"> <span>76.99</span> </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                        <span className="badge rounded-pill alert-warning">بایگانی شده</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                        <span>02.11.2021</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                        <a href="#" className="btn btn-sm font-sm rounded btn-brand">
                            <i className="material-icons md-edit"></i> ویرایش
                        </a>
                        <a href="#" className="btn btn-sm font-sm btn-light rounded">
                            <i className="material-icons md-delete_forever"></i> حذف
                        </a>
                    </div>
                </div> 
            </article> 
            <article className="itemlist">
                <div className="row align-items-center">
                    <div className="col col-check flex-grow-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                        <a className="itemside" href="#">
                            <div className="left">
                                <img src="/admin/imgs/items/4.jpg" className="img-sm img-thumbnail" alt="Item"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-0">کیف مسافرتی مردانه فنمیس</h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price"> <span>18.00</span> </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                        <span className="badge rounded-pill alert-success">فعال</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                        <span>02.11.2021</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                        <a href="#" className="btn btn-sm font-sm rounded btn-brand">
                            <i className="material-icons md-edit"></i> ویرایش
                        </a>
                        <a href="#" className="btn btn-sm font-sm btn-light rounded">
                            <i className="material-icons md-delete_forever"></i> حذف
                        </a>
                    </div>
                </div> 
            </article> 
            <article className="itemlist">
                <div className="row align-items-center">
                    <div className="col col-check flex-grow-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                        <a className="itemside" href="#">
                            <div className="left">
                                <img src="/admin/imgs/items/3.jpg" className="img-sm img-thumbnail" alt="Item"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-0">شلوارک جین مردانه</h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price"> <span>76.99</span> </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                        <span className="badge rounded-pill alert-danger">غیرفعال</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                        <span>02.11.2021</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                        <a href="#" className="btn btn-sm font-sm rounded btn-brand">
                            <i className="material-icons md-edit"></i> ویرایش
                        </a>
                        <a href="#" className="btn btn-sm font-sm btn-light rounded">
                            <i className="material-icons md-delete_forever"></i> حذف
                        </a>
                    </div>
                </div> 
            </article> 
            <article className="itemlist">
                <div className="row align-items-center">
                    <div className="col col-check flex-grow-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                        <a className="itemside" href="#">
                            <div className="left">
                                <img src="/admin/imgs/items/5.jpg" className="img-sm img-thumbnail" alt="Item"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-0">کیف پول چرمی قهوه ای</h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price"> <span>18.00</span> </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                        <span className="badge rounded-pill alert-warning">بایگانی شده</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                        <span>02.11.2021</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                        <a href="#" className="btn btn-sm font-sm rounded btn-brand">
                            <i className="material-icons md-edit"></i> ویرایش
                        </a>
                        <a href="#" className="btn btn-sm font-sm btn-light rounded">
                            <i className="material-icons md-delete_forever"></i> حذف
                        </a>
                    </div>
                </div> 
            </article> 
            <article className="itemlist">
                <div className="row align-items-center">
                    <div className="col col-check flex-grow-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                        <a className="itemside" href="#">
                            <div className="left">
                                <img src="/admin/imgs/items/6.jpg" className="img-sm img-thumbnail" alt="Item"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-0">صندلی مدرن برای دکوراسیون داخلی</h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price"> <span>76.99</span> </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                        <span className="badge rounded-pill alert-success">فعال</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                        <span>02.11.2021</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                        <a href="#" className="btn btn-sm font-sm rounded btn-brand">
                            <i className="material-icons md-edit"></i> ویرایش
                        </a>
                        <a href="#" className="btn btn-sm font-sm btn-light rounded">
                            <i className="material-icons md-delete_forever"></i> حذف
                        </a>
                    </div>
                </div> 
            </article> 
            <article className="itemlist">
                <div className="row align-items-center">
                    <div className="col col-check flex-grow-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                        <a className="itemside" href="#">
                            <div className="left">
                                <img src="/admin/imgs/items/4.jpg" className="img-sm img-thumbnail" alt="Item"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-0">لباس کوتاه توری با چرم مصنوعی</h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price"> <span>18.00</span> </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                        <span className="badge rounded-pill alert-success">فعال</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                        <span>02.11.2021</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                        <a href="#" className="btn btn-sm font-sm rounded btn-brand">
                            <i className="material-icons md-edit"></i> ویرایش
                        </a>
                        <a href="#" className="btn btn-sm font-sm btn-light rounded">
                            <i className="material-icons md-delete_forever"></i> حذف
                        </a>
                    </div>
                </div> 
            </article> 
            <article className="itemlist">
                <div className="row align-items-center">
                    <div className="col col-check flex-grow-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                        <a className="itemside" href="#">
                            <div className="left">
                                <img src="/admin/imgs/items/3.jpg" className="img-sm img-thumbnail" alt="Item"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-0">لباس کوتاه توری با چرم مصنوعی</h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price"> <span>76.99</span> </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                        <span className="badge rounded-pill alert-success">فعال</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                        <span>02.11.2021</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                        <a href="#" className="btn btn-sm font-sm rounded btn-brand">
                            <i className="material-icons md-edit"></i> ویرایش
                        </a>
                        <a href="#" className="btn btn-sm font-sm btn-light rounded">
                            <i className="material-icons md-delete_forever"></i> حذف
                        </a>
                    </div>
                </div> 
            </article> 
            <article className="itemlist">
                <div className="row align-items-center">
                    <div className="col col-check flex-grow-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-8 flex-grow-1 col-name">
                        <a className="itemside" href="#">
                            <div className="left">
                                <img src="/admin/imgs/items/4.jpg" className="img-sm img-thumbnail" alt="کالا"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-0">لباس کوتاه توری با چرم مصنوعی</h6>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price"> <span>180.99</span> </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                        <span className="badge rounded-pill alert-success">فعال</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                        <span>02.11.2021</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                        <a href="#" className="btn btn-sm font-sm rounded btn-brand">
                            <i className="material-icons md-edit"></i> ویرایش
                        </a>
                        <a href="#" className="btn btn-sm font-sm btn-light rounded">
                            <i className="material-icons md-delete_forever"></i> حذف
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </div>
    <div className="pagination-area mt-30 mb-50">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-start">
                <li className="page-item active"><a className="page-link" href="#">01</a></li>
                <li className="page-item"><a className="page-link" href="#">02</a></li>
                <li className="page-item"><a className="page-link" href="#">03</a></li>
                <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">16</a></li>
                <li className="page-item"><a className="page-link" href="#"><i className="material-icons md-chevron_left"></i></a></li>
            </ul>
        </nav>
    </div>
</section> 
  )
}

export default adminProductPage