import { SlLocationPin } from 'react-icons/sl'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='w-full flex flex-col md:px-10 px-5 gap-5 py-5 bg-neutral-200'>
            <div className='flex flex-col md:flex-row md:gap-36 gap-5 items-center md:items-start'>
                <div className='flex flex-col items-center md:items-start justify-end gap-5'>
                    <img src="https://placehold.co/45" alt="Logo" />
                    <div className='hidden md:flex gap-4 items-center'>
                        <AiOutlineInstagram size={36} />
                        <BsFacebook size={30} />
                        <BsWhatsapp size={30} />
                    </div>
                </div>
                <div className='flex gap-5 text-base'>
                    <div className='flex flex-col '>
                        <p className='font-semibold '>Lorem</p>
                        <p>Lorem</p>
                        <p>Lorem</p>
                        <p>Lorem</p>
                    </div>
                    <div className='flex flex-col '>
                        <p className='font-semibold '>Lorem</p>
                        <p>Lorem</p>
                        <p>Lorem</p>
                        <p>Lorem</p>
                    </div>
                    <div className='flex flex-col '>
                        <p className='font-semibold '>Lorem</p>
                        <p>Lorem</p>
                        <p>Lorem</p>
                        <p>Lorem</p>
                    </div>
                </div>
                <div className='flex md:hidden gap-4 items-center'>
                    <AiOutlineInstagram size={38} />
                    <BsFacebook size={32} />
                    <BsWhatsapp size={32} />
                </div>
            </div>
            <div className='hidden md:inline-block w-full h-px bg-black'></div>
            <div className='flex md:flex-row flex-col md:justify-center items-center md:items-start gap-3 text-sm'>
                <p>Copyright © 2023 Veruska. Todos los derechos reservados</p>
                <p className='flex items-center gap-2 -order-1 md:order-2'><SlLocationPin /> San Rafael, Mendoza | Argentina</p>
            </div>
        </div>
    )
}

export default Footer