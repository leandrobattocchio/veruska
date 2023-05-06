import { Link } from "react-router-dom"
import { CollapseIcon, HeartIcon, UserIcon } from "../../../Icons"
import { useState } from "react"

const hoverAnchor = 'cursor-pointer hover:scale-110 transform transition duration-300'


function NavbarCollapse () {
    const [showCollapse, setShowCollapse] = useState(false)

    const handleCollapse = () => {
        setShowCollapse(prevState => !prevState)
    }

    return (
        <div className="flex flex-col" style={{ backgroundColor: '#e5e5e5' }}>
            <div className="flex justify-between navbar-collapse p-4">
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
                    <div className="flex flex-col items-start gap-0.5 font-black gap-1 text-xl pl-6">
                        <Link className={hoverAnchor} to='/'>Inicio</Link>
                        <Link className={hoverAnchor} to='/productos'>Productos</Link>
                        <Link className={hoverAnchor} to='/nosotros'>Nosotros</Link>
                        <Link className={hoverAnchor} to='/clientes'>Clientes</Link>
                        <Link className={hoverAnchor} to='/contacto'>Contacto</Link>
                    </div>
                )
            }
        </div>
    )
}

export default NavbarCollapse