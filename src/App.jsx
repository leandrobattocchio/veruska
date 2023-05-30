import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import AsideBar from './components/AsideBar/AsideBar'
import Loader from './components/Loader/Loader'
import { Suspense, lazy } from 'react'
const Productos = lazy(() => import('./pages/Productos/Productos'))
const Clientes = lazy(() => import('./pages/Clientes/Clientes'))
const Contacto = lazy(() => import('./pages/Contacto/Contacto'))
const Inicio = lazy(() => import('./pages/Inicio/Inicio'))
const Nosotros = lazy(() => import('./pages/Nosotros/Nosotros'))
const Error = lazy(() => import('./pages/Error/Error'))

import './App.css'
import './index.css'
import ProductInfo from './pages/Productos/components/ProductInfo/ProductInfo'


const SuspenseFallback = () => {
  return (
    <div className='flex justify-center items-center loader-container'>
      <Loader />
    </div>
  )
}


function App () {

  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Suspense fallback={<SuspenseFallback />}>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/productos/:id' element={<ProductInfo />} />
            <Route path='/clientes' element={<Clientes />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Suspense>
      </Layout>
      <Footer />
      <AsideBar />
    </BrowserRouter>
  )
}

export default App
