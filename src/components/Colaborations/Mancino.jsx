import colaboracion6 from '../../assets/colab6.png'
import colaboracion7 from '../../assets/colab7.png'
import colaboracion8 from '../../assets/colab8.png'

const Mancino = () => {
  return (
    <>
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
    </>
  )
}

export default Mancino