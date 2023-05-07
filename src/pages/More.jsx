import React, { useContext } from 'react'
import { MyContext } from '../context/Movieapp'
import Moreinfo from '../components/Moreinfo';
import Forms from './Forms';

function More() {
const {fetchid,data,form,setform,setFetchId} = useContext(MyContext);
  let  [value]= data.filter((data)=>data.show.id===fetchid);

   
  return (
    <div className='h-full my-7  w-[100vw] overflow-x-hidden'>
      {
         form? <Forms/>:(
            <Moreinfo data ={value} setFetchId={setFetchId} setForm={setform}/>
         )  
      }
        
    </div>
  )
}

export default More