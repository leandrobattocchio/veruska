
function InicioTitleCard ({ title, children, button, image, className = '', ...restOfProps }) {
    return (
        <div {...restOfProps} className={`flex px-28 py-14 gap-4 ${className}`} style={{ minHeight: '70vh' }}>
            <div className="flex flex-col gap-8 w-screen">
                <h2 className="text-5xl font-black">{title}</h2>
                <p className="text-2xl">{children}</p>
                {button && button}
            </div>
            {image && (
                <div className="w-full h-full flex justify-end">
                    <img src={image} className="w-3/4 h-full object-cover pl-10" />
                </div>
            )}
        </div>
    )
}

export default InicioTitleCard