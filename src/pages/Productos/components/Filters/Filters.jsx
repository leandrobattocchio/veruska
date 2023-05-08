import { useState } from "react"
import { SquareIcon } from "../../../../components/Icons"
import './Filter.css'

const CATEGORIES = {
    VESTIDOS: 'Vestidos',
    REMERAS: 'Remeras',
    LOREM1: 'Lorem1',
    LOREM2: 'Lorem2'
}

function Filters () {

    const [showCategories, setShowCategories] = useState(false)


    const handleShowCategories = () => {
        setShowCategories(prevState => !prevState)
    }

    return (
        <div className="flex justify-between pb-4">
            <div className="flex gap-6 filters">
                {Object.entries(CATEGORIES).map(([key, value]) => {
                    return <p key={key} className="text-xl font-black py-2">{value}</p>
                })}
            </div>
            <div className="filters-mobile">
                <button onClick={handleShowCategories} className="flex gap-2 p-2 text-sm font-black rounded-md" style={{ backgroundColor: '#dddddd' }}>Categorias <SquareIcon width='20px' height='20px' /></button>
                {
                    showCategories && (
                        <div className="flex flex-col pl-2">
                            {Object.entries(CATEGORIES).map(([key, value]) => {
                                return <p key={key} className="text-xl font-black py-2">{value}</p>
                            })}
                        </div>
                    )
                }
            </div>
            <div className="flex gap-2 order-filter">
                <button className="flex gap-2 p-2 h-10 text-md font-black rounded-md" style={{ backgroundColor: '#dddddd' }}>Ordenar <SquareIcon /></button>
                <button className="flex gap-2 p-2 h-10 text-md font-black rounded-md" style={{ backgroundColor: '#dddddd' }}>Filtros <SquareIcon /></button>
            </div>
        </div>
    )
}

export default Filters