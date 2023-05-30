import { Link, useLocation } from "react-router-dom"
import { HeartIcon, HouseIcon, MessageIcon, PeopleIcon, PhoneIcon, ShoppingBagIcon } from "../Icons"
import { NavbarCollapse } from "./components/"
import logo from '../../assets/logo.png'
import './Navbar.css'

const hoverAnchor = 'cursor-pointer transform transition duration-300 flex gap-1 items-center justify-between'


function Navbar () {

    const { pathname } = useLocation()
    const backgroundColor = pathname === '/' ? 'rgb(198,220,234)' : ''


    return (
        <>
            <div className="bg-white flex justify-between px-20 items-center h-16 navbar p-2 fixed w-full z-50" style={{ boxShadow: '0px 0px 2px 2px #919da6', color: '#233556', backgroundColor }}>
                <div className="flex justify-center items-center flex-row gap-2 text-lg">
                    <img src={logo} />
                </div>
                <div className="flex justify-center items-center gap-0.5 font-black gap-6 text-lg">
                    <Link className={`${hoverAnchor} ${'/' === pathname ? 'border-b-4 border-indigo-900' : ''}`} to='/'>
                        <HouseIcon />
                        Inicio
                    </Link>
                    <Link className={`${hoverAnchor} ${'/productos' === pathname ? 'border-b-4 border-indigo-900' : ''}`} to='/productos'>
                        <ShoppingBagIcon />
                        Productos
                    </Link>
                    <Link className={`${hoverAnchor} ${'/nosotros' === pathname ? 'border-b-4 border-indigo-900' : ''}`} to='/nosotros'>
                        <PeopleIcon />
                        Nosotros
                    </Link>
                    <Link className={`${hoverAnchor} ${'/clientes' === pathname ? 'border-b-4 border-indigo-900' : ''}`} to='/clientes'>
                        <MessageIcon />
                        Clientes
                    </Link>
                    <Link className={`${hoverAnchor} ${'/contacto' === pathname ? 'border-b-4 border-indigo-900' : ''}`} to='/contacto'>
                        <PhoneIcon />
                        Contacto
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <HeartIcon className={hoverAnchor} />
                    <p className="font-black text-lg">Favoritos</p>
                </div>
            </div>
            <NavbarCollapse />
        </>
    )
}

export default Navbar