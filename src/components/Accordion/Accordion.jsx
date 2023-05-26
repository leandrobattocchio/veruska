import { useState } from "react"

const Accordion = ({title,desc}) => {
    const [Show,setShow] = useState(false)

    return (
    <div className="w-full px-16 flex flex-col">
        <div className="my-4 border-b border-primary-darkerblue   py-4 flex flex-col gap-4">
            <p className="md:text-xl text-lg font-semibold cursor-default text-primary-darkerblue" onClick={()=>setShow((sw)=>!sw)}>{title}</p>
            <p className={Show ? "flex justify-center mb-5 md:text-base text-xs text-primary-black" : "hidden"}>{desc}</p>
        </div>
    </div>
    )
}

export default Accordion