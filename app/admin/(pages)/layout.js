
import Script from 'next/script';
import '../main.css'
import OverLay from '@/components/modules/overLay/OverLay';
import SideBar from '@/components/modules/sideBar/SideBar';
import AdminHeader from '@/components/modules/adminHeader/AdminHeader';
import AdminFooter from '@/components/modules/adminFooter/AdminFooter';
export default async function AdminDashboardLayout({ children}) {

  return (
      <>
          <OverLay/>
          <SideBar/>
        <main className='main-wrap' >
          <AdminHeader/>
        {children}
        <AdminFooter/>
        </main>
    <Script src="/admin/js/vendors/jquery-3.5.1.min.js"></Script>
    <Script src="/admin/js/vendors/bootstrap.bundle.min.js"></Script>
    <Script src="/admin/js/vendors/select2.min.js"></Script>
    <Script src="/admin/js/vendors/perfect-scrollbar.js"></Script>
    <Script src="/admin/js/vendors/jquery.fullscreen.min.js"></Script>
    <Script src="/admin/js/vendors/chart.js"></Script>
    <Script src="/admin/js/main.js" type="text/javascript"></Script>
    <Script src="/admin/js/custom-chart.js" type="text/javascript"></Script>
      </>
  );
}
