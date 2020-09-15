import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Europe() {
  const [euroCovid, seteuroCovid] = useState([]);

  useEffect(() => {
    const renderEurope = async () => {
      const response = await Axios.get(
        "https://api.covid19api.com/live/country/united-kingdom"
      );
      console.log(response.data);
      seteuroCovid(response.data);
    };
    renderEurope();
  }, []);
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>European Covid Cases</h1>
      {euroCovid.map((eachCase) => {
        return (
          <ul>
            <li>{eachCase.Country}</li>
            <li>Country: {eachCase.Province}</li>
            <li>Active Cases: {eachCase.Active}</li>
            <li>Recovered Cases: {eachCase.Recovered}</li>
            <li>Deceased: {eachCase.Deaths}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Europe;
