import picture1 from './assets/picture1.png'
import picture2 from './assets/picture2.png'
import picture4 from '../Nosotros/assets/picture4.png'
import picture5 from '../Nosotros/assets/picture5.png'
import picture6 from '../Nosotros/assets/picture6.png'
import picture7 from '../Nosotros/assets/picture7.png'
import picture8 from '../Nosotros/assets/picture8.png'
import picture9 from '../Nosotros/assets/picture9.png'
import ClientSlider from '../../components/ClientsSlider/ClientSlider'
import { SlLocationPin } from 'react-icons/sl'
import { SearchIcon, HeartIcon, WhatsAppIcon, CrownIcon } from '../../components/Icons/Icon'
import { useEffect } from 'react'
import './Inicio.css'
import '../Nosotros/Nosotros.css'

const importantText = 'text-primary-darkblue'

function Inicio () {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="background-home">
            <div className={`flex items-center py-10 gap-4 items-center titulo-1`} style={{ minHeight: '70vh' }}>
                <div className="flex flex-col gap-8 w-screen welcome-home">
                    <div className='home-title'>
                        <p style={{ color: '#4e607c' }} className='text-xl font-black'>Bienvenida a</p>
                        <h1 className="text-5xl font-black text-primary-darkerblue">Veruska: Arte, Amor & Color</h1>
                    </div>
                    <p className="text-lg home-text">
                        Explora el universo de Veruska, donde el arte, el amor y el color se fusionan en prendas únicas cargadas de significado. Descubre una marca que <b className={importantText}>celebra la vida, respeta el medio ambiente y empodera a las mujeres</b>.
                        ¿Lista para unirte a nuestra comunidad?
                    </p>
                    <button style={{ backgroundColor: 'rgb(33 53 88)' }} className="w-40 h-12 rounded-xl text-lg text-white">Descubrir mas</button>
                </div>
                <div className="w-full h-full flex justify-end title-image">
                    <img src={picture1} className="w-3/4 h-full object-cover " />
                </div>
            </div>
            <div className='w-full h-20 mt-24 flex info-home-text' style={{ backgroundColor: 'rgb(33 53 88)' }}>
                <div className='w-1/4 flex text-white justify-center items-center gap-4'>
                    <SearchIcon style={{ width: '40px', height: '40px' }} />
                    <div className='flex flex-col'>
                        <p>Descubri nuestros productos</p>
                        <p>Lorem</p>
                    </div>
                </div>
                <div className='w-1/4 flex text-white justify-center items-center gap-4'>
                    <HeartIcon style={{ width: '40px', height: '40px' }} />
                    <div className='flex flex-col'>
                        <p>Agrega como favorito</p>
                        <p>Lorem</p>
                    </div>
                </div>
                <div className='w-1/4 flex text-white justify-center items-center gap-4'>
                    <WhatsAppIcon />
                    <div className='flex flex-col'>
                        <p>Contactanos por Whatsapp</p>
                        <p>Lorem</p>
                    </div>
                </div>
                <div className='w-1/4 flex text-white justify-center items-center gap-4'>
                    <CrownIcon style={{ width: '40px', height: '40px' }} />
                    <div className='flex flex-col'>
                        <p>Disfruta de tu prenda</p>
                        <p>Lorem</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-10 quienes-somos">
                <h5 className="text-4xl font-black py-6 text-primary-darkerblue">¿Quiénes somos?</h5>
                <p className="text-lg w-3/4 text-center ">
                    Veruska es un <b className={importantText}>taller de experimentación artística y textil</b> compuesto por un <b className={importantText}>equipo de mujeres apasionadas</b>. Desde 2016, creamos moda ilustrada y consolidamos un estilo propio y reconocido. Pero somos mucho más que eso. Nos comprometemos a rescatar las tradiciones y cultura de la ciudad de San Rafael, y generar oportunidades de crecimiento para las mujeres. Somos una marca que celebra la vida y la vitalidad, y que busca ser una <b className={importantText}>fuerza positiva en nuestra comunidad</b>.
                </p>
                <div className="flex justify-center gap-10 w-full py-10 quienes-somos-img">
                    <div className="flex flex-col items-center gap-2 p-2">
                        <img src={picture4} className="rounded-2xl" />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2">
                        <img src={picture5} className="rounded-2xl" />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2">
                        <img src={picture6} className="rounded-2xl" />
                    </div>
                </div>
                <div style={{ backgroundColor: '#c0d8e7' }} className=' w-full flex justify-between p-10 estar-al-tanto'>
                    <div className='w-3/5 flex flex-col justify-center items-center gap-10'>
                        <p className='text-5xl font-black text-primary-darkerblue text-center'>¿Queres estar al tanto de nuestra moda?</p>
                        <p className='text-lg px-10'>Recibí en tu correo electrónico las <b className={importantText}>mejores novedades, promociones exclusivas y contenido inspirador</b> al suscribirte a nuestro boletín. Se parte de nuestra comunidad y mantente actualizada con lo mejor de nuestra moda ilustrada y respetuosa con el medio ambiente.</p>
                        <div className='flex w-full gap-10 p-10'>
                            <input placeholder='Correo electronico...' className='rounded-3xl p-4 h-14 w-3/4 text-2xl border-black border-2' />
                            <button className='rounded-3xl h-14 w-48 text-2xl' style={{ backgroundColor: '#1d4e7f', color: '#fff' }}>Suscribirse</button>
                        </div>
                    </div>
                    <div className='w-2/5 flex justify-end'>
                        <img src={picture2} />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full que-hacemos">
                    <div className='items-center w-full flex flex-col'>
                        <h6 className="text-4xl font-black text-primary-darkerblue md:pt-10">¿Qué hacemos?</h6>
                        <div className='md:w-2/3 w-full items-center justify-center flex flex-col py-2'>
                            <p className="text-2xl py-6 w-full text-center" style={{ color: '#1d4e7f' }}>Veruska es mucho más que {`"indumentaria de diseño"`}, son prendas <b style={{ color: '#1d4e7f' }} className={`${importantText} font-extrabold`}>cargadas de significados</b>.</p>

                            <p style={{ color: '#365780' }} className='text-2xl py-2'>Diseño / Impresión / Bordado / Confección de prendas de vestir.</p>

                            <p style={{ color: '#365780' }} className='text-2xl py-2'>Generamos proyectos textiles para otras marcas y/o artistas plásticos.</p>
                        </div>
                        <p className='py-2 text-lg w-3/4 text-center'>El valor del diseño hace que Veruska sea distinto, hace que tengamos un producto de calidad. Diseñamos la moldería de nuestras prendas para generar moda inclusiva que tiene en cuenta todos los cuerpos y a todas las personas. También diseñamos todas las estampas que nuestras prendas contienen, las que luego serán estampadas por diferentes sistemas sobre nuestros tejidos. <b className={importantText}>Leer más {`>`}</b> </p>
                    </div>

                    <div className="flex justify-center gap-10 w-full py-10 quienes-somos-img">
                        <div className="flex flex-col items-center gap-2 p-2">
                            <img src={picture7} className="rounded-2xl" />
                        </div>
                        <div className="flex flex-col items-center gap-2 p-2">
                            <img src={picture8} className="rounded-2xl" />
                        </div>
                        <div className="flex flex-col items-center gap-2 p-2">
                            <img src={picture9} className="rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-5 md:px-0 flex flex-col items-center'>
                <p className="text-3xl font-bold my-10 text-primary-darkerblue">Dicen de nosotros</p>
                <p className="text-lg md:text-xl md:w-1/2 text-center mb-10">¡Más de 2000 personas confían en Veruska! Su satisfacción, respaldada por prendas con una calidad únicas y excepcional, <p className=" font-bold text-primary-darkblue">es nuestro mayor logro.</p>
                </p>
                <ClientSlider />
            </div>

            <div>
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
        </div>
    )
}

export default Inicio