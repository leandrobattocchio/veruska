import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './components/Footer.jsx'
import Contacto from './pages/Contacto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <App />
    <Contacto/>
    <Footer/>
  </React.Fragment>,
)
