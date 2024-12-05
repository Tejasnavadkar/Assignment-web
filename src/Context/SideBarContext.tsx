import { createContext, ReactNode, useContext, useState } from "react";

type ContextProviderProps ={
    children:ReactNode
}

type createContextProps ={
    isSmallOpen:boolean
    isLargeOpen:boolean
    toggle:()=>void
    close:()=>void
}

const SideBarContext = createContext<createContextProps | null>(null)

export function useSidbarcontext(){
   const value = useContext(SideBarContext)
   if(value == null) throw Error("value accessble only inside provider")
    return value
}

export const ContextProvider = ({children}:ContextProviderProps) => {
    const [isLargeOpen,setIsLargeOpen] = useState(true)
    const [isSmallOpen,setIsSmallOpen] = useState(false)

    function isScreenSmall(){

        return window.innerWidth < 1024
    }

    function toggle(){
        if(isScreenSmall()){
            setIsSmallOpen(e=>!e)
        }else{
            setIsLargeOpen(e=>!e)
        }
    }

    function close(){
        if(isScreenSmall()){
            setIsSmallOpen(false)
        }else{
            setIsLargeOpen(false)
        }

    }

   return <SideBarContext.Provider value={{
    isLargeOpen,
    isSmallOpen,
    toggle,
    close
   }}>
            {children}
   </SideBarContext.Provider>
}