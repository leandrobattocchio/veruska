import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cliente1 from '../../assets/client1.png'
import cliente2 from '../../assets/client2.png'
import cliente3 from '../../assets/client3.png'

const clientes = [{ name: "Andrea", action: "Usuaria Entrevistada", message: "Desde que descubrí Veruska, mi armario está lleno de prendas con estilo y personalidad. ¡Siempre recibo halagos cuando las uso!", image: cliente1 }, { name: "Daniela", action: "Usuaria Entrevistada", message: "La calidad y diseño de las prendas de Veruska son excepcionales. Me encanta saber que estoy comprando piezas únicas y de producción sostenible.", image: cliente2 }, { name: "Patricia", action: "Usuaria Entrevistada", message: "Veruska se ha convertido en mi marca favorita de ropa. Cada prenda es una obra de arte con una historia detrás. ¡Me encanta llevar algo con tanto significado y estilo!", image: cliente3 }]
const ClientSlider = () => {
    return (
        <div className="md:mb-40 mb-20 w-full">
            <div className="flex">
                <div className="hidden md:flex gap-5">
                    {clientes.map((client) =>
                        <div className="flex flex-col w-1/3 items-start gap-5" key={client.action}>
                            <div className="p-7 border-2 flex items-center h-32 rounded-3xl border-black relative">
                                <p className="text-xs">&quot;{client.message}&quot;
                                </p>
                                <div className="absolute h-1.5 -bottom-1  left-5" style={{ width: '2.35rem', backgroundColor: '#f5f5f5' }}></div>
                                <div className="absolute bg-black h-7 w-0.5 -bottom-7 mb-1 rounded-s-2xl left-7 -rotate-45" style={{ borderTopRightRadius: '1rem', borderBottomLeftRadius: '1rem' }}></div>
                                <div className="absolute bg-black h-7 w-0.5 -bottom-7 mb-1 rounded-e-xl rounded-r-xl left-12 rotate-45" style={{ borderTopLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-20 w-20 rounded-full overflow-hidden flex justify-center items-center">
                                    <img src={client.image} alt="" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <p className="text-2xl font-bold">{client.name}</p>
                                    <p className="text-lg">{client.action}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex md:hidden w-full">
                    <Swiper pagination={true} spaceBetween={10} slidesPerView={1}>
                        {clientes.map((client) =>
                            <SwiperSlide key={client.action} className="w-full">
                                <div className="flex flex-col items-start gap-5">
                                    <div className="relative px-4 py-10 border-2 rounded-3xl border-black">
                                        <p className="text-sm">&quot;{client.message}&quot;</p>
                                        <div className="absolute h-1.5 -bottom-1  left-5" style={{ width: '2.35rem', backgroundColor: '#f5f5f5' }}></div>
                                        <div className="absolute bg-black h-7 w-0.5 -bottom-7 mb-1 rounded-s-2xl left-7 -rotate-45" style={{ borderTopRightRadius: '1rem', borderBottomLeftRadius: '1rem' }}></div>
                                        <div className="absolute bg-black h-7 w-0.5 -bottom-7 mb-1 rounded-e-xl rounded-r-xl left-12 rotate-45" style={{ borderTopLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-20 w-20 rounded-full overflow-hidden flex justify-center items-center">
                                            <img src={client.image} alt="" />
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <p className="text-2xl font-bold">{client.name}</p>
                                            <p className="text-lg">{client.action}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default ClientSlider