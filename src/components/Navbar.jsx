import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
function Navbar() {
    const [change ,setchange] = useState('')
  return (
     <header className='bg-white shadow-md shadow-gray-200  flex  justify-between px-4 py-3 fixed top-0 w-full'>
       <div className='flex  w-[80%] mx-auto justify-between items-center py-2'>
        <div className="logo w-16">
           <img src="https://i.pinimg.com/originals/c7/4f/d0/c74fd0c29f1d0451aebd536f005ac02d.png"
            alt="logoHere" />
        </div>
         <div 
         className='bg-purple-700 
          hidden 
         shadow-md shadow-purple-500 text-white capitalize font-serif md:flex items-center rounded-full px-8 py-3 '>
           <input
           className='bg-none  placeholder:text-white capitalize outline-none bg-purple-700 text-[18px] '
           type="text" onChange={(e)=>setchange(e.value)} 
            placeholder='search here'
            value={change}
           />
           <button className=' '><AiOutlineSearch className='text-[20px]'></AiOutlineSearch></button>
        </div>
         <div className='flex  space-x-3'>
              <div
            className='bg-purple-700 shadow-md shadow-purple-500 text-white capitalize font-serif flex items-center rounded-full px-5 py-2 '>

              
                 login
              </div>
              <div className='bg-purple-700 shadow-md shadow-purple-500 text-white capitalize font-serif lg:flex
                hidden         items-center rounded-full px-5 py-2 '>

              
                Booked movie
              </div>
              
          </div></div>
     </header>

  )
}

export default Navbar