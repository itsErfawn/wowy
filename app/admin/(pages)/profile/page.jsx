import adminBootstrap from '@/Bootstrap/admin-bootstrap'
import AdminProfileComponent from '@/components/templates/admin-profile/AdminProfileComponent'
import React from 'react'

async function adminProfilePage() {
    const adminData=await adminBootstrap.profile()
  return (
    <AdminProfileComponent {...{adminData}} />
  )
}

export default adminProfilePage