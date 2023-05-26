import Accordion from "../../components/Accordion/Accordion"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { RxUpdate } from 'react-icons/rx'
const preguntas = [{ id: 1, title: 'Proceso de compra', description: 'Preguntas relacionadas con el proceso de selección y compra de productos.', icon: <AiOutlineShoppingCart size={30} className=" text-primary-darkblue" /> }, { id: 2, title: 'Envíos y entregas', description: 'Preguntas sobre tiempo de entrega, costos de envío y políticas de entrega.', icon: <MdOutlineLocalShipping size={30} className=" text-primary-darkblue" /> }, { id: 3, title: 'Cambios y devoluciones', description: 'Preguntas sobre las políticas de devolución y cambios', icon: <RxUpdate size={30} className="text-primary-darkblue" /> }]

const Faq = () => {
    return (
        <>
            <p className="text-3xl font-bold my-10 text-primary-darkerblue">Preguntas frecuentes</p>
            <div className="flex w-full gap-10">
                <div className="w-1/3 md:flex flex-col gap-3 hidden">
                    {preguntas.map((p) =>
                        <div className="flex bg-primary-ligtherblue rounded-3xl shadow-xl shadow-black w-full p-4 gap-2" key={p.id}>
                            <div>
                                {p.icon}
                            </div>
                            <div className="flex flex-col">
                                <p className="text-lg font-bold text-primary-darkblue">{p.title}</p>
                                <p className="text-sm text-primary-black">{p.description}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="md:w-2/3 w-full bg-primary-ligtherblue rounded-3xl shadow-xl shadow-black mb-10">
                    
                        <div className="flex w-full mt-10 ml-8 gap-2">
                            <div className="bg-black h-8 w-8"></div>
                            <div className="flex flex-col">
                                <p className="text-xl font-bold">Lorem</p>
                                <p>Lorem</p>
                            </div>
                        </div>
                        <Accordion title={'¿Cómo puedo hacer una compra en su tienda online?'} desc={''} />
                        <Accordion title={'¿Cómo puedo pagar mi compra?'} desc={''}/>
                        <Accordion title={'¿Cuánto tiempo tarda en llegar mi pedido?'} desc={''}/>
                        <Accordion title={'¿Puedo hacer un cambio o devolución de mi compra?'} desc={''}/>
                        <Accordion title={'¿Cómo puedo hacer una compra en su tienda online?'} desc={''}/>
                    
                </div>
            </div>
        </>
    )
}

export default Faq