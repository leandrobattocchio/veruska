import { useState } from "react"
import { DownIcon } from "../../../../components/Icons"
import './Filter.css'

const CATEGORIES = {
    TODOS: 'Todos',
    VESTIDOS: 'Vestidos',
    BLUSAS: 'Blusas',
    PANTALONES: 'Pantalones'
}

function Filters ({ changeCategory, category }) {

    const [showCategories, setShowCategories] = useState(false)


    const handleShowCategories = () => {
        setShowCategories(prevState => !prevState)
    }

    return (
        <div className="flex justify-between pb-4">
            <div className="flex gap-6 filters">
                {Object.entries(CATEGORIES).map(([key, value]) => {
                    return <p key={key} onClick={() => changeCategory(value)} className={`text-xl font-black py-2 text-primary-darkerblue cursor-pointer ${category === value ? 'border-b-4 border-indigo-900' : ''}`}>{value}</p>
                })}
            </div>
            <div className="filters-mobile">
                <button onClick={handleShowCategories} className="flex gap-2 p-2 text-base font-black rounded-md text-primary-darkblue" style={{ backgroundColor: '#dddddd' }}>Categorias <DownIcon width='20px' height='20px' /></button>
                {
                    showCategories && (
                        <div className="flex flex-col pl-2">
                            {Object.entries(CATEGORIES).map(([key, value]) => {
                                return <p key={key} onClick={() => changeCategory(value)} className={`text-base font-semibold py-2 text-primary-darkblue cursor-pointer ${category === value ? 'border-b-4 border-indigo-900' : ''}`}>{value}</p>
                            })}
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Filters