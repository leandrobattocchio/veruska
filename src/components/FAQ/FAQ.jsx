import { useState } from "react"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { RxUpdate } from 'react-icons/rx'
import Compras from "./Compras"
import Envios from "./Envios"
import Cambios from "./Cambios"
const preguntas = [{ id: 1, title: 'Proceso de compra', description: 'Preguntas relacionadas con el proceso de selección y compra de productos.', icon: <AiOutlineShoppingCart size={30} className=" text-primary-darkblue" /> }, { id: 2, title: 'Envíos y entregas', description: 'Preguntas sobre tiempo de entrega, costos de envío y políticas de entrega.', icon: <MdOutlineLocalShipping size={30} className=" text-primary-darkblue" /> }, { id: 3, title: 'Cambios y devoluciones', description: 'Preguntas sobre las políticas de devolución y cambios', icon: <RxUpdate size={30} className="text-primary-darkblue" /> }]

const Faq = () => {
    const [Section,setSection] = useState('compra')
    return (
        <>
            <p className="text-3xl font-bold my-10 text-primary-darkerblue">Preguntas frecuentes</p>
            <div className="flex flex-col md:flex-row w-full gap-10">
                <div className="md:w-1/3 flex md:flex-col gap-3 ">
                    {preguntas.map((p) =>
                        <div className="cursor-pointer flex flex-col md:flex-row items-center md:items-start bg-primary-ligtherblue rounded-3xl shadow-xl shadow-black w-full p-4 gap-2" key={p.id} onClick={()=>{p.title == 'Proceso de compra' ? setSection('compra') : p.title == 'Envíos y entregas' ? setSection('envios') : setSection('cambios')}}>
                            <div>
                                {p.icon}
                            </div>
                            <div className="flex flex-col">
                                <p className="md:text-lg font-bold text-primary-darkblue">{p.title}</p>
                                <p className="text-xs md:text-sm text-primary-black">{p.description}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="md:w-2/3 w-full bg-primary-ligtherblue rounded-3xl shadow-xl shadow-black mb-10">
                    {Section == 'compra' && 
                    <Compras />}
                    {Section == 'envios' && 
                    <Envios />}
                    {Section == 'cambios' && 
                    <Cambios />}
                </div>
            </div>
        </>
    )
}

export default Faq