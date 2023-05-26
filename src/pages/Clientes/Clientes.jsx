import ClientSlider from "../../components/ClientsSlider/ClientSlider"
import colaboracion1 from '../../assets/colab1.png'
import colaboracion2 from '../../assets/colab2.png'
import colaboracion3 from '../../assets/colab3.png'
import colaboracion4 from '../../assets/colab4.png'
import colaboracion5 from '../../assets/colab5.png'
import colaboracion6 from '../../assets/colab6.png'
import colaboracion7 from '../../assets/colab7.png'
import colaboracion8 from '../../assets/colab8.png'
import Faq from "../../components/FAQ/FAQ"


function Clientes() {
    return (
        <div className="w-full px-5 md:px-0 flex flex-col items-center my-10">
            <div className="flex flex-col items-center md:items-start gap-4">
                <h1 className="text-3xl font-bold text-primary-darkerblue">Clientes</h1>
                <p className="text-center md:text-start w-full text-lg">En Veruska, nuestros clientes son <b className=" font-bold text-primary-darkblue">nuestra mayor inspiración.</b> Nos encanta crear prendas llenas de significado y color para que cada mujer se sienta única y especial. Por ello, le damos <b className=" font-bold text-primary-darkblue">mucho valor</b> a lo que tienen para decir.
                </p>
            </div>
            <p className="text-3xl font-bold my-10 text-primary-darkerblue">Dicen de nosotros</p>
            <p className="text-lg md:text-xl md:w-1/2 text-center mb-10">¡Más de 2000 personas confían en Veruska! Su satisfacción, respaldada por prendas con una calidad únicas y excepcional, <p className=" font-bold text-primary-darkblue">es nuestro mayor logro.</p>
            </p>
            <ClientSlider />
            <div className="w-full my-10 md:mb-5 md:mt-0 ">
                <p className="text-center text-primary-darkerblue text-3xl font-bold mb-5 md:mb-0">Colaboraciones</p>
                <div className="md:ml-14">
                    <p className=" text-primary-darkblue font-semibold text-2xl">con Alados</p>
                    <p>- Artista Noelia Alvarez</p>
                </div>
            </div>
            <div className="flex items-center md:flex-row flex-col gap-10 w-full md:px-10 justify-around md:gap-0" >
                <img className="md:w-1/2 rounded-3xl h-full" src={colaboracion1} alt="" />
                <div className="md:w-1/2 w-full gap-5 md:gap-0 flex flex-col md:h-72 md:overflow-hidden">
                    <div className="flex gap-5 md:gap-0 w-full">
                        <div className="w-1/2  overflow-hidden">
                            <img src={colaboracion3} className="w-full md:w-2/3 rounded-3xl" alt="" />
                        </div>
                        <div className="w-1/2 flex justify-end overflow-hidden">
                            <img src={colaboracion2} className="w-full md:w-2/3 rounded-3xl" alt="" />
                        </div>
                    </div>
                    <div className="flex gap-5 md:gap-0 w-full">
                        <div className="w-1/2 overflow-hidden">
                            <img src={colaboracion4} className="w-full md:w-2/3 rounded-3xl" alt="" />
                        </div>
                        <div className="w-1/2 flex justify-end overflow-hidden">
                            <img src={colaboracion5} className="w-full md:w-2/3 rounded-3xl" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full my-10">
                <p className="md:ml-14  text-primary-darkblue font-semibold text-2xl">con Irene Mancino</p>
                <p className="md:ml-14 ">- Artista Irene Mancino</p>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-around gap-5 md:gap-10 md:px-10">
                <div className="md:w-1/2 rounded-3xl overflow-hidden"><img src={colaboracion6} className="h-full rounded-3xl" alt="" /></div>
                <div className="flex gap-5 justify-around w-full md:w-1/2">
                    <div className="md:w-1/2 rounded-3xl overflow-hidden"><img src={colaboracion7} className="h-full rounded-3xl" alt="" /></div>
                    <div className="md:w-1/2 rounded-3xl overflow-hidden"><img src={colaboracion8} className="h-full rounded-3xl" alt="" /></div>
                </div>
            </div>
            <Faq />
        </div>
    )
}

export default Clientes