import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "./Button"
import { useEffect, useRef, useState } from "react"


type categoriesProps = {
    categories:string[]
    selectedCategory:string
    onSet:(category:string)=>void
}
function CategoryPills({categories,selectedCategory,onSet}:categoriesProps){
    let translateAmount = 200
   const [translate,setTranslate] = useState(0)
   const containerRef = useRef<HTMLDivElement>(null)
   const [leftArrowVisible,setLeftArrowVisible] = useState(true)
   const [rightArrowVisible,setRightArrowVisible] = useState(true)

   useEffect(()=>{

    if(containerRef.current == null) return

    setLeftArrowVisible(translate<=0 ? false : true)
    setRightArrowVisible(containerRef.current.clientWidth + translate >= containerRef.current.scrollWidth ? false : true )

   },[translate,categories])

    return <div ref={containerRef} className="flex overflow-x-hidden relative ">
        <div className="flex whitespace-nowrap gap-2 transition-transform w-[max-content]" style={{transform:`translateX(-${translate}px)`}}>
        {categories.map((item)=>(<Button variant={`${selectedCategory == item ? "dark" : "default"}`} onClick={()=>onSet(item)} className="px-2 py-1" >{item}</Button>))}
        </div>

       { leftArrowVisible && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-full bg-gradient-to-r from-white from-50% to-transparent w-24 " >
            <Button variant={"ghost"} size={"icon"} className="h-full" onClick={()=>{
                setTranslate((current) =>{
                    const newTranslate = current - translateAmount
                    if(newTranslate <= 0){
                        return 0
                    }
                    return newTranslate
                } )
            }} >
                <ArrowLeft/>
            </Button>
        </div>}

        { rightArrowVisible && <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full bg-gradient-to-l from-white from-50% to-transparent w-24 flex justify-end " >
            <Button variant={"ghost"} size={"icon"} className="h-full" onClick={()=>{
                setTranslate((current)=>{
                    if(containerRef.current === null) {
                        return current
                    }
                    const newTranslate = current + translateAmount
                    const fullwidth = containerRef.current.scrollWidth
                    const screenwidth = containerRef.current.clientWidth

                    if(newTranslate + screenwidth >= fullwidth ) {
                        return fullwidth - screenwidth
                    }
                    return newTranslate
                })
            }} >
                <ArrowRight/>
            </Button>
        </div>}
    </div>
}

export default CategoryPills