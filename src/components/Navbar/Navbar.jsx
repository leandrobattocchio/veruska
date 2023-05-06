import { Link } from "react-router-dom"
import { HeartIcon, UserIcon } from "../Icons"
import { NavbarCollapse } from "./components/"
import './Navbar.css'

const hoverAnchor = 'cursor-pointer hover:scale-110 transform transition duration-300'

function Navbar () {

    return (
        <>
            <div className="flex justify-around items-center h-16 mb-4 navbar">
                <div className="flex justify-center items-center flex-row gap-2 text-xl">
                    <p className="py-2 px-1 font-bold text-sm" style={{ backgroundColor: '#d9d9d9' }}>LOGO</p>
                    <p className="font-black">NOMBRE</p>
                </div>
                <div className="flex justify-center items-center gap-0.5 font-black gap-6 text-xl">
                    <Link className={hoverAnchor} to='/'>Inicio</Link>
                    <Link className={hoverAnchor} to='/productos'>Productos</Link>
                    <Link className={hoverAnchor} to='/nosotros'>Nosotros</Link>
                    <Link className={hoverAnchor} to='/clientes'>Clientes</Link>
                    <Link className={hoverAnchor} to='/contacto'>Contacto</Link>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <HeartIcon className={hoverAnchor} />
                    <UserIcon className={hoverAnchor} />
                </div>
            </div>
            <NavbarCollapse />
        </>
    )
}

export default Navbar