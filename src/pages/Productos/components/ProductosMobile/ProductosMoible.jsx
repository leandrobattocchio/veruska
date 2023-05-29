import picture1 from '../../assets/picture1.png'
import picture2 from '../../assets/picture2.png'
import picture3 from '../../assets/picture3.png'
import picture4 from '../../assets/picture4.png'


function ProductosMoible () {
    return (
        <div className="productos-fotos-mobile flex flex-col gap-4 p-4">
            <div><img src={picture1} /></div>
            <div><img src={picture2} /></div>
            <div className="flex justify-between gap-4">
                <div><img src={picture3} /></div>
                <div><img src={picture4} /></div>
            </div>
        </div>
    )
}

export default ProductosMoible