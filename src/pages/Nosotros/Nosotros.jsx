import { useEffect } from 'react'
import picture1 from './assets/picture1.png'
import picture2 from './assets/picture2.png'
import picture3 from './assets/picture3.png'
import picture4 from './assets/picture4.png'
import picture5 from './assets/picture5.png'
import picture6 from './assets/picture6.png'
import picture7 from './assets/picture7.png'
import picture8 from './assets/picture8.png'
import picture9 from './assets/picture9.png'

import './Nosotros.css'

const importantText = 'text-primary-darkblue'


function Nosotros () {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div >
            <div className="flex flex-col gap-3 nosotros">
                <h1 className="text-4xl font-black text-primary-darkerblue">Nosotros</h1>
                <h2 className="text-3xl text-indigo-900">Arte, amor & color</h2>
                <p className="text-lg">
                    Somos un taller de experimentación artística y textil, un equipo de <b className={importantText}>mujeres apasionadas</b> y una marca que <b className={importantText}>celebra la vida</b>.
                </p>
                <p className="text-lg">
                    Creamos moda ilustrada desde 2016, lo que nos ha permitido consolidar un <b className={importantText}>estilo propio y reconocido</b>, elegir procesos respetuosos con el medio ambiente, generar oportunidades de crecimiento para las mujeres y vivir orgullosas de que nuestras prendas irradien vitalidad por tanto tiempo. <b className={importantText}>Leer más {`>`}</b>
                </p>
            </div>
            <div className="flex py-10 gap-20 justify-between nuestra-mision">
                <div className="flex flex-col w-6/12 justify-center gap-4 first">
                    <h3 className="text-4xl font-black text-primary-darkerblue">Nuestra mision</h3>
                    <p className="text-lg py-4 w-full">
                        Nos apasiona crear moda ilustrada y respetuosa con el medio ambiente. Pero nuestra misión va más allá de eso. Nos comprometemos a rescatar las <b className={importantText}>tradiciones</b> y <b className={importantText}>cultura</b> de la ciudad de San Rafael, generando <b className={importantText}>oportunidades de crecimiento para las mujeres</b> y promoviendo su <b className={importantText}>empoderamiento</b>. En todo lo que hacemos, buscamos ser una marca que <b className={importantText}>celebra la vida y la vitalidad</b>.
                    </p>
                </div>
                <div className="flex flex-col nuestra-mision-fotos">
                    <div className="flex gap-3 justify-between">
                        <div>
                            <img className="rounded-2xl" src={picture1} />
                        </div>
                        <div >
                            <img className="rounded-2xl" src={picture2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-20 py-4 nuestra-mision2">
                <div>
                    <img className="rounded-3xl" src={picture3} />
                </div>
                <div className="flex flex-col w-6/12 justify-center items-start">
                    <h4 className="text-4xl font-black py-4 text-primary-darkerblue">Nuestra vision</h4>
                    <p className="text-lg py-4 w-full">
                        Convertirnos en un referente en la industria de la moda ilustrada. Queremos ser reconocidos no solo por nuestras prendas únicas y respetuosas con el medio ambiente, sino también por nuestra <b className={importantText}>profunda responsabilidad social</b> y compromiso con la comunidad de San Rafael. Buscamos ser una marca que <b className={importantText}>inspira, empodera y celebra la vida.</b>
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-10 quienes-somos">
                <h5 className="text-4xl font-black py-6 text-primary-darkerblue">¿Quiénes somos?</h5>
                <p className="text-lg w-full text-center ">
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




        </div>
    )
}

export default Nosotros