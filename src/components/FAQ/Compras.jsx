import Accordion from "../Accordion/Accordion"
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Compras = () => {
    return (
        <>
            <div className="flex w-full mt-10 ml-8 gap-2">
                <div className="h-8 w-8">
                    <AiOutlineShoppingCart size={30} className=" text-primary-darkblue" />
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl font-bold text-primary-darkblue">Proceso de compra</p>
                </div>
            </div>
            <Accordion title={'¿Cómo puedo obtener productos de la tienda Veruska?'} desc={'Veronica, la dueña de la tienda, ofrece productos a través de su web informativa. Puedes contactar directamente con ella para coordinar la compra y entrega.'} />
            <Accordion title={'¿Qué hacer si tengo dudas o consultas sobre los productos de Veruska?'} desc={'Si tienes alguna pregunta o duda sobre los productos de Veruska, te invito a contactar a Veronica. Ella estará encantada de ayudarte y brindarte la información que necesites.'} />
            <Accordion title={'¿Cuál es la dirección de la tienda Veruska?'} desc={'La tienda Veruska se encuentra en Cnel. Ricardo Day 47, San Rafael, Mendoza 5600, Argentina.'} />
            <Accordion title={'¿Cuáles son los horarios de atención en Veruska?'} desc={'Veronica está siempre disponible para atender tus consultas y coordinar tus pedidos. No dudes en contactarla en cualquier momento.'} />
            <Accordion title={'¿Puedo realizar un pedido por teléfono en Veruska?'} desc={'Todos los pedidos se coordinan directamente con Veronica, la dueña de Veruska. Te recomendamos comunicarte con ella para realizar tu pedido.'} />

        </>
    )
}

export default Compras