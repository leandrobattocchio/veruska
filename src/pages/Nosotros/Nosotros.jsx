import { SquareIcon } from "../../components/Icons"
import './Nosotros.css'

function Nosotros () {
    return (
        <div className="py-10">
            <div className="flex flex-col gap-3 py-10 nosotros">
                <h2 className="text-5xl font-black">Nosotros</h2>
                <p className="text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis esse odit vero totam numquam odio exercitationem in consectetur omnis, at quasi, expedita fugiat officiis minima aspernatur facilis laboriosam qui dolorum.</p>
            </div>
            <div className="flex py-10 justify-between nuestra-mision">
                <div className="flex flex-col w-6/12 justify-center gap-4 first">
                    <h3 className="text-3xl font-black">Nuestra mision</h3>
                    <p className="text-xl w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero delectus quibusdam expedita nihil fugit, accusamus qui quis esse totam veritatis inventore unde. Repudiandae neque veniam culpa laborum at iure officiis.</p>
                </div>
                <div className="flex flex-col nuestra-mision-fotos">
                    <div className="flex gap-3 justify-between">
                        <div>
                            <img src="https://placehold.co/385x300" />
                        </div>
                        <div>
                            <img src="https://placehold.co/385x300" />
                        </div>
                    </div>
                    <div className="py-4 object-cover">
                        <img src="https://placehold.co/790x350" />
                    </div>
                </div>
            </div>
            <div className="flex gap-20 py-4 nuestra-mision2">
                <div>
                    <img src="https://placehold.co/790x550" />
                </div>
                <div className="flex flex-col w-6/12 justify-center items-start">
                    <h4 className="text-3xl font-black">Nuestra mision</h4>
                    <p className="text-xl w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aspernatur, obcaecati quasi unde officiis similique illum autem pariatur, esse porro saepe iure optio. Tenetur magnam aperiam illum nesciunt vero temporibus?</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-10 quienes-somos">
                <h5 className="text-3xl font-black pt-10">¿Quiénes somos?</h5>
                <p className="text-xl w-3/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos mollitia dolorem, veritatis, quae dicta laborum autem ipsam minus, molestiae dolore reprehenderit consequuntur. Assumenda beatae libero illum laborum voluptatum rem.</p>
                <div className="flex justify-evenly w-full py-10 quienes-somos-img">
                    <div className="flex flex-col items-center gap-2 p-2">
                        <img src="https://placehold.co/280x280" className="rounded-full" />
                        <p className="text-2xl font-black pt-4">Lorem</p>
                        <p>lorem</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2">
                        <img src="https://placehold.co/280x280" className="rounded-full" />
                        <p className="text-2xl font-black pt-4">Lorem</p>
                        <p>lorem</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2">
                        <img src="https://placehold.co/280x280" className="rounded-full" />
                        <p className="text-2xl font-black pt-4">Lorem</p>
                        <p>lorem</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-2">
                        <img src="https://placehold.co/280x280" className="rounded-full" />
                        <p className="text-2xl font-black pt-4">Lorem</p>
                        <p>lorem</p>
                    </div>
                </div>
                <button className="flex gap-2 p-2 text-md font-black rounded-md" style={{ backgroundColor: '#dddddd' }}>Conoce al equipo <SquareIcon /></button>
                <div className="flex flex-col items-center py-24 w-full que-hacemos">
                    <h6 className="text-3xl font-black">¿Qué hacemos?</h6>
                    <div className="flex justify-evenly w-full py-10">
                        <div className="flex flex-col items-center gap-2">
                            <div>
                                <img src="https://placehold.co/280x280" />
                            </div>
                            <p className="text-2xl font-black pt-4">Lorem</p>
                            <p>lorem</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div>
                                <img src="https://placehold.co/280x280" />
                            </div>
                            <p className="text-2xl font-black pt-4">Lorem</p>
                            <p>lorem</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div>
                                <img src="https://placehold.co/280x280" />
                            </div>
                            <p className="text-2xl font-black pt-4">Lorem</p>
                            <p>lorem</p>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default Nosotros