import Script from 'next/script';
import './main.css'
import Header from '@/components/templates/header/Header';
import PreLoad from '@/components/templates/preLoad/PreLoad';
import Footer from '@/components/templates/footer/Footer';
export const metadata = {
  title: "واوی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header/>
        <main className='main' >
        {children}
        </main>
        <PreLoad/>
        <Footer/>

        <Script src="/js/vendor/modernizr-3.6.0.min.js"></Script>
        <Script src="/js/vendor/jquery-3.7.1.min.js"></Script>
        <Script src="/js/vendor/jquery-migrate-3.3.0.min.js"></Script>
        <Script src="/js/vendor/bootstrap.bundle.min.js"></Script>
        <Script src="/js/plugins/slick.js"></Script>
        <Script src="/js/plugins/jquery.syotimer.min.js"></Script>
        <Script src="/js/plugins/wow.js"></Script>
        <Script src="/js/plugins/jquery-ui.js"></Script>
        <Script src="/js/plugins/perfect-scrollbar.js"></Script>
        <Script src="/js/plugins/magnific-popup.js"></Script>
        <Script src="/js/plugins/select2.min.js"></Script>
        <Script src="/js/plugins/waypoints.js"></Script>
        <Script src="/js/plugins/counterup.js"></Script>
        <Script src="/js/plugins/jquery.countdown.min.js"></Script>
        <Script src="/js/plugins/images-loaded.js"></Script>
        <Script src="/js/plugins/isotope.js"></Script>
        <Script src="/js/plugins/scrollup.js"></Script>
        <Script src="/js/plugins/jquery.vticker-min.js"></Script>
        <Script src="/js/main.js?v=5.4"></Script>
      </body>
    </html>
  );
}
