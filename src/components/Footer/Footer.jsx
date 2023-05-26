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
                        <Link to={'https://api.whatsapp.com/send?phone=54123456789'} target='_blank'><BsWhatsapp size={30} className=' text-primary-darkerblue' /></Link>
                    </div>
                </div>
                <div className='flex gap-5 text-base'>
                    <div className='flex flex-col text-primary-black font-extralight'>
                        <p className='font-semibold '>Inicio</p>

                    </div>
                    <div className='flex flex-col text-primary-black font-extralight'>
                        <p className='font-semibold '>Productos</p>
                        <p>Destacados</p>
                        <p>Nuestros</p>
                    </div>
                    <div className='flex flex-col text-primary-black font-extralight'>
                        <p className='font-semibold '>Nosotros</p>
                        <p>Mision/Vision</p>
                        <p>Que hacemos</p>
                        <p>Quienes somos</p>
                    </div>
                    <div className='flex flex-col text-primary-black font-extralight'>
                        <p className='font-semibold '>Clientes</p>
                        <p>Dicen de nosotros</p>
                        <p>Colaboraciones</p>
                        <p>Preguntas frecuentes</p>
                    </div>
                    <div className='flex flex-col text-primary-black font-extralight '>
                        <p className='font-semibold '>Contacto</p>
                        <p>Formulario</p>
                        <p>Medios</p>
                        <p>Sucursal</p>
                    </div>
                </div>
                <div className='flex md:hidden gap-4 items-center'>
                    <Link to={'https://www.facebook.com/people/Veruska-arte-y-moda/100063818371438/'} target='_blank'><AiOutlineInstagram size={36} className=' text-primary-darkerblue' /></Link>
                    <Link to={'https://www.instagram.com/veruskadiseno/?hl=es-la'} target='_blank'><BsFacebook size={32} className=' text-primary-darkerblue' /></Link>
                    <Link to={'https://api.whatsapp.com/send?phone=54123456789'} target='_blank'><BsWhatsapp size={32} className=' text-primary-darkerblue' /></Link>
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