import { SlLocationPin } from 'react-icons/sl'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook, BsWhatsapp } from 'react-icons/bs'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full flex flex-col md:px-10 px-5 gap-5 py-5 bg-primary-ligtherblue shadow-xl shadow-black'>
            <div className='flex flex-col md:flex-row md:gap-36 gap-5 items-center md:items-start'>
                <div className='flex flex-col items-center md:items-start justify-end gap-5'>
                    <img src={logo} className='w-11/12' alt="Logo" />
                    <div className='hidden md:flex gap-4 items-center'>
                        <Link to={'https://www.facebook.com/people/Veruska-arte-y-moda/100063818371438/'} target='_blank'><AiOutlineInstagram size={36} className=' text-primary-darkerblue' /></Link>
                        <Link to={'https://www.instagram.com/veruskadiseno/?hl=es-la'} target='_blank'><BsFacebook size={30} className=' text-primary-darkerblue' /></Link>
                        <Link to={'https://api.whatsapp.com/send?phone=5492604547200'} target='_blank'><BsWhatsapp size={30} className=' text-primary-darkerblue' /></Link>
                    </div>
                </div>
                <div className='flex gap-3 text-base'>
                    <div className='flex flex-col text-xs md:text-base text-primary-black font-extralight'>
                        <Link to={'/'} onClick={() => window.scrollTo(0, 0)}>
                            <p className='font-semibold '>Inicio</p>
                        </Link>
                    </div>
                    <div className='flex flex-col text-xs md:text-base text-primary-black font-extralight'>
                        <Link to={'/productos'} onClick={() => window.scrollTo(0, 0)}>
                            <p className='font-semibold '>Productos</p>
                        </Link>
                        <Link to={'/productos'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Destacados</p>
                        </Link>
                        <Link to={'/productos'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Nuestros</p>
                        </Link>
                    </div>
                    <div className='flex flex-col text-xs md:text-base text-primary-black font-extralight'>
                        <Link to={'/nosotros'} onClick={() => window.scrollTo(0, 0)}>
                            <p className='font-semibold '>Nosotros</p>
                        </Link>
                        <Link to={'/nosotros'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Mision/Vision</p>
                        </Link>
                        <Link to={'/nosotros'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Que hacemos</p>
                        </Link>
                        <Link to={'/nosotros'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Quienes somos</p>
                        </Link>
                    </div>
                    <div className='flex flex-col text-xs md:text-base text-primary-black font-extralight'>
                        <Link to={'/clientes'} onClick={() => window.scrollTo(0, 0)}>
                            <p className='font-semibold '>Clientes</p>
                        </Link>
                        <Link to={'/clientes'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Dicen de nosotros</p>
                        </Link>
                        <Link to={'/clientes'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Colaboraciones</p>
                        </Link>
                        <Link to={'/clientes'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Preguntas frecuentes</p>
                        </Link>
                    </div>
                    <div className='flex flex-col text-xs md:text-base text-primary-black font-extralight '>
                        <Link to={'/contacto'} onClick={() => window.scrollTo(0, 0)}>
                            <p className='font-semibold '>Contacto</p>
                        </Link>
                        <Link to={'/contacto'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Formulario</p>
                        </Link>
                        <Link to={'/contacto'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Medios</p>
                        </Link>
                        <Link to={'/contacto'} onClick={() => window.scrollTo(0, 0)}>
                            <p>Sucursal</p>
                        </Link>
                    </div>
                </div>
                <div className='flex md:hidden gap-4 items-center'>
                    <Link to={'https://www.facebook.com/people/Veruska-arte-y-moda/100063818371438/'} target='_blank'><AiOutlineInstagram size={36} className=' text-primary-darkerblue' /></Link>
                    <Link to={'https://www.instagram.com/veruskadiseno/?hl=es-la'} target='_blank'><BsFacebook size={32} className=' text-primary-darkerblue' /></Link>
                    <Link to={'https://api.whatsapp.com/send?phone=5492604547200'} target='_blank'><BsWhatsapp size={32} className=' text-primary-darkerblue' /></Link>
                </div>
            </div>
            <div className='hidden md:inline-block w-full h-px bg-primary-darkerblue'></div>
            <div className='flex md:flex-row flex-col md:justify-center items-center md:items-start gap-3 text-sm text-primary-black'>
                <p>Copyright © 2023 Veruska. Todos los derechos reservados</p>
                <p className='flex items-center gap-2 -order-1 md:order-2 text-primary-black'><SlLocationPin /> San Rafael, Mendoza | Argentina</p>
            </div>
        </div>
    )
}

export default Footer