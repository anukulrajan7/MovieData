import React, { createContext, useState } from 'react';

// Create a new context
export const MyContext = createContext();

// Create a provider component
export default function MyContextProvider ({ children }) {
  // Set up state for the context
  const [loading ,setloading] = useState(false);
  const [ data,setData] = useState([]);
  const [fetchid ,setFetchId] = useState('');
  const [form,setform] = useState(false)
  const [url ,seturl] = useState('');
    
   // Define any functions or methods that will update the state
  
     const fetchData = async (url )=>{
        setloading(true)
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setloading(false)
     }
     async function bookMovieTicket(phoneNo,email,name,ticketNo){
        const userBookedDAta = {
          phoneNo:phoneNo,
          email:email,
          name:name,
          ticketNo: ticketNo
        }
        localStorage.setItem('userBookedData',JSON.stringify(userBookedDAta))
        // let getData = JSON.parse(localStorage.getItem('userBookedData'))
        // console.log(getData)
        setform(false)
      
     }
  // Pass the state and any methods to the context provider value prop
  const value = {
     
    // Pass the state and any methods to the context provider value prop
      data,
      loading,
      url,
      seturl,
      fetchid,
      setFetchId,
      form,
      setform,
    // passing the all the function 
     fetchData,
    
     bookMovieTicket
  }
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
