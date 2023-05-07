import React, { useState } from "react";
import {GrAdd} from 'react-icons/gr'
import {AiFillMinusSquare } from 'react-icons/ai'
function BookMove({ value,bookMovieTicket}) {
   const [email,setEmail] =useState('');
   const [name,setName] =useState('');
   const [phoneNo ,setPhoneNo] =useState('');
   const [ticketNo,setTicketNo] = useState(1);
   const handleMinus = ()=>{
      if(ticketNo>1){
         setTicketNo(ticketNo-1)
      }
   }
  const handleSubmit = (e) => {
    bookMovieTicket(phoneNo,email,name,ticketNo);
  };
  return (
    <div className="h-full w-full overflow-x-hidden my-10 ">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-[90%] mx-auto md:w-[40%] shadow-md shadow-purple-500 bg-purple-700 rounded-md font-serif text-white flex flex-col py-7 px-4 gap-3"
      >
        <div className="flex flex-col flex-wrap md:flex-row text-center gap-2 font-serif capitalize text-[20px] ">
          <h2 className="bg-slate-900 w-fit px-3 py-2 shadow-md rounded-sm mx-auto">
            {' '}
            show name : {value.show.name}
          </h2>
          <h2 className="bg-slate-900 w-fit px-3 py-2 shadow-md rounded-sm mx-auto">
            Language : {value.show.language}
          </h2>
          <h2 className="bg-slate-900 w-fit px-3 py-2 shadow-md rounded-sm mx-auto">
            Network : {value.show.network.name}
          </h2>
          <h2 className="bg-slate-900 w-fit px-3 py-2 shadow-md rounded-sm mx-auto">
            Rating : {value.show.rating.average}
          </h2>
          {console.log(value.show.name)}
        </div>
        <div
          className="flex flex-col md:flex-row 
              bg-slate-950 px-4 text-[18px]  my-2 py-2 shadow-md shadow-gray-600
           w-fit mx-auto gap-4 capitalize"
        >
          <label className="font-bold " htmlFor="name">
            Name :
          </label>

          <input
          onChange={(e)=>setName(e.target.value)}
            className="w-fit outline-none bg-transparent captalize 
            placeholder:capitalize px-3 border-b-2  "
            type="text"
            placeholder="enter your name"
            required
            id="name"
          />
        </div>
        <div
          className="flex  text-[18px] flex-col md:flex-row 
            bg-slate-950 px-7  my-2 py-2 shadow-md shadow-gray-600
         w-fit mx-auto gap-4 capitalize"
        >
          <label htmlFor="email">email</label>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            className="w-fit outline-none bg-transparent captalize
                        placeholder:capitalize px-3 border-b-2  "
            type="email"
            placeholder="example@gmail.com"
            id="email"
            required
          />
        </div>
        <div
          className="flex  text-[18px] flex-col md:flex-row 
            bg-slate-950 px-3  my-2 py-2 shadow-md shadow-gray-600
         w-fit mx-auto gap-4 capitalize"
        >
          <label htmlFor="phoneNo">phone no</label>
          <input
            className="w-fit outline-none font-mono bg-transparent captalize
            placeholder:capitalize px-3 border-b-2  "
            type="tel"
            placeholder="980883782"
            id="pnoneNo"
            required
            onChange={(e)=>setPhoneNo(e.target.value)}
          />
        </div>
        <div
          className="flex  text-[18px] 
            bg-slate-950 px-5  my-2 py-2 shadow-md shadow-gray-600
         w-fit mx-auto gap-4 capitalize"
        >
            <div className="flex gap-3 text-2xl font-mono">
               <span>Ticket No : </span>
               {ticketNo}
            </div>
          <div className="flex space-x-3 px-2">
            
            <button onClick={()=>{setTicketNo(ticketNo+1)
            console.log(ticketNo)}} 
            className="bg-white w-fit p-2 rounded-md text-purple-700"><GrAdd/></button>
            <button 
             className="bg-white  text-2xl w-fit p-2 rounded-md text-purple-700"
            onClick={handleMinus}><AiFillMinusSquare/></button>
          </div>
        </div>
        <button
       

          className="bg-white
                mx-auto  text-purple-800 py-4 w-fit px-3 text-2xl  rounded-md shadow-md shadow-gray-400 font-serif font-semibold my-4"
          onClick={handleSubmit}
        >
          Book Now show
        </button>
      </form>
    </div>
  );
}

export default BookMove;
