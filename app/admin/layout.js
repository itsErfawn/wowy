import './main.css'
export default async function AdminLayout({ children ,params}) {
  return (
      <>
      <div style={{width:"100vw",height:"100vh"}} >
        {children}
      </div>
      </>
  );
}
