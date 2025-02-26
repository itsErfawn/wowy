"use client"
import React, { useState } from 'react'
import pushAlert from '@/libs/alert/Alert'
import AdminBrands from './AdminBrands'
function AdminBrandPageComponent(brands) {
    const [open,setOpen]=useState(false)
    const [name,setName]=useState('')
    const [image,setImage]=useState(null)
    const [isLoad, setIsLoad] = useState(false);
    const [brandsItem,setBrandsItem]=useState(brands)
    const submitHandler=async () => {
        setIsLoad(true)
        const reqData=new FormData()
        reqData.append('name',name)
        reqData.append('image',image)
        const res=await fetch('/api/brands',{
            method:"POST",
            body:reqData
        })
        const data=await res.json()
        if (data.error) {
            pushAlert({ title: "خطا", text: data.error, icon: "error", confirmButtonText: "فهمیدم" });
            setIsLoad(false);
            return;
        }
        pushAlert({ title: "موفق", text: data.success, icon: "success", confirmButtonText: "فهمیدم" });
        setIsLoad(false);
        setName('')
        setImage(null)
        setOpen(false)
        const res2 = await fetch('/api/brands');
        const data2  = await res2.json();
        setBrandsItem(data2)
    }
  return (
    <>
        <section className="content-main">
    <div className="content-header">
        <div>
            <h2 className="content-title card-title">برند</h2>
            <p>مدیریت برند و فروشنده</p>
        </div>
        <div>
            <div className="btn btn-primary" onClick={e=>{setOpen(true)}} ><i className="text-muted material-icons md-post_add"></i>افزودن برند جدید</div>
        </div>
    </div>
    <div className="card mb-4">
        <header className="card-header">
            <div className="row gx-3">
                <div className="col-lg-4 mb-lg-0 mb-15 me-auto">
                    <input type="text" placeholder="جستجو..." className="form-control"/>
                </div>
            </div>
        </header>
        <AdminBrands {...{brands:brandsItem,setBrandsItem}} />
    </div> 
</section> 
<div className={`brand_modal_wrapper ${open?'active':''} `}>
<div className={`modal fade ${open?'show':''} `} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">افزودن برند</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={e=>{setOpen(false)}} ></button>
      </div>
      <div className="modal-body">
        <form>
        <div className="mb-3">
  <label htmlFor="recipient-name" className="col-form-label">نام برند:</label>
  <input type="text" className="form-control" id="recipient-name" placeholder="اینجا بنویسید" value={name || ''} onChange={e => setName(e.target.value)} />
</div>
<div className="mb-3">
  <label htmlFor="message-text" className="col-form-label">تصویر:</label>
  <div className="input-upload">
    <img src="assets/imgs/theme/upload.svg" alt="" />
    <input className="form-control" type="file"  onChange={e => setImage(e.target.files[0])} />
  </div>
</div>

        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={e=>{setOpen(false)}} >لغو</button>
        <button type="button" className="btn btn-primary btn_sbumit" onClick={submitHandler}>
        {isLoad ? <span className="catLoaderBtn" style={{width:"15px",height:"15px"}} ></span> : "ثبت"}
        </button>
      </div>
    </div>
  </div>
</div>

</div>
    </>
  )
}

export default AdminBrandPageComponent