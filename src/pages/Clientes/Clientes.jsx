import ClientSlider from "../../components/ClientsSlider/ClientSlider"
import Faq from "../../components/FAQ/FAQ"
import Alados from "../../components/Colaborations/Alados"
import Mancino from "../../components/Colaborations/Mancino"
import { useEffect } from "react"


function Clientes () {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="w-full px-5 md:px-0 flex flex-col items-center ">
            <div className="flex flex-col items-center md:items-start gap-4">
                <h1 className="text-3xl font-bold text-primary-darkerblue">Clientes</h1>
                <p className="text-center md:text-start w-full text-lg">En Veruska, nuestros clientes son <b className=" font-bold text-primary-darkblue">nuestra mayor inspiración.</b> Nos encanta crear prendas llenas de significado y color para que cada mujer se sienta única y especial. Por ello, le damos <b className=" font-bold text-primary-darkblue">mucho valor</b> a lo que tienen para decir.
                </p>
            </div>
            <p className="text-3xl font-bold my-10 text-primary-darkerblue">Dicen de nosotros</p>
            <p className="text-lg md:text-xl md:w-1/2 text-center mb-10">¡Más de 2000 personas confían en Veruska! Su satisfacción, respaldada por prendas con una calidad únicas y excepcional, <p className=" font-bold text-primary-darkblue">es nuestro mayor logro.</p>
            </p>
            <ClientSlider />
            {/* Colaborations */}
            <Alados />
            <Mancino />
            <Faq />
        </div>
    )
}

export default Clientes