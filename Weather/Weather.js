import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weather.css'

function Weather() {
    const [city,setcity]=useState("Pune");
    const [tem,settem]=useState(null);
    useEffect(()=>{
       const fetchApi= async()=>{
           try{
               const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8cec4c2cad98e04889e71a7f027a9b7b`;
           const respone =await fetch(url);
           const resjson= await(respone.json());
        //    const respone =await axios(url);
        //    const resjson= respone.data;
           settem(resjson.main)
           console.log(resjson.main);
           }
           catch (error) {
            console.error(error)}
           
       }
       fetchApi();
       },[city])
  const findLocation=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      settem("Geolocation is not supported by this browser.")
    }
  }
 const showPosition=(position) =>{
    let lat =position.coords.latitude;
    let long =position.coords.longitude
    const fetchApi= async()=>{
        try{
   const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=8cec4c2cad98e04889e71a7f027a9b7b`
    const respone =await fetch(url);
           const resjson= await(respone.json());
        //    const respone =await axios(url);
        //    const resjson= respone.data;
           settem(resjson.main)
           console.log(resjson.main);
           }
           catch (error) {
            console.error(error)}
           
       }
       fetchApi();
 }
 
  return (<div className='board'>
       <button onClick={findLocation}>temprature at my current location </button>
      <input type='text' value={city} onChange={(e)=>setcity(e.target.value)}></input>
      {
          !tem ?(<h1>NO RESULT FOUND</h1>):<div><h1> temp :{tem.temp} </h1><h1>min-temp:{tem.temp_min}  max-temp:{tem.temp_max}</h1></div>
      }
  </div>);
}

export default Weather;
