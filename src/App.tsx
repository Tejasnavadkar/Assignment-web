import { useState } from 'react'
import {categories} from "./Data"

import './App.css'
import PageHeader from './components/PageHeader'
import CategoryPills from './components/CategoryPills'
import { VideoGrid } from './components/VideoGrid'
import {videos} from './Data'
import SideBar from './components/SideBar'
import { ContextProvider } from './Context/SideBarContext'


function App() {
       const [selectedcategory,setSelectedcategory] = useState(categories[0])

  return (
    <>
    <ContextProvider>
    <div className=' max-h-screen max-w-full flex flex-col'>
      <div>
            <PageHeader/>
      </div>

      <div className='grid grid-cols-[auto,1fr] flex-grow mt-5 z-10 overflow-auto '>
       
          <SideBar/>
        
        <div className='mx-4 flex flex-col overflow-x-hidden'>
          <div className='flex  '>
            <CategoryPills categories={categories} selectedCategory = {selectedcategory} onSet={setSelectedcategory} />
          </div>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-4'>
            {videos.map((item)=> <VideoGrid key={item.id} {...item}/>) }
          </div>
        </div>
      </div>

     </div>
    </ContextProvider>
    
    </>
  )
}

export default App
