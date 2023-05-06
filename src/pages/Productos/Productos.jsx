import { SquareIcon } from "../../components/Icons"
import { Filters, ProductosMoible } from "./components/"
import './Productos.css'

const PRODUCTOS = [
    {
        id: 1,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 2,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 3,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 4,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 5,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 6,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 7,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 8,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 9,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 10,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 11,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    },
    {
        id: 12,
        title: 'Nombre producto',
        price: 20,
        img: 'https://placehold.co/250x300'
    }
]

function Productos () {
    return (
        <div className="py-4">
            <div className="flex flex-col gap-3 pt-10 productos">
                <h2 className="text-5xl font-black">Productos</h2>
                <p className="text-2xl">Lorem ipsum dolor sit amet consecte, adipisicing elit. Debitis esse odit vero totam numquam odio exercitationem in consectetur omnis, at quasi, expedita fugiat officiis minima aspernatur facilis laboriosam qui dolorum.</p>
            </div>
            <div className="flex flex-col gap-3 py-10 destacados">
                <h3 className="text-3xl font-black text-center">Destacados</h3>
                <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis veritatis nihil explicabo quam incidunt culpa, ratione laboriosam odio corporis eaque quidem molestiae temporibus adipisci iste tempora nesciunt quod quas!</p>
            </div>
            <div className="flex gap-4 productos-fotos">
                <div>
                    <img src="https://placehold.co/900x700" />
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                        <img src="https://placehold.co/650x300" />
                    </div>
                    <div className="flex gap-4 py-4">
                        <div>
                            <img src="https://placehold.co/317x383" />
                        </div>
                        <div>
                            <img src="https://placehold.co/317x383" />
                        </div>
                    </div>
                </div>
            </div>
            <ProductosMoible />
            <div className="flex flex-col gap-3 py-10 nuestros-productos">
                <h3 className="text-3xl font-black text-center">Nuestros productos</h3>
                <p className="text-2xl">Lorem ipsum dolor sit amet consecte adipisicing elit. Quia quis veritatis nihil explicabo quam incidunt culpa, ratione laboriosam odio corporis eaque quidem molestiae temporibus adipisci iste tempora nesciunt quod quas!</p>
            </div>
            <div>
                <Filters />
                <div className="py-4 productos-precio" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1rem' }}>
                    {PRODUCTOS.map((producto) => {
                        return (
                            <div key={producto.id} className="p-1 flex flex-col justify-center content-center">
                                <img src={producto.img} alt={`${producto.title} image`} />
                                <p className="text-center text-xl">{producto.title}</p>
                                <p className="text-center font-black">{`$ ${producto.price}`}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center py-4">
                    <button className="flex gap-2 p-2 text-md font-black rounded-md" style={{ backgroundColor: '#dddddd' }}>Ver mas productos <SquareIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Productos