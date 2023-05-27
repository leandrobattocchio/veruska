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
            <Accordion title={'¿Cómo puedo hacer una compra en su tienda online?'} desc={'Lorem ipsum dolor sit amet consectetur. Aliquet ultrices maecenas eget varius. Convallis dolor semper cras id odio vitae mattis ut nisl. Vitae tempor elit tempor risus etiam adipiscing faucibus sit rhoncus. Nibh nullam nibh mi aliquet lectus. Ornare morbi sed.'} />
            <Accordion title={'¿Cómo puedo pagar mi compra?'} desc={'Lorem ipsum dolor sit amet consectetur. Aliquet ultrices maecenas eget varius. Convallis dolor semper cras id odio vitae mattis ut nisl. Vitae tempor elit tempor risus etiam adipiscing faucibus sit rhoncus. Nibh nullam nibh mi aliquet lectus. Ornare morbi sed.'} />
            <Accordion title={'¿Cuánto tiempo tarda en llegar mi pedido?'} desc={'Lorem ipsum dolor sit amet consectetur. Aliquet ultrices maecenas eget varius. Convallis dolor semper cras id odio vitae mattis ut nisl. Vitae tempor elit tempor risus etiam adipiscing faucibus sit rhoncus. Nibh nullam nibh mi aliquet lectus. Ornare morbi sed.'} />
            <Accordion title={'¿Puedo hacer un cambio o devolución de mi compra?'} desc={'Lorem ipsum dolor sit amet consectetur. Aliquet ultrices maecenas eget varius. Convallis dolor semper cras id odio vitae mattis ut nisl. Vitae tempor elit tempor risus etiam adipiscing faucibus sit rhoncus. Nibh nullam nibh mi aliquet lectus. Ornare morbi sed.'} />
            <Accordion title={'¿Cómo puedo hacer una compra en su tienda online?'} desc={'Lorem ipsum dolor sit amet consectetur. Aliquet ultrices maecenas eget varius. Convallis dolor semper cras id odio vitae mattis ut nisl. Vitae tempor elit tempor risus etiam adipiscing faucibus sit rhoncus. Nibh nullam nibh mi aliquet lectus. Ornare morbi sed.'} />

        </>
    )
}

export default Cambios