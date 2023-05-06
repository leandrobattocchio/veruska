import { HiOutlinePhone } from 'react-icons/hi'
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook, BsWhatsapp } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'

const Contacto = () => {
    return (
        <div className='flex flex-col items-center my-5 px-5 md:px-0'>
            <div className='flex flex-col items-center md:items-start gap-3 mb-5 w-full'>
                <h1 className='text-center font-bold text-3xl'>Contacto</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Imperdiet id in blandit accumsan facilisis scelerisque ornare morbi orci. At nunc volutpat viverra in mollis ut.</p>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-2 md:gap-1'>
                <form action="" className='flex flex-col gap-5 items-start px-5 py-6 bg-neutral-200 md:w-3/5'>
                    <p className='font-bold text-lg'>Formulario de contacto</p>
                    <div className='flex justify-between gap-4 w-full'>
                        <input type="text" name="" id="" placeholder="Nombre" className='bg-neutral-200 outline-none border-b border-black w-1/2' />
                        <input type="text" name="" id="" placeholder="Apellido" className='bg-neutral-200 outline-none border-b border-black w-1/2' />
                    </div>
                    <div className='flex justify-between gap-4 w-full'>
                        <input type="text" name="" id="" placeholder="Mail" className='bg-neutral-200 outline-none border-b border-black w-1/2' />
                        <input type="text" name="" id="" placeholder="Telefono celular" className='bg-neutral-200 outline-none border-b border-black w-1/2' />
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <label htmlFor="">¿Como te podemos ayudar?</label>
                        <textarea name="" rows="3" className='w-full bg-neutral-200 outline-none border-b border-black'></textarea>
                    </div>
                </form>
                <div className='bg-neutral-200 flex flex-col gap-5 items-start p-10 md:w-2/5'>
                    <p className='font-bold text-lg self-center md:text-2xl'>Nuestros medios de contacto</p>
                    <div className='flex gap-3 items-center text-lg text-medium'><HiOutlinePhone size={26} /> <p>+54123456789</p></div>
                    <div className='flex gap-3 items-center text-lg text-medium'><AiOutlineMail size={26} /> <p>ejemplo@email.com</p></div>
                    <p className='font-bold text-lg mt-4'>Nuestras redes sociales</p>
                    <div className='flex justify-start gap-4 items-center'>
                        <AiOutlineInstagram size={36} />
                        <BsFacebook size={30} />
                        <BsWhatsapp size={30} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center md:flex-row md:my-5'>
                <div className='flex flex-col items-center gap-3 md:gap-5 my-5 md:w-1/2'>
                    <h3 className='font-bold text-center text-2xl md:text-3xl'>Nuestra Sucursal</h3>
                    <p className='md:w-2/3'>Lorem ipsum dolor sit amet consectetur. Imperdiet id in blandit accumsan facilisis scelerisque ornare morbi orci. At nunc volutpat viverra in mollis ut.</p>
                    <p className='flex gap-2 items-center md:text-lg'><SlLocationPin /> San Rafael, Mendoza | Argentina</p>
                </div>
                <div>
                    <img src="https://placehold.co/620" alt="Imagen" />
                </div>
            </div>
        </div>
    )
}

export default Contacto