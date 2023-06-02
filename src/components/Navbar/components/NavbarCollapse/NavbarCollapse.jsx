import { Link, useLocation } from "react-router-dom"
import { CancelIcon, CollapseIcon, HeartIcon } from "../../../Icons"
import { useState } from "react"
import logo from '../../../../assets/logo.png'
import './NavbarCollapse.css'

const hoverAnchor = 'cursor-pointer hover:scale-110 transform transition duration-300 text-lg'


function NavbarCollapse () {
    const [showCollapse, setShowCollapse] = useState(false)
    const { pathname } = useLocation()
    const handleCollapse = () => {
        setShowCollapse(prevState => !prevState)
    }

    return (
        <>
            <div className="flex flex-col navbar-collapse w-full z-55 fixed" style={{ boxShadow: '0px 0px 2px 2px #919da6', color: '#233556', backgroundColor: '#fff' }}>
                <div className="flex justify-between p-4">
                    <div className="flex gap-4">
                        <div className="flex items-center cursor-pointer" onClick={handleCollapse}>
                            <CollapseIcon />
                        </div>
                        <img src={logo} className="w-34 h-10" />
                    </div>
                </div>
            </div>
            {
                showCollapse && (
                    <div className="flex flex-col items-start gap-0.5 font-black gap-1 text-xl p-4 fixed w-2/3 h-full navbar-collapse z-55" style={{ backgroundColor: '#dddddd' }}>
                        <button className="self-start pt-4" onClick={handleCollapse}><CancelIcon /></button>
                        <div className="flex flex-col pl-1">
                            <Link onClick={handleCollapse} className={`${hoverAnchor} ${'/' === pathname ? 'border-b-4 border-indigo-900' : ''}`} to='/'>Inicio</Link>
                            <Link onClick={handleCollapse} className={`${hoverAnchor} ${'/productos' === pathname ? 'border-b-4 border-indigo-900' : ''}`} to='/productos'>Productos</Link>
                            <Link onClick={handleCollapse} className={`${hoverAnchor} ${'/nosotros' === pathname ? 'border-b-4 border-indigo-900' : ''}`} to='/nosotros'>Nosotros</Link>
                            <Link onClick={handleCollapse} className={`${hoverAnchor} ${'/clientes' === pathname ? 'border-b-4 border-indigo-900' : ''}`} to='/clientes'>Clientes</Link>
                            <Link onClick={handleCollapse} className={`${hoverAnchor} ${'/contacto' === pathname ? 'border-b-4 border-indigo-900' : ''}`} to='/contacto'>Contacto</Link>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default NavbarCollapse