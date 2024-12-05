import { ChevronDown, ChevronUp, Clapperboard, Clock, Ghost, History, Home, Library, PlaySquare, Repeat } from "lucide-react"
import { Button } from "./Button"
import { ElementRef, ElementType, ReactNode,Children as child, useEffect, useState,createElement } from "react"
import { useSidbarcontext } from "../Context/SideBarContext"


function SideBar (){
    const {isLargeOpen,isSmallOpen,close} = useSidbarcontext()
    return <>
    <div className="">
       <aside className="flex flex-col overflow-y-auto sticky top-0 item lg:hidden">
          <SmallSideBar Icon={Home} title="Home" />
          <SmallSideBar  Icon={Repeat} title={"Repeat"} />
        <SmallSideBar  Icon={Clapperboard} title={"Clapperboard"} />
        <SmallSideBar  Icon={Library} title={"Library"} />
       </aside>

      {isSmallOpen &&  <div onClick={close} className={` lg:hidden ${isSmallOpen ? "absolute bg-secondary-dark opacity-50 inset-0 z-20" : "lg:hidden"}`} ></div>}

       <aside className={`lg:sticky absolute top-0 flex-col overflow-y-auto  w-56 bg-white border px-2 ${isLargeOpen ? "lg:flex" : "lg:hidden"} ${isSmallOpen ? "flex z-[999] max-h-screen  " : "hidden"}  `} >
       {/* <aside className={`hover:sidebar w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4  flex-col gap-2 px-2 ${isLargeOpen ? "lg:flex": "lg:hidden" } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}> */}
         <LargeSideBarSection >
            <LargeSideBarItem Icon={Home} title="Home" />
            <LargeSideBarItem Icon={Clapperboard} title="Subscription" />
         </LargeSideBarSection>
         <hr/>

         <LargeSideBarSection>
         <LargeSideBarItem Icon={Library}  title={"Library"} />
            <LargeSideBarItem Icon={History}  title={"History"}  />
            <LargeSideBarItem Icon={PlaySquare}  title={"Your Videos"} />
            <LargeSideBarItem Icon={Clock}  title={"Watch Later"}  />
         </LargeSideBarSection>
         <hr/>

         <LargeSideBarSection>
         <LargeSideBarItem Icon={Library}  title={"Library"} />
            <LargeSideBarItem Icon={History}  title={"History"}  />
            <LargeSideBarItem Icon={PlaySquare}  title={"Your Videos"} />
            <LargeSideBarItem Icon={Clock}  title={"Watch Later"}  />
         </LargeSideBarSection>
         <hr/>

         <LargeSideBarSection>
         <LargeSideBarItem Icon={Library}  title={"Library"} />
            <LargeSideBarItem Icon={History}  title={"History"}  />
            <LargeSideBarItem Icon={PlaySquare}  title={"Your Videos"} />
            <LargeSideBarItem Icon={Clock}  title={"Watch Later"}  />
         </LargeSideBarSection>
         <hr/>

         <LargeSideBarSection>
         <LargeSideBarItem Icon={Library}  title={"Library"} />
            <LargeSideBarItem Icon={History}  title={"History"}  />
            <LargeSideBarItem Icon={PlaySquare}  title={"Your Videos"} />
            <LargeSideBarItem Icon={Clock}  title={"Watch Later"}  />
         </LargeSideBarSection>
         <hr/>

         <LargeSideBarSection>
         <LargeSideBarItem Icon={Library}  title={"Library"} />
            <LargeSideBarItem Icon={History}  title={"History"}  />
            <LargeSideBarItem Icon={PlaySquare}  title={"Your Videos"} />
            <LargeSideBarItem Icon={Clock}  title={"Watch Later"}  />
         </LargeSideBarSection>
         <hr/>

       </aside>
    </div>

    </>
}

export default SideBar

type SmallSideBarProps = {
    Icon:ElementType,
    title:string
}

function SmallSideBar({Icon,title}:SmallSideBarProps){

    return <Button variant={"ghost"} className="flex flex-col  items-center">
        <div>
            <Icon/>
        </div>
        <div className="text-md">{title}</div>
    </Button>
}

type LargeSideBarItemProps ={
    Icon:ElementType | string
    title:string
}
function LargeSideBarItem({Icon,title}:LargeSideBarItemProps){

    return <div className="flex flex-col ">
        <Button variant={"ghost"} className="flex gap-3">
            <div>
                <Icon/>
            </div>
            <div>
                {title}
            </div>
        </Button>
    </div>
}

type LargeSideBarSectionProps = {
    children:ReactNode
    visibleNumberCount?:number
}
function LargeSideBarSection({children,visibleNumberCount=Number.POSITIVE_INFINITY}:LargeSideBarSectionProps){
    const [isExpand,setExpand] = useState(false)
    // const [ShowMore,setShowMore] = useState(false)
    const AllChilds = child.toArray(children).flat()
    const ShowExpandbleButton = AllChilds.length > visibleNumberCount
    console.log("visibleCountnumber------",visibleNumberCount)
    const visibleChildren = isExpand ? AllChilds : AllChilds.slice(0,visibleNumberCount)

    const buttonIcon = isExpand ? ChevronUp : ChevronDown
    //    useEffect(()=>{
//     if(visibleNumberCount < AllChilds.length) {
//         setExpand(true)
//     }
//    },[visibleNumberCount])
    return <div className="flex flex-col gap-2">
        {visibleChildren}
        {ShowExpandbleButton && <Button className="flex gap-2" variant={"ghost"} onClick={()=>{setExpand(e=>!e)}}>
            <span>{createElement(buttonIcon)}</span>
            <span>{isExpand ? "ShowLess" : "ShowMore"}</span>
        </Button>}
    </div>
}

