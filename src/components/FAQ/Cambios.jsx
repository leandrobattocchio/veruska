import { RxUpdate } from 'react-icons/rx'
import Accordion from "../Accordion/Accordion"

const Cambios = () => {
    return (
        <>
            <div className="flex w-full mt-10 ml-8 gap-2">
                <div className="h-8 w-8">
                    <RxUpdate size={30} className=" text-primary-darkblue" />
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl font-bold text-primary-darkblue">Cambios y devoluciones</p>
                </div>
            </div>
            <Accordion title={'¿Existe una sección de contacto en la tienda Veruska?'} desc={'Sí, puedes encontrar todos los datos de contacto de Veronica en la sección de contacto de la página web de Veruska.'} />
            <Accordion title={'¿Cómo puedo saber si los talles son reales o comerciales?'} desc={'Tenemos las medidas reales de todos los talles en comparación con los talles comerciales. Te recomendamos ponerte en contacto con Veronica para obtener más información.'} />
            <Accordion title={'¿Cómo puedo contactar con el servicio al cliente de Veruska?'} desc={'Para cualquier consulta o solicitud de ayuda, puedes contactar directamente a Veronica, la dueña de Veruska. Ella estará encantada de brindarte la asistencia que necesites.'} />
            

        </>
    )
}

export default Cambios