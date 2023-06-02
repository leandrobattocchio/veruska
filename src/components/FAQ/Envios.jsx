import Accordion from "../Accordion/Accordion"
import { MdOutlineLocalShipping } from 'react-icons/md'

const Envios = () => {
    return (
        <>
            <div className="flex w-full mt-10 ml-8 gap-2">
                <div className="h-8 w-8">
                    <MdOutlineLocalShipping size={30} className=" text-primary-darkblue" />
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl font-bold text-primary-darkblue">Envios y entregas</p>
                </div>
            </div>
            <Accordion title={'¿Cuánto tiempo puede tomar la entrega de un pedido en Veruska?'} desc={'El tiempo de entrega de un pedido en Veruska puede variar según la disponibilidad y los acuerdos establecidos con Veronica. Te recomendamos contactar directamente con ella para obtener información precisa sobre el tiempo estimado de entrega.'} />
            <Accordion title={'¿Qué hacer en caso de que mi compra no llegue en la fecha acordada?'} desc={'Si tu compra en Veruska no llega en la fecha acordada, te sugerimos contactar directamente con Veronica para resolver cualquier inconveniente y obtener información actualizada sobre el estado de tu pedido.'} />
            <Accordion title={'¿Cómo se realizan los pagos y envíos en Veruska?'} desc={'Los detalles de pagos y envíos se acuerdan directamente con Veronica a través de comunicación telefónica. Ella te brindará toda la información necesaria y coordinará los detalles con respecto a los pagos y envíos.'} />

        </>
    )
}

export default Envios