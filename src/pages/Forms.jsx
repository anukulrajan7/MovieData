import React, { useContext } from 'react'
import BookMove from '../components/BookMove'
import { MyContext } from '../context/Movieapp'

function Forms() {
   const {fetchid,data,bookMovieTicket} = useContext(MyContext)
   const [value] = data.filter((data)=>data.show.id===fetchid);
  return (
    <div>
      <BookMove value={value} bookMovieTicket={bookMovieTicket}/>
    </div>
  )
}

export default Forms