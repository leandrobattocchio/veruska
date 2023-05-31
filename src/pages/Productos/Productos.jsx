import { DownIcon } from "../../components/Icons"
import { Filters, ProductosMoible } from "./components/"
import picture1 from './assets/picture1.png'
import picture2 from './assets/picture2.png'
import picture3 from './assets/picture3.png'
import picture4 from './assets/picture4.png'
import { useEffect, useState } from "react"
import { PRODUCTOS } from "./consts/consts"
import './Productos.css'
import { Link } from "react-router-dom"


const MAX_PRODUCTS = 8

const importantText = 'text-primary-darkblue'

function Productos () {

    const [isAllProducts, setIsAllProducts] = useState(false)
    const [filter, setFilter] = useState({ category: 'Todos' })

    const changeCategory = (newFilter) => setFilter(prevState => ({ ...prevState, category: newFilter }))
    const showAllProducts = () => setIsAllProducts(prevState => !prevState)


    const productsFilters = filter.category === 'Todos' ? PRODUCTOS : PRODUCTOS.filter((producto) => producto.category === filter.category)
    const productsToRender = isAllProducts ? productsFilters : productsFilters.slice(0, MAX_PRODUCTS)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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
                <Filters category={filter.category} changeCategory={changeCategory} />
                <div className="py-4 productos-precio">
                    {
                        productsToRender.length > 0
                            ? productsToRender.map((producto) => {
                                return (
                                    <div key={producto.id} className="p-1 flex flex-col justify-center content-center">
                                        <Link to={`/productos/${producto.id}`} className="flex justify-center">
                                            <img src={producto.img} alt={`${producto.title} image`} />
                                        </Link>
                                        <p className="text-center text-xl">{producto.name}</p>
                                        <p className="text-center font-black">{`$ ${producto.price}`}</p>
                                    </div>
                                )
                            })
                            : (
                                <div style={{ minHeight: '35vh' }}>
                                    <p>No hay productos para mostrar!</p>
                                </div>
                            )
                    }
                </div>
                <div className="flex justify-center py-4">
                    <button onClick={showAllProducts} className="flex gap-2 p-2 text-md rounded-md" style={{ backgroundColor: '#1d4e7f', color: '#fff' }}>Ver mas productos <DownIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Productos