import { useState } from "react"

const Accordion = () => {
    const [Show,setShow] = useState(false)

    return (
    <div className="w-full px-16 flex flex-col">
        <div className="my-4 border-b border-black py-4 flex flex-col gap-4">
            <p className="md:text-xl text-lg font-semibold cursor-default" onClick={()=>setShow((sw)=>!sw)}>¿Lorem ipsum dolor?</p>
            <p className={Show ? "flex justify-center mb-5 md:text-base text-xs" : "hidden"}>Lorem ipsum dolor sit amet consectetur. Aliquet ultrices maecenas eget varius. Convallis dolor semper cras id odio vitae mattis ut nisl. Vitae tempor elit tempor risus etiam adipiscing faucibus sit rhoncus. Nibh nullam nibh mi aliquet lectus. Ornare morbi sed.</p>
        </div>
    </div>
    )
}

export default Accordion