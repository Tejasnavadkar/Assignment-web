import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import Logo from '../assets/Logo.png'
import { Button } from "./Button"
import { useState } from "react"
import { useSidbarcontext } from "../Context/SideBarContext"

function PageHeader(){
    const [showSearchbar,setShowSearchbar] = useState<boolean>(false)
   

    return <>

    <div className="flex justify-between mt-4 mx-3 gap-2">
             <PageheaderFirst showSearchbar={showSearchbar}/>
        
            <form className={` grow justify-center  gap-2 ${showSearchbar ? " flex" : "hidden md:flex"} `}>

                {showSearchbar && <div>
                   <Button variant={"default"} size={"icon"} onClick={()=>setShowSearchbar(false)} >
                    <ArrowLeft/>
                   </Button>    
                </div>}
                
                <div className="flex grow max-w-[600px] ">
                <input type="text" placeholder="Search" className="w-full rounded-l-full border border-secondary-border px-4 py-2 focus:border-blue-500 outline-none shadow-inner shadow-secondary-default " />
                <Button className="rounded-r-full py-2 px-4 border border-secondary-border  " >
                    <Search/>
                </Button>
                </div>
                <Button variant={"default"} size={"icon"} className="">
                    <Mic/>
                </Button>

            </form>
        
        <div className={`gap-1 ${showSearchbar ? "hidden" : "flex" } `}>

                <Button variant={"ghost"} size={"icon"} className=" lg:hidden " onClick={()=> setShowSearchbar(true)} >
                    <Search/>
                </Button>

        <Button variant={"ghost"} size={"icon"}>
                <Upload/>
            </Button>
            <Button variant={"ghost"} size={"icon"}>
                <Bell/>
            </Button>
            <Button variant={"ghost"} size={"icon"}>
                <User/>
            </Button>
        </div>

    </div>
    
    </>
}

export default PageHeader

type PageheaderFirstProps = {
    showSearchbar?:boolean,
    
}

export function PageheaderFirst({showSearchbar}:PageheaderFirstProps){

    const {toggle} = useSidbarcontext()

    return  <>
    
    { !showSearchbar &&  <div className="flex gap-2 items-center" >
        <Button variant={"ghost"} size={"icon"} onClick={toggle} >
            <Menu/>
        </Button>
        <img src={Logo} alt="" className="h-6 flex-shrink-0" />
    </div>}
    
    </>  
}