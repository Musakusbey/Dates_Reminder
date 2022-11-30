import React, { useState } from 'react';
import "./App.css";
import Dataa from "./Dataa";

const App = () => {

  const[holidays,setHolidays] = useState(Dataa); //Verileri Dataa componentinden alacağız.
  return (
    <main>
      <center>  
      <section className='container'> 
      <h3> National Holidays Dates </h3>
       {holidays.map((holiday)=>{ 
        return(
          <div className='holiday' key={holiday.id}> 
            <img src={holiday.img}/>
            <div></div> 
            <p>{holiday.title}</p>
            <p>{holiday.date}</p>
          </div>
        )   
       })}
      <button onClick={()=> setHolidays([])}> Clear All </button>
      </section>
      </center>
    </main> 
  )
}

export default App
