import { HiOutlinePhone } from 'react-icons/hi'
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook, BsWhatsapp } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Contacto = () => {
    return (
        <div className='flex flex-col items-center my-5 px-5 gap-5 md:px-0'>
            <div className='flex flex-col items-center md:items-start gap-3 mb-5 w-full'>
                <h1 className='text-center font-bold text-3xl text-primary-darkerblue'>Contacto</h1>
                <p className='text-lg'>En Veruska, valoramos la opinión de nuestros clientes. Si tienes <b className='text-primary-darkblue'>alguna pregunta, comentario o preocupación.</b> Contáctanos y te responderemos lo antes posible.</p>
            </div>
            <div className='w-full flex flex-col md:flex-row md:justify-around gap-5 md:gap-1'>
                <form action="" className='flex flex-col gap-5 items-start px-5 py-6 bg-primary-ligtherblue rounded-xl shadow-lg shadow-black md:w-1/2'>
                    <p className='font-bold text-lg text-primary-darkerblue'>Formulario de contacto</p>
                    <div className='flex justify-between gap-4 w-full'>
                        <input type="text" name="" id="" placeholder="Nombre" className='bg-primary-ligtherblue outline-none border-b border-black w-1/2' />
                        <input type="text" name="" id="" placeholder="Apellido" className='bg-primary-ligtherblue outline-none border-b border-black w-1/2' />
                    </div>
                    <div className='flex justify-between gap-4 w-full'>
                        <input type="text" name="" id="" placeholder="Mail" className='bg-primary-ligtherblue outline-none border-b border-black w-1/2' />
                        <input type="text" name="" id="" placeholder="Telefono celular" className='bg-primary-ligtherblue outline-none border-b border-black w-1/2' />
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <label htmlFor="" className='text-lg text-primary-black'>¿Como te podemos ayudar?</label>
                        <textarea name="" placeholder='Mensaje' rows="3" className='w-full bg-primary-ligtherblue outline-none border-b border-black'></textarea>
                    </div>
                </form>
                <div className=' bg-primary-darkerblue text-white rounded-2xl flex flex-col gap-5 items-start p-8 md:w-2/5'>
                    <p className='font-bold text-lg self-center md:text-2xl'>Nuestros medios de contacto</p>
                    <div className='flex gap-3 items-center text-lg text-medium'><HiOutlinePhone size={26} /> <p>+54123456789</p></div>
                    <div className='flex gap-3 items-center text-lg text-medium'><AiOutlineMail size={26} /> <p>ejemplo@email.com</p></div>
                    <p className='font-semibold text-lg mt-4'>Nuestras redes sociales</p>
                    <div className='flex justify-start gap-4 items-center'>
                        <Link to={'https://www.instagram.com/veruskadiseno/?hl=es-la'} target='_blank'><AiOutlineInstagram size={36} /></Link>
                        <Link to={'https://www.facebook.com/people/Veruska-arte-y-moda/100063818371438/'} target='_blank'><BsFacebook size={30} /></Link>
                        <Link target='_blank' to={'https://api.whatsapp.com/send?phone=54123456789'}><BsWhatsapp size={30} /></Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center md:flex-row md:my-5'>
                <div className='flex flex-col items-center gap-3 md:gap-10 my-5 md:w-1/2'>
                    <h3 className='font-bold text-center text-2xl md:text-3xl text-primary-darkerblue'>Nuestra Sucursal</h3>
                    <p className='md:w-2/3 text-center'>&quot;Nos enorgullece tener una presencia física en la comunidad. Nuestra sucursal es un espacio acogedor donde puedes encontrarnos para recibir asesoramiento personalizado, conocer nuestros productos y realizar compras en persona. ¡Te esperamos con los brazos abiertos en nuestra sucursal!&quot;</p>
                    <p className='flex gap-2 items-center md:text-lg text-primary-darkblue'><SlLocationPin /> San Rafael, Mendoza | Argentina</p>
                </div>
                <div className='rounded-3xl overflow-hidden w-full md:w-1/2 mx-auto'>
                    <iframe
                        height="450"
                        className='w-full'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6077412494365!2d-68.33175612477096!3d-34.61407925804459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967907ebfe744011%3A0x4046a8a406646ab3!2sVERUSKA!5e0!3m2!1ses!2sar!4v1685125450114!5m2!1ses!2sar">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacto