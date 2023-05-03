import { SquareIcon } from "../../../../components/Icons"


const CATEGORIES = {
    VESTIDOS: 'Vestidos',
    REMERAS: 'Remeras',
    LOREM1: 'Lorem1',
    LOREM2: 'Lorem2'
}

function Filters () {
    return (
        <div className="flex justify-between">
            <div className="flex gap-6">
                {Object.entries(CATEGORIES).map(([key, value]) => {
                    return <p key={key} className="text-xl font-black py-2">{value}</p>
                })}
            </div>
            <div className="flex gap-4">
                <button className="flex gap-2 p-2 text-md font-black rounded-md" style={{ backgroundColor: '#dddddd' }}>Ordenar <SquareIcon /></button>
                <button className="flex gap-2 p-2 text-md font-black rounded-md" style={{ backgroundColor: '#dddddd' }}>Filtros <SquareIcon /></button>
            </div>
        </div>
    )
}

export default Filters