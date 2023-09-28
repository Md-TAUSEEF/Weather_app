import React, { useEffect, useState } from "react";
import "./Temp.css";

export default function Temprature() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(()=>{
    const fetchApi = async() => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=22c683f01f349e3c27dfeb4dd2d8554c`;
      const response = await fetch(url);

      const resJson = await response.json();
      setCity(resJson.main);
    }
    fetchApi();
  },[search] )

  return (
    <>
      <div className="box">
        <div className="inputData">
          <center>
            {" "}
            <input
              type="search"
              value={search}
              className="inputFeild"
              onChange={(event) => { setSearch(event.target.value) }}
            />{" "}
          </center>
        </div>

    {!city ? (
      <p className="errorMsg">Write correct Location to search</p>
    ) : (
      <div>
      <div className="info">
          <h2 className="location">
            <i className="fa fa-street-view"></i>
            {search}
          </h2>
          <h1 className="temp">{city.temp}°Cel</h1>
          <h3 className="tempmin_max">Min: {city.temp_min}°Cel |Max : {city.temp_max}°Cel</h3>
        </div>

        <div className="waterflow1"></div>
        <div className="waterflow2"></div>
        <div className="waterflow3"></div>
        </div>
    )

    }

        
      </div>
    </>
  );
}
