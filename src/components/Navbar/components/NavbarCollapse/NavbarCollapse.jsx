import { Link } from "react-router-dom"
import { CancelIcon, CollapseIcon, HeartIcon, UserIcon } from "../../../Icons"
import { useState } from "react"
import './NavbarCollapse.css'

const hoverAnchor = 'cursor-pointer hover:scale-110 transform transition duration-300 text-lg'


function NavbarCollapse () {
    const [showCollapse, setShowCollapse] = useState(false)

    const handleCollapse = () => {
        setShowCollapse(prevState => !prevState)
    }

    return (
        <div className="flex flex-col navbar-collapse" style={{ backgroundColor: '#e5e5e5' }}>
            <div className="flex justify-between p-4">
                <div className="flex gap-4">
                    <div className="flex items-center cursor-pointer" onClick={handleCollapse}>
                        <CollapseIcon />
                    </div>
                    <p className="font-black flex items-center">LOGO</p>
                </div>
                <div className="flex gap-4">
                    <HeartIcon />
                    <UserIcon />
                </div>
            </div>
            {
                showCollapse && (
                    <div className="flex flex-col items-start gap-0.5 font-black gap-1 text-xl pl-4 absolute w-2/3 h-full navbarr-collapse" style={{ backgroundColor: '#dddddd' }}>
                        <button className="self-start pt-4" onClick={handleCollapse}><CancelIcon /></button>
                        <div className="flex flex-col pl-1">
                            <Link onClick={handleCollapse} className={hoverAnchor} to='/'>Inicio</Link>
                            <Link onClick={handleCollapse} className={hoverAnchor} to='/productos'>Productos</Link>
                            <Link onClick={handleCollapse} className={hoverAnchor} to='/nosotros'>Nosotros</Link>
                            <Link onClick={handleCollapse} className={hoverAnchor} to='/clientes'>Clientes</Link>
                            <Link onClick={handleCollapse} className={hoverAnchor} to='/contacto'>Contacto</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default NavbarCollapse