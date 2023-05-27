import colaboracion1 from '../../assets/colab1.png'
import colaboracion2 from '../../assets/colab2.png'
import colaboracion3 from '../../assets/colab3.png'
import colaboracion4 from '../../assets/colab4.png'
import colaboracion5 from '../../assets/colab5.png'

const Alados = () => {
  return (
    <>
    <div className="w-full my-10 md:mb-5 md:mt-0 ">
                <p className="text-center text-primary-darkerblue text-3xl font-bold mb-5 md:mb-0">Colaboraciones</p>
                <div className="md:ml-14">
                    <p className=" text-primary-darkblue font-semibold text-2xl">con Alados</p>
                    <p>- Artista Noelia Alvarez</p>
                </div>
            </div>
            <div className="flex items-center md:flex-row flex-col gap-10 w-full md:px-10" >
                <img className="md:w-3/5 rounded-3xl h-full" src={colaboracion1} alt="" />
                <div className="md:w-1/2 w-full  gap-10 md:gap-4 flex flex-col md:overflow-hidden">
                    <div className="flex gap-5 h-1/2 w-full">
                        <div className="w-1/2 h-full flex justify-center items-center overflow-hidden rounded-3xl">
                            <img src={colaboracion5} className="w-full" alt="" />
                        </div>
                        <div className="w-1/2 h-full flex justify-center items-center overflow-hidden rounded-3xl">
                            <img src={colaboracion2} className="w-full " alt="" />
                        </div>
                    </div>
                    <div className="flex gap-5 h-1/2 w-full">
                        <div className="w-1/2 flex justify-center items-center h-full overflow-hidden rounded-3xl">
                            <img src={colaboracion4} className="w-full" alt="" />
                        </div>
                        <div className="w-1/2 flex justify-center items-center h-full overflow-hidden rounded-3xl">
                            <img src={colaboracion3} className="w-full " alt="" />
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Alados