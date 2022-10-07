import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {
  const Location = useLocation()

  const LocationNow = Location.pathname

  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-700 px-5 py-10'>
          <Link to="/">
            <h2 className='text-white font-black text-4xl text-center'>CRM REACT</h2>
          </Link>    
            
          <nav className='mt-10 text-white text-xl font-semibold'>
              <Link 
              className={`${LocationNow === '/' ? 'text-blue-300' : 'text-white'} text-wxl block mt-2 hover:text-blue-200 transition-all`} 
              to="/">CLientes</Link>
              <Link 
              className={`${LocationNow === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-wxl block mt-2 hover:text-blue-200 transition-all`} 
              to="/clientes/nuevo">Nuevo Cliente</Link>
          </nav>
        </aside>

        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout