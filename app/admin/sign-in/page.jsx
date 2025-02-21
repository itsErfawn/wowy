
import AdminSignInPage from '@/components/templates/admin-signin/adminSignInPage'
import AdminsModel from '@/models/admins/Admins'
import { redirect } from 'next/navigation'
import React from 'react'
async function AdminSignIn() {
    if(await AdminsModel.getSelf()){
        redirect('/admin')
    }
  return (
    <AdminSignInPage/>
  )
}

export default AdminSignIn