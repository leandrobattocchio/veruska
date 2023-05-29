import { DownIcon } from "../../components/Icons"
import { Filters, ProductosMoible } from "./components/"
import picture1 from './assets/picture1.png'
import picture2 from './assets/picture2.png'
import picture3 from './assets/picture3.png'
import picture4 from './assets/picture4.png'
import product1 from './assets/product1.png'
import product2 from './assets/product2.png'
import product3 from './assets/product3.png'
import product4 from './assets/product4.png'
import product5 from './assets/product5.png'
import product6 from './assets/product6.png'
import product7 from './assets/product7.png'
import product8 from './assets/product8.png'

import './Productos.css'
import { useState } from "react"

const PRODUCTOS = [
    {
        id: 1,
        title: 'Nombre producto',
        price: 20,
        img: product1
    },
    {
        id: 2,
        title: 'Nombre producto',
        price: 20,
        img: product2
    },
    {
        id: 3,
        title: 'Nombre producto',
        price: 20,
        img: product3
    },
    {
        id: 4,
        title: 'Nombre producto',
        price: 20,
        img: product4
    },
    {
        id: 5,
        title: 'Nombre producto',
        price: 20,
        img: product5
    },
    {
        id: 6,
        title: 'Nombre producto',
        price: 20,
        img: product6
    },
    {
        id: 7,
        title: 'Nombre producto',
        price: 20,
        img: product7
    },
    {
        id: 8,
        title: 'Nombre producto',
        price: 20,
        img: product8
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

const MAX_PRODUCTS = 8

const importantText = 'text-primary-darkblue'

function Productos () {

    const [isAllProducts, setIsAllProducts] = useState(false)

    const showAllProducts = () => setIsAllProducts(prevState => !prevState)

    const productsToRender = isAllProducts ? PRODUCTOS : PRODUCTOS.slice(0, MAX_PRODUCTS)

    return (
        <div>
            <div className="flex flex-col gap-3 productos">
                <h2 className="text-4xl font-black text-primary-darkerblue">Productos</h2>
                <p className="text-lg">
                    ¡Bienvenidos a nuestra sección de productos! Aquí encontrarás nuestra colección de prendas con diseños únicos y originales. Desde ilustraciones con <b className={importantText}>colores vibrantes</b> hasta <b className={importantText}>estampados personalizados</b>, cada prenda tiene su propia historia que queremos compartir contigo. Descubre como la moda y el arte pueden fusionarse en una prenda que te hará <b className={importantText}>sentir única</b>.
                </p>
            </div>
            <div className="flex flex-col gap-3 py-10 destacados">
                <h3 className="text-4xl font-black text-primary-darkerblue text-center">Destacados</h3>
                <p className="text-xl text-center">
                    Encuentra tu <b className={importantText}>prenda única</b> en nuestra selección de productos destacados.
                </p>
            </div>
            <div className="flex gap-4 productos-fotos w-full">
                <div className="w-3/5">
                    <img className="w-full" src={picture1} />
                </div>
                <div className="flex flex-col w-2/5">
                    <div className="flex w-full object-cover">
                        <img className="w-full" src={picture2} />
                    </div>
                    <div className="flex gap-4 pt-4 h-full">
                        <div>
                            <img className="h-full object-cover rounded-3xl" src={picture3} />
                        </div>
                        <div>
                            <img className="h-full object-cover" src={picture4} />
                        </div>
                    </div>
                </div>
            </div>
            <ProductosMoible />
            <div className="flex flex-col gap-3 py-10 nuestros-productos">
                <h3 className="text-4xl font-black text-primary-darkerblue text-center">Nuestros productos</h3>
                <p className="text-xl text-center">
                    Nuestros productos son mucho más que simples artículos, son una <b className={importantText}>expresión de arte y amor</b>.
                </p>
            </div>
            <div>
                <Filters />
                <div className="py-4 productos-precio">
                    {productsToRender.map((producto) => {
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
                    <button onClick={showAllProducts} className="flex gap-2 p-2 text-md  rounded-md" style={{ backgroundColor: '#1d4e7f', color: '#fff' }}>Ver mas productos <DownIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Productos