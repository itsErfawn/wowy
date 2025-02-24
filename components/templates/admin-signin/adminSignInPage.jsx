"use client"
import React, { useState } from 'react'
import pushAlert from '@/libs/alert/Alert';
import { useRouter } from 'next/navigation';
function AdminSignInPage() {
    const[userName,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const router=useRouter()
    const handler=async (e)=>{
        e.preventDefault()
        if(!userName || !password){
            pushAlert({title:"خطا",text:"لطفا نام کاربری و پسورد را کامل کنید",confirmButtonText:"فهمیدم",icon:"error"})
            return
        }
        const response=await fetch("/api/sign-in",{
            method:"POST",
            body: JSON.stringify({userName,password})
        })
        const data=await response.json()
        if(data.error){
            pushAlert({title:"خطا",text:data.error,confirmButtonText:"فهمیدم",icon:"error"})
            return
        }
        pushAlert({text:data.message,icon:"success",submitClass:"d-none"})
        setTimeout(() => {
            router.push('/admin')
            pushAlert({close:true})
        }, 1000);
        
    }
  return (
    <section className="content-main w-100 h-100 login_form_sec">
    <div className="card mx-auto card-login login_form">
        <div className="card-body">
            <h4 className="card-title mb-4">ورود به سیستم</h4>
            <form onSubmit={handler}>
                <div className="mb-3">
                    <input className="form-control" placeholder="نام کاربری یا ایمیل" defaultValue={userName} onChange={e=>{setUserName(e.target.value)}} type="text"/>
                </div>
                <div className="mb-3">
                    <input className="form-control" placeholder="رمز عبور" type="password" defaultValue={password} onChange={e=>{setPassword(e.target.value)}}  />
                </div>
                <div className="mb-3">
                    <a href="#" className="float-start font-sm text-muted mb-2 d-block">رمز عبور را فراموش کرده‌اید؟</a>
                </div> 
                <div className="mb-4">
                    <button type="submit" className="btn btn-primary w-100"  > ورود </button>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default AdminSignInPage