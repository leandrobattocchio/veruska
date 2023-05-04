import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import AsideBar from './components/AsideBar/AsideBar'
import { Suspense, lazy } from 'react'
const Productos = lazy(() => import('./pages/Productos/Productos'))
const Clientes = lazy(() => import('./pages/Clientes/Clientes'))
const Contacto = lazy(() => import('./pages/Contacto/Contacto'))
const Inicio = lazy(() => import('./pages/Inicio/Inicio'))
const Nosotros = lazy(() => import('./pages/Nosotros/Nosotros'))
import './App.css'
import './index.css'


function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/clientes' element={<Clientes />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </Suspense>
      </Layout>
      <Footer />
      <AsideBar />
    </BrowserRouter>
  )
}

export default App
