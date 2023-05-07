import React, { useContext } from "react";
import { MyContext } from "../context/Movieapp";

function ShowData({ data }) {
    const {setFetchId} = useContext(MyContext)
  const showMoreData = (url) => {
       setFetchId(url)
  };
  return (
    <div className="bg-white  h-fit shadow-md py-3 w-fit px-10 shadow-gray-400 rounded-md mx-auto flex flex-col gap-1">
      <div className=" bg-purple-700 text-2xl shadow-md shadow-purple-400 w-fit px-4 py-1 rounded-sm text-white font-serif font-bold mx-auto">
        <h2>{data.show.name}</h2>
      </div>
      <div className="img w-[80%] my-2 mx-auto shadow-md shadow-gray-300 p-1 rounded-sm">
        {data.show.image !== null ? (
          <img src={data.show.image.medium} alt="" />
        ) : (
          <p>No image</p>
        )}
      </div>
      <div className="flex flex-col mb-2  ">
       <h2 className="
       text-purple-700 font-serif captalize 
       text-2xl captalize  py-2">Genres : </h2>
        
        <div className="flex pl-6 gap-2 text-slate-950 font-serif font-semibold 
        text-xl ">
        {data.show.genres !== undefined ? (
          data.show.genres.map((data,index) => {
            return <span key={index}>{data}</span>;
          })
        ) : (
          <p>No data</p>
        )}
        </div>
      </div>
      <a 
       className='bg-purple-700 shadow-md shadow-purple-500 text-white capitalize font-serif flex items-center rounded-sm px-5 py-2
       w-fit mx-auto '

      href={data.show.officialSite} target="">
        Visit officialSite
      </a>
      <div>{data.show.permiered}</div>
      <div className="w-fit mx-auto py-2">
        <button
          className="bg-purple-700 shadow-md shadow-purple-500 text-white capitalize font-serif flex items-center rounded-md px-5 py-2 "
          onClick={() => {
            showMoreData(data.show.id);
          }}
        >
          Know More
        </button>
      </div>
    </div>
  );
}

export default ShowData;
