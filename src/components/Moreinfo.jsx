import React from "react";

function Moreinfo({ data, setForm ,setFetchId}) {
  const {show } = data;
  return (
     <div className=" flex md:w-[60%] w-[100%] md:px-2  px-5 shadow-lg rounded-md shadow-gray-500 bg-white mx-auto justify-center  flex-col md:flex-row  gap-8  py-10">
       <div className="w-[100%] md:w-[80%] px-4 gap-3 flex-col justify-center">
         <h2 className="bg-purple-700 text-white text-center py-3 font-bold font-serif text-2xl w-fit px-4 mx-auto mb-2 shadow-md shadow-purple-400">
           {show.name}
         </h2>
         <div className="w-full shadow-md shadow-gray-300 p-1 rounded-sm">
           <img
             className="w-full "
             src={show.image !== null ? show.image.medium : ""}
             alt=""
           />
         </div>
         <p className="bg-slate-900 mx-auto mt-3 text-white w-fit px-4 py-2 capitalize">
           premiered : <span>{show.premiered}</span>
         </p>
       </div>
       <div
         className="flex justify-start w-[100%] flex-col gap-2 py-3 font-serif
         text-xl"
       >
         <div className="w-fit text-[18px] ">
            <span
            className="font-bold capitalize text-2xl"> summary :</span>
           {"  "}{show.summary.slice(3, -4)}
         </div>
         <p className="bg-slate-900 text-white w-fit px-4 py-2 capitalize">
           {" "}
           status : {show.status}
         </p>
         <div className="bg-slate-900 text-white w-fit px-4 py-2 capitalize">
           {" "}
           lagnuage : <span>{show.language}</span>
         </div>
    
         <p className="bg-slate-900 text-white w-fit px-4 py-2 capitalize">
           rating : <span>{show.rating.average}</span>
         </p>
         <p className="bg-slate-900 text-white w-fit px-4 py-2 capitalize">
          Runtime  : <span>{show.runtime}</span>
         </p>
         <div className="flex gap-5 mt-6 flex-col md:flex-row" >
         <button
         className="bg-purple-700 w-fit mx-auto shadow-md shadow-purple-500 text-white capitalize font-serif flex items-center rounded-md px-5 py-2 "
         onClick={() => {
             setFetchId('')
         }}
         >Go Back</button>
          <button
          onClick={()=>setForm(true)}
          className="bg-purple-700 w-fit mx-auto shadow-md shadow-purple-500 text-white capitalize font-serif flex items-center rounded-md px-5 py-2">Booked Ticket</button>
       </div>
       </div>
  
     </div>
    
  );
}

export default Moreinfo;
