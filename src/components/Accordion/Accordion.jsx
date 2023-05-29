import { useState } from "react"
import {MdKeyboardArrowDown} from 'react-icons/md'
const Accordion = ({title,desc}) => {
    const [Show,setShow] = useState(false)

    return (
    <div className="w-full px-16 flex flex-col">
        <div className="my-4 border-b border-primary-darkerblue   py-4 flex flex-col gap-4">
            <div className="flex justify-between items-center" onClick={()=>setShow((sw)=>!sw)}>
                <p className="md:text-xl text-lg font-semibold cursor-default text-primary-darkerblue" >{title}</p>
                <MdKeyboardArrowDown size={24}/>
            </div>
            <p className={Show ? "flex justify-center mb-5 md:text-base text-xs text-primary-black" : "hidden"}>{desc}</p>
        </div>
    </div>
    )
}

export default Accordion