import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./Navbar";

function Covid() {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    const renderCovid = async () => {
      const response = await Axios.get(
        "https://api.covid19api.com/live/country/united-states"
      );
      console.log(response.data);
      setCovid(response.data);
    };
    renderCovid();
  }, []);

  return (
    <div className="covid">
      <Navbar />
      <h1>US Covid Tracker</h1>
      {covid.map((covidCases) => {
        return (
          <ul>
            <li>Country: {covidCases.Country}</li>
            <li>State: {covidCases.Province}</li>
            <li>Active Cases: {covidCases.Active}</li>
            <li>Recovered Cases: {covidCases.Recovered}</li>
            <li>Deceased: {covidCases.Deaths}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Covid;
