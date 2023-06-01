import { Link, useParams } from "react-router-dom"
import { PRODUCTOS } from "../../consts/consts"
import { useEffect } from "react"
import './ProductInfo.css'



function MobileProductInfo () {
    const { id } = useParams()
    const product = PRODUCTOS.find((producto) => {
        return producto.id === Number(id)
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (!product) {
        return (
            <div>
                <p>Producto inexistente!</p>
            </div>
        )
    }

    return (
        <div className="mobile-product" style={{ display: 'none' }}>
            <p className="font-black text-lg"><Link to='/productos'>Productos</Link> {'>'} {product.name}</p>
            <div className="flex flex-col w-full gap-6 pt-10">
                <div className="flex w-full gap-2">
                    <div className="flex flex-col w-1/4 gap-2">
                        <img src={product.img} />
                        <img src={product.img} />
                        <img src={product.img} />
                    </div>
                    <div className="w-3/4">
                        <img src={product.img} className="w-full h-full" />
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center gap-4">
                    <p className="text-3xl font-black">{product.name}</p>
                    <p className="text-lg">{product.info}</p>
                    <p className="font-black text-2xl">Precio: {product.price}$</p>
                </div>
            </div>
        </div>
    )
}

function ProductInfo () {

    const { id } = useParams()
    const product = PRODUCTOS.find((producto) => {
        return producto.id === Number(id)
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (!product) {
        return (
            <div>
                <p>Producto inexistente!</p>
            </div>
        )
    }

    return (
        <>
            <MobileProductInfo />
            <div className="product-info">
                <p className="font-black text-lg"><Link to='/productos'>Productos</Link> {'>'} {product.name}</p>
                <div className="flex w-full gap-6 pt-10">
                    <div className="flex w-3/5 gap-2">
                        <div className="flex flex-col w-1/4 gap-2">
                            <img src={product.img} />
                            <img src={product.img} />
                            <img src={product.img} />
                        </div>
                        <div className="w-3/4">
                            <img src={product.img} className="w-full h-full" />
                        </div>
                    </div>
                    <div className="flex flex-col w-2/5 justify-center gap-4">
                        <p className="text-3xl font-black">{product.name}</p>
                        <p className="text-lg">{product.info}</p>
                        <p className="font-black text-2xl">Precio: {product.price}$</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo