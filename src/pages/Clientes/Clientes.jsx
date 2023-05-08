import Accordion from "../../components/Accordion/Accordion"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const clientes = [{ name: "Lorem", action: "Lorem" }, { name: "Lorem", action: "Lorem" }, { name: "Lorem", action: "Lorem" }]
const preguntas = [{ id: 1 }]
function Clientes() {
    return (
        <div className="w-full px-5 md:px-0 flex flex-col items-center my-10">
            <div className="flex flex-col items-center md:items-start gap-4">
                <h1 className="text-3xl font-bold">Clientes</h1>
                <p className="text-center md:text-start w-full">Lorem ipsum dolor sit amet consectetur. Imperdiet id in blandit accumsan facilisis scelerisque ornare morbi orci. At nunc volutpat viverra in mollis ut odio nulla. Cursus amet et dui.</p>
            </div>
            <p className="text-xl md:text-3xl font-bold my-10">Que dicen nuestros clientes</p>
            <div className="mb-40 w-full">
                <div className="flex">
                    <div className="hidden md:flex gap-5">
                        {clientes.map((client) =>
                            <div className="flex flex-col items-start gap-5" key={client.action}>
                                <div className="p-7 border-2 rounded-3xl border-black relative">
                                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur. Quam velit cras lacus tempus nunc eget quis aliquam quis. Egestas faucibus magna leo iaculis ultrices quis est sed. Scelerisque aliquam mattis cras nascetur elit.</p>
                                    <div className="absolute h-1.5 -bottom-1  left-5" style={{ width: '2.35rem', backgroundColor: '#f5f5f5' }}></div>
                                    <div className="absolute bg-black h-7 w-0.5 -bottom-7 mb-1 rounded-s-2xl left-7 -rotate-45" style={{ borderTopRightRadius: '1rem', borderBottomLeftRadius: '1rem' }}></div>
                                    <div className="absolute bg-black h-7 w-0.5 -bottom-7 mb-1 rounded-e-xl rounded-r-xl left-12 rotate-45" style={{ borderTopLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-20 w-20 rounded-full overflow-hidden flex justify-center items-center">
                                        <img src="https://placehold.co/80" alt="" />
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
                                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Quam velit cras lacus tempus nunc eget quis aliquam quis. Egestas faucibus magna leo iaculis ultrices quis est sed. Scelerisque aliquam mattis cras nascetur elit.</p>
                                            <div className="absolute h-1.5 -bottom-1  left-5" style={{ width: '2.35rem',backgroundColor: '#f5f5f5' }}></div>
                                            <div className="absolute bg-black h-7 w-0.5 -bottom-7 mb-1 rounded-s-2xl left-7 -rotate-45" style={{ borderTopRightRadius: '1rem', borderBottomLeftRadius: '1rem' }}></div>
                                            <div className="absolute bg-black h-7 w-0.5 -bottom-7 mb-1 rounded-e-xl rounded-r-xl left-12 rotate-45" style={{ borderTopLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}></div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-20 w-20 rounded-full overflow-hidden flex justify-center items-center">
                                                <img src="https://placehold.co/80" alt="" />
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
            <div className="flex items-center md:flex-row flex-col gap-5 md:gap-0">
                <img className="md:w-1/2 md:order-1 order-2" src="https://placehold.co/550x450" alt="" />
                <div className="md:w-1/2 md:p-10 flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 order-1 md:order-2">
                    <h3 className="font-bold md:text-3xl text-2xl">Reseñas</h3>
                    <p className="text-center md:text-start">Lorem ipsum dolor sit amet consectetur. Nibh nec sagittis orci sit dui varius. Dictum neque sem vulputate quam non. Non non </p>
                    <p className="text-4xl font-extrabold hidden md:inline-block">+99</p>
                </div>
            </div>
            <p className="text-3xl font-bold my-10">Preguntas frecuentes</p>
            <div className="flex w-full gap-10">
                <div className="w-1/3 md:flex flex-col gap-3 hidden">
                    {preguntas.map((p) =>
                        <div className="flex bg-neutral-300 w-full p-4 gap-2" key={p.id}>
                            <div className="bg-black h-8 w-8"></div>
                            <div className="flex flex-col">
                                <p className="text-xl font-bold">Lorem</p>
                                <p>Lorem</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="md:w-2/3 w-full bg-neutral-300 mb-10">
                    <div className="flex w-full mt-10 ml-8 gap-2">
                        <div className="bg-black h-8 w-8"></div>
                        <div className="flex flex-col">
                            <p className="text-xl font-bold">Lorem</p>
                            <p>Lorem</p>
                        </div>
                    </div>
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                </div>
            </div>
        </div>
    )
}

export default Clientes