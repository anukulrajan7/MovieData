import React, { useContext, useEffect } from 'react'
import { MyContext } from '../context/Movieapp'
import ShowData from '../components/ShowData';
import More from './More';

function Home() {
 const {fetchData,data,loading,fetchid } = useContext(MyContext);
  useEffect(()=>{
    const url = 'https://api.tvmaze.com/search/shows?q=all'
    fetchData(url)
  },[])

  return (
    <div className='h-full  w-full overflow-x-hidden  py-20 my-7'>
     <div className='md:w-[90%] w-full grid-col-1 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
     {
        loading? <h1>Loading ...</h1>:(
          fetchid===''?(
            data.length ===0? <h1>No Data Found</h1>:(
                data.map((data)=>{
                    return (
                        <ShowData data={data} key={data.show.id}/>
                    )
                })
            )
        ):(
          <More className=''/>
        )
        )
        
      }
     </div>
    </div>
  )
}

export default Home